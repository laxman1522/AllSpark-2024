import React, { useState, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Splide as SplideInstance } from '@splidejs/splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import SliderNav from '@/components/SliderNav/SliderNav';
import { GUESTS } from '@/constants/constants';
import { getAllGuests } from '@/utils/data-utils';

/**
 * @description A reusable component which displays the guest details
 * @version 1.0.0
 * @author [Charanraj Thiyagarajan]
 */
const GuestsContainer = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const splideRef = useRef<SplideInstance | null>(null);
  const guests = getAllGuests();

  const prevSlide = () => {
    splideRef.current?.go('<');
  };

  const nextSlide = () => {
    splideRef.current?.go('>');
  };

  const getSlides = () => {
    return guests.map((guest, index) => {
      return (
        <SplideSlide key={index}>
          <div className="h-full rounded-[40px] overflow-hidden">
            <Image
              src={guest.imageUrl}
              alt={guest.name}
              fill
              objectFit="cover"
              className="rounded-[40px]"
            />
            <div className="absolute bottom-0 w-full flex items-center justify-center flex-col py-4 gap-1 bg-[#270212] bg-no-repeat bg-opacity-80 rounded-b-[40px] backdrop-blur-[20px]">
              <p className="text-[20px] font-semibold uppercase text-center">
                {guest.name}
              </p>
              <p className="text-[16px] font-medium text-center">
                {guest.designation}
              </p>
            </div>
          </div>
        </SplideSlide>
      );
    });
  };

  return (
    <div className="h-screen relative">
      <div id="guests-section" className="absolute h-full w-full">
        <div className="guests-mobile my-40">
          <SectionHeader headerText={GUESTS.ourGuests} />
          <div className="mt-16 mb-12">
            <Splide
              onMove={(splideInstance: any, newIndex: number) => {
                setActiveSlide(newIndex);
              }}
              onMounted={(splide: any) => {
                splideRef.current = splide;
              }}
              aria-label={GUESTS.ourGuests}
              options={{
                type: 'loop',
                drag: 'true',
                snap: true,
                gap: '1.5rem',
                lazyLoad: 'nearby',
                padding: '3rem',
                height: '43.75vh',
                arrows: false,
                pagination: false,
                speed: 1000,
                easing: 'cubic-bezier( 0.25, 0.46, 0.45, 0.94 )',
              }}
            >
              {getSlides()}
            </Splide>
          </div>
          <SliderNav
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            currentIndex={activeSlide}
            items={guests.length}
          />
        </div>
      </div>
    </div>
  );
};

GuestsContainer.displayName = 'GuestsContainer';
export default GuestsContainer;
