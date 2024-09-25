import React, { forwardRef } from 'react';

interface EventsContainerProps {
  // You can add any props that the EventsContainer component might need in the future
}
const EventsContainer = forwardRef<HTMLDivElement, EventsContainerProps>(
  (props, ref) => {
    return (
      <div ref={ref} id="events-section" className=" h-screen">
        {/* //TODO: Add Home Container content */}
        <h1>Events Container</h1>
      </div>
    );
  },
);

EventsContainer.displayName = 'EventsContainer';
export default EventsContainer;
