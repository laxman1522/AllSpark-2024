import CommitteeMemberCard from '../CommitteeMemberCard/CommitteeMemberCard';

interface CommitteeMemberListProps {
  committeeMembersAndNames: Array<Committee>;
  committeeMembersClassName: string;
  wrapperWidth: string;
  wrapperHeight: string;
  wrapperClassName: string;
  imageStyles: object;
}

interface Committee {
  committeeName: string;
  memberName: string;
  imageSrc: string;
}

/**
 * @description A function for generating a list of Committee Members
 * @version 1.0.0
 * @author [Hariharan Muralidharan]
 */
const generateCommitteeMembers = (
  committeeMembersAndNames: Array<Committee>,
  committeeMembersClassName: string,
  wrapperClassName: string,
  wrapperHeight: string,
  wrapperWidth: string,
  imageStyles: object,
) => {
  return committeeMembersAndNames?.map((member: Committee, index: number) => (
    <div
      key={index}
      className={`${member.committeeName} ${committeeMembersClassName}`}
      data-category={member.committeeName}
    >
      <CommitteeMemberCard
        memberName={member.memberName}
        imageSrc={member.imageSrc}
        wrapperWidth={wrapperWidth}
        wrapperHeight={wrapperHeight}
        wrapperClassName={wrapperClassName}
        imageStyles={imageStyles}
      />
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
  wrapperWidth,
  wrapperHeight,
  wrapperClassName,
  imageStyles,
}) => {
  const committeMembers = generateCommitteeMembers(
    committeeMembersAndNames,
    committeeMembersClassName,
    wrapperClassName,
    wrapperHeight,
    wrapperWidth,
    imageStyles,
  );

  return <>{committeMembers}</>;
};

CommitteeMemberList.displayName = 'CommitteeMemberList';
export default CommitteeMemberList;
