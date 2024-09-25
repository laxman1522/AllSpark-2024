'use client';
import './Logo.scss';
import Image from 'next/image';
import left from '../../../public/images/left.png';
import right from '../../../public/images/right.png';
import star from '../../../public/images/star.png';
import aLetter from '../../../public/images/letter-A.png';
import llspark from '../../../public/images/Text-without-A.png';
import allspark from '../../../public/images/Allsparktext.png';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { SCREEN_SIZES } from '../../constants/constants';
import { useWindowSize } from '@/contexts/WindowSizeContext';

// Register GSAP MotionPath plugin
gsap.registerPlugin(MotionPathPlugin);

// Define interface for dynamic size values
interface Size {
  height: string;
  width: string;
}

interface LogoProps {
  isCountDownDisplayed: boolean;
}

// Function to calculate dynamic values based on screen width
const getDynamicValues = (
  width: number,
): {
  starSize: Size;
  logoSize: Size;
  logoStarSize: Size;
} => {
  let starSize: Size, logoSize: Size, logoStarSize: Size;

  if (width <= SCREEN_SIZES.lgMobile) {
    starSize = { height: '32.22px', width: '40.25px' };
    logoSize = { height: '60.42px', width: '217.5px' };
    logoStarSize = { height: '16.91px', width: '16.11px' };
  } else if (width <= SCREEN_SIZES.tablet) {
    starSize = { height: '42.67px', width: '53.34px' };
    logoSize = { height: '80px', width: '288px' };
    logoStarSize = { height: '22.4px', width: '21.33px' };
  } else if (width <= SCREEN_SIZES.desktop) {
    starSize = { height: '56.88px', width: '71.1px' };
    logoSize = { height: '106.67px', width: '384px' };
    logoStarSize = { height: '29.86px', width: '28.44px' };
  } else {
    starSize = { height: '80px', width: '100px' };
    logoSize = { height: '150px', width: '540px' };
    logoStarSize = { height: '42px', width: '40px' };
  }

  return { starSize, logoSize, logoStarSize };
};

/**
 * @description An component to animate the main logo
 * @version 1.0.0
 * @author [Charanraj Thiyagarajan]
 */
