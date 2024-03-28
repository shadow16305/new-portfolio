import { cn } from "@/utils/cn";
import { poppins, roboto } from "@/utils/fonts";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { Boxes } from "./ui/background-boxes";
import { IoIosArrowDown } from "react-icons/io";

const socials = [
  {
    icon: <BsLinkedin size={32} />,
    link: "https://www.linkedin.com/in/chris-ab-a89133215/",
  },
  {
    icon: <FaGithub size={32} />,
    link: "https://github.com/shadow16305",
  },
  {
    icon: <FaTelegram size={32} />,
    link: "https://t.me/Shadow163",
  },
];

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#17202A] to-[#1A191D] text-white h-screen flex flex-col items-center justify-center relative overflow-hidden ">
      <h1 className={cn("font-bold text-4xl md:text-8xl uppercase z-10", poppins.className)}>christian a.b.</h1>
      <p className={cn("font-bold mt-3 text-center z-10", roboto.className)}>
        Nice to meet you! I’m a full-stack developer.
      </p>
      <ul className="flex items-end gap-x-6 mt-24">
        {socials.map((item, index) => (
          <li key={index} className="z-10 transition-all hover:scale-110">
            <a href={item.link}>{item.icon}</a>
          </li>
        ))}
      </ul>
      <IoIosArrowDown size={32} className="absolute left-1/2 -translate-x-1/2 bottom-10 animate-pulse" />
      <div className="absolute inset-0 [mask-image:radial-gradient(white,transparent)] hidden lg:block">
        <Boxes />
      </div>
    </section>
  );
};

export default Hero;
