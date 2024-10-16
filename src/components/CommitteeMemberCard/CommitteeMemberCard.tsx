'use client';
import './CommitteeMemberCard.scss';
import Image from 'next/image';
interface CommitteeMemberCardProps {
  memberName: string;
  imageSrc: string;
  wrapperWidth: string;
  wrapperHeight: string;
  wrapperClassName: string;
  enableOnClick?: boolean;
  imageStyles: object;
  handleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
import AOS from 'aos';

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
  enableOnClick = false,
  imageStyles,
  handleClick,
}) => {
  return (
    <div
      className={`${wrapperHeight} ${wrapperWidth} ${wrapperClassName} user-card rounded-[6px] overflow-hidden relative m-5 max-[767px]:my-0 max-[767px]:mt-4 max-[767px]:mx-3`}
      onClick={enableOnClick ? handleClick : (): void => {}}
      data-aos="reveal-right"
    >
      <Image
        className="border-[3px] border-button-color rounded-t-[6px]"
        src={imageSrc || ''}
        width={0}
        height={0}
        sizes="100vw"
        style={imageStyles}
        alt={memberName || ''}
        onLoad={() => AOS.refresh()}
      />
      <div className="absolute bottom-0 w-full flex items-center p-1 justify-center flex-col gap-1 bg-committee-background bg-no-repeat bg-opacity-10 rounded-b-[6px] border-[3px] border-button-color border-t-0">
        <p className="text-[1rem] max-[767px]:text-[12px] max-[1024px]:text-[0.6rem]  text-center text-counter-color p-1">
          {memberName}
        </p>
      </div>
    </div>
  );
};

CommitteeMemberCard.displayName = 'CommitteeMemberCard';
export default CommitteeMemberCard;
