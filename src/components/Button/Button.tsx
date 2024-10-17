import { ChevronRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  clickHandler: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, clickHandler }) => {
  return (
    <button
      className="flex flex-row italic bg-button-color text-button-text-color py-3 px-4 gap-3 rounded-[10px] font-medium text-lg items-center justify-center"
      onClick={clickHandler}
    >
      {text}
      <ChevronRight
        size={24}
        strokeWidth={4}
        className="bg-button-text-color text-button-color rounded-full h-[26px] w-[26px] p-1"
      />
    </button>
  );
};

export default Button;
