import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface SearchProps {
  searchHandler: (search: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchHandler }) => {
  const [search, setSearch] = useState<string>('');

  return (
    <div className="relative max-[767px]:w-full">
      <input
        type="text"
        placeholder="Search in the schedule..."
        value={search}
        className="w-full lg:w-[30vw] placeholder:italic border-[1.5px] lg:border-[3px] border-events-color rounded-md bg-schedule-tab-background text-schedule-color placeholder-schedule-color outline-0  p-1.5 lg:p-3 text-sm lg:text-xl"
        onKeyDown={(e) => {
          e.key === 'Enter' && searchHandler(search);
        }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="cursor-pointer absolute right-5 top-1/2 -translate-y-1/2 text-sm lg:text-xl text-schedule-color"
        onClick={() => searchHandler(search)}
      />
    </div>
  );
};

export default Search;
