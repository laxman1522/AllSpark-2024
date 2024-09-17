'use client';
import CountDownTimer from '@/components/countDownTimer/CountDownTimer';
import { TIMER } from '@/constants/count-down-constants';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/cdwLogo.png';
import { ALLSPARK_DATE } from '@/constants/constants';

/**
 * @description An component which calculates target time value for a countdown
 * @version 1.0.0
 * @author [Praneash Krishnamurthi,Hariharan Muralidharan]
 */
const CountDown = () => {
  const [targetTime, setTargetTime] = useState(
    new Date(TIMER.TARGET_DATE).getTime(),
  );
  const [animationKey, setAnimationKey] = useState(0);

  const updateAnimationKey = () => {
    setAnimationKey((prevKey: number) => prevKey + 1);
  };

  useEffect(() => {
    setTargetTime(new Date(TIMER.TARGET_DATE).getTime());
  }, []);
  return (
    <div key={animationKey}>
      <p className="counter-container animate w-full text-center absolute top-[13%] min-[425px]:top-[15%] md:top-[24%] lg:top-1/4 xl:top-[31%] left-1/2 text-label-color transform -translate-x-1/2 -translate-y-1/2 md:text-[29px] text-[16px] min-[410px]:text-[18px]">
        {ALLSPARK_DATE}
      </p>
      <CountDownTimer
        targetTime={targetTime}
        animationKey={animationKey}
        updateAnimationKey={updateAnimationKey}
      />
      <div className="counter-container animate flex justify-center items-center md:gap-[5rem] md:top-[85%] lg:top-[85%] gap-5 w-100 p-10 md:p-20 mx-auto absolute xl:bottom-0 md:bottom-[-5rem] bottom-[-4rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image src={logo} alt="Logo" width={90} height={38} />
      </div>
    </div>
  );
};

export default CountDown;
