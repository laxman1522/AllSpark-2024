import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SearchProps {
  searchHandler: (search: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchHandler }) => {
  return (
    <div className="relative max-[767px]:w-full">
      <input
        type="text"
        placeholder="Search in the schedule..."
        className="w-full md:w-[35vw] placeholder:italic border-[1.5px] md:border-[3px] border-events-color rounded-md bg-schedule-tab-background text-schedule-color placeholder-schedule-color outline-0  p-1.5 md:p-3 text-sm lg:text-xl"
        onChange={(e) => searchHandler(e?.target?.value)}
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="cursor-pointer absolute right-5 top-1/2 -translate-y-1/2 text-sm md:text-xl text-schedule-color"
      />
    </div>
  );
};

export default Search;
