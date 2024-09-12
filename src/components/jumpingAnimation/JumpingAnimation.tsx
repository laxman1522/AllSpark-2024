'use client';

// components/JumpAnimation.tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import left from '../../../public/images/left.png';
import right from '../../../public/images/right.png';
import './JumpingAnimation.scss';

const JumpAnimation: React.FC = () => {
  const leftHandRef = useRef<HTMLImageElement | null>(null);
  const rightHandRef = useRef<HTMLImageElement | null>(null);
  const targetImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Get the target position of the image to the left
    const targetX = targetImageRef.current?.getBoundingClientRect().left || 0;
    const targetY = targetImageRef.current?.getBoundingClientRect().top || 0;

    // Jump animation for both hands
    const jumpAnimation = (element: HTMLImageElement | null, delay: number) => {
      if (!element) return;
      tl.fromTo(
        element,
        { x: 0, y: 0, scale: 1 },
        {
          x: targetX - element.getBoundingClientRect().left,
          y: targetY - element.getBoundingClientRect().top - 50, // Jump up
          scale: 1.2,
          duration: 0.6,
          ease: 'power2.out',
          yoyo: true, // Jump back down
          repeat: 1,
          delay,
        },
      );
    };

    tl.to(leftHandRef.current!, {
      x: '10vw',
      y: '20vh',
      duration: 1,
      ease: 'power2.inOut',
    });

    tl.to(
      rightHandRef.current!,
      {
        x: targetX + 100, // Offset to avoid overlap
        y: targetY,
        duration: 1,
        ease: 'power2.inOut',
      },
      '<', // Sync with the left hand movement
    );

    // Animate both hands to jump onto the target image
    jumpAnimation(leftHandRef.current, 0);
    jumpAnimation(rightHandRef.current, 0.3); // Delay the right hand slightly
  }, []);

  return (
    <div>
      <Image
        ref={leftHandRef}
        src={left}
        alt="Left Hand"
        className="hand-image"
      />
      <Image
        ref={rightHandRef}
        src={right}
        alt="Right Hand"
        className="hand-image"
      />
      <Image
        ref={targetImageRef}
        src={left}
        alt="Target Image"
        className="target-image"
      />
    </div>
  );
};

export default JumpAnimation;
