import Logo from '@/components/Logo/Logo';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
import LocationContainer from '@/containers/LocationContainer/LocationContainer';
import BackGround from '@/components/BackGround/BackGround';
import CountDown from '@/components/countDown/CountDown';
import LocationTime from '@/components/LocationTime/LocationTime';
import { WindowSizeProvider } from '../contexts/WindowSizeContext';

export default function Home() {
  const isCountDownDisplayed = true;

  return (
    <WindowSizeProvider>
      <div className="h-screen w-screen">
        <div className="home">
          <BackGround>
            <Logo isCountDownDisplayed={isCountDownDisplayed} />
            {isCountDownDisplayed && (
              <div className="md:hidden">
                <LocationTime isCountDownDisplayed={isCountDownDisplayed} />
              </div>
            )}
            <LocationContainer isCountDownDisplayed={isCountDownDisplayed} />
          </BackGround>
          {isCountDownDisplayed && <CountDown />}
        </div>
        <div className="landscape-fallback-page justify-center min-h-screen items-center">
          <BackGround>
            <LandscapeFallback />
          </BackGround>
        </div>
      </div>
    </WindowSizeProvider>
  );
}
