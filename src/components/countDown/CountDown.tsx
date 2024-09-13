'use client';
import CountDownTimer from '@/components/countDownTimer/CountDownTimer';
import { TIMER } from '@/constants/count-down-constants';
import { useState } from 'react';

/**
 * @description An component which calculates target time value for a countdown
 * @version 1.0.0
 * @author [Praneash Krishnamurthi,Hariharan Muralidharan]
 */
const CountDown = () => {
  const [targetTime, setTargetTime] = useState(
    new Date(TIMER.TARGET_DATE).getTime(),
  );

  return (
    <div>
      <CountDownTimer targetTime={targetTime} />
    </div>
  );
};

export default CountDown;
