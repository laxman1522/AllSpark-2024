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

//NOTE: For Mobile View style - Have to refresh screen
export default function SideNavigation() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);

  const rows = new Array(3).fill(null);
  const boxes = new Array(3).fill(null);

  useEffect(() => {
    const container: any = containerRef?.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries?.forEach((entry) => {
          if (entry?.isIntersecting) {
            setCurrentSection(
              Number(entry?.target?.getAttribute('data-section-id')),
            );
          }
        });
      },
      { threshold: 0.5 },
    );

    if (container) {
      container?.childNodes?.forEach((child: Element) =>
        observer.observe(child),
      );
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div id="nav-wrapper">
      <nav id="navbar-vertical-nav">
        <ul>
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
        in={currentSection !== 0} // true if we want to show the component
        timeout={1500} // 1.5s transition duration
        classNames="box" // CSS class base name
        unmountOnExit // Automatically unmount when not shown
      >
        {currentSection !== 0 ? (
          <div className="box">
            <Header />
          </div>
        ) : (
          <></>
        )}
      </CSSTransition>

      <div
        ref={containerRef}
        id="screeensContainer"
        className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
      >
        <section
          id="home-section"
          data-section-id={0}
          className="navbar-section h-screen w-screen snap-start"
        >
          <HomeContainer />
        </section>

        <section
          id="events-section"
          data-section-id={1}
          className="navbar-section h-screen w-screen snap-start"
        >
          <EventsContainer />
        </section>

        <section
          id="about-section"
          data-section-id={2}
          className="navbar-section h-screen w-screen snap-start"
        >
          <AboutContainer />
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
