import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import TeammateProfile from '../TeammateProfile/TeammateProfile';
import { USER_INFORMATION_MODAL } from '@/constants/constants';
import './UserInformationModal.scss';

interface UserInformationModalProps {
  profileName: string;
  profileEmail: string;
  profileUrl: string;
  teammates?: Array<TeammateProfile>;
  titlePresenting?: string;
  titleDescription?: string;
  eventDateTime?: string;
  closeModal: (index: number) => void;
}

interface TeammateProfile {
  imageUrl: string;
  name: string;
}

/**
 * @description A reusable component to display the user information modal
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
const UserInformationModal: React.FC<UserInformationModalProps> = ({
  profileName,
  profileEmail,
  profileUrl,
  teammates,
  titlePresenting,
  titleDescription,
  eventDateTime,
  closeModal,
}) => {
  const teammateProfiles = teammates?.map((teammate, index) => {
    return (
      <TeammateProfile
        key={index}
        imageUrl={teammate.imageUrl}
        teammateName={teammate.name}
      />
    );
  });
  return (
    <div className="relative w-full h-full">
      <div className="backdrop-blur-lg speaker-overlay w-full h-full"></div>
      <div className="userInformationModalDescription border-2 rounded-md pl-[10rem] p-8 text-wrap h-[70%] absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 border-events-color bg-speaker-background-color">
        <div className="userInformationModalClose absolute top-[-30px] right-[-35px] text-3xl text-events-color">
          <FontAwesomeIcon
            icon={faXmark}
            className="cursor-pointer"
            onClick={() => {
              closeModal(-1);
            }}
          />
        </div>
        <div className="userInformationProfileImage absolute w-[50%] h-4/5 top-1/2 -left-1/3 transform -translate-y-1/2 border-2 rounded-xl border-events-color z-10">
          <Image
            alt={profileName}
            src={profileUrl}
            fill
            objectFit="cover"
            objectPosition="top"
            className="rounded-lg"
          />
        </div>
        <div className="h-[100%] overflow-y-scroll userInformationArea">
          <div className="userInformationModalProfile">
            <h1 className="userInformationModalProfileName text-4xl font-medium pt-2 text-events-color">
              {profileName}
            </h1>
            <h2 className="userInformationModalProfileEmail py-1 text-memories-border-color">
              {profileEmail}
            </h2>
          </div>
          <div className="userInformationModalSessionWrapper">
            <div>
              <div className="userInformationModalTitlePresenting text-memories-border-color italic pt-2">
                {USER_INFORMATION_MODAL.PRESENTING_TECH_TALK_ON}
              </div>
              <h1 className="userInformationModalTitle text-events-color">
                {titlePresenting}
              </h1>
            </div>
            <div>
              {teammates?.length !== 0 && (
                <>
                  <div className="userInformationModalAlongWith text-memories-border-color italic pt-4 pb-2">
                    {USER_INFORMATION_MODAL.ALONG_WITH}
                  </div>
                  <div className="userInformationModalTeammatesWrapper flex gap-6 flex-wrap">
                    {teammateProfiles}
                  </div>
                </>
              )}
              <div className="userInformationModalAboutWrapper">
                <div className="userInformationModalAbout text-memories-border-color italic pt-4">
                  {USER_INFORMATION_MODAL.ABOUT}
                </div>
                <div className="userInformationModalAboutDesc text-events-color text-sm">
                  {titleDescription}
                </div>
              </div>
              <div>
                <div className="userInformationModalWatchMe text-memories-border-color italic pt-4">
                  {USER_INFORMATION_MODAL.WATCH_ME_ON}
                </div>
                <div className="userInformationModalEventDateTime text-events-color text-sm">
                  {eventDateTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformationModal;
