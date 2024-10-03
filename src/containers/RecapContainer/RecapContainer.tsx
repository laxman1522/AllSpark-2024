import React from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Memories from '@/components/MemoriesMobile/MemoriesMobile';
import MemoriesMobile from '@/components/MemoriesMobile/MemoriesMobile';

const RecapContainer = () => {
  return (
    <div className="h-screen relative">
      <div id="recap-section" className="absolute w-full">
        <div className="mt-36">
          <SectionHeader headerText="Memories" />
          <MemoriesMobile />
        </div>
      </div>
    </div>
  );
};

RecapContainer.displayName = 'RecapContainer';
export default RecapContainer;
