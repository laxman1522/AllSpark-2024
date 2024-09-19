import CountDown from '@/components/countDown/CountDown';
import Logo from '@/components/Logo/Logo';
import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';

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
    </div>
  );
}
