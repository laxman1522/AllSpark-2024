interface CommitteeListProps {
  committeesList: Array<Committee>;
  setCommittee: (name: string) => void;
  buttonClassName: string;
}

interface Committee {
  name: string;
  className: string;
}

/**
 * @description A function for generating a list of Committee buttons
 * @version 1.0.0
 * @author [Hariharan Muralidharan]
 */
const generateCommittees = (
  committeesList: any,
  setCommittee: any,
  buttonClassName: string,
) => {
  return committeesList?.map((committee: Committee, index: number) => (
    <button
      key={index}
      className={`${buttonClassName} ${index == 0 ? 'is-checked' : ''}`}
      data-filter={`.${committee.className}`}
      onClick={() => setCommittee(committee.name)}
    >
      {committee.name}
    </button>
  ));
};

/**
 * @description An reusable component for generating a list of Committee Navigation buttons
 * @version 1.0.0
 * @author [Hariharan Muralidharan]
 */
const CommitteeList: React.FC<CommitteeListProps> = ({
  committeesList,
  setCommittee,
  buttonClassName,
}) => {
  const committee = generateCommittees(
    committeesList,
    setCommittee,
    buttonClassName,
  );
  return <>{committee}</>;
};

CommitteeList.displayName = 'CommitteeList';
export default CommitteeList;
