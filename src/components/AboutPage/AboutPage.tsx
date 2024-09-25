import React, { forwardRef } from 'react';

interface AboutPageProps {
  // You can add any props that the AboutPage component might need in the future
}
const AboutPage = forwardRef<HTMLDivElement, AboutPageProps>((props, ref) => {
  return (
    <div ref={ref} id="events-section" className=" h-screen">
      {/* //TODO: Add Home Page content */}
      <h1>About Page</h1>
    </div>
  );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;
