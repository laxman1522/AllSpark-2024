'use client';
import React, { useState, useRef, useEffect } from 'react';
import SliderNav from '../SliderNav/SliderNav';
import SectionHeader from '../SectionHeader/SectionHeader';
import { ArrowUpRight } from 'lucide-react';
import { SLIDER_CONSTANTS } from '@/constants/constants';
import Image from 'next/image';

interface SliderProps {
  sliderName: string;
  items: {
    imageUrl: string;
    description: string;
    year: number;
    recapUrl: string;
  }[];
}

export default function Slider({ sliderName, items }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFading, setIsFading] = useState<boolean>(true);
  /**
   * This function is used t handle the drag on the start
   * @param e
   */
  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    setIsDragging(true);
    if ('touches' in e) {
      setStartX(e?.touches[0]?.pageX);
    } else {
      setStartX(e?.pageX);
    }
  };

  /**
   * This function is used to handle the drag while moving
   * @param e
   * @returns void
   */
  const handleDragMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    if (!isDragging) return;

    e.preventDefault();
    const currentX = 'touches' in e ? e?.touches[0]?.pageX : e?.pageX;
    const diff = currentX - startX;
    const containerWidth = containerRef?.current?.offsetWidth;

    // Limit dragging to one slide width in either direction
    if (containerWidth) {
      const boundedDiff = Math.max(
        Math.min(diff, containerWidth),
        -containerWidth,
      );
      setDragOffset(boundedDiff);
    }
  };

  /**
   * This functin is used to handle the drag at end
   * @returns void
   */
  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);
    const containerWidth = containerRef?.current?.offsetWidth;

    // Determine if drag was significant enough to change slides
    if (containerWidth && Math.abs(dragOffset) > containerWidth / 16) {
      if (dragOffset > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (dragOffset < 0 && currentIndex < items?.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }

    setDragOffset(0);
  };

  /**
   * This is used to switch to the next slide on click
   */
  const nextSlide = () => {
    if (currentIndex < items?.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  /**
   * This is used to switch to the previous slide on click
   */
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    setIsFading(false);

    setTimeout(() => {
      setIsFading(true);
    }, SLIDER_CONSTANTS.fadingTime);

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= items?.length - 1 ? 0 : prevIndex + 1,
      );
    }, SLIDER_CONSTANTS.autoScrollTime); // Auto-scroll every 4 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between first-line:">
        <SectionHeader headerText={sliderName}></SectionHeader>
        <SliderNav
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          currentIndex={currentIndex}
          itemsLength={items?.length}
          isLoop={false}
        ></SliderNav>
      </div>

      <div
        className=" relative overflow-hidden rounded-lg border-4 border-text-color h-[55vh] w-[80vw]"
        ref={containerRef}
      >
        <div
          className={`flex transition-transform duration-300 ease-in-out w-full h-full ${
            isDragging ? 'transition-none' : ''
          }`}
          style={{
            transform: containerRef.current
              ? `translateX(${-currentIndex * 100 + (dragOffset / containerRef?.current?.offsetWidth || 0) * 100}%)`
              : '0%',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onMouseMove={handleDragMove}
          onTouchMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchEnd={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          {items?.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 flex-col w-full h-full flex items-center text-white text-xl font-bold select-none`}
            >
              <div className="w-full h-full object-cover m-0 relative">
                <Image
                  src={item?.imageUrl}
                  alt={item?.description}
                  fill
                  draggable="false"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex items-center font-poppins italic justify-between transition-opacity duration-800 ease-in ${
          isFading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-button-color text-lg">
          {items[currentIndex]?.description}
        </p>
        <div className="flex items-center gap-3 pr-2">
          <p className="text-button-color text-2xl font-semibold ml-5">
            {items[currentIndex]?.year}
          </p>
          <a
            className="flex items-center justify-center p-[4px] bg-slate-100 rounded-full"
            href={items[currentIndex]?.recapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Go to ${items[currentIndex]?.year}`}
          >
            <ArrowUpRight
              size={16}
              className=" text-counter-background"
            ></ArrowUpRight>
          </a>
        </div>
      </div>
    </div>
  );
}
