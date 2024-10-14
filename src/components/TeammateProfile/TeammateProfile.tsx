import Image from 'next/image';

interface TeammateProfileProps {
  imageUrl: string;
  teammateName: string;
}

/**
 * @description A reusable component to display the teammates profile in user information modal
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
const TeammateProfile: React.FC<TeammateProfileProps> = ({
  imageUrl,
  teammateName,
}) => {
  return (
    <div className="userInformationModalTeammates flex items-center">
      <div className="userInformationModalTeammatesProfileImage relative w-9 h-9">
        <Image
          alt="profile-image"
          src={imageUrl}
          fill
          objectFit="cover"
          objectPosition="top"
          className="rounded-full"
        />
      </div>
      <div className="userInformationModalTeammatesProfileName pl-2 text-sm text-events-color">
        {teammateName}
      </div>
    </div>
  );
};
export default TeammateProfile;
