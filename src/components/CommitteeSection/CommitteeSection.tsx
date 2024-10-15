import { getCommitteeAndMembersNames } from '@/utils/data-utils';
import CommitteeMemberList from '../CommitteMemberList/CommitteeMemberList';

interface CommitteeSectionProps {
  committee: string;
}

/**
 * @description A reusable component which displays the list of committee persons
 * @version 1.0.0
 * @author [Rubesh Udayakumar]
 */
const CommitteeSection: React.FC<CommitteeSectionProps> = ({ committee }) => {
  const committeeMembersAndNames = getCommitteeAndMembersNames();
  const committeeMembersClassName = 'element-item absolute left-1/2';

  return (
    <div className="relative w-[78%] h-[100%] flex flex-col gap-4 px-[60px] pt-[50px]">
      <div className="m-auto section-header-wrapper px-12 flex items-center font-bold text-[35px] md:text-[28px] text-[#f3baa7] gap-5">
        <span className="header-line h-[0.4vh] bg-[#F3BAA7] w-[4.5vw] max-[767px]:w-[20vw] max-[767px]:h-[4px]"></span>
        <h3 className="whitespace-nowrap text-[24px] max-[1180px]:text-[18px] max-[1180px]:font-medium text-button-color">
          {committee}
        </h3>
        <span className="header-line h-[0.4vh] bg-[#F3BAA7] w-[4.5vw] max-[767px]:w-[20vw] max-[767px]:h-[4px]"></span>
      </div>
      <div className="members-grid w-[100%]">
        <CommitteeMemberList
          committeeMembersAndNames={committeeMembersAndNames}
          committeeMembersClassName={committeeMembersClassName}
          wrapperWidth={'w-[12vw]'}
          wrapperHeight={'h-[14vw]'}
          wrapperClassName={'member-card'}
          imageStyles={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '',
            borderRadius: '6px',
          }}
        />
      </div>
    </div>
  );
};

CommitteeSection.displayName = 'CommitteeSection';
export default CommitteeSection;
