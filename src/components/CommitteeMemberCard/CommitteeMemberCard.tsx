import Image from 'next/image';
import './CommitteeMemberCard.scss';

interface CommitteeMemberCardProps {
  memberName: string;
  imageSrc: string;
  wrapperWidth: string;
  wrapperHeight: string;
  wrapperClassName: string;
}

/**
 * @description A reusable component which displays the picture of the person with name at bottom
 * @version 1.0.0
 * @author [Rubesh Udayakumar]
 */
const CommitteeMemberCard: React.FC<CommitteeMemberCardProps> = ({
  memberName,
  imageSrc,
  wrapperWidth,
  wrapperHeight,
  wrapperClassName,
}) => {
  return (
    <div
      className={`${wrapperHeight} ${wrapperWidth} ${wrapperClassName} rounded-[10px] border-[3px] border-button-color relative m-5 max-[767px]:my-0 max-[767px]:mt-4 max-[767px]:mx-3`}
    >
      <Image
        src={imageSrc || ''}
        alt={memberName || ''}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '6px',
        }}
        objectFit="cover"
        loading={'lazy'}
      />
      <div className="absolute bottom-0 w-full flex items-center p-1 justify-center flex-col gap-1 bg-committee-background bg-no-repeat bg-opacity-10 rounded-b-[6px]">
        <p className="text-[1rem] max-[767px]:text-[12px] max-[1024px]:text-[0.6rem]  text-center text-counter-color p-1">
          {memberName}
        </p>
      </div>
    </div>
  );
};

CommitteeMemberCard.displayName = 'CommitteeMemberCard';
export default CommitteeMemberCard;
