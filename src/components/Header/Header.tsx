import Image from 'next/image';
import allspark from '../../../public/images/Allspark.svg';
import cdwlogo from '../../../public/images/cdwLogo.png';

/**
 * @description A reusable header component
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */

const Header = () => {
  return (
    <div className="flex justify-center md:justify-between px-12 py-10 fixed top-0 z-50 w-screen">
      <div className="flex items-center bg-header-background justify-center w-[280px] h-[85px] rounded-[50px] p-4">
        <Image
          src={allspark}
          alt="allspark-logo"
          className="object-contain"
          width={220}
          height={60}
        />
      </div>
      <Image
        src={cdwlogo}
        alt="cdw-logo"
        className="object-contain hidden md:block"
        width={90}
        height={50}
      />
    </div>
  );
};

export default Header;
