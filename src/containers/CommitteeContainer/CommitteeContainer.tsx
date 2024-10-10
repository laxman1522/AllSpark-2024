import { useWindowSize } from '@/contexts/WindowSizeContext';
import Committee from '@/components/Committee/Committee';
import SectionHeader from '@/components/SectionHeader/SectionHeader';

const CommitteeContainer = () => {
  const { windowWidth } = useWindowSize();

  return (
    <div className="h-screen relative">
      <div id="committee-section">
        {windowWidth < 1024 ? (
          <div> MEMORIES MOBILE </div>
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
