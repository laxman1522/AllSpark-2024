'use client';
import './SideNavigation.scss';
import EventsContainer from '../../containers/EventsContainer/EventsContainer';
import HomeContainer from '../../containers/HomeContainer/HomeContainer';
import AboutContainer from '../../containers/AboutContainer/AboutContainer';
import { SECTIONS } from '@/constants/constants';
import Header from '../Header/Header';
import { useEffect, useRef, useState } from 'react';

//NOTE: For Mobile View style - Have to refresh screen
export default function SideNavigation() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);

  const rows = new Array(3).fill(null);
  const boxes = new Array(3).fill(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(
              Number(entry.target.getAttribute('data-section-id')),
            );
          }
        });
      },
      { threshold: 0.5 },
    );

    container.childNodes.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log(currentSection);
  }, [currentSection]);
  return (
    <div id="nav-wrapper">
      <nav id="navbar-vertical-nav">
        <ul>
          {SECTIONS?.map((section) => (
            <li key={section.number}>
              <a
                href={section.id}
                data-number={section.number}
                aria-label={section.label}
              >
                <span className="navbar-dot"></span>
                <span className="navbar-label">{section.label}</span>
              </a>
            </li>
          ))}
        </ul>
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
      <div className={`box ${currentSection !== 0 ? 'visible' : 'hidden'}`}>
        <Header />
      </div>
      <div ref={containerRef} className="sections-wrapper">
        <section
          id="home-section"
          data-section-id={0}
          className="h-screen w-screen"
        >
          <HomeContainer />
        </section>

        <section
          id="events-section"
          data-section-id={1}
          className="h-screen w-screen"
        >
          <EventsContainer />
        </section>

        <section
          id="about-section"
          data-section-id={2}
          className="h-screen w-screen"
        >
          <AboutContainer />
        </section>
      </div>
    </div>
  );
}
