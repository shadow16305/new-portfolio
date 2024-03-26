import { cn } from "@/utils/cn";
import { poppins } from "@/utils/fonts";

interface SectionTitleProps {
  title: string;
  border: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, border }) => {
  return (
    <div className="group relative w-fit">
      <h2 className={cn("font-bold text-5xl text-white z-10 relative", poppins.className)}>{title}</h2>
      <div className={cn("h-4 w-[110%] absolute bottom-0 -left-2.5", border)} />
    </div>
  );
};

export default SectionTitle;
