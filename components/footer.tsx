import { socials } from "@/constants/constants";
import { cn } from "@/utils/cn";
import { poppins, roboto } from "@/utils/fonts";

const Footer = () => {
  return (
    <footer className="mt-24 bg-[#201F23] relative">
      <div className="flex flex-col-reverse items-center md:flex-row justify-between w-full md:max-w-[744px] lg:max-w-[1024px] xl:max-w-[1160px] 2xl:max-w-[1240px] mx-auto pb-4 md:pb-0">
        <div className="md:w-1/2 md:py-12 space-y-24 text-white mt-6 md:mt-0">
          <p className={cn("max-w-[340px] md:max-w-[500px]", roboto.className)}>
            I would love to hear about your project and how I could help. Send me an email or a message, and I’ll get
            back to you as soon as possible.
          </p>
          <div className="flex flex-col items-center md:items-start gap-y-2">
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
          </div>
        </div>
        <div
          className={cn(
            "flex items-center text-white md:w-1/2 z-10 w-full bg-indigo-600 md:bg-transparent py-4 md:py-0",
            roboto.className
          )}>
          <p className="max-w-[340px] md:max-w-[500px] w-full mx-auto md:pl-6">
            When I'm not coding, you'll find me strumming my guitar, hitting the gym, or diving into gaming adventures.
            Let's collaborate and turn your ideas into digital reality!
          </p>
        </div>
      </div>
      <div className="h-full w-1/2 bg-indigo-600 absolute top-0 right-0 hidden md:block" />
    </footer>
  );
};

export default Footer;
