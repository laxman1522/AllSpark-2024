import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { getAllSpeakers } from '@/utils/data-utils';
import Image from 'next/image';
import './Speakers.scss';
export default function Speakers() {
  const speakers = getAllSpeakers();
  console.log(speakers);
  return (
    <div className="flex flex-col justify-center relative ml-[2%] lg:ml-[3%] max-[1400px]:mt-[15vh] max-[712px]:mt[10vh] max-[1024px]:mt-[2vh] lg:mt-[0vh] w-[84%] p-2  max-[1024px]:m-auto  rounded border-0 h-full">
      <SectionHeader headerText={'Speakers'}></SectionHeader>
      <div className="speakers-container flex justify-start items-center flex-wrap rounded-lg border-4 border-text-color w-full h-full px-8 py-6 overflow-scroll gap-[20px] my-0">
        {speakers.map((speaker, index) => (
          // w-[18%] h-[45%]
          <div className="image-wrapper border-4 border-text-color rounded-lg h-[calc(100%/2.3)] overflow-hidden">
            <Image
              src={speaker?.imageUrl}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              objectFit="cover"
              alt={speaker.name}
              loading={'lazy'}
            ></Image>
            {/* <div className='  w-full h-full '>
                            <img className='w-full h-full object-cover' src={speaker.imageUrl} alt={speaker.name}></img>
                        </div> */}
            <div className="relative -translate-y-full bg-black width-full h-auto ">
              <p>{speaker.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
