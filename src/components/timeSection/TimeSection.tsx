import { TimeGroup } from '../timeGroup/TimeGroup';
import { dateUtil } from '@/utils/dateUtils';
import React from 'react';
import './TimeSection.scss';

interface TimeSectionProps {
  label: string;
  value: number;
}

const TimeSection: React.FC<TimeSectionProps> = ({ label, value }) => {
  return (
    <div className="time-section">
      <TimeGroup value={dateUtil(value)} />
      <p className="time-lable">{label}</p>
    </div>
  );
};

export default TimeSection;
