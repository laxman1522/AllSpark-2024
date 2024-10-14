import React from 'react';
import UserInformationModal from '../UserInformationModal/UserInformationModal';

interface Speaker {
  name: string;
  email: string;
  imageUrl: string;
  sessionDetails: {
    [sessionId: string]: number[];
  };
  eventDateTime?: string;
  title?: string;
  description?: string;
  teammates?: {
    name: string;
    imageUrl: string;
  }[];
}

interface SpeakersModalProps {
  isModelOpened: boolean;
  scrollAmount: number;
  handleClick: (index: number) => void;
  speaker: Speaker | null;
}

export default function SpeakersModal({
  isModelOpened = false,
  scrollAmount = 0,
  handleClick,
  speaker,
}: SpeakersModalProps) {
  return (
    <div
      className={`${isModelOpened === true ? 'open' : 'out'} absolute  left-[0] flex flex-col w-full h-[100%] z-10`}
      style={{
        top: `${scrollAmount}px`,
      }}
    >
      {speaker && (
        <UserInformationModal
          profileName={speaker.name}
          profileEmail={speaker.email}
          profileUrl={speaker.imageUrl}
          teammates={speaker.teammates}
          titlePresenting={speaker.title}
          titleDescription={speaker.description}
          eventDateTime={speaker.eventDateTime}
          closeModal={handleClick}
        />
      )}
    </div>
  );
}
