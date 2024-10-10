import './CommitteeMemberCard.scss';

interface CommitteeMemberCardProps {
  memberName: string;
}

/**
 * @description A reusable component which displays the picture of the person with name at bottom
 * @version 1.0.0
 * @author [Rubesh Udayakumar]
 */
const CommitteeMemberCard: React.FC<CommitteeMemberCardProps> = ({
  memberName,
}) => {
  return (
    <div className="h-full member-card rounded-[10px] border-[3px] border-button-color relative m-5 max-[1024px]:m-[20px] max-[1366px]:m-[30px]">
      <img
        src={`/images/committee/${memberName}.jpeg` || ''}
        alt={memberName || ''}
        className="rounded-[6px] w-[12vw] h-full"
      />
      <div className="absolute bottom-0 w-full flex items-center p-1 justify-center flex-col gap-1 bg-committee-background bg-no-repeat bg-opacity-10 rounded-b-[6px]">
        <p className="text-[1rem] max-[1024px]:text-[0.6rem] max-[1024px]:text-[0.8rem] text-center text-[#F3BAA7] p-1">
          {memberName}
        </p>
      </div>
    </div>
  );
};

CommitteeMemberCard.displayName = 'CommitteeMemberCard';
export default CommitteeMemberCard;
