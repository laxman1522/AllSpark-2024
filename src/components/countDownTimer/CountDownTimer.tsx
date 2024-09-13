'use client';
import { getTimeRemaining } from '@/utils/countdown-utils';
import { useEffect, useState } from 'react';
import TimeSection from '@/components/timeSection/TimeSection';
import './CountDownTimer.scss';

interface CountDownTimerProps {
  targetTime: number;
}

/**
 * @description A reusable component which has countdown logic
 * @version 1.0.0
 * @author [Hariharan Muralidharan]
 */
export const CountDownTimer: React.FC<CountDownTimerProps> = ({
  targetTime,
}) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = Date.now();
      const complete = now >= targetTime;
      if (complete) {
        return {
          seconds: 0,
          minutes: 0,
          hours: 0,
          days: 0,
        };
      }
      const remainingTime = getTimeRemaining(targetTime - now);
      setTimeRemaining({
        days: remainingTime.Days,
        seconds: remainingTime.Seconds,
        minutes: remainingTime.Minutes,
        hours: remainingTime.Hours,
      });
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="countdown">
      <TimeSection label="Days" value={timeRemaining.days} />
      <TimeSection label="Hours" value={timeRemaining.hours} />
      <TimeSection label="Minutes" value={timeRemaining.minutes} />
      <TimeSection label="Seconds" value={timeRemaining.seconds} />
    </div>
  );
};
