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

//NOTE: For Mobile View style - Have to refresh screen
export default function SideNavigation() {
  const rows = new Array(3).fill(null);
  const boxes = new Array(3).fill(null);

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
                <span className="navbar-dot"></span>
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

      <section id="home-section" className="navbar-section">
        <HomeContainer />
      </section>

      <section id="events-section" className="navbar-section">
        <EventsContainer />
      </section>

      <section id="about-section" className="navbar-section">
        <AboutContainer />
      </section>

      <section id="guests-section" className="navbar-section">
        <GuestsContainer />
      </section>

      <section id="schedule-section" className="navbar-section">
        <ScheduleContainer />
      </section>

      <section id="speakers-section" className="navbar-section">
        <SpeakerContainer />
      </section>

      <section id="recap-section" className="navbar-section">
        <RecapContainer />
      </section>

      <section id="committee-section" className="navbar-section">
        <CommitteeContainer />
      </section>
    </div>
  );
}
