import React from 'react';
import Image from 'next/image';
import { getSpeakerDetails } from '@/utils/event-utils';

interface ProfileProps {
  speaker: number;
  index: number;
}

const Profile = ({ speaker, index }: ProfileProps) => {
  const { imageUrl, name } = getSpeakerDetails(speaker);
  return (
    <div key={index} className="flex items-center gap-3 profile">
      <Image
        src={imageUrl}
        alt={name}
        width={50}
        height={50}
        className="rounded-full w-[45px] h-[45px] max-[1024px]:w-[30px] max-[1024px]:h-[30px] object-cover object-top"
      />
      <h5 className="max-[768px]:text-xs text-base text-[#F2BAA7] font-light">
        {name}
      </h5>
    </div>
  );
};

export default Profile;
