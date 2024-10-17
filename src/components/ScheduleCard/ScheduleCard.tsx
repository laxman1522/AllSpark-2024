import React from 'react';
import CalendarIcon from '../CalendarIcon/CalendarIcon';
import { SCHEDULE_CONSTANTS } from '@/constants/constants';
import Profile from '../Profile/Profile';

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

  const addEventToCalendar = () => {
    // Helper function to format dates in required UTC format
    const formatDateToICS = (date: Date) => {
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
      const day = String(date.getUTCDate()).padStart(2, '0');
      const hours = String(date.getUTCHours()).padStart(2, '0');
      const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      const seconds = String(date.getUTCSeconds()).padStart(2, '0');

      return `${year}${month}${day}T${hours}${minutes}${seconds}Z`; // Z for UTC
    };

    const startDate = new Date('2024-10-25T10:00:00Z'); // Adjust to UTC if necessary
    const endDate = new Date('2024-10-25T11:00:00Z'); // Adjust to UTC if necessary

    const icsContent = `
  BEGIN:VCALENDAR
  VERSION:2.0
  PRODID:-//My Calendar//EN
  CALSCALE:GREGORIAN
  BEGIN:VEVENT
  UID:${new Date().getTime()}@example.com
  DTSTAMP:${formatDateToICS(new Date())}
  DTSTART:${formatDateToICS(startDate)}
  DTEND:${formatDateToICS(endDate)}
  SUMMARY:Your Event Title
  DESCRIPTION:Event description goes here.
  LOCATION:Event location here.
  STATUS:CONFIRMED
  BEGIN:VALARM
  TRIGGER:-PT15M
  ACTION:DISPLAY
  DESCRIPTION:Reminder for Your Event Title
  END:VALARM
  END:VEVENT
  END:VCALENDAR
  `;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `event.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
