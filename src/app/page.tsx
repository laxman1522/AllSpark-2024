import CountDown from '@/components/countDown/CountDown';
import Logo from '@/components/Logo/Logo';
import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
export default function Home() {
  return (
    <div className="home-page h-screen w-screen">
      <BackgroundAnimation />
      <Logo />
      <CountDown />
    </div>
  );
}
