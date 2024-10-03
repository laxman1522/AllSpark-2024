import ComingSoon from '@/components/ComingSoon/ComingSoon';
import React from 'react';
import Image from 'next/image';
import cdwlogo from '../../../public/images/cdwLogo.png';
import Memories from '@/components/Memories/Memories';

const RecapContainer = () => {
  return (
    <div className="h-screen relative">
      <div id="about-section" className="pt-[18vh]">
        {/* <SectionHeader headerText="About AllSpark'24" /> */}
        <Memories></Memories>
      </div>
    </div>
    // <div className="h-screen w-screen relative">
    //   <div
    //     id="recap-section"
    //     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]"
    //   >
    //     {/* <ComingSoon /> */}
    //     <Memories></Memories>
    //   </div>
    //   <div className="footer-logo p-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center">
    //     <Image
    //       src={cdwlogo}
    //       alt="cdw-logo"
    //       className="object-contain"
    //       width={105}
    //       height={56}
    //     />
    //   </div>
    // </div>
  );
};

RecapContainer.displayName = 'RecapContainer';
export default RecapContainer;
