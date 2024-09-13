'use client';
import React, { memo, useEffect, useState } from 'react';
import './TimeSegment.scss';
interface TimeSegmentProps {
  currentValue: number;
}

/**
 * @description A component that handles card flipping logic.
 * @version 1.0.0
 * @author [Praneash Krishnamurthi, Hariharan Muralidharan]
 */
const TimeSegment: React.FC<TimeSegmentProps> = memo(function TimeSegment({
  currentValue,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [prevNumber, setPrevNumber] = useState(currentValue);
  const [value, setValue] = useState(currentValue);

  // Update display values with flip animation
  useEffect(() => {
    setIsFlipped(true);
    setValue(currentValue);

    const timer = setTimeout(() => {
      setIsFlipped(false);
      setPrevNumber(currentValue);
    }, 700);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [currentValue]);

  return (
    <div className="block md:text-[100px] w-[65px] md:w-[110px] z-10">
      <div className="relative h-full">
        <div className="bg-counter-color text-counter-text-color text-center overflow-hidden rounded-[5px] border-0 w-full h-1/2 relative  rounded-bl-none rounded-br-none">
          <span className="counter-value text-[3.5rem] md:text-[6.25rem] relative top-[5.5px]">
            {value}
          </span>
        </div>
        <div className="bg-counter-color text-counter-text-color text-center overflow-hidden rounded-[5px] border-0 w-full h-1/2 leading-[0] rounded-tl-none rounded-tr-none">
          <div className="bg-counter-background h-[4.3px]"></div>
          <span className="counter-value text-[3.5rem] md:text-[6.25rem] relative bottom-[0px] ">
            {prevNumber}
          </span>
        </div>
        <div
          className={`segment-overlay ${isFlipped ? 'flip' : ''} absolute top-0 flex flex-row gap-[1rem] w-[65px] md:w-[110px] h-full`}
        >
          <div className="segment-overlay__top absolute overflow-hidden bg-counter-color text-counter-text-color text-center w-full h-1/2 rounded-[5px] top-0 leading-normal origin-bottom rounded-bl-none rounded-br-none">
            <span className="counter-value text-[3.5rem] md:text-[6.25rem] relative top-[5.5px]">
              {prevNumber}
            </span>
          </div>
          <div className="segment-overlay__bottom absolute overflow-hidden  bg-counter-color text-counter-text-color text-center w-full h-1/2 rounded-[5px] bottom-0 leading-[0] origin-top rounded-tl-none rounded-tr-none">
            <div className="bg-counter-background h-[4.3px]"></div>
            <span className="counter-value text-[3.5rem] md:text-[6.25rem] relative bottom-[0px] ">
              {value}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TimeSegment;
