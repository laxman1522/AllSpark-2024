import './SectionHeader.scss';

interface SectionHeaderProps {
  headerText: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ headerText }) => {
  return (
    <div className="section-header-wrapper px-12 max-[767px]:mt-[2vh] flex max-[767px]:justify-center items-center font-bold text-[35px] max-[767px]:text-[20px] md:text-[28px] text-[#f3baa7] max-[767px]:mb-[3vh] gap-5 max-[767px]:gap-2">
      <span className="header-line h-[0.5vh] bg-[#f9f1d5] w-[4.5vw] max-[767px]:w-[12vw] max-[767px]:h-[2px]"></span>
      <h3 className="whitespace-nowrap">{headerText}</h3>
      <span className="header-line h-[0.5vh] bg-[#f9f1d5] w-[15vw] max-[767px]:w-[12vw] max-[767px]:h-[2px]"></span>
    </div>
  );
};

export default SectionHeader;
