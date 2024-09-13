import './BackgroundAnimation.scss';

/**
 * @description An component to animate the background with sparkles
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
export default function BackgroundAnimation() {
  const items = new Array(10).fill(null);
  return (
    <div className="area absolute bg-custom-gradient w-full h-screen">
      <ul className="sparkles absolute top-0 left-0 w-full h-full overflow-hidden">
        {items.map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
}
