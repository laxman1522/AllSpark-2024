import React, { useState } from 'react';
import UserInformationModal from '@/components/UserInformationModal/UserInformationModal';

/**
 * @description A container for speaker information
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
const SpeakerContainer = () => {
  // Object format for User Information Modal
  const UserInformationModalData = {
    profileName: 'Sharvesh Sathish Kumar',
    profileEmail: 'Sharvesh.Sathish.Kumar@cdw.com',
    profileUrl: '/images/Sharvesh Sathish Kumar.jpeg',
    teammates: [
      {
        teammateName: 'Sharvesh Sathish Kumar',
        imageUrl: '/images/Sharvesh Sathish Kumar.jpeg',
      },
      {
        teammateName: 'Sharvesh Sathish Kumar',
        imageUrl: '/images/Sharvesh Sathish Kumar.jpeg',
      },
      {
        teammateName: 'Sharvesh Sathish Kumar',
        imageUrl: '/images/Sharvesh Sathish Kumar.jpeg',
      },
    ],
    titlePresenting: 'random title presentation',
    titleDescription: 'some random data abbout the title presentation',
    eventDateTime: 'October 31st at 11:11 AM.',
  };
  const closeUserInformationModal = () => {
    setShowModal(false);
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="h-screen relative">
      <div id="speaker-section" className="ml-[4vw] pt-[150px]">
        <div className="speaker-container mt-[2vh] h-[70vh] w-[85vw] max-[1500px]:w-[79vw] bg-committee-background rounded-lg flex border-4 border-memories-border-color overflow-y-scroll">
          {!showModal && (
            <img
              className="w-full h-full text-center cursor-pointer"
              onClick={() => setShowModal(true)}
              src="/images/sample-image.jpg"
            ></img>
          )}
          {showModal && (
            <UserInformationModal
              profileName={UserInformationModalData.profileName}
              profileEmail={UserInformationModalData.profileEmail}
              profileUrl={UserInformationModalData.profileUrl}
              teammates={UserInformationModalData.teammates}
              titlePresenting={UserInformationModalData.titlePresenting}
              titleDescription={UserInformationModalData.titleDescription}
              eventDateTime={UserInformationModalData.eventDateTime}
              closeUserInformationModal={closeUserInformationModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

SpeakerContainer.displayName = 'SpeakerContainer';
export default SpeakerContainer;
