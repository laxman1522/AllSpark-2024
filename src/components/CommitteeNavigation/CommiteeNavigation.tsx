import { getCommitteeClassNames } from '@/utils/data-utils';
import './CommitteeNavigation.scss';
import CommitteeList from '../CommitteeList/CommitteeList';

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
  const committeButtonClassName =
    'button px-4 cursor-pointer text-[#F3BAA7] font-semibold text-xl max-[1366px]:text-base  max-[1366px]:leading-6 leading-8 text-left flex-1 w-[100%]';

  return (
    <div className="w-[22%] h-full  border-r-[1px] border-[#f9f1d5] button-group filters-button-group flex flex-col justify-between">
      <CommitteeList
        committeesList={committeeNames}
        setCommittee={setCommittee}
        buttonClassName={committeButtonClassName}
      />
    </div>
  );
};

CommitteeNavigation.displayName = 'CommitteeNavigation';
export default CommitteeNavigation;
