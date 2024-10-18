import CommitteeNavigation from '../CommitteeNavigation/CommiteeNavigation';
import CommitteeSection from '../CommitteeSection/CommitteeSection';
import { useState } from 'react';
import './Committee.scss';

/**
 * @description A component for committee page laptop view
 * @version 1.0.0
 * @author [Rubesh Udayakumar]
 */
const Committee = () => {
  const [committee, setCommittee] = useState('Core Organisers');

  const setCommitteeName = (committee: string) => {
    setCommittee(committee);
  };

  return (
    <div className="committee-wrapper mt-[2vh] h-[70vh] w-[85vw] max-[1500px]:w-[79vw] bg-committee-background rounded-r-lg flex">
      <CommitteeNavigation setCommittee={setCommitteeName} />
      <CommitteeSection committee={committee} />
    </div>
  );
};

Committee.displayName = 'Committee';
export default Committee;
