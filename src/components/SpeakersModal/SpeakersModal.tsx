import React from 'react';
interface SpeakersModalProps {
  isModelOpened: boolean;
  scrollAmount: number;
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function SpeakersModal({
  isModelOpened = false,
  scrollAmount = 0,
  handleClick,
}: SpeakersModalProps) {
  return (
    <div
      className={`${isModelOpened === true ? 'modal-open' : 'modal-close'} absolute  left-[0] flex flex-col w-full h-[100%] bg-emerald-50 z-10`}
      style={{
        top: `${scrollAmount}px`,
      }}
    >
      <div
        className="w-[50px] h-[50px] bg-red-500 self-end"
        onClick={handleClick}
      ></div>
    </div>
  );
}
