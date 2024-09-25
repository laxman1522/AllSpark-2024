import React, { forwardRef } from 'react';

interface HomePageProps {
  // You can add any props that the EventsPage component might need in the future
}
const HomePage = forwardRef<HTMLDivElement, HomePageProps>((props, ref) => {
  return (
    <div ref={ref} className="home h-screen" id="home-section">
      <h1>Home Page</h1>
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
