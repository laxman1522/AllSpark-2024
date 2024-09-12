'use client';

import styles from './Logo.module.scss';
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

gsap.registerPlugin(MotionPathPlugin);

const getDynamicValues = () => {
  const width = window.innerWidth;
  let starSize, logoSize, logoStarSize;

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

export default function Logo() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const logoContainerRef = useRef(null);

  // Reusable functions for common animations
  const motionPathAnimation = (path) => ({
    duration: 2.5,
    motionPath: { path, curviness: 1.2 },
    scaleY: 5,
    scaleX: 2.5,
    rotateY: 720,
    yoyo: true,
  });

  // Define paths
  const paths = {
    right: [
      { x: '90vw', y: '80vh' },
      { x: '20vw', y: '60vh' },
      { x: '70vw', y: '40vh' },
      { x: '51.1vw', y: '20vh' },
    ],
    left: [
      { x: '10vw', y: '80vh' },
      { x: '80vw', y: '60vh' },
      { x: '30vw', y: '40vh' },
      { x: '47.4vw', y: '20vh' },
    ],
  };

  useEffect(() => {
    if (leftRef.current && rightRef.current && logoContainerRef.current) {
      const elements = {
        star: logoContainerRef.current.querySelector(`.${styles.star}`),
        aLetter: logoContainerRef.current.querySelector(`.${styles.aLetter}`),
        llspark: logoContainerRef.current.querySelector(`.${styles.llspark}`),
        allspark: logoContainerRef.current.querySelector(`.${styles.allspark}`),
      };

      const { starSize, logoSize, logoStarSize } = getDynamicValues();

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

      // Star animation after 3 seconds
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

      // Letters animation after 4 seconds
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
          .to(elements.llspark, { duration: 1.5, opacity: 1, left: 0 }, 0)
          .set(elements.aLetter, { display: 'none' }, 1.5)
          .set(elements.llspark, { display: 'none' }, 1.5)
          .set(elements.allspark, { display: 'block' }, 1.5);
      });

      // Logo animation after 5.5 seconds
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
  }, []);

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
