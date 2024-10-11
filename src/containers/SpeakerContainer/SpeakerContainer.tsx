import ComingSoon from '@/components/ComingSoon/ComingSoon';
import React from 'react';
import Image from 'next/image';
import cdwlogo from '../../../public/images/cdwLogo.png';
import Speakers from '@/components/Speakers/Speakers';

const SpeakerContainer = () => {
  return (
    <div className="h-screen relative flex">
      <div className="pt-[18vh] w-full">
        <Speakers></Speakers>
      </div>
    </div>
  );
};

SpeakerContainer.displayName = 'SpeakerContainer';
export default SpeakerContainer;
