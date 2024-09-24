import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import CalendarIcon from '@/components/CalendarIcon/CalendarIcon';

const LocationTime = () => {
  return (
    <div className="location-container mt-[45vh] md:mt-[40vh] 2xl:mt-[35vh]  flex flex-col md:flex-row text-[#f5d2c6] justify-center items-center md:gap-[23px] gap-[20px] text-[15px] md:text-[20px] lg:text-[24px]">
      <div className="location-name flex gap-[15px] md:gap-[25px]">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="cursor-pointer location-icon text-[#f9f1d5] h-[30px] md:h-[40px] lg:h-[50px]"
        />
        <div className="location-text-wrapper flex flex-row items-center">
          Namma <span className="font-semibold">&nbsp; Bengaluru</span>
        </div>
      </div>
      <div className="location-place flex items-center gap-[10px] md:gap-[21px]">
        <CalendarIcon />
        <span className="text-[16px] md:text-[18px] lg:text-[24px]">
          October 25 & 26
        </span>
      </div>
    </div>
  );
};

export default LocationTime;
