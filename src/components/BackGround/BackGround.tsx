'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min.js';
import * as THREE from 'three';
import { BACKGROUND_VANTA_OPTIONS } from '@/constants/constants';
interface BackGroundProps {
  children: ReactNode;
}
export default function BackGround({ children }: BackGroundProps) {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE,
          ...BACKGROUND_VANTA_OPTIONS,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef} className="h-screen">
      {children}
    </div>
  );
}
