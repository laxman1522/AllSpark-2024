import React from 'react';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import { constructEventData, getEventDetails } from '@/utils/event-utils';
import EventCard from '@/components/EventCard/EventCard';
import EventDetailsCounter from '@/components/EventDetailsCounter/EventDetailsCounter';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { EVENTS_MOBILE_SPLIDE_OPTIONS } from '@/constants/option-constants';
import { useWindowSize } from '@/contexts/WindowSizeContext';
import './EventsContainer.scss';

const EventsContainer = () => {
  const { windowWidth } = useWindowSize();
  const eventData = constructEventData();
  const categoriesData = getEventDetails();

  const getMobileCategorySlides = () => {
    return categoriesData.map((category, index) => {
      return (
        <SplideSlide key={index}>
          <EventCard
            key={index}
            title={category.name}
            description={category.description}
            windowWidth={windowWidth < 1024}
          />
        </SplideSlide>
      );
    });
  };

  const getCategorySlides = () => {
    return categoriesData.map((category, index) => {
      return (
        <EventCard
          key={index}
          title={category.name}
          description={category.description}
          windowWidth={windowWidth < 1024}
        />
      );
    });
  };

  return (
    <div className="event-container h-screen relative flex flex-col justify-around">
      <div className="event-section-header mt-[18vh] mb-11">
        <SectionHeader headerText="Events" />
      </div>
      <div className="event-content flex flex-col w-[85%] mr-auto text-events-color h-full gap-[6rem]">
        <div className="event-categories w-full flex flex-row justify-around items-center ml-10 text-events-counter-text-color">
          {windowWidth < 1024 ? (
            <Splide options={EVENTS_MOBILE_SPLIDE_OPTIONS}>
              {getMobileCategorySlides()}
            </Splide>
          ) : (
            getCategorySlides()
          )}
        </div>
        <div className="events-counter flex flex-row flex-wrap justify-center ml-10 items-center text-center gap-x-8 font-bold gap-y-8	">
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
