import TimeSegment from '../timeSegment/TimeSegment';
import React from 'react';

interface TimeGroupProps {
  value: string;
}

/**
 * @description An component which splits a particular time unit value
 * @version 1.0.0
 * @author [Hariharan Muralidharan,Praneash Krishnamurthi]
 */
const TimeGroup: React.FC<TimeGroupProps> = ({ value }) => {
  return (
    <div className="time-segment flex md:gap-4 gap-2 font-dseg md:h-full xl:h-[70%] h-[54px] min-[540px]:h-[90px] justify-center">
      <TimeSegment currentValue={parseInt(value.toString()[0])} />
      <TimeSegment currentValue={parseInt(value.slice(1))} />
    </div>
  );
};

export default TimeGroup;
