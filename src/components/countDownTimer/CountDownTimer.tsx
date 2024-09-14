'use client';
import { getTimeRemaining } from '@/utils/countdown-utils';
import { useEffect, useState } from 'react';
import TimeSection from '@/components/timeSection/TimeSection';
import '../timeSegment/TimeSegment.scss';
import { SCREEN_SIZES } from '@/constants/constants';
interface CountDownTimerProps {
  targetTime: number;
}

/**
 * @description A reusable component which has countdown logic
 * @version 1.0.0
 * @author [Hariharan Muralidharan]
 */
const CountDownTimer: React.FC<CountDownTimerProps> = ({ targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  const [animationKey, setAnimationKey] = useState(0);
  const [prevScreenWidth, setPrevScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );
  const breakpoints = [
    SCREEN_SIZES.desktop,
    SCREEN_SIZES.tablet,
    SCREEN_SIZES.lgMobile,
    SCREEN_SIZES.mobile,
  ];

  /**
   * @description Function to trigger the animation based on screen width change
   * @version 1.0.0
   * @author [Swetha P]
   */
  const applyAnimation = () => {
    const screenWidth = window.innerWidth;

    // Check if the screen width has crossed any of the breakpoints
    const crossedBreakpoint = breakpoints.some(
      (bp) =>
        (prevScreenWidth > bp && screenWidth <= bp) ||
        (prevScreenWidth <= bp && screenWidth > bp),
    );

    if (crossedBreakpoint) {
      setAnimationKey((prevKey) => prevKey + 1);
    }

    setPrevScreenWidth(screenWidth);
  };

  useEffect(() => {
    applyAnimation();
    const handleResize = () => applyAnimation();
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener('resize', handleResize);
  }, [prevScreenWidth]);

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
    <div
      key={animationKey}
      className={`counter-container animate flex flex-col md:flex-row justify-center items-center md:gap-[5rem] gap-5 w-100 p-10 mt-5 xl:mt-8 md:mt-12 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      <div className="flex flex-col xl:flex-row md:gap-[4rem] gap-5">
        <TimeSection label="Days" value={timeRemaining.days} />
        <TimeSection label="Hours" value={timeRemaining.hours} />
      </div>

      <div className="flex flex-col xl:flex-row md:gap-[4rem] gap-5">
        <TimeSection label="Minutes" value={timeRemaining.minutes} />
        <TimeSection label="Seconds" value={timeRemaining.seconds} />
      </div>
    </div>
  );
};

export default CountDownTimer;
