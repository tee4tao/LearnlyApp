"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import CtaBtn from "./CtaBtn";

const Nav = () => {
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${navbar.offsetHeight}px`
        );
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      id="navbar"
      className="bg-white w-full fixed top-0 shadow-xl  py-4 px-10 flex justify-center "
    >
      <div className="container flex  items-center justify-between">
        <Image
          src={"../icons/new-logo.svg"}
          alt="learnly-app logo"
          width={30}
          height={30}
        />
        <CtaBtn />
        {/* <button className="bg-purple-700 text-white p-2 px-4 capitalize rounded-lg font-semibold text-nowrap hover:scale-90 transition-all duration-300 max-sm:text-sm max-sm:w-32 max-sm:h-9">
          start leaning
        </button> */}
      </div>
    </motion.nav>
  );
};

export default Nav;
