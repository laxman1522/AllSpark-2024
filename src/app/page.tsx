'use client';
import Logo from '@/components/Logo/Logo';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
import LocationContainer from '@/containers/LocationContainer/LocationContainer';
import BackGround from '@/components/BackGround/BackGround';
import CountDown from '@/components/countDown/CountDown';
import { useEffect, useState } from 'react';
import { setWindowSizeCategory } from '@/utils/screen-utils';
import LocationTime from '@/components/LocationTime/LocationTime';

export default function Home() {
  const [isCountDownDisplayed, setIsCountDownDisplayed] = useState(true);
  const [windowSize, setWindowSize] = useState<string>('');

  useEffect(() => {
    setWindowSizeCategory(window.innerWidth, windowSize, setWindowSize);
    window.addEventListener('resize', () => {
      setWindowSizeCategory(window.innerWidth, windowSize, setWindowSize);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWindowSizeCategory(window.innerWidth, windowSize, setWindowSize);
      });
    };
  }, []);

  return (
    <div className="h-screen w-screen">
      <div className="home">
        <BackGround>
          <Logo
            windowSize={windowSize}
            isCountDownDisplayed={isCountDownDisplayed}
          />
          {isCountDownDisplayed && (
            <div className="md:hidden mt-[5vh]">
              <LocationTime />
            </div>
          )}
          <LocationContainer
            windowSize={windowSize}
            isCountDownDisplayed={isCountDownDisplayed}
          />
        </BackGround>
        {isCountDownDisplayed && <CountDown />}
      </div>
      <div className="landscape-fallback-page justify-center min-h-screen items-center">
        <BackGround>
          <LandscapeFallback />
        </BackGround>
      </div>
    </div>
  );
}
