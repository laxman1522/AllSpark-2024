'use client';
import './SideNavigation.scss';
import { useRef } from 'react';
import EventsPage from '../EventsPage/EventsPage';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';

//NOTE: For Mobile View style - Have to refresh screen
export default function SideNavigation() {
  const eventsPageRef = useRef(null);
  const homePageRef = useRef(null);
  const aboutPageRef = useRef(null);

  const sections = [
    { label: 'About', ref: aboutPageRef, number: '1', id: '#about-section' },
    { label: 'Events', ref: eventsPageRef, number: '2', id: '#events-section' },
    { label: 'Guests', ref: aboutPageRef, number: '3', id: '#guests-section' },
    {
      label: 'Schedule',
      ref: aboutPageRef,
      number: '4',
      id: '#schedule-section',
    },
    {
      label: 'Speakers',
      ref: aboutPageRef,
      number: '5',
      id: '#speakers-section',
    },
    { label: 'Recap', ref: aboutPageRef, number: '6', id: '#recap-section' },
    {
      label: 'Committee',
      ref: aboutPageRef,
      number: '7',
      id: '#committee-section',
    },
  ];

  const rows = new Array(3).fill(null);
  const boxes = new Array(3).fill(null);

  return (
    <div id="nav-wrapper">
      <nav id="cd-vertical-nav">
        <ul>
          {sections.map((section) => (
            <li key={section.number}>
              <a
                href={section.id}
                data-number={section.number}
                aria-label={section.label}
              >
                <span className="cd-dot"></span>
                <span className="cd-label">{section.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a className="cd-nav-trigger cd-img-replace">
        {rows.map((_, rowIndex) => (
          <span className="row" key={`row-${rowIndex}`}>
            {boxes.map((_, boxIndex) => (
              <span className="box" key={`box-${boxIndex}`}></span>
            ))}
          </span>
        ))}

        {/* <span ></span> */}
      </a>

      <section id="home-section" className="cd-section">
        <HomePage ref={homePageRef} />
      </section>

      <section id="events-section" className="cd-section">
        <EventsPage ref={eventsPageRef} />
      </section>

      <section id="about-section" className="cd-section">
        <AboutPage ref={aboutPageRef} />
      </section>
    </div>
  );
}
