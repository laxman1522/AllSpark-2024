import './ComingSoon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { COMING_SOON_TEXTS } from '@/constants/constants';

const ComingSoon = () => {
  const navigateToPage = () => {
    const aboutNav = document.querySelector(
      '#navbar-vertical-nav a[href="#about-section"]',
    );
    if (aboutNav) {
      const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      aboutNav.dispatchEvent(event);
    }
  };

  return (
    <div className="coming-soon-container text-center relative flex flex-col justify-center items-center m-auto py-[58px] px-[95px] shadow-lg">
      <div className="coming-soon absolute inset-0 rounded-[25px]"></div>
      <div className="content-box relative z-10 flex flex-col items-center gap-[23px] ">
        <p className="font-poppins text-text-color text-[1.75rem]">
          {COMING_SOON_TEXTS.newSite}
        </p>
        <h1 className="coming-soon-text font-poppins text-text-color text-5xl font-[600]">
          {COMING_SOON_TEXTS.comingSoon}
        </h1>
        <p className="font-poppins text-text-color text-[1.75rem]">
          {COMING_SOON_TEXTS.stayTuned}
        </p>
        <button
          onClick={navigateToPage}
          className="all-spark-button mt-5 bg-button-color text-lg pl-[26px] py-[12px] pr-[15px] rounded-[10px] shadow-lg flex items-center justify-center gap-5"
        >
          <span className="font-poppins italic font-medium text-[1.75rem] tracking-normal text-button-text-color">
            {COMING_SOON_TEXTS.allSpark}
          </span>
          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#270212]">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-button-color text-xl w-[15px] h-[15px]"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
