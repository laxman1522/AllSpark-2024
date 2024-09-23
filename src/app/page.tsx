import Logo from '@/components/Logo/Logo';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
import LocationContainer from '@/components/LocationContainer/LocationContainer';
import BackGround from '@/components/BackGround/BackGround';

export default function Home() {
  return (
    <div className="home-page h-screen w-screen">
      <div className="home">
        <BackGround>
          <Logo isHomePage={true} />
          <LocationContainer />
        </BackGround>
      </div>
      <div className="landscape-fallback-page justify-center min-h-screen items-center">
        <LandscapeFallback></LandscapeFallback>
      </div>
    </div>
  );
}
