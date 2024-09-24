import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import CalendarIcon from '@/components/CalendarIcon/CalendarIcon';

const LocationTime = () => {
  return (
    <div className="flex flex-col min-[540px]:flex-row text-[#f5d2c6] justify-center items-center md:gap-[23px] min-[540px]:gap-[20px] gap-[12px] text-[15px] md:text-[20px] lg:text-[24px]">
      <div className="location-name flex md:gap-[25px] min-[540px]:gap-[15px] gap-[8px] items-center">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="cursor-pointer location-icon text-[#f9f1d5] min-[540px]:h-[30px] h-[20px] md:h-[40px] lg:h-[50px]"
        />
        <div className="location-text-wrapper flex flex-row items-center font-bold">
          Namma &nbsp; Bengaluru
        </div>
      </div>
      <div className="location-place flex items-center gap-[10px] md:gap-[21px]">
        <CalendarIcon />
        <span className="text-[16px] md:text-[18px] lg:text-[24px] font-bold">
          October 25 & 26
        </span>
      </div>
    </div>
  );
};

export default LocationTime;
