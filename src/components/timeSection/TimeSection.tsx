import TimeGroup from '../timeGroup/TimeGroup';
import { dateUtil } from '@/utils/countdown-utils';
import React from 'react';

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
    <div className="text-center text-[30px] text-label-color">
      <TimeGroup value={dateUtil(value)} />
      <p className="md:text-[29px] text-[24px] max-[410px]:text-[18px] p-[10px] font-poppins">
        {label}
      </p>
    </div>
  );
};

export default TimeSection;
