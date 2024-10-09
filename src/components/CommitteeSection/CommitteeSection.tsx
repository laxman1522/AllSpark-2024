import { getCommitteeAndMembersNames } from '@/utils/data-utils';

const CommitteeSection = () => {
  const committeeMembersAndNames = getCommitteeAndMembersNames();

  return (
    <div className="members-grid w-[78%]">
      {committeeMembersAndNames.map((member, index) => (
        <div
          key={index}
          className={`element-item ${member.committeeName}`}
          data-category={member.committeeName}
        >
          <h3 className="name"> {member.memberName}</h3>
        </div>
      ))}
    </div>
  );
};

CommitteeSection.displayName = 'CommitteeSection';
export default CommitteeSection;
