import { socials } from "@/constants/constants";
import { cn } from "@/utils/cn";
import { poppins, roboto } from "@/utils/fonts";

const ContactDropdown = () => {
  return (
    <aside className="space-y-4 text-white rounded-lg my-4">
      <a href="mailto:chris16305@gmail.com" className="group relative">
        <p className={cn("z-10 relative font-bold", poppins.className)}>chris16305@gmail.com</p>
        <div className="bg-orange-500 absolute bottom-0.5 left-0 w-full h-2 group-hover:h-full z-0 transition-all" />
      </a>
      <div className="flex flex-col items-center md:items-start gap-y-2">
        {socials.map((link, index) => (
          <div className="group relative" key={index}>
            <a href={link.link} target="_blank" rel="noreferrer" className={roboto.className}>
              {link.text}
            </a>
            <div className="w-0 h-1 bg-orange-500 absolute left-0 bottom-0.5 group-hover:w-full transition-all" />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ContactDropdown;
