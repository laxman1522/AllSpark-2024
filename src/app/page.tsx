'use client';
import Logo from '@/components/Logo/Logo';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
import LocationContainer from '@/components/LocationContainer/LocationContainer';
import BackGround from '@/components/BackGround/BackGround';
import CountDown from '@/components/countDown/CountDown';
import { useState } from 'react';

export default function Home() {
  const [isCountDownDisplayed, setIsCountDownDisplayed] = useState(true);

  return (
    <div className="home-page h-screen w-screen">
      <div className="home">
        <BackGround>
          <Logo isCountDownDisplayed={isCountDownDisplayed} />
          <LocationContainer isCountDownDisplayed={isCountDownDisplayed} />
        </BackGround>
        {isCountDownDisplayed && <CountDown />}
      </div>
      <div className="landscape-fallback-page justify-center min-h-screen items-center">
        <LandscapeFallback></LandscapeFallback>
      </div>
    </div>
  );
}
