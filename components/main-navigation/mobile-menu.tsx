import { navlinks } from "@/constants/constants";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="pt-32 pb-6 px-6 flex flex-col justify-between h-full">
      <ul className="space-y-6">
        {navlinks.map((link) => (
          <li key={link.id}>
            <Link href={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <button className="bg-white py-3 px-8 text-black">contact</button>
    </div>
  );
};

export default MobileMenu;
