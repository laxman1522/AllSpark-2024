import logo from '../../../public/images/cdwLogo.png';
import Image from 'next/image';

const CDWLogo = () => {
  return (
    <div className="cdw-logo flex justify-center items-center mt-[8vh]">
      <Image
        src={logo}
        alt="Logo"
        width={60}
        height={100}
        className="w-[90px] cursor-pointer"
      />
    </div>
  );
};

export default CDWLogo;
