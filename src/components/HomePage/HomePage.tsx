import React, { forwardRef } from 'react';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';

interface HomePageProps {
  // You can add any props that the EventsPage component might need in the future
}
const HomePage = forwardRef<HTMLDivElement, HomePageProps>((props, ref) => {
  return (
    <div ref={ref} className="home h-screen" id="home-section">
      <BackgroundAnimation />
      <h1>Home Page</h1>
      {/* //TODO: Add Home Page content */}
    </div>
  );
});

export default HomePage;
