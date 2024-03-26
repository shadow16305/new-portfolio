"use client";

import { navlinks } from "@/constants/constants";
import { cn } from "@/utils/cn";
import { roboto } from "@/utils/fonts";
import Link from "next/link";
import { useEffect, useState } from "react";
import Hamburger from "./hamburger";
import MobileMenu from "./mobile-menu";
import { AnimatePresence, motion } from "framer-motion";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 py-8 w-full z-50 transition-all",
        scrolled && "py-4 backdrop-blur-lg bg-black bg-opacity-20"
      )}>
      <div
        className={cn(
          "w-full max-w-[340px] md:max-w-[744px] lg:max-w-[1024px] xl:max-w-[1160px] 2xl:max-w-[1240px] mx-auto flex justify-between items-center text-white",
          roboto.className
        )}>
        <Link href="/" className="md:hidden text-2xl z-50">
          Christian A.B.
        </Link>
        <ul className="hidden md:flex gap-x-6">
          {navlinks.map((link) => (
            <li key={link.id}>
              <Link href={link.path} className="group relative">
                <span className="relative z-10">// {link.text}</span>
                <div className="w-0 h-1 bg-blue-700 absolute left-0 bottom-0.5 group-hover:w-full transition-all" />
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-orange-500 py-3 px-8 border-2 border-orange-500 hover:bg-transparent transition-colors hidden md:block">
          contact
        </button>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100vw", opacity: 0 }}
              transition={{ type: "tween", duration: 0.5 }}
              className="h-screen w-3/4 fixed left-0 top-0 bg-indigo-500">
              <MobileMenu />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MainNavigation;
