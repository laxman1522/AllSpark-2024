'use client';
import React, { useRef, useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Speakers.scss';
import CommitteeMemberCard from '../CommitteeMemberCard/CommitteeMemberCard';
import SpeakersModal from '../SpeakersModal/SpeakersModal';

interface SpeakerProps {
  speakers: Speaker[];
}
interface Speaker {
  name: string;
  email: string;
  imageUrl: string;
  sessionDetails: {
    [sessionId: string]: number[];
  };
}

const generateSpeakersCard = (
  speakers: Speaker[],
  handleClick: (index: number) => void,
) => {
  return speakers?.map((speaker, index) => (
    <CommitteeMemberCard
      key={index}
      memberName={speaker.name}
      imageSrc={speaker?.imageUrl}
      wrapperHeight="h-[calc(100%/2.3)]"
      wrapperWidth="w-[300px]"
      wrapperClassName="image-wrapper"
      enableOnClick={true}
      handleClick={() => handleClick(index)}
    ></CommitteeMemberCard>
  ));
};

const Speakers: React.FC<SpeakerProps> = ({ speakers }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isModelOpened, setIsModelOpened] = useState<boolean>(false);
  const [speaker, setSpeaker] = useState<Speaker | null>(null);

  /**
   * handles the opening and closing of the modal on click
   * @param e
   */
  const handleClick = (index: number) => {
    if (index != -1) {
      setSpeaker(speakers[index]);
    }
    setIsModelOpened(!isModelOpened);
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

  const speakerProfiles = generateSpeakersCard(speakers, handleClick);

  return (
    <div className="speakers-wrapper flex flex-col justify-center relative ml-[2%] lg:ml-[3%] max-[1400px]:mt-[15vh] max-[712px]:mt[10vh] max-[1024px]:mt-[2vh] lg:mt-[0vh] w-[84%] p-2  max-[1024px]:m-auto  rounded border-0 h-[90%] gap-[20px]">
      <SectionHeader headerText={'Speakers'}></SectionHeader>
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className={`speakers-container relative flex justify-start items-center flex-wrap rounded-lg border-4 border-text-color w-full  px-8 py-6  gap-[20px] my-0 ${isModelOpened === true ? 'overflow-hidden' : 'overflow-scroll'}`}
      >
        {speakerProfiles}
        <SpeakersModal
          isModelOpened={isModelOpened}
          scrollAmount={scrollAmount}
          handleClick={handleClick}
          speaker={speaker}
        ></SpeakersModal>
      </div>
    </div>
  );
};

export default Speakers;
