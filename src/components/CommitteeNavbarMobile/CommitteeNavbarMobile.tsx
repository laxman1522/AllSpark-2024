import './CommitteeNavBarMobile.scss';
import CommitteeList from '../CommitteeList/CommitteeList';

interface CommitteeNavbarMobileProps {
  setCommittee: (name: string) => void;
  committeesList: Array<Committee>;
}
interface Committee {
  name: string;
  className: string;
}

/**
 * @description A component for committee navbar mobile view
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
const CommitteeNavbarMobile: React.FC<CommitteeNavbarMobileProps> = ({
  committeesList,
  setCommittee,
}) => {
  const committeButtonClassName =
    'button border text-counter-color rounded-full p-1 bg-events-counter-text-color min-w-36 snap-center flex justify-center items-center text-center text-xs';
  return (
    <div className="items-center bg-header-background justify-center w-10/12	m-auto rounded py-2 px-3 mt-[-25px] backdrop-blur">
      <div className="m-auto flex gap-4 overflow-scroll snap-mandatory snap-x button-group filters-button-group">
        <CommitteeList
          committeesList={committeesList}
          setCommittee={setCommittee}
          buttonClassName={committeButtonClassName}
        />
      </div>
    </div>
  );
};

export default CommitteeNavbarMobile;
