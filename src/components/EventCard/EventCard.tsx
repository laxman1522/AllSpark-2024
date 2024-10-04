interface EventCardProps {
  title: string;
  description: string;
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
}: EventCardProps) => {
  return (
    <div className="event-card w-[32%] p-10 flex flex-col justify-between text-left items-center bg-header-background rounded-[25px]">
      <h1 className="event-title lg:text-[35px] font-bold pb-[20px] md:text-[25px]">
        {title}
      </h1>
      <p className="event-description lg:text-[20px] font-extralight md:text-[15px]">
        {description}
      </p>
    </div>
  );
};

export default EventCard;
