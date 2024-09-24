'use client';
import Logo from '@/components/Logo/Logo';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
import LocationContainer from '@/components/LocationContainer/LocationContainer';
import BackGround from '@/components/BackGround/BackGround';
import CountDown from '@/components/countDown/CountDown';
import { useEffect, useState } from 'react';
import { setWindowSizeCategory } from '@/utils/screen-utils';

export default function Home() {
  const [isCountDownDisplayed, setIsCountDownDisplayed] = useState(false);
  const [windowSize, setWindowSize] = useState<string>('');

  useEffect(() => {
    setWindowSizeCategory(window.innerWidth, windowSize, setWindowSize);
    window.addEventListener('resize', () => {
      console.log(window.innerWidth);

      setWindowSizeCategory(window.innerWidth, windowSize, setWindowSize);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWindowSizeCategory(window.innerWidth, windowSize, setWindowSize);
      });
    };
  }, []);

  return (
    <div className="home-page h-screen w-screen">
      <div className="home">
        <BackGround>
          <Logo
            windowSize={windowSize}
            isCountDownDisplayed={isCountDownDisplayed}
          />
          <LocationContainer
            windowSize={windowSize}
            isCountDownDisplayed={isCountDownDisplayed}
          />
        </BackGround>
        {isCountDownDisplayed && <CountDown />}
      </div>
      <div className="landscape-fallback-page justify-center min-h-screen items-center">
        <LandscapeFallback></LandscapeFallback>
      </div>
    </div>
  );
}
