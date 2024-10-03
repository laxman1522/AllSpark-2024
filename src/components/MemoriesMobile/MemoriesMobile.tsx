'use client';
import Image from 'next/image';
import MemoriesYear from '../MemoriesYear/MemoriesYear';
import { getMemories } from '@/utils/data-utils';
import { useEffect } from 'react';

const MemoriesMobile = () => {
  const memories = getMemories();
  useEffect(() => {
    for (let i = 0; i < memories.length - 1; i += 2) {
      console.log(memories[i]);
      console.log(memories[i + 1]);
    }
  }, []);
  return (
    <div className="w-10/12 h-[65vh] m-auto bg-memories-background rounded-lg flex-col p-8">
      <div className="w-full h-60 border-[6px] border-memories-border-color rounded-xl relative">
        <Image
          src="/images/dummy-image.jpg"
          alt="Logo"
          fill
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <div className="w-full mt-8 h-60 border-[6px] border-memories-border-color rounded-xl relative">
        <Image
          src="/images/dummy-image.jpg"
          alt="Logo"
          fill
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="pt-4">
        <MemoriesYear memoryYear={2024} memoryURL="https://www.google.com/" />
      </div>
    </div>
  );
};

export default MemoriesMobile;
