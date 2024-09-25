'use client';
import './SideNavigation.scss';
import EventsContainer from '../../containers/EventsContainer/EventsContainer';
import HomeContainer from '../../containers/HomeContainer/HomeContainer';
import AboutContainer from '../../containers/AboutContainer/AboutContainer';
import { SECTIONS } from '@/constants/constants';

//NOTE: For Mobile View style - Have to refresh screen
export default function SideNavigation() {
  const rows = new Array(3).fill(null);
  const boxes = new Array(3).fill(null);

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

      <section id="home-section" className="h-screen w-screen">
        <HomeContainer />
      </section>

      <section id="events-section" className="h-screen w-screen">
        <EventsContainer />
      </section>

      <section id="about-section" className="h-screen w-screen">
        <AboutContainer />
      </section>
    </div>
  );
}
