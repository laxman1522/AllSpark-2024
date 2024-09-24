'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import CalendarIcon from '@/components/CalendarIcon/CalendarIcon';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './LocationTime.scss';
import { ALLSPARK_INFO } from '@/constants/constants';
import { useWindowSize } from '@/contexts/WindowSizeContext';

interface LocationTimeProps {
  isCountDownDisplayed: boolean;
}

const LocationTime: React.FC<LocationTimeProps> = ({
  isCountDownDisplayed,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (container.current) {
      gsap.set(container.current, {
        opacity: 0,
      });
      gsap.to(container.current, {
        opacity: 1,
        duration: 2,
        delay: isCountDownDisplayed ? 7 : 5,
      });
    }
  }, [isCountDownDisplayed, windowSize]);

  return (
    <div
      className="location-time flex flex-col min-[540px]:flex-row text-[#f5d2c6] justify-center items-center md:gap-[23px] min-[540px]:gap-[20px] gap-[12px] text-[15px] md:text-[20px] lg:text-[24px] opacity-0"
      ref={container}
    >
      <div className="location-name flex md:gap-[25px] min-[540px]:gap-[15px] gap-[8px] items-center">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="cursor-pointer location-icon text-[#f9f1d5] min-[540px]:h-[30px] h-[20px] md:h-[40px] lg:h-[50px]"
        />
        <div className="location-text-wrapper flex flex-row items-center font-bold">
          {ALLSPARK_INFO.place}
        </div>
      </div>
      <div className="location-place flex items-center gap-[10px] md:gap-[21px]">
        <CalendarIcon />
        <span className="text-[16px] md:text-[18px] lg:text-[24px] font-bold">
          {ALLSPARK_INFO.date}
        </span>
      </div>
    </div>
  );
};

export default LocationTime;
