import React from 'react';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import { constructEventData, getEventDetails } from '@/utils/event-utils';
import EventCard from '@/components/EventCard/EventCard';
import EventDetailsCounter from '@/components/EventDetailsCounter/EventDetailsCounter';

const EventsContainer = () => {
  const eventData = constructEventData();
  const categoriesData = getEventDetails();
  return (
    <div className="h-screen relative flex flex-col justify-around">
      <div className="mt-[21vh]">
        <SectionHeader headerText="Events" />
      </div>
      <div className="flex flex-col w-[85%] mr-auto text-events-color justify-evenly h-full">
        <div className="event-categories w-full flex flex-row justify-around items-center ml-10">
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
        <div className="events-counter flex flex-row justify-center ml-10 items-center text-center gap-x-8 font-bold">
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
    </div>
  );
};

EventsContainer.displayName = 'EventsContainer';
export default EventsContainer;
