import React from 'react';
import CalendarIcon from '../CalendarIcon/CalendarIcon';
import { ICS_CONSTANTS, SCHEDULE_CONSTANTS } from '@/constants/constants';
import Profile from '../Profile/Profile';
import { createEvent } from 'ics';
import Image from 'next/image';

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
  url: string;
};
const ScheduleCard = (session: sessionType) => {
  const {
    LIVE_NOW,
    ADD_TO_CALENDAR,
    SOLUTION_SPACE,
    TECH_TALK,
    VIEW_RECORDING,
  } = SCHEDULE_CONSTANTS;
  const {
    date,
    startTime,
    endTime,
    title,
    category,
    isLive,
    description,
    speakersId,
    url,
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

  // Function to parse and convert the date string to [year, month, day, hour, minute]
  const convertToDateArray = (datee: string, startTime: string) => {
    // Create a new Date object by combining the date and time strings
    const dateTimeStr = `${datee}, ${ICS_CONSTANTS.YEAR} ${startTime}`;

    const options: any = {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // User's local time zone
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // Set to true for 12-hour format
    };

    const formattedLocalTime = new Intl.DateTimeFormat('en-US', options).format(
      new Date(`${dateTimeStr} GMT+0530`),
    );

    const date = new Date(formattedLocalTime);

    // Format the date into the required array
    return [
      date.getFullYear(), // Year
      date.getMonth() + 1, // Month (getMonth() returns 0-indexed month, so +1)
      date.getDate(), // Day of the month
      date.getHours(), // Hour (24-hour format)
      date.getMinutes(), // Minutes
    ];
  };

  // Function to parse time string and calculate the difference
  const getTimeDifference = (
    datee: string,
    startTime: string,
    endTime: string,
  ) => {
    // Parse the time strings into Date objects (using a fixed date for comparison)
    const startDate = new Date(`${datee}, ${ICS_CONSTANTS.YEAR} ${startTime}`);
    const endDate = new Date(`${datee}, ${ICS_CONSTANTS.YEAR} ${endTime}`);

    // Calculate the difference in milliseconds
    const timeDiffMs = endDate.getTime() - startDate.getTime();

    // Convert milliseconds to minutes and hours
    const timeDiffMinutes = Math.floor(timeDiffMs / (1000 * 60));
    const hours = Math.floor(timeDiffMinutes / 60);
    const minutes = timeDiffMinutes % 60;

    return { hours, minutes };
  };

  const addEventToCalendar = () => {
    const { hours, minutes } = getTimeDifference(date, startTime, endTime);

    // Define the event details (without explicitly specifying timeZone)
    const event: any = {
      start: convertToDateArray(date, startTime), // Year, Month, Day, Hour, Minute
      duration: { hours: hours, minutes: minutes }, // Event duration
      title: title,
      description: description,
      location: 'Bengaluru',
      status: 'CONFIRMED',
      alarms: [{ action: 'display', trigger: { minutes: 15, before: true } }], // Reminder
      startInputType: 'local', // This means the time is in local time, not UTC
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
      link.download = `${title}.ics`;

      // Append the link to the DOM and trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke the Blob URL after the download
      window.URL.revokeObjectURL(link.href);
    });
  };

  const openURL = () => {
    window.open(url, '_blank');
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
            {url != '' && (
              <div
                className="flex items-center border-[1px] border-[#F2BAA7] rounded-[100px] lg:rounded-[10px] cursor-pointer mb-2"
                onClick={openURL}
              >
                <div className="image-wrapper-play">
                  <Image
                    src={'/images/play.png'}
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]"
                    alt="play button"
                  />
                </div>
                <span className="max-[1024px]:text-[10px] text-xs max-[1024px]:mr-2 mr-1 text-white">
                  {VIEW_RECORDING}
                </span>
              </div>
            )}
            {!isLive && url == '' && (
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
