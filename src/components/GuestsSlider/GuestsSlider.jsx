import React, { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SliderNav from '@/components/SliderNav/SliderNav';
import Image from 'next/image';
import './GuestsSlider.scss';
import SectionHeader from '@/components/SectionHeader/SectionHeader';

const GuestsSlider = ({ guests, heading }) => {
  const slideRef = useRef(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const settings = {
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  const prevButtonClick = async () => {
    slideRef.current?.slickPrev();
  };

  const nextButtonClick = () => {
    slideRef.current?.slickNext();
  };
  const getSlides = () => {
    return guests?.map((guest, index) => (
      <div className="wrap" data-index={index + 1} key={index}>
        <div className="tile-wrap">
          <Image
            src={guest?.imageUrl || ''}
            alt={guest?.name || ''}
            fill
            objectFit="cover"
            className="rounded-[40px]"
          />
          <div className="details hidden absolute bottom-0 w-full items-center justify-center flex-col py-4 gap-1 bg-[#270212] bg-no-repeat bg-opacity-80 rounded-b-[40px] backdrop-blur-[20px]">
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
    <div className="guests-desktop my-40 mx-auto p-16 pr-60 w-[75%]">
      <div className="flex justify-between first-line:">
        <SectionHeader headerText={heading} />

        <SliderNav
          prevSlide={prevButtonClick}
          nextSlide={nextButtonClick}
          currentIndex={selectedSlideIndex}
          itemsLength={guests?.length}
          isLoop={true}
        />
      </div>
      <div className="mt-16 mb-12 w-[600px] mx-auto wrapper">
        <Slider
          infinite={true}
          focusOnSelect={true}
          onReInit={() => {
            const selectedIndex = Math.abs(
              Number(
                document
                  .getElementsByClassName('slick-current')[0]
                  .getAttribute('data-index'),
              ),
            );
            setSelectedSlideIndex(selectedIndex);
            document
              .getElementsByClassName('slick-current')[0]
              .classList.add('active');
          }}
          ref={slideRef}
          arrows={false}
          centerMode={true}
          {...settings}
        >
          {getSlides()}
        </Slider>
      </div>
    </div>
  );
};

export default GuestsSlider;
