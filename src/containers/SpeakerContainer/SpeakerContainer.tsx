import React from 'react';
import Speakers from '@/components/Speakers/Speakers';

const SpeakerContainer = () => {
  return (
    <div className="h-screen relative flex">
      <div className="pt-[14vh] w-full">
        <Speakers></Speakers>
      </div>
    </div>
  );
};

SpeakerContainer.displayName = 'SpeakerContainer';
export default SpeakerContainer;
