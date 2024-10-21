'use client';
import Logo from '@/components/Logo/Logo';

const HomeContainer = () => {
  const isCountDownDisplayed = false;

  return (
    <div className="home" id="home-section">
      <Logo isCountDownDisplayed={isCountDownDisplayed} />
      {/* {windowWidth < 768 && (
        <LocationTime isCountDownDisplayed={isCountDownDisplayed} />
      )}
      <EventDetailsContainer isCountDownDisplayed={isCountDownDisplayed} />
      {isCountDownDisplayed && <CountDown />} */}
    </div>
  );
};

HomeContainer.displayName = 'HomeContainer';

export default HomeContainer;
