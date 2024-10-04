import React from 'react';
import Slider from '../Slider/Slider';
import { getMemories } from '@/utils/data-utils';

export default function Memories() {
  const memories = getMemories();
  return (
    <div className="relative ml-[2%] lg:ml-[3%] max-[1400px]:mt-[15vh] max-[712px]:mt[10vh] max-[1024px]:mt-[2vh] lg:mt-[0vh] w-[84%] p-2 flex justify-center max-[1024px]:m-auto  rounded border-0">
      <Slider sliderName={'Memories'} items={memories}></Slider>
    </div>
  );
}
