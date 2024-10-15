'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import './EventDetailsContainer.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LocationTime from '../../components/LocationTime/LocationTime';
import CDWLogo from '../../components/CDWLogo/CDWLogo';
import { useWindowSize } from '@/contexts/WindowSizeContext';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface EventDetailsContainerProps {
  isCountDownDisplayed: boolean;
}

/**
 * @description A reusable component which displays the location details with animation
 * @version 1.0.0
 * @author [Rubesh Udayakumar]
 */
const EventDetailsContainer: React.FC<EventDetailsContainerProps> = ({
  isCountDownDisplayed,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { windowSize, windowWidth } = useWindowSize();

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
      {windowWidth > 767 && (
        <div className="location-container min-[540px]:mt-[40vh] 2xl:mt-[35vh]">
          <LocationTime isCountDownDisplayed={isCountDownDisplayed} />
        </div>
      )}
      <div
        className={`social-icons flex items-center mt-[6vh] gap-8 ${windowWidth < 1024 ? 'flex-col absolute right-[7%] bottom-32 text-3xl' : 'flex-row justify-center w-full text-4xl'}`}
      >
        <a
          href="https://www.facebook.com/AllSparkTX/"
          className="facebook-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-events-color" />
        </a>
        <a
          href="https://www.instagram.com/allsparktx/"
          className="instagram-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${windowWidth < 1024 ? 'w-9 h-9' : 'w-11 h-11'}`}
            viewBox="0 0 24 24"
          >
            <path
              fill="#f9f1d5"
              d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/cdw"
          className="linkedin-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-events-color" />
        </a>
      </div>
      <CDWLogo />
      <div
        className={`${isCountDownDisplayed && 'arrow-tab'} circle-arrow flex justify-center items-center cursor-pointer mt-[12vh] 2xl:mt-[10vh] animate-shake-y`}
        id="homeArrowIcon"
      >
        <FontAwesomeIcon
          icon={faCircleChevronDown}
          className="text-[#f9f1d5] !h-[30px] md:!h-[40px] lg:!h-[50px]"
        />
      </div>
    </div>
  );
};

export default EventDetailsContainer;
