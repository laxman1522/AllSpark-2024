import { Changa } from 'next/font/google';

const changa = Changa({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

/**
 * @description A reusable component which is capable of rendering Calender icon in home page
 * @version 1.0.0
 * @author [Rubesh Udayakumar]
 */
const CalendarIcon = () => {
  return (
    <div
      className={`${changa.className} cursor-pointer text-center font-bold  md:text-[0.6rem] text-[0.3rem] uppercase`}
    >
      <div className="relative inline-block">
        <div className="absolute flex justify-between top-0 md:left-[8px] left-[6px] md:w-[25px] w-[12px]">
          <div className="relative md:w-[7px] w-[3px] md:h-[7px] h-[2.5px] border border-[#faf1d5] rounded-full bg-[#370f1f]">
            <div className="absolute md:left-[1px] top-[-4px] md:w-[3px] w-[1px] md:h-[8px] h-[4px] bg-[#faf1d5] rounded-[15px]"></div>
          </div>
          <div className="relative md:w-[7px] w-[3px] md:h-[7px] h-[2.5px] border border-[#faf1d5] rounded-full bg-[#370f1f]">
            <div className="absolute md:left-[1px] top-[-4px] md:w-[3px] w-[1px] md:h-[8px] h-[4px] bg-[#faf1d5] rounded-[15px]"></div>
          </div>
        </div>
        <p className="md:px-[12px] px-[8px] py-[1px] md:pt-[4px] pt-[2px] bg-[#f1bba7] text-[#270212] md:rounded-t-md rounded-t-sm">
          oct
        </p>
      </div>
      <div className="md:px-[4px] px-[1.5px] py-[1px] text-[#faf1d5] border-[2px] border-[#faf1d5] border-t-0 bg-[#270212] md:rounded-b-md rounded-b-sm">
        2024
      </div>
    </div>
  );
};

export default CalendarIcon;
