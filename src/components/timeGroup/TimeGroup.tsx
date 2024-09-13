import { TimeSegment } from '../timeSegment/TimeSegment';
import React from 'react';
import './TimeGroup.scss';
interface TimeGroupProps {
  value: string;
}

/**
 * @description An component which splits a particular time unit value
 * @version 1.0.0
 * @author [Hariharan Muralidharan,Praneash Krishnamurthi]
 */
export const TimeGroup: React.FC<TimeGroupProps> = ({ value }) => {
  return (
    <div className="time-group">
      <TimeSegment currentValue={parseInt(value.toString()[0])} />
      <TimeSegment currentValue={parseInt(value.slice(1))} />
    </div>
  );
};
