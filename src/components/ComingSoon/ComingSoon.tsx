import './ComingSoon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container relative flex flex-col justify-center items-center m-auto py-[58px] px-[95px] shadow-lg">
      <div className="coming-soon absolute inset-0"></div>

      <div className="content-box relative z-10 flex flex-col items-center gap-[23px]">
        <p className="font-poppins text-text-color text-[1.75rem]">
          Our new site is
        </p>
        <h1 className="coming-soon-text font-poppins text-text-color text-5xl font-bold">
          COMING SOON
        </h1>
        <p className="font-poppins text-text-color text-[1.75rem]">
          Stay tuned!
        </p>
        <button className="all-spark-button mt-5 bg-button-color text-lg pl-[26px] py-[12px] pr-[15px] rounded-[10px] shadow-lg flex items-center justify-center gap-5">
          <span className="font-poppins italic font-medium text-[1.75rem] tracking-normal text-[#511717]">
            AllSpark'24
          </span>
          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#340419]">
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
