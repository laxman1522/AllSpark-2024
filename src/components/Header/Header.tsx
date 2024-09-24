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
    <div className="flex justify-center md:justify-between px-12 py-10">
      <Image
        src={allspark.src}
        alt="allspark-logo"
        className="object-contain"
        width={263}
        height={73}
      />
      <Image
        src={cdwlogo.src}
        alt="cdw-logo"
        className="object-contain hidden md:block"
        width={105}
        height={56}
      />
    </div>
  );
};

export default Header;
