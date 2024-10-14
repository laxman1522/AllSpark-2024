import React from 'react';
import Speakers from '@/components/Speakers/Speakers';
import { getAllSpeakers } from '@/utils/event-utils';

const SpeakerContainer = () => {
  const speakers = getAllSpeakers();

  return (
    <div className="h-screen relative flex">
      <div className="pt-[14vh] w-full">
        <Speakers speakers={speakers}></Speakers>
      </div>
    </div>
  );
};

SpeakerContainer.displayName = 'SpeakerContainer';
export default SpeakerContainer;
