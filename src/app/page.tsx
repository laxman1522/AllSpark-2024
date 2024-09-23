import Logo from '@/components/Logo/Logo';
import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
import LocationContainer from '@/components/LocationContainer/LocationContainer';

export default function Home() {
  return (
    <div className="home-page h-screen w-screen">
      <div className="home">
        <BackgroundAnimation />
        <Logo isHomePage={true} />
        {/* <CountDown /> */}
        <LocationContainer />
      </div>
      <div className="landscape-fallback-page justify-center min-h-screen items-center">
        <BackgroundAnimation />
        <LandscapeFallback></LandscapeFallback>
      </div>
    </div>
  );
}
