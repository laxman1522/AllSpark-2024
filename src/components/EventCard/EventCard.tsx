import React from 'react';

interface EventCardProps {
  title: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description }) => {
  return (
    <div className="event-card w-[32%] p-10 flex flex-col justify-between text-left items-center bg-header-background rounded-[25px]">
      <h1 className="event-title text-[35px] font-bold pb-[20px]">{title}</h1>
      <p className="event-description text-[20px] font-extralight">
        {description}
      </p>
    </div>
  );
};

export default EventCard;
