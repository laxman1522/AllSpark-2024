import React, { forwardRef } from 'react';

interface AboutContainerProps {
  // You can add any props that the AboutContainer component might need in the future
}
const AboutContainer = forwardRef<HTMLDivElement, AboutContainerProps>(
  (props, ref) => {
    return (
      <div ref={ref} id="about-section" className=" h-screen">
        {/* //TODO: Add Home Container content */}
        <h1>About Container</h1>
      </div>
    );
  },
);

AboutContainer.displayName = 'AboutContainer';

export default AboutContainer;
