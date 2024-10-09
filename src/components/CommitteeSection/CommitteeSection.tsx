import { getCommitteeAndMembersNames } from '@/utils/data-utils';

interface CommitteeSectionProps {
  committee: string;
}

const CommitteeSection: React.FC<CommitteeSectionProps> = ({ committee }) => {
  const committeeMembersAndNames = getCommitteeAndMembersNames();

  return (
    <div className="members-grid w-[78%] h-[100%] flex gap-4 px-[60px] pt-[100px]">
      <div className="m-auto relative top-[-35vh] section-header-wrapper px-12 flex items-center font-bold text-[35px] md:text-[28px] text-[#f3baa7] gap-5">
        <span className="header-line h-[0.4vh] bg-[#F3BAA7] w-[4.5vw] max-[767px]:w-[20vw] max-[767px]:h-[4px]"></span>
        <h3 className="whitespace-nowrap text-[24px] text-button-color">
          {committee}
        </h3>
        <span className="header-line h-[0.4vh] bg-[#F3BAA7] w-[4.5vw] max-[767px]:w-[20vw] max-[767px]:h-[4px]"></span>
      </div>
      {committeeMembersAndNames.map((member, index) => (
        <div
          key={index}
          className={`element-item ${member.committeeName}`}
          data-category={member.committeeName}
        >
          <div className="h-full rounded-[10px] border-[3px] border-button-color relative m-5">
            <img
              src={`/images/committee/${member.memberName}.jpeg` || ''}
              alt={member.memberName || ''}
              className="rounded-[6px] w-[12vw] h-full"
            />
            <div className="absolute bottom-0 w-full flex items-center p-1 justify-center flex-col gap-1 bg-committee-background bg-no-repeat bg-opacity-10 rounded-b-[6px]">
              <p className="text-[20px] text-center text-[#F3BAA7]">
                {member.memberName}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

CommitteeSection.displayName = 'CommitteeSection';
export default CommitteeSection;
