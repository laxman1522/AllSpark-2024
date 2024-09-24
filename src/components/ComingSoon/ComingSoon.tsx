import './ComingSoon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container relative flex flex-col justify-center items-center  h-[360px] w-[545px] m-auto p-5 shadow-lg">
      <div className="absolute inset-0 bg-[#340419] bg-opacity-70 "></div>

      <div className="relative z-10 flex flex-col items-center">
        <p className="font-poppins text-text-color text-2xl my-3">
          Our new site is
        </p>
        <h1 className="coming-soon-text font-poppins text-text-color text-5xl font-bold my-3">
          COMING SOON
        </h1>
        <p className="font-poppins text-text-color text-2xl my-3">
          Stay tuned!
        </p>
        <button className="mt-5 bg-button-color text-[#2d021c] text-lg px-6 py-3 rounded-md shadow-lg flex items-center justify-center hover:bg-[#e3d9b8] transition-colors gap-5">
          <span className="font-poppins italic text-2xl">AllSpark'24</span>
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#340419]">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-text-color text-xl w-[15px] h-[15px]"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
