import { useWindowSize } from '@/contexts/WindowSizeContext';
import Committee from '@/components/Committee/Committee';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import { COMMITTEE } from '@/constants/constants';
import CommitteeMobile from '@/components/CommitteeMobile/CommitteeMobile';
import './CommitteeContainer.scss';

const CommitteeContainer = () => {
  const { windowWidth } = useWindowSize();

  return (
    <div className="h-screen relative">
      <div id="committee-section">
        {windowWidth < 1024 ? (
          <div className="mt-28 w-full h-full inline-block committee-container-mobile">
            <SectionHeader headerText={COMMITTEE.committee} />
            <CommitteeMobile />
          </div>
        ) : (
          <div className="ml-[4vw] pt-[150px]">
            <SectionHeader headerText="Committee" />
            <Committee />
          </div>
        )}
      </div>
    </div>
  );
};

CommitteeContainer.displayName = 'CommitteeContainer';
export default CommitteeContainer;
