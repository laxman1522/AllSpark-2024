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
        <div className=" bg-counter-color text-counter-text-color leading-normal overflow-hidden text-center w-full h-1/2 relative rounded-[5px] border-0  rounded-bl-none rounded-br-none">
          <span className=" relative top-[7.5px]">{value}</span>
        </div>
        <div className=" bg-counter-color text-counter-text-color overflow-hidden text-center w-full h-1/2 relative rounded-[5px] border-0 leading-[0] rounded-tl-none rounded-tr-none">
          <div className=" bg-counter-background h-[4.3px]"></div>
          <span className=" relative bottom-[2px]">{prevNumber}</span>
        </div>
        <div
          className={`absolute top-0 h-full w-[116px] flex flex-row gap-[1rem] segment-overlay ${isFlipped ? 'flip' : ''}`}
        >
          <div className="segment-overlay__top bg-counter-color text-counter-text-color absolute overflow-hidden text-center w-full h-1/2 rounded-[5px] top-0 leading-normal origin-bottom rounded-bl-none rounded-br-none">
            <span className=" relative top-[7.5px]">{prevNumber}</span>
          </div>
          <div className="segment-overlay__bottom bg-counter-color text-counter-text-color absolute overflow-hidden text-center w-full h-1/2 rounded-[5px] bottom-0 leading-[0] origin-top rounded-tl-none rounded-tr-none">
            <div className=" bg-counter-background h-[4.3px]"></div>
            <span className=" relative bottom-[2px]">{value}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TimeSegment;
