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
  description?: string;
  speakersId?: Array<number>;
  url: string;
};

const ScheduleTimeline = ({ sessions }: SessionsProps) => {
  return (
    <div className="h-full overflow-scroll">
      <div className="timeline h-full mx-auto">
        {Object.entries(sessions).map(([key, session]) => (
          <ScheduleCard key={key} {...session} />
        ))}
        <div className="hidden max-[1024px]:block timeline__event"></div>
      </div>
    </div>
  );
};

export default ScheduleTimeline;
