import CountDown from '@/components/countDown/CountDown';
import Logo from '@/components/Logo/Logo';
import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <div className="home-page h-screen w-screen">
      <div className="home">
        <BackgroundAnimation />
        <Logo />
        <CountDown />
        <Header />
        <div className="px-10">
          <VideoPlayer videoUrl="https://www.youtube.com/embed/ySa8B8IXWB8?si=ijEBpnRbdvedxcKm?rel=0" />
        </div>
      </div>
      <div className="landscape-fallback-page justify-center min-h-screen items-center">
        <BackgroundAnimation />
        <LandscapeFallback></LandscapeFallback>
      </div>
    </div>
  );
}
