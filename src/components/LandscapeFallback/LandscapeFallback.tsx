import { MOBILE_LANDSCAPE_MESSAGE } from '@/constants/constants';
import React from 'react';

/**
 * @description An component which acts a fallback for landscape view for mobile
 * @version 1.0.0
 * @author [Praneash Krishnamurthi]
 */
export default function LandscapeFallback() {
  return (
    <p className="text-label-color text-center  md:text-[29px] text-[16px] min-[410px]:text-[18px]">
      {MOBILE_LANDSCAPE_MESSAGE}
    </p>
  );
}
