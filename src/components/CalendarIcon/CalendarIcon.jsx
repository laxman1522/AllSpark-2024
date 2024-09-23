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
      className={`${changa.className} cursor-pointer text-center font-bold text-[0.6rem] sm:text-[0.8rem] uppercase`}
    >
      <div className="relative inline-block">
        <div className="absolute flex justify-between top-0 left-[11px] sm:left-[14px] w-[25px]">
          <div className="relative w-[7px] h-[7px] border border-[#f9f1d5] rounded-full bg-[#370f1f]">
            <div className="absolute left-[1px] top-[-4px] w-[3px] h-[8px] bg-[#f9f1d5] rounded-[15px]"></div>
          </div>
          <div className="relative w-[7px] h-[7px] border border-[#f9f1d5] rounded-full bg-[#370f1f]">
            <div className="absolute left-[1px] top-[-4px] w-[3px] h-[8px] bg-[#f9f1d5] rounded-[15px]"></div>
          </div>
        </div>
        <p className="px-[16px] py-[1px] pt-[4px] bg-[#f2a6ba] text-[#270212] rounded-t-md">
          oct
        </p>
      </div>
      <div className="px-[8px] py-[1px] text-[#f9f1d5] border-[2px] border-[#f9f1d5] border-t-0 bg-[#270212] rounded-b-md">
        2024
      </div>
    </div>
  );
};

export default CalendarIcon;
