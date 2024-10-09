import { getCommitteeClassNames } from '@/utils/data-utils';
import './CommitteeNavigation.scss';

const CommitteeNavigation = () => {
  const committeeNames = getCommitteeClassNames();

  return (
    <div className="w-[22%] h-full border-r-[1px] border-[#f9f1d5] button-group filters-button-group flex flex-col justify-between">
      {committeeNames.map((committee, index) => (
        <button
          key={index}
          className={`button px-4 text-[#F3BAA7] font-semibold text-xl text-left flex-1 w-[100%]${index == 0 ? ' is-checked' : ''}`}
          data-filter={`.${committee.className}`}
        >
          {committee.name}
        </button>
      ))}
    </div>
  );
};

CommitteeNavigation.displayName = 'CommitteeNavigation';
export default CommitteeNavigation;
