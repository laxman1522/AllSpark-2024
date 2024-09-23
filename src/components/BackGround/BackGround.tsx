'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min.js';
import * as THREE from 'three';
import { BACKGROUND_VANTA_SETTINGS } from '@/constants/constants';
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
          mouseControls: BACKGROUND_VANTA_SETTINGS.MOUSECONTROLS,
          touchControls: BACKGROUND_VANTA_SETTINGS.TOUCHCONTROLS,
          gyroControls: BACKGROUND_VANTA_SETTINGS.GYROCONTROLS,
          minHeight: BACKGROUND_VANTA_SETTINGS.MINHEIGHT,
          minWidth: BACKGROUND_VANTA_SETTINGS.MINWIDTH,
          scale: BACKGROUND_VANTA_SETTINGS.SCALE,
          scaleMobile: BACKGROUND_VANTA_SETTINGS.SCALEMOBILE,
          color: BACKGROUND_VANTA_SETTINGS.COLOR,
          shininess: BACKGROUND_VANTA_SETTINGS.SHININESS,
          waveHeight: BACKGROUND_VANTA_SETTINGS.WAVEHEIGHT,
          waveSpeed: BACKGROUND_VANTA_SETTINGS.WAVESPEED,
          zoom: BACKGROUND_VANTA_SETTINGS.ZOOM,
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
