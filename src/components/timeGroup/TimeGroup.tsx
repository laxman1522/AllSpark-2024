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
    <div className="time-segment flex md:gap-4 gap-2 font-dseg md:h-full xl:h-[70%] max-[400px]:h-[50px] h-[90px] max-[430px]:h-[60px]">
      <TimeSegment currentValue={parseInt(value.toString()[0])} />
      <TimeSegment currentValue={parseInt(value.slice(1))} />
    </div>
  );
};

export default TimeGroup;
