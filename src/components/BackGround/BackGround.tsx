'use client';
import { ReactNode, useEffect, useState } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min.js';
import * as THREE from 'three';
import { BACKGROUND_VANTA_OPTIONS } from '@/constants/constants';
interface BackGroundProps {
  children: ReactNode;
}
export default function BackGround({ children }: BackGroundProps) {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: '#nav-wrapper',
          THREE,
          ...BACKGROUND_VANTA_OPTIONS,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div className="h-screen w-screen ">{children}</div>;
}
