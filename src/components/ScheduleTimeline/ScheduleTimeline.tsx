import React from 'react';
import './ScheduleTimeline.scss';
import CalendarIcon from '@/components/CalendarIcon/CalendarIcon';
import Profile from '../Profile/Profile';
import { ICS_CONSTANTS, SCHEDULE_CONSTANTS } from '@/constants/constants';
import { dateToISOFormat } from '@/utils/date-utils';
import ScheduleCard from '../ScheduleCard/ScheduleCard';

interface SessionsProps {
  sessions: { [key: string]: sessionType };
}

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

const ScheduleTimeline = ({ sessions }: SessionsProps) => {
  const constructSessionHTML = (session: sessionType, key: string) => {
    return <ScheduleCard key={key} {...session} />;
  };
  return (
    <div className="h-[90%] overflow-scroll">
      <div className="timeline h-full">
        {Object.entries(sessions).map(([key, session]) =>
          constructSessionHTML(session, key),
        )}
      </div>
    </div>
  );
};

export default ScheduleTimeline;
