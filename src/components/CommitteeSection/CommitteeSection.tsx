import { getCommitteeAndMembersNames } from '@/utils/data-utils';

interface CommitteeSectionProps {
  committee: string;
}

const CommitteeSection: React.FC<CommitteeSectionProps> = ({ committee }) => {
  const committeeMembersAndNames = getCommitteeAndMembersNames();

  return (
    <div className="members-grid w-[78%] h-[100%] flex gap-4 px-[60px] pt-[100px]">
      <div className="relative top-[-35vh] section-header-wrapper px-12 flex items-center font-bold text-[35px] md:text-[28px] text-[#f3baa7] gap-5">
        <span className="header-line h-[0.5vh] bg-[#f9f1d5] w-[4.5vw] max-[767px]:w-[20vw] max-[767px]:h-[4px]"></span>
        <h3 className="whitespace-nowrap text-[36px] max-[580px]:text-[24px]">
          {committee}
        </h3>
        <span className="header-line h-[0.5vh] bg-[#f9f1d5] w-[4.5vw] max-[767px]:w-[20vw] max-[767px]:h-[4px]"></span>
      </div>
      {committeeMembersAndNames.map((member, index) => (
        <div
          key={index}
          className={`element-item ${member.committeeName}`}
          data-category={member.committeeName}
        >
          <div className="h-full rounded-[6px] border-[2px] border-button-color relative m-5">
            <img
              src={`/images/committee/${member.memberName}.jpeg` || ''}
              alt={member.memberName || ''}
              className="rounded-[6px] w-[12vw] h-full"
            />
            <div className="absolute bottom-0 w-full flex items-center p-1 justify-center flex-col gap-1 bg-committee-background bg-no-repeat bg-opacity-10 rounded-[6px]">
              <p className="text-[10px] font-semibold uppercase text-center text-button-color">
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
