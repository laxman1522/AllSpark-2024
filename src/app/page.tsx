// import CountDown from '@/components/countDown/CountDown';
// import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
// import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
// import Logo from '@/components/Logo/Logo';
import BackGround from '@/components/BackGround/BackGround';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import Header from '@/components/Header/Header';
import { ALLSPARK_VIDEO } from '@/constants/constants';

export default function Home() {
  return (
    <div className="home-page h-screen w-screen">
      {/* <div className="home">
        <BackgroundAnimation />
        <Logo />
        <CountDown />
        
      </div>
      <div className="landscape-fallback-page justify-center min-h-screen items-center">
        <BackgroundAnimation />
        <LandscapeFallback></LandscapeFallback>
      </div> */}
      {/* this below component is the vanta js background use it like a wrapper to the pages that needs this background */}
      <BackGround>
        <Header />
        <div className="px-10">
          <VideoPlayer videoUrl={ALLSPARK_VIDEO} />
        </div>
      </BackGround>
    </div>
  );
}
