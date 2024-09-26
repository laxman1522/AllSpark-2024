import ComingSoon from '@/components/ComingSoon/ComingSoon';
import React from 'react';
import Image from 'next/image';
import cdwlogo from '../../../public/images/cdwLogo.png';

const SpeakerContainer = () => {
  return (
    <div className="h-screen relative">
      <div
        id="speaker-section"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <ComingSoon />
      </div>
      <div className="footer-logo p-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center">
        <Image
          src={cdwlogo}
          alt="cdw-logo"
          className="object-contain"
          width={105}
          height={56}
        />
      </div>
    </div>
  );
};

SpeakerContainer.displayName = 'SpeakerContainer';
export default SpeakerContainer;
