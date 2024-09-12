'use client';

// components/HandAnimation.js
import { useEffect, useRef, useState } from 'react';
import './HandAnimation.scss';
import { gsap } from 'gsap';
import left from '../../../public/images/left.png';
import right from '../../../public/images/right.png';
import star from '../../../public/images/star.png';
import target from '../../../public/images/target.png';
import Image from 'next/image';

const HandAnimation = () => {
  const leftHandRef = useRef(null);
  const rightHandRef = useRef(null);
  const effectContainerRef = useRef<HTMLDivElement | null>(null);
  const [showSingleImage, setShowSingleImage] = useState(false);
  const singleImageRef = useRef<HTMLImageElement | null>(null);
  const targetImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    console.log(targetImageRef);
    // Move the single image to the target image
    tl.to(
      singleImageRef.current!,
      {
        x: '-150px',
        y: '60px',
        duration: 1.5,
        ease: 'power2.inOut',
        position: 'absolute',
      },
      '+=0.5', // Start this animation after a short delay
    );
  }, [showSingleImage]);

  useEffect(() => {
    const tl = gsap.timeline();

    const leftHandStartX = 0.5 * window.innerWidth - 100; // Convert -50vw to pixels
    const leftHandStartY = -0.6 * window.innerHeight; // Convert 50vh to pixels

    const rightHandStartX = -0.5 * window.innerWidth + 100; // Convert 50vw to pixels
    const rightHandStartY = -0.6 * window.innerHeight; // Convert 50vh to pixels

    // Animate left hand from bottom-left corner to the center of the screen
    tl.fromTo(
      leftHandRef.current,
      { x: '-50vw', y: '50vh' },
      {
        x: `${leftHandStartX}`,
        y: `${leftHandStartY}`,
        duration: 2,
        ease: 'power2.out',
      },
    );

    // Animate right hand from bottom-right corner to the center of the screen
    tl.fromTo(
      rightHandRef.current,
      { x: '50vw', y: '50vh' },
      {
        x: `${rightHandStartX}`,
        y: `${rightHandStartY}`,
        duration: 2,
        ease: 'power2.out',
      },
      '<', // Sync with the left hand animation
    );

    // Create a spark effect with multiple particles
    const createSparkEffect = () => {
      if (!effectContainerRef.current) return;

      // Clear existing effects
      effectContainerRef.current.innerHTML = '';

      for (let i = 0; i < 20; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        effectContainerRef.current.appendChild(spark);
        gsap.fromTo(
          spark,
          {
            x: 0,
            y: 0,
            scale: 0.1,
            opacity: 1,
            rotation: Math.random() * 360,
            backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8)`,
          },
          {
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            scale: 1,
            opacity: 0,
            rotation: Math.random() * 360,
            duration: 0.8,
            ease: 'power1.out',
            stagger: 0.05,
          },
        );
      }
    };

    // Trigger the spark effect in the center after both hands arrive
    tl.add(() => {
      createSparkEffect();
      setTimeout(() => {
        setShowSingleImage(true);
      }, 800);
    }, '-=0.5');
  }, []);

  return (
    <div className="animation-container">
      {!showSingleImage && (
        <>
          <Image
            ref={leftHandRef}
            src={left}
            alt="Left Hand"
            className="left-hand"
          />
          <Image
            ref={rightHandRef}
            src={right}
            alt="Right Hand"
            className="right-hand"
          />
        </>
      )}

      <div ref={effectContainerRef} className="spark-effect-container"></div>
      <div className="logo-container">
        {showSingleImage && (
          <div ref={targetImageRef} className="target-image">
            <Image src={target} alt="Target" />
          </div>
        )}
        {showSingleImage && (
          <Image
            ref={singleImageRef}
            src={star}
            alt="Single Image"
            className="single-image"
          />
        )}
      </div>
    </div>
  );
};

export default HandAnimation;
