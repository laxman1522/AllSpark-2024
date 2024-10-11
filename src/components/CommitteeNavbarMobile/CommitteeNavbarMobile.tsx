import './CommitteeNavBarMobile.scss';

interface CommitteeNavbarMobileProps {
  setCommittee: (name: string) => void;
  committeesList: any;
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
  return (
    <div className="items-center bg-header-background justify-center w-10/12	m-auto rounded py-2 px-3 mt-[-25px] backdrop-blur">
      <div className="m-auto flex gap-4 overflow-scroll snap-mandatory snap-x button-group filters-button-group">
        {committeesList.map((committee: any, index: number) => (
          <button
            key={index}
            className={`button border text-[#F3BAA7] rounded-full p-1 bg-events-counter-text-color min-w-36 snap-center flex justify-center items-center text-center text-xs ${index == 0 ? 'is-checked' : ''}`}
            data-filter={`.${committee.className}`}
            onClick={() => setCommittee(committee.name)}
          >
            {committee.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CommitteeNavbarMobile;
