import CountDown from '@/components/countDown/CountDown';
import Logo from '@/components/Logo/Logo';
import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';

export default function Home() {
  return (
    <div className="home-page h-screen w-screen">
      <div className="home">
        <BackgroundAnimation />
        <Logo />
        <CountDown />
        <VideoPlayer videoUrl="https://www.youtube.com/embed/ySa8B8IXWB8?si=ijEBpnRbdvedxcKm?rel=0" />
      </div>
      <div className="landscape-fallback-page justify-center min-h-screen items-center">
        <BackgroundAnimation />
        <LandscapeFallback></LandscapeFallback>
      </div>
    </div>
  );
}
