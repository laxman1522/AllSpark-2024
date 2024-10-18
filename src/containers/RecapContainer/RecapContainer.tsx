import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Memories from '@/components/Memories/Memories';
import MemoriesMobile from '@/components/MemoriesMobile/MemoriesMobile';
import { MEMORIES } from '@/constants/constants';
import { useWindowSize } from '@/contexts/WindowSizeContext';

const RecapContainer = () => {
  const { windowWidth } = useWindowSize();
  return (
    <div className="h-screen relative">
      <div id="recap-section" className="w-full">
        {windowWidth < 1024 ? (
          <div className="mt-36 w-full">
            <SectionHeader headerText={MEMORIES.memories} />
            <MemoriesMobile />
          </div>
        ) : (
          <div className="pt-[18vh]">
            <Memories />
          </div>
        )}
      </div>
    </div>
  );
};

RecapContainer.displayName = 'RecapContainer';
export default RecapContainer;
