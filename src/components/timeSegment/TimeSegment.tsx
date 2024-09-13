'use client';
import React, { memo, useEffect, useState } from 'react';
import './TimeSegment.scss';
interface TimeSegmentProps {
  currentValue: number;
}

/**
 * @description An component which has card flipping logic
 * @version 1.0.0
 * @author [Praneash Krishnamurthi,Hariharan Muralidharan]
 */
const TimeSegment: React.FC<TimeSegmentProps> = memo(function TimeSegment({
  currentValue,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [prevNumber, setprevNumber] = useState(currentValue);
  const [value, setValue] = useState(currentValue);

  // Helper function to update the display values in a React way
  function updateSegmentValues() {
    setIsFlipped(true);

    setValue(currentValue);

    setTimeout(() => {
      setIsFlipped(false);
      setprevNumber(currentValue);
    }, 700); //  700ms animation time
  }

  useEffect(() => {
    updateSegmentValues();
  }, [currentValue]);

  return (
    <div className="block text-[100px] font-black w-[116px] z-10">
      <div className="relative h-full">
        <div className="segment-display__top bg-counter-color text-counter-text-color leading-normal overflow-hidden text-center w-full h-1/2 relative rounded-[5px] border-0">
          <span className="counter-value">{value}</span>
        </div>
        <div className="segment-display__bottom bg-counter-color text-counter-text-color overflow-hidden text-center w-full h-1/2 relative rounded-[5px] border-0">
          <div className="segment-middle-seperation bg-counter-background h-[4.3px]"></div>
          <span className="counter-value">{prevNumber}</span>
        </div>
        <div
          className={`${isFlipped ? 'segment-overlay flip' : 'segment-overlay'}`}
        >
          <div className="segment-overlay__top bg-counter-color text-counter-text-color">
            <span className="counter-value">{prevNumber}</span>
          </div>
          <div className="segment-overlay__bottom bg-counter-color text-counter-text-color">
            <div className="segment-middle-seperation bg-counter-background h-[4.3px]"></div>
            <span className="counter-value">{value}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TimeSegment;
