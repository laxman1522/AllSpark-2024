import CountDown from '@/components/countDown/CountDown';
import Logo from '@/components/Logo/Logo';
import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
import BackGround from '@/components/BackGround/BackGround';

export default function Home() {
  return (
    <div className="home-page h-screen w-screen">
      <div className="home">
        <BackgroundAnimation />
        <Logo />
        <CountDown />
      </div>
      <div className="landscape-fallback-page justify-center min-h-screen items-center">
        <BackgroundAnimation />
        <LandscapeFallback></LandscapeFallback>
      </div>
      {/* the back ground component is the vanta js background use it as a backgorund */}
      {/* <BackGround></BackGround> */}
    </div>
  );
}
