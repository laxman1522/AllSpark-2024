import Image from 'next/image';
import allspark from '../../../public/images/Allsparktext.png';
import cdwlogo from '../../../public/images/cdwLogo.png';

/**
 * @description A reusable header component
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */

const Header = () => {
  return (
    <div className="flex justify-center md:justify-between px-12 py-10 fixed top-0 z-50 w-screen">
      <div className="flex items-center bg-header-background justify-center w-[300px] h-[92px] rounded-[50px] p-4">
        <Image
          src={allspark}
          alt="allspark-logo"
          className="object-contain"
          width={263}
          height={73}
        />
      </div>
      <Image
        src={cdwlogo}
        alt="cdw-logo"
        className="object-contain hidden md:block"
        width={105}
        height={56}
      />
    </div>
  );
};

export default Header;
