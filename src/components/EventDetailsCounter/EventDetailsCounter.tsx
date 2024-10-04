import CountUp from 'react-countup';
import { Figtree } from 'next/font/google';

interface EventDetailsCounterProps {
  count: number;
  title: string;
}

const figTree = Figtree({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

/**
 * EventDetailsCounter component displays a counting animation for event statistics.
 *
 * @component
 * @param {EventDetailsCounterProps} props - The properties for the EventDetailsCounter component.
 * @param {number} props.count - The count value to be displayed.
 * @param {string} props.title - The title of the statistic.
 *
 * @author [Hariharan Muralidharan]
 * @version 1.0.0
 */
const EventDetailsCounter: React.FC<EventDetailsCounterProps> = ({
  count,
  title,
}: EventDetailsCounterProps) => {
  return (
    <div
      className={`events-counter-card flex flex-col justify-center items-center gap-2 ${figTree.className}`}
    >
      <div className="events-counter-count flex lg:w-44 lg:text-[54px] text-events-counter-text-color bg-events-color rounded-[20px] justify-center items-center font-black md:w-28 md:text-[36px]">
        <CountUp start={0} end={count} duration={3} />
        {title === 'Techies' && <span>+</span>}
      </div>
      <h1 className="events-counter-title lg:text-[25px] font-semibold md:text-[20px]">
        {title}
      </h1>
    </div>
  );
};

export default EventDetailsCounter;
