import React, { forwardRef } from 'react';

interface EventsPageProps {
  // You can add any props that the EventsPage component might need in the future
}
const EventsPage = forwardRef<HTMLDivElement, EventsPageProps>((props, ref) => {
  return (
    <div ref={ref} id="events-section" className=" h-screen">
      {/* //TODO: Add Home Page content */}
      <h1>Events Page</h1>
    </div>
  );
});

export default EventsPage;
