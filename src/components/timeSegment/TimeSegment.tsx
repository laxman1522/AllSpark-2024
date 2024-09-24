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
    <div className="time-segment-container block md:text-[100px] w-[45px] max-[400px]:w-[40px] min-[540px]:w-[65px] md:w-[110px] z-10">
      <div className="relative h-full">
        <div className="bg-counter-color text-counter-text-color text-center overflow-hidden rounded-[5px] border-0 w-full h-1/2 relative  rounded-bl-none rounded-br-none">
          <span className="previous-counter-value counter-value text-[2.5rem] max-[400px]:text-[2.25rem] min-[540px]:text-[3.5rem] md:text-[6.25rem] relative min-[540px]:top-[5.5px]">
            {value}
          </span>
        </div>
        <div className="bg-counter-color text-counter-text-color text-center overflow-hidden rounded-[5px] border-0 w-full h-1/2 leading-[0] rounded-tl-none rounded-tr-none">
          <div className="bg-counter-background min-[540px]:h-[4.3px] h-[2px]"></div>
          <span className="counter-value text-[2.5rem] max-[400px]:text-[2.25rem] min-[540px]:text-[3.5rem] md:text-[6.25rem] relative bottom-[0px] ">
            {prevNumber}
          </span>
        </div>
        <div
          className={`segment-overlay ${isFlipped ? 'flip' : ''} absolute top-0 flex flex-row gap-[1rem] max-[400px]:w-[40px] min-[540px]:w-[65px] w-[45px] md:w-[110px] h-full`}
        >
          <div className="segment-overlay__top absolute overflow-hidden bg-counter-color text-counter-text-color text-center w-full h-1/2 rounded-[5px] top-0 leading-normal origin-bottom rounded-bl-none rounded-br-none">
            <span className="counter-value text-[2.5rem] max-[400px]:text-[2.25rem] min-[540px]:text-[3.5rem] md:text-[6.25rem] relative min-[540px]:top-[5.5px]">
              {prevNumber}
            </span>
          </div>
          <div className="segment-overlay__bottom absolute overflow-hidden  bg-counter-color text-counter-text-color text-center w-full h-1/2 rounded-[5px] bottom-0 leading-[0] origin-top rounded-tl-none rounded-tr-none">
            <div className="bg-counter-background min-[540px]:h-[4.3px] h-[2px]"></div>
            <span className="counter-value text-[2.5rem] max-[400px]:text-[2.25rem] min-[540px]:text-[3.5rem] md:text-[6.25rem] relative bottom-[0px] ">
              {value}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TimeSegment;
