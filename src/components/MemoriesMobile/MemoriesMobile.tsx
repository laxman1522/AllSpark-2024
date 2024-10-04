import Image from 'next/image';
import MemoriesYear from '../MemoriesYear/MemoriesYear';
import { getMemories } from '@/utils/data-utils';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Splide as SplideInstance } from '@splidejs/splide';
import SliderNav from '../SliderNav/SliderNav';
import { useRef, useState } from 'react';
import { MEMORIES } from '@/constants/constants';
import { MEMORIES_MOBILE_SPLIDE_OPTIONS } from '@/constants/option-constants';
import '@splidejs/react-splide/css';
import './MemoriesMobile.scss';

/**
 * @description A component for memories slide mobile
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
const MemoriesMobile = () => {
  const memories = getMemories();
  const [activeSlide, setActiveSlide] = useState(0);
  const splideRef = useRef<SplideInstance | null>(null);

  const prevSlide = () => {
    splideRef.current?.go('<');
  };

  const nextSlide = () => {
    splideRef.current?.go('>');
  };

  const getSlides = () => {
    return memories?.map((memory: any, index: number) => {
      return (
        <SplideSlide key={index}>
          <div className="w-full h-60 border-[6px] border-memories-border-color rounded-2xl relative memories-card">
            <Image
              src={memory[0]?.imageUrl}
              alt="Logo"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="w-full mt-8 h-60 border-[6px] border-memories-border-color rounded-2xl relative memories-card">
            <Image
              src={memory[1]?.imageUrl}
              alt="Logo"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="pt-4">
            <MemoriesYear
              memoryYear={memory[0]?.year}
              memoryURL={memory[0]?.recapUrl}
            />
          </div>
        </SplideSlide>
      );
    });
  };

  return (
    <div className="w-10/12 h-[65vh] m-auto bg-memories-background rounded-lg flex-col p-8 memories-wrapper">
      <Splide
        onMove={(splideInstance: any, newIndex: number) => {
          setActiveSlide(newIndex);
        }}
        onMounted={(splide: any) => {
          splideRef.current = splide;
        }}
        aria-label={MEMORIES.ourMemories}
        options={MEMORIES_MOBILE_SPLIDE_OPTIONS}
      >
        {getSlides()}
      </Splide>

      <div className="mt-8 memories-slider">
        <SliderNav
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          currentIndex={(activeSlide + 1) * 2 - 1}
          items={memories.flat(2).length}
        />
      </div>
    </div>
  );
};

export default MemoriesMobile;
