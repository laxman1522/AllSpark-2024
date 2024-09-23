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
      <img
        src={allspark.src}
        alt="allspark-logo"
        className="w-64 object-contain"
      />
      <img
        src={cdwlogo.src}
        alt="cdw-logo"
        className="w-24 object-contain hidden md:block"
      />
    </div>
  );
};

export default Header;
