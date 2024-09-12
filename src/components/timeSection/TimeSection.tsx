import { TimeGroup } from '../timeGroup/TimeGroup';
import { dateUtil } from '@/utils/dateUtils';
import React from 'react';

interface TimeSectionProps {
  label: string;
  value: number;
}

const TimeSection: React.FC<TimeSectionProps> = ({ label, value }) => {
  return (
    <div className="time-section">
      <TimeGroup value={dateUtil(value)} />
      <p>{label}</p>
    </div>
  );
};

export default TimeSection;
