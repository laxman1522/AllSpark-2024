// import CountDown from '@/components/countDown/CountDown';
// import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
// import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
import Logo from '@/components/Logo/Logo';
import BackGround from '@/components/BackGround/BackGround';
import ComingSoon from '@/components/ComingSoon/ComingSoon';

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
        <Logo />
        <div className="absolute inset-0 h-screen flex align-center justify-center">
          <ComingSoon />
        </div>
      </BackGround>
    </div>
  );
}
