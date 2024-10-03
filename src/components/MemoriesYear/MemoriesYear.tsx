import { ArrowUpRight } from 'lucide-react';

interface MemoriesYearProps {
  memoryYear: number;
  memoryURL: string;
}

const MemoriesYear: React.FC<MemoriesYearProps> = ({
  memoryYear,
  memoryURL,
}) => {
  return (
    <div className="flex items-center justify-center gap-3 pr-2">
      <p className="text-button-color text-2xl font-semibold">{memoryYear}</p>
      <a
        className="flex items-center justify-center p-[4px] bg-slate-100 rounded-full"
        href={memoryURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ArrowUpRight
          size={16}
          className=" text-counter-background"
        ></ArrowUpRight>
      </a>
    </div>
  );
};

export default MemoriesYear;
