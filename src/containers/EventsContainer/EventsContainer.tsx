import React from 'react';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import { constructEventData, getEventDetails } from '@/utils/event-utils';
import EventCard from '@/components/EventCard/EventCard';
import EventDetailsCounter from '@/components/EventDetailsCounter/EventDetailsCounter';

const EventsContainer = () => {
  const eventData = constructEventData();
  const categoriesData = getEventDetails();
  return (
    <div className="h-screen relative flex flex-col w-[85%] mr-auto text-events-color justify-evenly">
      <div className="mt-16">
        <SectionHeader headerText="Events" />
      </div>
      <div className="event-categories w-full flex flex-row justify-around items-center ml-12">
        {categoriesData.map((category, index) => {
          return (
            <EventCard
              key={index}
              title={category.name}
              description={category.description}
            />
          );
        })}
      </div>
      <div className="events-counter flex flex-row justify-center ml-12 items-center text-center gap-x-8 font-bold">
        {eventData.map((event, index) => {
          return (
            <EventDetailsCounter
              key={index}
              count={event.count}
              title={event.title}
            />
          );
        })}
      </div>
    </div>
  );
};

EventsContainer.displayName = 'EventsContainer';
export default EventsContainer;
