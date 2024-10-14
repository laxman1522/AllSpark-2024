import CommitteeMemberList from '../CommitteMemberList/CommitteeMemberList';
import './CommitteeSectionMobile.scss';

interface CommitteeSectionMobileProps {
  committeeAndMembersList: Array<Committee>;
  committee: string;
}

interface Committee {
  committeeName: string;
  memberName: string;
}

/**
 * @description A component for committee section mobile view with a list of members
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
const CommitteeSectionMobile: React.FC<CommitteeSectionMobileProps> = ({
  committeeAndMembersList,
  committee,
}) => {
  const committeeMembersClassName =
    'element-item w-[50%] m-auto mt-4 overflow-y-scroll pb-4 committee-section-mobile';

  return (
    <div className="rounded-lg overflow-hidden border w-[80vw] h-[60vh] m-auto mt-4 bg-events-counter-text-color border-memories-border-color">
      <div className="px-8 max-[767px]:h-[5vh] max-[767px]:mt-[2vh] flex max-[767px]:justify-center items-center font-bold text-[35px] max-[767px]:text-[20px] md:text-[28px] text-[#f3baa7] max-[767px]:mb-[1vh] gap-5 max-[767px]:gap-2 committee-section-header">
        <span className="h-[0.5vh] bg-memories-border-color w-[4.5vw] max-[767px]:w-[25vw] max-[767px]:h-[4px]"></span>
        <h3 className="whitespace-wrap text-[36px] max-[580px]:text-[16px] text-center text-events-color">
          {committee}
        </h3>
        <span className="h-[0.5vh] bg-memories-border-color w-[15vw] max-[767px]:w-[25vw] max-[767px]:h-[4px]"></span>
      </div>
      <div className="members-grid h-full">
        <CommitteeMemberList
          committeeMembersAndNames={committeeAndMembersList}
          committeeMembersClassName={committeeMembersClassName}
        />
      </div>
    </div>
  );
};

export default CommitteeSectionMobile;
