import { TimeSegment } from '../timeSegment/TimeSegment';
import React from 'react';

interface TimeGroupProps {
  value: string;
}

export const TimeGroup: React.FC<TimeGroupProps> = ({ value }) => {
  return (
    <div className="time-group">
      <TimeSegment currentValue={parseInt(value.toString()[0])} />
      <TimeSegment currentValue={parseInt(value.slice(1))} />
    </div>
  );
};
