import { useEffect } from 'react';
import CommitteeNavigation from '../CommitteeNavigation/CommiteeNavigation';
import CommitteeSection from '../CommitteeSection/CommitteeSection';
import { useWindowSize } from '@/contexts/WindowSizeContext';
import { useState } from 'react';

/**
 * @description A component for committee page laptop view
 * @version 1.0.0
 * @author [Rubesh Udayakumar]
 */
const Committee = () => {
  const windowSize = useWindowSize();

  const [committee, setCommittee] = useState('');

  useEffect(() => {
    const firstButtonNav = document.querySelector('.button');
    if (firstButtonNav) {
      const event = new MouseEvent('click', {
        view: window,
      });
      firstButtonNav.dispatchEvent(event);
    }
  }, [windowSize]);

  const setCommitteeName = (committee) => {
    setCommittee(committee);
  };

  return (
    <div className="mt-[2vh] h-[70vh] w-[85vw] max-[1500px]:w-[79vw] bg-committee-background rounded-r-lg flex">
      <CommitteeNavigation setCommittee={setCommitteeName} />
      <CommitteeSection committee={committee} />
    </div>
  );
};

Committee.displayName = 'Committee';
export default Committee;
