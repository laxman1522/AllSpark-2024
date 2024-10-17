import React from 'react';
import CalendarIcon from '../CalendarIcon/CalendarIcon';
import { SCHEDULE_CONSTANTS } from '@/constants/constants';
import Profile from '../Profile/Profile';
import { createEvent } from 'ics';

type sessionType = {
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  title: string;
  category: string;
  isLive: boolean;
  description?: string;
  speakersId?: Array<number>;
};
const ScheduleCard = (session: sessionType) => {
  const { LIVE_NOW, ADD_TO_CALENDAR, SOLUTION_SPACE, TECH_TALK } =
    SCHEDULE_CONSTANTS;
  const {
    startTime,
    endTime,
    title,
    category,
    isLive,
    description,
    speakersId,
  } = session;

  const constructSpeakersHtml = (speakersId: Array<number>) => {
    return speakersId.map((speaker, index) => {
      return <Profile key={index} index={index} speaker={speaker} />;
    });
  };

  const constructLiveNow = () => {
    return (
      <div className="flex items-center flex-1">
        <svg height="40" width="40" className="blinking">
          <circle
            cx="20"
            cy="20"
            r="8"
            fill="red"
            stroke="#F9F0D5"
            strokeWidth={1}
          />
        </svg>
        <span className="text-sm ml-[-5px]">{LIVE_NOW}</span>
      </div>
    );
  };

  // Function to convert input date strings to ISO format
  // const convertToISOFormat = (inputDateString: string) => {
  //   const date = new Date(inputDateString);
  //   if (isNaN(date.getTime())) {
  //     throw new Error(`Invalid date string: ${inputDateString}`);
  //   }

  //   // Extract date components
  //   const year = date.getFullYear();
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //   const day = date.getDate().toString().padStart(2, '0');
  //   const hours = date.getHours().toString().padStart(2, '0');
  //   const minutes = date.getMinutes().toString().padStart(2, '0');
  //   const seconds = '00';

  //   return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  // };

  // Function to convert time to UTC from Asia/Kolkata
  const convertToUTC = (
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
  ) => {
    const localDate = new Date(Date.UTC(year, month - 1, day, hour, minute)); // Create a date with Kolkata time
    const timeOffset = 5 * 60 + 30; // India Standard Time (UTC +05:30)
    localDate.setUTCMinutes(localDate.getUTCMinutes() - timeOffset); // Convert to UTC
    return [
      localDate.getUTCFullYear(),
      localDate.getUTCMonth() + 1,
      localDate.getUTCDate(),
      localDate.getUTCHours(),
      localDate.getUTCMinutes(),
    ];
  };

  const addEventToCalendar = () => {
    // Convert Asia/Kolkata time to UTC
    const startTime = convertToUTC(2024, 10, 25, 10, 0); // 10:00 AM India time
    const duration = { hours: 0, minutes: 15 }; // Duration of the event

    // Define the event details
    const event: any = {
      start: startTime, // UTC time
      duration: duration, // Event duration
      title: 'My Event', // Event title
      description: 'Event description here', // Event description
      location: 'Bengaluru', // Event location
      status: 'CONFIRMED', // Optional event status
      alarms: [{ action: 'display', trigger: { minutes: 15, before: true } }], // Reminder 15 minutes before
      productId: '//my.calendar',
    };

    // Create the ICS event
    createEvent(event, (error, value) => {
      if (error) {
        console.error(error);
        return;
      }

      // Create a Blob for the ICS file
      const blob = new Blob([value], { type: 'text/calendar' });

      // Create a download link
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'event.ics'; // Filename for the downloaded .ics file

      // Append the link to the DOM and trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke the Blob URL after the download
      window.URL.revokeObjectURL(link.href);
    });
  };

  return (
    <div
      className={`timeline__event  animated fadeInUp delay-3s ${isLive && 'active'}`}
    >
      <div className="w-full">
        <div className="event_time">{startTime}</div>

        <div className="flex flex-col max-[1024px]:p-4 p-5 gap-1.5">
          <div
            className={`flex items-center text-[#F9F0D5] max-[768px]:flex-col max-[768px]:items-start ${category.length !== 0 ? 'max-[768px]:min-h-[50px]' : 'min-h-[30px]'}`}
          >
            <span className="max-[400px]:text-xs max-[768px]:text-sm text-base">{`${startTime} -  ${endTime}`}</span>
            {(category === SOLUTION_SPACE || category === TECH_TALK) && isLive
              ? constructLiveNow()
              : ''}
          </div>
          <p className="max-[768px]:text-base max-[1024px]:text-[22px] text-xl text-[#F2BAA7] font-medium max-[768px]:w-full w-[80%]">
            {title}
          </p>
          <p className="max-[400px]:text-xs max-[768px]:text-sm text-base text-[#FFDBCF] max-[768px]:w-full max-[1024px]:w-[80%] w-[85%]">
            {description}
          </p>
          {speakersId?.length !== 0 && (
            <div className="flex flex-wrap gap-2 gap-y-4 max-[400px]:gap-3 max-[1024px]:gap-5 mt-3">
              {speakersId ? constructSpeakersHtml(speakersId) : ''}
            </div>
          )}
          <div
            className={`flex flex-col-reverse absolute right-4 top-4 max-[1024px]:flex-col items-end ${category.length !== 0 ? 'max-[1024px]:gap-1 max-[768px]:gap-2' : ''}`}
          >
            <span className="text-[#F9F0D5] max-[400px]:text-xs max-[768px]:text-sm max-[1024px]:text-lg text-base lg:font-semibold">
              {category}
            </span>
            {!isLive && (
              <div
                className="flex items-center border-[1px] border-[#F2BAA7] rounded-[100px] lg:rounded-[10px] cursor-pointer mb-2"
                onClick={addEventToCalendar}
              >
                <div className="max-[1024px]:scale-[0.4] scale-[0.5]">
                  <CalendarIcon />
                </div>
                <span className="max-[1024px]:text-[10px] text-xs max-[1024px]:mr-2 mr-1 text-white">
                  {ADD_TO_CALENDAR}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
