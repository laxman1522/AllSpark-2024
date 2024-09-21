/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';

import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {
  return (
    // <div className="home-page h-screen w-screen">
    //   <div className="home">
    //     <BackgroundAnimation />
    //     <SideNavigation />
    //   </div>
    //   <div className="landscape-fallback-page justify-center min-h-screen items-center">
    //     <BackgroundAnimation />
    //     <LandscapeFallback></LandscapeFallback>
    //   </div>
    // </div>
    <ReactFullpage
      navigation
      // scrollHorizontally = {true}
      sectionsColor={[
        'blue',
        'red',
        'orange',
        '#435b71',
        'orange',
        'blue',
        'purple',
        'yellow',
      ]}
      render={() => (
        <ReactFullpage.Wrapper>
          <div key={'section1'} className="section">
            <h1>section1</h1>
          </div>
          <div key={'section2'} className="section">
            <h1>section2</h1>
          </div>
          <div key={'section3'} className="section">
            <h1>section3</h1>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
