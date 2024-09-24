import CountDownTimer from '@/components/countDownTimer/CountDownTimer';
import { TIMER } from '@/constants/count-down-constants';
import { useEffect, useState } from 'react';
import './CountDown.scss';
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
      <CountDownTimer
        targetTime={targetTime}
        animationKey={animationKey}
        updateAnimationKey={updateAnimationKey}
      />
    </div>
  );
};

export default CountDown;
