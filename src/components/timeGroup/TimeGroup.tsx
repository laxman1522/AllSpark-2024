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
    <div className="flex gap-4 font-dseg">
      <TimeSegment currentValue={parseInt(value.toString()[0])} />
      <TimeSegment currentValue={parseInt(value.slice(1))} />
    </div>
  );
};

export default TimeGroup;
