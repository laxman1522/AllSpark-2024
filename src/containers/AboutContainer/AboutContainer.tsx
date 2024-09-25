import ComingSoon from '@/components/ComingSoon/ComingSoon';
import Header from '@/components/Header/Header';
import React from 'react';

const AboutContainer = () => {
  return (
    <div className="h-screen relative">
      <Header />
      <div
        id="about-section"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <ComingSoon />
      </div>
    </div>
  );
};

AboutContainer.displayName = 'AboutContainer';

export default AboutContainer;
