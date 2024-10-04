import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderNavProps {
  prevSlide: () => void;
  nextSlide: () => void;
  currentIndex: number;
  itemsLength: number;
}

export default function SliderNav({
  prevSlide,
  nextSlide,
  currentIndex,
  itemsLength,
}: SliderNavProps) {
  return (
    <div className="flex justify-center items-center gap-4">
      <button onClick={prevSlide} className="p-1  bg-text-color rounded-full">
        <ChevronLeft
          size={24}
          strokeWidth={4}
          className="text-counter-background"
        />
      </button>

      <span className="max-[580px]:text-3xl text-lg min-w-24 font-medium text-button-color text-center">
        {currentIndex + 1} / {itemsLength}
      </span>

      <button onClick={nextSlide} className="p-1  bg-text-color rounded-full">
        <ChevronRight
          size={24}
          strokeWidth={4}
          className="text-counter-background"
        />
      </button>
    </div>
  );
}
