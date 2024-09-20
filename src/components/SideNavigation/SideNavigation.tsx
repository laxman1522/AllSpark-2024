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
    { label: 'Home', ref: homePageRef, number: '1', id: '#home-section' },
    { label: 'Events', ref: eventsPageRef, number: '2', id: '#events-section' },
    { label: 'About', ref: aboutPageRef, number: '3', id: '#about-section' },
    //TODO: Add Sections
    {
      label: 'Section 4',
      ref: aboutPageRef,
      number: '4',
      id: '#about-section',
    },
    {
      label: 'Section 5',
      ref: aboutPageRef,
      number: '5',
      id: '#about-section',
    },
  ];

  return (
    <div>
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
        <span></span>
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
