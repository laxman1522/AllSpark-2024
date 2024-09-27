import React from 'react';
// import SectionHeader from '@/components/SectionHeader/SectionHeader';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import './AboutContainer.scss';

const AboutContainer = () => {
  return (
    <div className="h-screen relative">
      <div id="about-section" className="pt-[18vh]">
        {/* <SectionHeader headerText="About AllSpark'24" /> */}
        <VideoPlayer
          videoUrl={
            'https://www.youtube.com/embed/YrYivVC-Yhg?si=OdvhFYA9PWtAfBha?rel=0'
          }
        />
      </div>
    </div>
  );
};

AboutContainer.displayName = 'AboutContainer';

export default AboutContainer;
