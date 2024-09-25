// import Logo from '@/components/Logo/Logo';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
// import LocationContainer from '@/containers/LocationContainer/LocationContainer';
import CountDown from '@/components/countDown/CountDown';
// import LocationTime from '@/components/LocationTime/LocationTime';
import { WindowSizeProvider } from '../contexts/WindowSizeContext';
// import CountDown from '@/components/countDown/CountDown';
// import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
// import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
// import Logo from '@/components/Logo/Logo';
import BackGround from '@/components/BackGround/BackGround';
// import ComingSoon from '@/components/ComingSoon/ComingSoon';
// import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
// import Header from '@/components/Header/Header';
import Logo from '@/components/Logo/Logo';
import LocationTime from '@/components/LocationTime/LocationTime';
import LocationContainer from '@/containers/LocationContainer/LocationContainer';
// import { ALLSPARK_VIDEO } from '@/constants/constants';

export default function Home() {
  const isCountDownDisplayed = true;

  return (
    <WindowSizeProvider>
      <div className="h-screen w-screen">
        <div className="home">
          <BackGround>
            <></>
            {/* Home page component for integration */}

            {/* <>---------------------HOME PAGE--------------------</> */}
            <Logo isCountDownDisplayed={isCountDownDisplayed} />
            {isCountDownDisplayed && (
              <div className="md:hidden">
                <LocationTime isCountDownDisplayed={isCountDownDisplayed} />
              </div>
            )}
            <LocationContainer isCountDownDisplayed={isCountDownDisplayed} />
            {/* <>---------------------HOME PAGE--------------------</> */}

            {/* <>-------------- COMING SOON PAGE----------------</> */}
            {/* <Header />
            <div className="absolute inset-0 h-screen flex align-center justify-center">
              <ComingSoon />
            </div> */}
            {/* {<>---------------COMING SOON PAGE-----------------</>} */}
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
