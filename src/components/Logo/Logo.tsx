/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import styles from './Logo.module.scss';
import Image from 'next/image';
import left from '../../../public/images/left.png';
import right from '../../../public/images/right.png';
import star from '../../../public/images/star.png';
import aLetter from '../../../public/images/letter-A.png';
import llspark from '../../../public/images/Text-without-A.png';
import allspark from '../../../public/images/Allsparktext.png';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register GSAP MotionPath plugin
gsap.registerPlugin(MotionPathPlugin);

// Define interface for dynamic size values
interface Size {
  height: string;
  width: string;
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

  if (width <= 425) {
    starSize = { height: '24px', width: '30px' };
    logoSize = { height: '44.27px', width: '160px' };
    logoStarSize = { height: '11.81px', width: '17.71px' };
  } else if (width <= 580) {
    starSize = { height: '32.22px', width: '40.25px' };
    logoSize = { height: '60.42px', width: '217.5px' };
    logoStarSize = { height: '16.11px', width: '24.16px' };
  } else if (width <= 768) {
    starSize = { height: '42.67px', width: '53.34px' };
    logoSize = { height: '80px', width: '288px' };
    logoStarSize = { height: '21.33px', width: '32px' };
  } else if (width <= 1024) {
    starSize = { height: '56.88px', width: '71.1px' };
    logoSize = { height: '106.67px', width: '384px' };
    logoStarSize = { height: '28.45px', width: '42.67px' };
  } else {
    starSize = { height: '80px', width: '100px' };
    logoSize = { height: '150px', width: '540px' };
    logoStarSize = { height: '40px', width: '60px' };
  }

  return { starSize, logoSize, logoStarSize };
};

// Function to determine window size category
const getWindowSizeCategory = (width: number): string => {
  if (width > 1024) return 'lg-desktop';
  if (width <= 1024 && width > 768) return 'desktop';
  if (width <= 768 && width > 580) return 'tablet';
  if (width <= 580 && width > 425) return 'lg-mobile';
  return 'mobile';
};

// Main Logo component
export default function Logo() {
  const leftRef = useRef<HTMLImageElement>(null);
  const rightRef = useRef<HTMLImageElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState<string>('default');

  // Reusable functions for common animations
  const motionPathAnimation = (path: any) => ({
    duration: 2.5,
    motionPath: { path, curviness: 1.2 },
    scaleY: 5,
    scaleX: 2.5,
    rotateY: 720,
    yoyo: true,
  });

  const calculateElementWidth = (windowWidth: number) => {
    if (windowWidth > 1024) {
      return (24 * 2.5) / 2;
    } else if (windowWidth > 768) {
      return (17 * 2.5) / 2;
    } else if (windowWidth > 580) {
      return (12.8 * 2.5) / 2;
    } else {
      return (9.6 * 2.5) / 2;
    }
  };

  //Calculating the Left Path dynamically based on the image size
  const calculateLeftPath = () => {
    const windowWidth = window?.innerWidth;
    return 50 + (calculateElementWidth(windowWidth) / windowWidth) * 100;
  };

  //Calculating the Right Path dynamically based on the image size
  const calculateRightPath = () => {
    const windowWidth = window?.innerWidth;
    return 50 - (calculateElementWidth(windowWidth) / windowWidth) * 100;
  };

  // Define paths for GSAP animation
  const paths = {
    right: [
      { x: '75vw', y: '60vh' },
      { x: `${calculateLeftPath()}vw`, y: '20vh' },
    ],
    left: [
      { x: '25vw', y: '60vh' },
      { x: `${calculateRightPath()}vw`, y: '20vh' },
    ],
  };

  // Handle window resize event
  useEffect(() => {
    const resizeHandler = () => {
      const newSizeCategory = getWindowSizeCategory(window.innerWidth);
      if (newSizeCategory !== windowSize) setWindowSize(newSizeCategory);
    };

    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [windowSize]);

  // Animation logic
  useEffect(() => {
    if (leftRef.current && rightRef.current && logoContainerRef.current) {
      const elements = {
        star: logoContainerRef.current.querySelector<HTMLImageElement>(
          `.${styles.star}`,
        ),
        aLetter: logoContainerRef.current.querySelector<HTMLImageElement>(
          `.${styles.aLetter}`,
        ),
        llspark: logoContainerRef.current.querySelector<HTMLImageElement>(
          `.${styles.llspark}`,
        ),
        allspark: logoContainerRef.current.querySelector<HTMLImageElement>(
          `.${styles.allspark}`,
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
      gsap.delayedCall(2.5, () => {
        gsap
          .timeline({ ease: 'power2.in' })
          .set(elements.star, { display: 'block', top: '-80%', left: '44%' })
          .to(elements.star, {
            duration: 1,
            top: 0,
            left: '1.5%',
            height: starSize.height,
            width: starSize.width,
          });
      });

      // Letters animation after 3.5 seconds
      gsap.delayedCall(3.5, () => {
        gsap
          .timeline({ ease: 'bounce.out' })
          .to(
            elements.aLetter,
            {
              duration: 1.2,
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
              duration: 1.5,
              opacity: 1,
              filter: 'blur(0px) contrast(1)',
              ease: 'power2.out',
              stagger: 0.1,
              startAt: { filter: 'blur(50px) contrast(0.5)' },
            },
            0,
          )
          .set(elements.aLetter, { display: 'none' }, 1.5)
          .set(elements.llspark, { display: 'none' }, 1.5)
          .set(elements.allspark, { display: 'block' }, 1.5);
      });

      // Logo animation after 5 seconds
      gsap.delayedCall(5, () => {
        gsap
          .timeline({ ease: 'power2.out' })
          .to(
            logoContainerRef.current,
            {
              duration: 1,
              top: '20vh',
              height: logoSize.height,
              width: logoSize.width,
            },
            0,
          )
          .to(
            elements.star,
            {
              duration: 1,
              top: '5%',
              left: '1.2%',
              height: logoStarSize.height,
              width: logoStarSize.width,
            },
            0,
          );
      });
    }
  }, [windowSize]);

  return (
    <div className={styles.logo}>
      <Image
        src={left}
        alt="left"
        className={styles['left']}
        priority={true}
        ref={leftRef}
      />
      <Image
        src={right}
        alt="right"
        className={styles['right']}
        priority={true}
        ref={rightRef}
      />
      <div className={styles['logo-container']} ref={logoContainerRef}>
        <Image
          src={allspark}
          alt="allspark"
          className={styles['allspark']}
          priority={true}
        />
        <Image
          src={star}
          alt="star"
          className={styles['star']}
          priority={true}
        />
        <Image
          src={aLetter}
          alt="a"
          className={styles['aLetter']}
          priority={true}
        />
        <Image
          src={llspark}
          alt="llspark"
          className={styles['llspark']}
          priority={true}
        />
      </div>
    </div>
  );
}
