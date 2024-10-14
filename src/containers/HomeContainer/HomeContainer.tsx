'use client';
import LocationTime from '@/components/LocationTime/LocationTime';
import Logo from '@/components/Logo/Logo';
import { useWindowSize } from '@/contexts/WindowSizeContext';
import EventDetailsContainer from '../EventDetailsContainer/EventDetailsContainer';
import CountDown from '@/components/countDown/CountDown';

const HomeContainer = () => {
  const isCountDownDisplayed = true;
  const { windowWidth } = useWindowSize();

  return (
    <div className="home" id="home-section">
      <Logo isCountDownDisplayed={isCountDownDisplayed} />
      <a
        target="_blank"
        href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NDRsbmlnZm5lN3RrMmlybWswZzhybGRsMmEgbGF4aXMxNTk4QG0&amp;tmsrc=laxis1598%40gmail.com"
      ></a>
      {windowWidth < 768 && (
        <LocationTime isCountDownDisplayed={isCountDownDisplayed} />
      )}
      <EventDetailsContainer isCountDownDisplayed={isCountDownDisplayed} />
      {isCountDownDisplayed && <CountDown />}
    </div>
  );
};

HomeContainer.displayName = 'HomeContainer';

export default HomeContainer;
