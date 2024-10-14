import './BackgroundAnimation.scss';

const generateBackgroundSparkleItems = (sparkleItems: any[]) => {
  return sparkleItems?.map((_, index) => (
    <li
      className="absolute block bottom-[-100px] list-none bg-animation-background"
      key={index}
    ></li>
  ));
};

/**
 * @description An component to animate the background with sparkles
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
export default function BackgroundAnimation() {
  const sparkleItems = new Array(12).fill(null);
  const backgroundSparkleItems = generateBackgroundSparkleItems(sparkleItems);

  return (
    <div className="area z-[-9999] absolute bg-custom-gradient w-full h-screen">
      <ul className="sparkles absolute top-0 left-0 w-full h-full overflow-hidden">
        {backgroundSparkleItems}
      </ul>
    </div>
  );
}
