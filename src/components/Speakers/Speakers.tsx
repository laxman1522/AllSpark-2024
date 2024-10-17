import React, { useRef, useState, useEffect } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Speakers.scss';
import CommitteeMemberCard from '../CommitteeMemberCard/CommitteeMemberCard';
import SpeakersModal from '../SpeakersModal/SpeakersModal';
import AOS from 'aos';

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
      imageStyles={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
        borderRadius: '6px',
      }}
      handleClick={() => handleClick(index)}
      animateOnScroll={true}
    />
  ));
};

const Speakers: React.FC<SpeakerProps> = ({ speakers }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isModelOpened, setIsModelOpened] = useState<boolean>(false);
  const [speaker, setSpeaker] = useState<Speaker | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: -100,
    });
  }, []);

  const handleClick = (index: number) => {
    if (index !== -1) {
      setSpeaker(speakers[index]);
    }
    setIsModelOpened(!isModelOpened);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      AOS.init({
        duration: 800,
        offset: 0,
      });
      AOS.refresh();
      setScrollAmount(scrollTop);
    }
  };

  const speakerProfiles = generateSpeakersCard(speakers, handleClick);

  return (
    <div className="speakers-wrapper flex flex-col justify-center relative ml-[2%] lg:ml-[3%] max-[1400px]:mt-[15vh] max-[712px]:mt[10vh] max-[1024px]:mt-[4vh] lg:mt-[4vh] w-[84%] p-2 max-[1024px]:m-auto rounded border-0 h-[90%] gap-[20px]">
      <SectionHeader headerText={'Speakers'} />
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className={`speakers-container relative flex justify-start items-center flex-wrap rounded-lg border-4 border-text-color w-full px-8 py-6 gap-[20px] my-0 ${isModelOpened ? 'overflow-hidden' : 'overflow-scroll'}`}
      >
        {speakerProfiles}
        <SpeakersModal
          isModelOpened={isModelOpened}
          scrollAmount={scrollAmount}
          handleClick={handleClick}
          speaker={speaker}
        />
      </div>
    </div>
  );
};

export default Speakers;
