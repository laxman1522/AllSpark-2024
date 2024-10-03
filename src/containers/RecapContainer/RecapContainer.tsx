import React from 'react';
import Memories from '@/components/Memories/Memories';

const RecapContainer = () => {
  return (
    <div className="h-screen relative">
      <div id="about-section" className="pt-[18vh]">
        <Memories></Memories>
      </div>
    </div>
  );
};

RecapContainer.displayName = 'RecapContainer';
export default RecapContainer;
