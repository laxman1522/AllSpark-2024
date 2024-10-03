'use client';
import './SideNavigation.scss';
import EventsContainer from '../../containers/EventsContainer/EventsContainer';
import HomeContainer from '../../containers/HomeContainer/HomeContainer';
import AboutContainer from '../../containers/AboutContainer/AboutContainer';
import GuestsContainer from '@/containers/GuestsContainer/GuestsContainer';
import ScheduleContainer from '@/containers/ScheduleContainer/ScheduleContainer';
import SpeakerContainer from '@/containers/SpeakerContainer/SpeakerContainer';
import RecapContainer from '@/containers/RecapContainer/RecapContainer';
import CommitteeContainer from '@/containers/CommitteeContainer/CommitteeContainer';
import { SECTIONS } from '@/constants/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useWindowSize } from '@/contexts/WindowSizeContext';
import gsap from 'gsap';

//NOTE: For Mobile View style - Have to refresh screen
export default function SideNavigation() {
  const [currentSection, setCurrentSection] = useState('#home-section');
  const navRef = useRef<HTMLUListElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const rows = new Array(3).fill(null);
  const boxes = new Array(3).fill(null);

  const handleScroll = () => {
    if (navRef && navRef.current) {
      const section = navRef.current
        .querySelector('.is-selected')
        ?.getAttribute('href') as string;
      setCurrentSection(section);
    }
  };
  const { windowSize } = useWindowSize();

  useEffect(() => {
    if (navRef.current) {
      gsap.set(navRef.current, {
        display: 'none',
      });
      gsap.to(navRef.current, {
        display: 'block',
        duration: 1,
        delay: 2,
      });
    }
  }, [windowSize]);

  return (
    <div id="nav-wrapper">
      <nav id="navbar-vertical-nav">
        <ul ref={navRef} className="hidden">
          {SECTIONS?.map((section) => (
            <li key={section.number} className="text-center">
              <a
                href={section.id}
                data-number={section.number}
                aria-label={section.label}
              >
                <span className="navbar-dot cursor-pointer"></span>
                <span className="navbar-label">{section.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div
          className="x-icon justify-end items-center cursor-pointer text-[#f9f1d5] hidden"
          id="navCloseIcon"
        >
          <FontAwesomeIcon
            icon={faXmarkCircle}
            className="h-[22px] w-[22px] p-[5px]"
          />
        </div>
      </nav>

      <a className="navbar-nav-trigger navbar-img-replace">
        {rows.map((_, rowIndex) => (
          <span className="row" key={`row-${rowIndex}`}>
            {boxes.map((_, boxIndex) => (
              <span className="box" key={`box-${boxIndex}`}></span>
            ))}
          </span>
        ))}
      </a>

      <CSSTransition
        in={currentSection !== '#home-section'}
        timeout={1000}
        classNames="box"
        unmountOnExit
        nodeRef={headerRef}
      >
        <div className="box" ref={headerRef}>
          <Header />
        </div>
      </CSSTransition>

      <div
        id="screeensContainer"
        className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
        onScroll={handleScroll}
      >
        <section
          id="home-section"
          data-section-id={0}
          className="navbar-section h-screen w-screen snap-start"
        >
          <HomeContainer />
        </section>

        <section
          id="about-section"
          data-section-id={2}
          className="navbar-section h-screen w-screen snap-start"
        >
          <AboutContainer />
        </section>

        <section
          id="events-section"
          data-section-id={1}
          className="navbar-section h-screen w-screen snap-start"
        >
          {currentSection === '#events-section' && <EventsContainer />}
        </section>

        <section
          id="guests-section"
          data-section-id={3}
          className="navbar-section h-screen w-screen snap-start"
        >
          <GuestsContainer />
        </section>

        <section
          id="schedule-section"
          data-section-id={4}
          className="navbar-section h-screen w-screen snap-start"
        >
          <ScheduleContainer />
        </section>

        <section
          id="speakers-section"
          data-section-id={5}
          className="navbar-section h-screen w-screen snap-start"
        >
          <SpeakerContainer />
        </section>

        <section
          id="recap-section"
          data-section-id={6}
          className="navbar-section h-screen w-screen snap-start"
        >
          <RecapContainer />
        </section>

        <section
          id="committee-section"
          data-section-id={7}
          className="navbar-section h-screen w-screen snap-start"
        >
          <CommitteeContainer />
        </section>
      </div>
    </div>
  );
}
