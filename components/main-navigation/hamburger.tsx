import { cn } from "@/utils/cn";
import { Dispatch, SetStateAction } from "react";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, setIsOpen }) => {
  const genericHamburgerLine = cn("h-1 w-6 my-1 transition ease transform duration-300 bg-white");

  return (
    <button
      className="group relative z-50 flex h-12 w-12 flex-col items-center justify-center md:hidden"
      onClick={() => setIsOpen(!isOpen)}>
      <div className={cn(genericHamburgerLine, isOpen ? "translate-y-3 rotate-45" : "")} />
      <div className={cn(genericHamburgerLine, isOpen ? "opacity-0" : "")} />
      <div className={cn(genericHamburgerLine, isOpen ? "-translate-y-3 -rotate-45" : "")} />
    </button>
  );
};

export default Hamburger;
