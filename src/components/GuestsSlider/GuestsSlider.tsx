'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import SliderNav from '@/components/SliderNav/SliderNav';
import Image from 'next/image';
import './GuestsSlider.scss';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import { GUEST_DESKTOP_SLICK_OPTIONS } from '@/constants/option-constants';

interface GuestsSliderProps {
  guests: Array<guestType>;
  heading: string;
}

type guestType = {
  imageUrl: string;
  name: string;
  designation: string;
};

const GuestsSlider = ({ guests, heading }: GuestsSliderProps) => {
  const slideRef = useRef<Slider | null>(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  const prevSlideHandler = async () => {
    slideRef.current?.slickPrev();
  };

  const nextSlideHandler = () => {
    slideRef.current?.slickNext();
  };
  const getSlides = () => {
    return guests?.map((guest, index: number) => (
      <div className="wrap px-5 w-full" data-index={index + 1} key={index}>
        <div className="tile-wrap w-full float-left relative z-10 h-[60vh] bg-[#AD6B8780] rounded-[140px] opacity-80">
          <Image
            src={guest?.imageUrl || ''}
            alt={guest?.name || ''}
            fill
            objectFit="cover"
            className="rounded-[40px] object-top"
          />
          <div className="details hidden absolute bottom-0 w-full items-center justify-center flex-col py-4 gap-1 bg-[#270212] bg-no-repeat bg-opacity-80 rounded-b-[40px]">
            <p className="text-[20px] font-semibold uppercase text-center text-button-color">
              {guest?.name}
            </p>
            <p className="text-[16px] font-medium text-center text-button-color">
              {guest?.designation}
            </p>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div className="guests-desktop my-40 mx-auto px-16 pr-40 xl:pr-60">
      <div className="flex justify-between first-line:">
        <SectionHeader headerText={heading} />

        <SliderNav
          prevSlide={prevSlideHandler}
          nextSlide={nextSlideHandler}
          currentIndex={selectedSlideIndex}
          itemsLength={guests?.length}
          isLoop={true}
        />
      </div>
      <div className="mt-16 mb-12 mx-auto wrapper w-full h-[60vh] overflow-hidden">
        <Slider
          onReInit={() => {
            const current = document.getElementsByClassName('slick-current')[0];
            const selectedIndex = Math.abs(
              Number(current.getAttribute('data-index')),
            );
            setSelectedSlideIndex(selectedIndex);
            current.classList.add('active');
          }}
          ref={slideRef}
          {...GUEST_DESKTOP_SLICK_OPTIONS}
        >
          {getSlides()}
        </Slider>
      </div>
    </div>
  );
};

export default GuestsSlider;