const Logo: React.FC<LogoProps> = ({ isCountDownDisplayed }) => {
  const leftRef = useRef<HTMLImageElement>(null);
  const rightRef = useRef<HTMLImageElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const { windowSize } = useWindowSize();

  // Reusable functions for common animations
  const motionPathAnimation = (path: any) => ({
    duration: 0.5,
    motionPath: { path, curviness: 1.2 },
    scaleY: 5,
    scaleX: 2.5,
    rotateY: 720,
    yoyo: true,
  });

  const calculateElementWidth = (windowWidth: number) => {
    if (windowWidth > SCREEN_SIZES.desktop) {
      return (24 * 2.5) / 2;
    } else if (windowWidth > SCREEN_SIZES.tablet) {
      return (17 * 2.5) / 2;
    } else if (windowWidth > SCREEN_SIZES.lgMobile) {
      return (12.8 * 2.5) / 2;
    } else {
      return (9.6 * 2.5) / 2;
    }
  };

  //Calculating the Left Path dynamically based on the image size
  const calculateLeftPath = (windowWidth: number) => {
    return 50 + (calculateElementWidth(windowWidth) / windowWidth) * 100;
  };

  //Calculating the Right Path dynamically based on the image size
  const calculateRightPath = (windowWidth: number) => {
    return 50 - (calculateElementWidth(windowWidth) / windowWidth) * 100;
  };

  // Animation logic
  useEffect(() => {
    // Define paths for GSAP animation
    const paths = {
      right: [
        { x: '75vw', y: '60vh' },
        { x: `${calculateLeftPath(window.innerWidth)}vw`, y: '20vh' },
      ],
      left: [
        { x: '25vw', y: '60vh' },
        { x: `${calculateRightPath(window.innerWidth)}vw`, y: '20vh' },
      ],
    };

    if (leftRef.current && rightRef.current && logoContainerRef.current) {
      const elements = {
        star: logoContainerRef.current.querySelector<HTMLImageElement>(
          '.logo .star',
        ),
        aLetter:
          logoContainerRef.current.querySelector<HTMLImageElement>(
            '.logo .aLetter',
          ),
        llspark:
          logoContainerRef.current.querySelector<HTMLImageElement>(
            '.logo .llspark',
          ),
        allspark:
          logoContainerRef.current.querySelector<HTMLImageElement>(
            '.logo .allspark',
          ),
      };

      const { starSize, logoSize, logoStarSize } = getDynamicValues(
        window.innerWidth,
      );

      // Reset animations to initial state
      gsap.globalTimeline.clear();
      gsap.set(
        [
          rightRef.current,
          leftRef.current,
          logoContainerRef.current,
          elements.star,
          elements.aLetter,
          elements.llspark,
          elements.allspark,
        ],
        {
          clearProps: 'all',
        },
      );

      // Animate right and left elements
      gsap
        .timeline({ ease: 'power3.in' })
        .set(rightRef.current, { display: 'block', x: 0, y: '90vh' })
        .to(rightRef.current, motionPathAnimation(paths.right))
        .set(rightRef.current, { display: 'none' });
      gsap
        .timeline({ ease: 'power3.in' })
        .set(leftRef.current, { display: 'block', x: '100vw', y: '90vh' })
        .to(leftRef.current, motionPathAnimation(paths.left))
        .set(leftRef.current, { display: 'none' });

      // Star animation after 2.5 seconds
      gsap.delayedCall(0.5, () => {
        gsap
          .timeline({ ease: 'power2.in' })
          .set(elements.star, { display: 'block', top: '-20vh', left: '44%' })
          .to(elements.star, {
            duration: 0.1,
            top: 0,
            left: '1.5%',
            height: starSize.height,
            width: starSize.width,
          });
      });

      // Letters animation after 3.5 seconds
      gsap.delayedCall(0.5, () => {
        gsap
          .timeline({ ease: 'bounce.out' })
          .to(
            elements.aLetter,
            {
              duration: 0.2,
              display: 'block',
              top: '1%',
              left: 0,
              height: '98%',
            },
            0,
          )
          .to(
            elements.llspark,
            {
              duration: 0.5,
              opacity: 1,
              filter: 'blur(0px) contrast(1)',
              ease: 'power2.out',
              stagger: 0.1,
              startAt: { filter: 'blur(50px) contrast(0.5)' },
            },
            0,
          )
          .set(elements.aLetter, { display: 'none' }, 0.5)
          .set(elements.llspark, { display: 'none' }, 0.5)
          .set(elements.allspark, { display: 'block' }, 0.5);
      });

      // Logo animation after 6 seconds
      if (isCountDownDisplayed) {
        gsap.delayedCall(0.5, () => {
          gsap
            .timeline({ ease: 'power2.out' })
            .to(
              logoContainerRef.current,
              {
                duration: 0.1,
                top:
                  window.innerWidth <= SCREEN_SIZES.mobile
                    ? '7vh'
                    : window.innerWidth <= SCREEN_SIZES.tablet
                      ? '10vh'
                      : '15vh',
                height: logoSize.height,
                width: logoSize.width,
              },
              0,
            )
            .to(
              elements.star,
              {
                duration: 0.1,
                top: '3%',
                left: '3.2%',
                height: logoStarSize.height,
                width: logoStarSize.width,
              },
              0,
            );
        });
      }
    }
  }, [windowSize, isCountDownDisplayed]);

  return (
    <div className="logo">
      <Image
        src={left}
        alt="left"
        className="left absolute hidden"
        priority={true}
        ref={leftRef}
      />
      <Image
        src={right}
        alt="right"
        className="right absolute hidden"
        priority={true}
        ref={rightRef}
      />
      <div
        className={`logo-container relative top-[45vh] top-${!isCountDownDisplayed && '[50vh]'} left-[50vw] -translate-x-1/2 -translate-y-1/2`}
        ref={logoContainerRef}
      >
        <Image
          src={allspark}
          alt="allspark"
          className="allspark absolute hidden object-contain top-0 h-full w-full"
          priority={true}
        />
        <Image
          src={star}
          alt="star"
          className="star absolute hidden"
          priority={true}
        />
        <Image
          src={aLetter}
          alt="a"
          className="aLetter absolute hidden object-contain w-auto h-1/5 top-[-2%] left-[5%]"
          priority={true}
        />
        <Image
          src={llspark}
          alt="llspark"
          className="llspark absolute object-contain opacity-0 top-0 h-full"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Logo;
