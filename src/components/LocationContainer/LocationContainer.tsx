'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import CalendarIcon from '@/components/CalendarIcon/CalendarIcon';
import logo from '../../../public/images/cdwLogo.png';
import Image from 'next/image';
import './LocationContainer.scss';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { setWindowSizeCategory } from '@/utils/screen-utils';

/**
 * @description A reusable component which displays the location details with animation
 * @version 1.0.0
 * @author [Rubesh Udayakumar]
 */
const LocationContainer = () => {
  const container = useRef<HTMLImageElement>(null);

  const [windowSize, setWindowSize] = useState<string>('');

  useEffect(() => {
    setWindowSizeCategory(window.innerWidth, windowSize, setWindowSize);
    window.addEventListener('resize', () => {
      setWindowSizeCategory(window.innerWidth, windowSize, setWindowSize);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWindowSizeCategory(window.innerWidth, windowSize, setWindowSize);
      });
    };
  }, []);

  useEffect(() => {
    if (container.current) {
      gsap.set(container.current, {
        opacity: 0,
      });
      gsap.to(container.current, {
        opacity: 1,
        duration: 2,
        delay: 5,
      });
    }
  }, [windowSize]);

  return (
    <div className="bottom-container" ref={container}>
      <div className="location-container mt-[45vh] md:mt-[40vh] 2xl:mt-[35vh]  flex flex-col md:flex-row text-[#f5d2c6] justify-center items-center md:gap-[23px] gap-[20px] text-[15px] md:text-[20px] lg:text-[24px]">
        <div className="location-name flex gap-[15px] md:gap-[25px]">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="cursor-pointer location-icon text-[#f9f1d5] h-[30px] md:h-[40px] lg:h-[50px]"
          />
          <div className="location-text-wrapper flex flex-row items-center">
            Namma <span className="font-semibold">&nbsp; Bengaluru</span>
          </div>
        </div>
        <div className="location-place flex items-center gap-[10px] md:gap-[21px]">
          <CalendarIcon />
          <span className="text-[16px] md:text-[18px] lg:text-[24px]">
            October 25 & 26
          </span>
        </div>
      </div>
      <div className="cdw-logo flex justify-center items-center mt-[8vh]">
        <Image
          src={logo}
          alt="Logo"
          width={60}
          height={100}
          className="w-[90px] cursor-pointer"
        />
      </div>
      <div className="circle-arrow flex justify-center items-center cursor-pointer mt-[12vh] 2xl:mt-[10vh] animate-shake-y">
        <FontAwesomeIcon
          icon={faCircleChevronDown}
          className="text-[#f9f1d5] h-[30px] md:h-[40px] lg:h-[50px]"
        />
      </div>
    </div>
  );
};

export default LocationContainer;
