import CommitteeNavigation from '../CommitteeNavigation/CommiteeNavigation';
import CommitteeSection from '../CommitteeSection/CommitteeSection';

/**
 * @description A component for committee page laptop view
 * @version 1.0.0
 * @author [Rubesh Udayakumar]
 */
const Committee = () => {
  return (
    <div className="mt-[2vh] h-[70vh] w-[85vw] max-[1500px]:w-[79vw] bg-committee-background rounded-r-lg flex">
      <CommitteeNavigation />
      <CommitteeSection />
    </div>
  );
};

Committee.displayName = 'Committee';
export default Committee;
