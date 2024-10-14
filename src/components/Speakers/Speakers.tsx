'use client';
import React, { useRef, useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { getAllSpeakers } from '@/utils/data-utils';
import './Speakers.scss';
import CommitteeMemberCard from '../CommitteeMemberCard/CommitteeMemberCard';
import SpeakersModal from '../SpeakersModal/SpeakersModal';

export default function Speakers() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [speakers] = useState(getAllSpeakers());
  const [isModelOpened, setIsModelOpened] = useState<boolean>(false);

  /**
   * handles the opening and closing of the modal on click
   * @param e
   */
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (setIsModelOpened) {
      setIsModelOpened(!isModelOpened);
    }
  };

  /**
   * records the ampount of scroll to displace the model from top
   */
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef?.current?.scrollTop;
      setScrollAmount(scrollTop);
    }
  };

  return (
    <div className="flex flex-col justify-center relative ml-[2%] lg:ml-[3%] max-[1400px]:mt-[15vh] max-[712px]:mt[10vh] max-[1024px]:mt-[2vh] lg:mt-[0vh] w-[84%] p-2  max-[1024px]:m-auto  rounded border-0 h-[90%] gap-[20px]">
      <SectionHeader headerText={'Speakers'}></SectionHeader>
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className={`speakers-container relative flex justify-start items-center flex-wrap rounded-lg border-4 border-text-color w-full  px-8 py-6  gap-[20px] my-0 ${isModelOpened === true ? 'overflow-hidden' : 'overflow-scroll'}`}
      >
        {speakers.map((speaker, index) => (
          <CommitteeMemberCard
            key={index}
            memberName={speaker.name}
            imageSrc={speaker?.imageUrl}
            wrapperHeight="h-[calc(100%/2.3)]"
            wrapperWidth="w-[300px]"
            wrapperClassName="image-wrapper"
            enableOnClick={true}
            handleClick={handleClick}
          ></CommitteeMemberCard>
        ))}
        <SpeakersModal
          isModelOpened={isModelOpened}
          scrollAmount={scrollAmount}
          handleClick={handleClick}
        ></SpeakersModal>
      </div>
    </div>
  );
}
