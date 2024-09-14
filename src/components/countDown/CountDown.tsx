'use client';
import CountDownTimer from '@/components/countDownTimer/CountDownTimer';
import { TIMER } from '@/constants/count-down-constants';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/cdwLogo.png';

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
  return (
    <div>
      {showCountDown && <CountDownTimer targetTime={targetTime} />}
      <div className="absolute bottom-0 inset-x-0 flex justify-center p-10 md:p-20">
        <Image src={logo} alt="Logo" width={120} height={50} />
      </div>
    </div>
  );
};

export default CountDown;
