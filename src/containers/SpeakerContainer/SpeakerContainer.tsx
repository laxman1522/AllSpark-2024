import React from 'react';
import Speakers from '@/components/Speakers/Speakers';
import { getAllSpeakers } from '@/utils/event-utils';

/**
 * @description A container for speaker information
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
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
