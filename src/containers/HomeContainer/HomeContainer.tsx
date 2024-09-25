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
