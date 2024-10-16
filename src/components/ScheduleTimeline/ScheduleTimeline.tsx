import React from 'react';
import './ScheduleTimeline.scss';
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
    <div className="h-full overflow-scroll">
      <div className="timeline h-full mx-auto">
        {Object.entries(sessions).map(([key, session]) =>
          constructSessionHTML(session, key),
        )}
      </div>
    </div>
  );
};

export default ScheduleTimeline;
