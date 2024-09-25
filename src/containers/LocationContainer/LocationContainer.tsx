'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import './LocationContainer.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LocationTime from '../../components/LocationTime/LocationTime';
import CDWLogo from '../../components/CDWLogo/CDWLogo';
import { useWindowSize } from '@/contexts/WindowSizeContext';

interface LocationContainerProps {
  isCountDownDisplayed: boolean;
}

/**
 * @description A reusable component which displays the location details with animation
 * @version 1.0.0
 * @author [Rubesh Udayakumar]
 */
const LocationContainer: React.FC<LocationContainerProps> = ({
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
      className={`bottom-container opacity-0 ${isCountDownDisplayed && ' min-[540px]:mt-[47vh] mt-[62vh] location-bottom-tab'}`}
      ref={container}
    >
      <div className="location-container min-[540px]:mt-[40vh] 2xl:mt-[35vh]">
        <LocationTime isCountDownDisplayed={isCountDownDisplayed} />
      </div>
      <CDWLogo />
      <div
        className={`${isCountDownDisplayed && 'arrow-tab'} circle-arrow flex justify-center items-center cursor-pointer mt-[12vh] 2xl:mt-[10vh] animate-shake-y`}
      >
        <FontAwesomeIcon
          icon={faCircleChevronDown}
          className="text-[#f9f1d5] h-[30px] md:h-[40px] lg:h-[50px]"
        />
      </div>
    </div>
  );
};

export default LocationContainer;
