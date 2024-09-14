'use client';
import CountDownTimer from '@/components/countDownTimer/CountDownTimer';
import { TIMER } from '@/constants/count-down-constants';
import { useEffect, useState } from 'react';

/**
 * @description An component which calculates target time value for a countdown
 * @version 1.0.0
 * @author [Praneash Krishnamurthi,Hariharan Muralidharan]
 */
const CountDown = () => {
  const [targetTime, setTargetTime] = useState(
    new Date(TIMER.TARGET_DATE).getTime(),
  );

  const [showCountDown, setShowCountDown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCountDown(true);
    }, 7 * 1000);
    setTargetTime(new Date(TIMER.TARGET_DATE).getTime());
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <>{showCountDown && <CountDownTimer targetTime={targetTime} />}</>;
};

export default CountDown;
