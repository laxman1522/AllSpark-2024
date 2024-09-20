import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
import SideNavigation from '@/components/SideNavigation/SideNavigation';

export default function Home() {
  return (
    <div className="home-page h-screen w-screen">
      <div className="home">
        <BackgroundAnimation />
        <SideNavigation />
      </div>
      <div className="landscape-fallback-page justify-center min-h-screen items-center">
        <BackgroundAnimation />
        <LandscapeFallback></LandscapeFallback>
      </div>
    </div>
  );
}
