import React from 'react';
import CalendarIcon from '../CalendarIcon/CalendarIcon';
import { ICS_CONSTANTS, SCHEDULE_CONSTANTS } from '@/constants/constants';
import Profile from '../Profile/Profile';
import { dateToISOFormat } from '@/utils/date-utils';

type sessionType = {
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  title: string;
  category: string;
  isLive: boolean;
  sessionDescription?: string;
  speakersId?: Array<number>;
};
const ScheduleCard = (session: sessionType) => {
  const { LIVE_NOW, ADD_TO_CALENDAR, LOCATION } = SCHEDULE_CONSTANTS;
  const {
    date,
    startTime,
    endTime,
    title,
    category,
    isLive,
    sessionDescription,
    speakersId,
  } = session;

  const constructSpeakersHtml = (speakersId: Array<number>) => {
    return speakersId.map((speaker, index) => {
      return <Profile key={index} index={index} speaker={speaker} />;
    });
  };

  const addEventToCalendar = () => {
    const location = LOCATION;
    const start = dateToISOFormat(`${ICS_CONSTANTS.YEAR} ${date} ${startTime}`);
    const end = dateToISOFormat(`${ICS_CONSTANTS.YEAR} ${date} ${endTime}`);
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
METHOD:PUBLISH
BEGIN:VEVENT
TZID:Asia/Kolkata
TZOFFSETFROM:+0530
TZOFFSETTO:+0530
DTSTART;TZID=Asia/Kolkata:${start}
DTEND;TZID=Asia/Kolkata:${end}
LOCATION:${location}
TRANSP:OPAQUE
SUMMARY:${title}
DESCRIPTION:${sessionDescription}
PRIORITY:5
CLASS:PUBLIC
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
title:Reminder
END:VALARM
END:VEVENT
END:VCALENDAR
`;
    const blob = new Blob([icsContent], { type: ICS_CONSTANTS.TYPE });
    const url = window.URL.createObjectURL(blob);
    const link: any = document.createElement(ICS_CONSTANTS.ELEMENT);
    link.href = url;
    link.setAttribute(ICS_CONSTANTS.ATTRIBUTE, `${title}.ics`);
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
        <div className="flex flex-col">
          <div
            className="flex items-center gap-4 ml-auto border-[1px] border-[#F2BAA7] rounded-[100px] md:rounded-[10px] p-2 cursor-pointer"
            onClick={() => addEventToCalendar(session)}
          >
            <CalendarIcon />
            <span>{ADD_TO_CALENDAR}</span>
          </div>
          <div className="ml-auto">{category}</div>
          <div className="flex items-center gap-2 text-[#F9F0D5]">
            <span className="text-lg">{`${startTime} -  ${endTime}`}</span>
            {isLive ? (
              <div className="flex items-center">
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
            ) : (
              ''
            )}
          </div>
          <div className="text-[#F2BAA7]">
            <p className=" text-2xl">{title}</p>
            <p className="text-lg">{sessionDescription}</p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-evenly md:justify-between my-5">
            {speakersId ? constructSpeakersHtml(speakersId) : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
