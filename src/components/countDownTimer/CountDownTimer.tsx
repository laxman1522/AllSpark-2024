'use client';

import { useEffect, useState } from 'react';
import TimeSection from '@/components/timeSection/TimeSection';
import '@/app/globals.scss';

interface CountDownTimerProps {
  days: number;
  months: number;
  hours: number;
  minutes: number;
}

function calculateHours(
  days: number,
  months: number,
  hours: number,
  minutes: number,
) {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + days);
  targetDate.setMonth(targetDate.getMonth() + months);
  targetDate.setHours(targetDate.getHours() + hours);
  targetDate.setMinutes(targetDate.getMinutes() + minutes);
  return targetDate;
}

function getTimeRemaining(remainingTime: number) {
  return {
    Total: remainingTime,
    Days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
    Hours: Math.floor((remainingTime / (1000 * 60 * 60)) % 24),
    Minutes: Math.floor((remainingTime / 1000 / 60) % 60),
    Seconds: Math.floor((remainingTime / 1000) % 60),
  };
}

export const CountDownTimer: React.FC<CountDownTimerProps> = ({
  days,
  months,
  hours,
  minutes,
}) => {
  const targetDate = calculateHours(days, months, hours, minutes);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = Date.now();
      const complete = now >= targetDate.getTime();
      if (complete) {
        return {
          seconds: 0,
          minutes: 0,
          hours: 0,
          days: 0,
        };
      }
      const remainingTime = getTimeRemaining(targetDate.getTime() - now);
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
