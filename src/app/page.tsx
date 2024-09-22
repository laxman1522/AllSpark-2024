/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
import LandscapeFallback from '@/components/LandscapeFallback/LandscapeFallback';

import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {
  const handleClick = (fullpageApi: any) => {
    console.log(fullpageApi?.fullpageApi);
    fullpageApi?.fullpageApi?.moveTo(3);
  };

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
      normalScrollElements={'.scrollable-section'}
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
      render={(fullpageApi: any) => (
        <ReactFullpage.Wrapper>
          <div key={'section1'} className="section">
            <h1>section1</h1>
            <button onClick={() => handleClick(fullpageApi)}>
              Navigate to 3
            </button>
            <div className={'scrollable-section'} data-anchor-ignore>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
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
