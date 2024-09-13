import './BackgroundAnimation.scss';

export default function BackgroundAnimation() {
  const items = new Array(10).fill(null);
  return (
    <div className="bg-custom-gradient w-full h-screen">
      <ul className="sparkles absolute top-0 left-0 w-full h-full overflow-hidden">
        {items.map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
}
