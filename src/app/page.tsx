import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';
import BackGround from '@/components/BackGround/BackGround';
import { WindowSizeProvider } from '../contexts/WindowSizeContext';
import SideNavigation from '@/components/SideNavigation/SideNavigation';

export default function Home() {
  return (
    <WindowSizeProvider>
      <BackGround>
        <div className="main-screen">
          <SideNavigation />
        </div>
        <div className="landscape-fallback-page justify-center min-h-screen items-center">
          <LandscapeFallback />
        </div>
      </BackGround>
    </WindowSizeProvider>
  );
}
