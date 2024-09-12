import React from 'react';
import { CountDownTimer } from '@/components/countDownTimer/CountDownTimer';

export const CountDown = () => {
  return (
    <div>
      <CountDownTimer days={5} months={0} hours={0} minutes={0} />
    </div>
  );
};
