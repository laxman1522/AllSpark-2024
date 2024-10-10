import {
  getCommitteeAndMembersNames,
  getCommitteeClassNames,
} from '@/utils/data-utils';
import CommitteeNavbarMobile from '../CommitteeNavbarMobile/CommitteeNavbarMobile';
import CommitteeSectionMobile from '../CommitteeSectionMobile/CommitteSectionMobile';
import { useState } from 'react';
import './CommitteeMobile.scss';

/**
 * @description A component for committee mobile view
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
const CommitteeMobile = () => {
  const committeesList = getCommitteeClassNames();
  const committeeAndMembersList = getCommitteeAndMembersNames();
  const [committee, setCommittee] = useState('Core Organisers');
  return (
    <div className="committee-mobile">
      <CommitteeNavbarMobile
        committeesList={committeesList}
        setCommittee={setCommittee}
      />
      <CommitteeSectionMobile
        committeeAndMembersList={committeeAndMembersList}
        committee={committee}
      />
    </div>
  );
};

export default CommitteeMobile;
