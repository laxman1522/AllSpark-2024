import React from 'react';
import Image from 'next/image';
import { getSpeakerDetails } from '@/utils/event-utils';

interface ProfileProps {
  speaker: number;
  index: number;
}

const Profile = ({ speaker, index }: ProfileProps) => {
  const { imageUrl, name } = getSpeakerDetails(String(speaker));
  return (
    <div key={index} className="flex items-center gap-1 md:gap-5">
      <Image
        src={imageUrl}
        alt={name}
        width={50}
        height={50}
        className="rounded-full w-[25px] h-[25px] md:w-[50px] md:h-[50px] object-cover object-top"
      />
      <h5 className="max-w-[200px] text-[10px] md:text-[18px] text-center text-[#F2BAA7]">
        {name}
      </h5>
    </div>
  );
};

export default Profile;
