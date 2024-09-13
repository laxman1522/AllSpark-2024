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
export const TimeSegment: React.FC<TimeSegmentProps> = memo(
  function TimeSegment({ currentValue }) {
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
      <div className="time-segment">
        <div className="segment-display">
          <div className="segment-display__top">
            <span className="counter-value">{value}</span>
          </div>
          <div className="segment-display__bottom">
            <div className="segment-middle-seperation"></div>
            <span className="counter-value">{prevNumber}</span>
          </div>
          <div
            className={`${isFlipped ? 'segment-overlay flip' : 'segment-overlay'}`}
          >
            <div className="segment-overlay__top">
              <span className="counter-value">{prevNumber}</span>
            </div>
            <div className="segment-overlay__bottom">
              <div className="segment-middle-seperation"></div>
              <span className="counter-value">{value}</span>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
