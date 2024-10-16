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
    <div key={index} className="flex items-center gap-1 lg:gap-5 profile">
      <Image
        src={imageUrl}
        alt={name}
        width={50}
        height={50}
        className="rounded-full w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] object-cover object-top"
      />
      <h5 className="text-[10px] lg:text-[18px] text-[#F2BAA7]">{name}</h5>
    </div>
  );
};

export default Profile;
