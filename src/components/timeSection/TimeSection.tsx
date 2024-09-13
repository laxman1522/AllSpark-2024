import { TimeGroup } from '../timeGroup/TimeGroup';
import { dateUtil } from '@/utils/countdown-utils';
import React from 'react';
import './TimeSection.scss';

interface TimeSectionProps {
  label: string;
  value: number;
}

/**
 * @description An reusable component which contains time cards for a particular time unit
 * @version 1.0.0
 * @author [Hariharan Muralidharan,Praneash Krishnamurthi]
 */
const TimeSection: React.FC<TimeSectionProps> = ({ label, value }) => {
  return (
    <div className="time-section">
      <TimeGroup value={dateUtil(value)} />
      <p className="time-label">{label}</p>
    </div>
  );
};

export default TimeSection;
