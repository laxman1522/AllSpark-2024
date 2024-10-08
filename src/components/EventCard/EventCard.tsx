import './EventCard.scss';
interface EventCardProps {
  title: string;
  description: string;
  windowWidth: boolean;
}

/**
 * EventCard component displays the title and description of an event category.
 *
 * @component
 * @param {EventCardProps} props - The properties for the EventCard component.
 * @param {string} props.title - The title of the event category.
 * @param {string} props.description - A brief description of the event category.
 *
 * @author [Hariharan Muralidharan]
 * @version 1.0.0
 */
const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  windowWidth,
}: EventCardProps) => {
  return (
    <div
      className={`event-card ${!windowWidth ? 'w-[32%] rounded-[25px]' : 'w-[100%] rounded-[20px]'} p-10 flex flex-col justify-between text-left items-center bg-events-background-color `}
    >
      <h1 className="event-title lg:text-[35px] font-extrabold ">{title}</h1>
      <p className="event-description lg:text-[20px] font-light ">
        {description}
      </p>
    </div>
  );
};

export default EventCard;
