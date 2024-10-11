import CommitteeMemberCard from '../CommitteeMemberCard/CommitteeMemberCard';

interface CommitteeMemberListProps {
  committeeMembersAndNames: Array<Committee>;
  committeeMembersClassName: string;
}

interface Committee {
  committeeName: string;
  memberName: string;
}

/**
 * @description A function for generating a list of Committee Members
 * @version 1.0.0
 * @author [Hariharan Muralidharan]
 */
const generateCommitteeMembers = (
  committeeMembersAndNames: Array<Committee>,
  committeeMembersClassName: string,
) => {
  return committeeMembersAndNames?.map((member: Committee, index: number) => (
    <div
      key={index}
      className={`${member.committeeName} ${committeeMembersClassName}`}
      data-category={member.committeeName}
    >
      <CommitteeMemberCard memberName={member.memberName} />
    </div>
  ));
};

/**
 * @description An reusable component for generating a list of Committee Members for selected committee
 * @version 1.0.0
 * @author [Hariharan Muralidharan]
 */
const CommitteeMemberList: React.FC<CommitteeMemberListProps> = ({
  committeeMembersAndNames,
  committeeMembersClassName,
}) => {
  const committeMembers = generateCommitteeMembers(
    committeeMembersAndNames,
    committeeMembersClassName,
  );

  return <>{committeMembers}</>;
};

CommitteeMemberList.displayName = 'CommitteeMemberList';
export default CommitteeMemberList;
