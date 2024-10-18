import React from 'react';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import './AboutContainer.scss';
import { ALLSPARK_VIDEO } from '@/constants/constants';

const AboutContainer = () => {
  return (
    <div className="h-screen relative">
      <div id="about-section" className="pt-[18vh]">
        <VideoPlayer videoUrl={ALLSPARK_VIDEO} />
      </div>
    </div>
  );
};

AboutContainer.displayName = 'AboutContainer';

export default AboutContainer;
