import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';

interface EventDetailsCounterProps {
  count: number;
  title: string;
}

const EventDetailsCounter: React.FC<EventDetailsCounterProps> = ({
  count,
  title,
}) => {
  return (
    <div className="events-counter-card flex flex-col justify-center items-center gap-2">
      <div className="events-counter-count flex h-[100px] w-[170px] text-[54px] text-events-counter-text-color bg-events-color rounded-[20px] justify-center items-center">
        <CountUp start={0} end={count} duration={5} />
        {title === 'Techies' && <span>+</span>}
      </div>
      <h1 className="events-counter-title text-[25px] font-semibold">
        {title}
      </h1>
    </div>
  );
};

export default EventDetailsCounter;
