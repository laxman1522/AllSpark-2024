import React, { forwardRef } from 'react';

interface HomeContainerProps {
  // You can add any props that the EventsContainer component might need in the future
}
const HomeContainer = forwardRef<HTMLDivElement, HomeContainerProps>(
  (props, ref) => {
    return (
      <div ref={ref} className="home h-screen" id="home-section">
        <h1>Home Container</h1>
      </div>
    );
  },
);

HomeContainer.displayName = 'HomeContainer';

export default HomeContainer;
