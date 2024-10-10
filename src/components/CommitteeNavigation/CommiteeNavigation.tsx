import { getCommitteeClassNames } from '@/utils/data-utils';
import './CommitteeNavigation.scss';

interface CommitteeNavigationProps {
  setCommittee: (name: string) => void;
}

/**
 * @description A reusable component which is capable of rendering a navigation component
 * @version 1.0.0
 * @author [Rubesh Udayakumar]
 */
const CommitteeNavigation: React.FC<CommitteeNavigationProps> = ({
  setCommittee,
}) => {
  const committeeNames = getCommitteeClassNames();

  return (
    <div className="w-[22%] h-full  border-r-[1px] border-[#f9f1d5] button-group filters-button-group flex flex-col justify-between">
      {committeeNames.map((committee, index) => (
        <button
          key={index}
          className={`button px-4 text-[#F3BAA7] font-semibold text-xl max-[1366px]:text-base  max-[1366px]:leading-6 leading-8 text-left flex-1 w-[100%]${index == 0 ? ' is-checked' : ''}`}
          data-filter={`.${committee.className}`}
          onClick={() => setCommittee(committee.name)}
        >
          {committee.name}
        </button>
      ))}
    </div>
  );
};

CommitteeNavigation.displayName = 'CommitteeNavigation';
export default CommitteeNavigation;
