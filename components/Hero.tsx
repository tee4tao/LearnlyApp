"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

import CtaBtn from "./CtaBtn";

const Hero = () => {
  return (
    <section className="w-full mt-[var(--navbar-height)] container px-10 flex flex-col lg:flex-row justify-center lg:items-center lg:justify-between">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10 lg:max-w-[35rem] lg:mb-0"
      >
        <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-2">
          The <span className="text-purple-700">Most Fun</span> Way To Learn
        </h2>
        <p className="[word-spacing:2px] text-[#6e6e6e]">
          Welcome to the most thrilling and enjoyable way to learn. Level up
          your skills with LearnlyApp&apos;s immersive gamified learning
          experience.
        </p>
        <div className="mt-8">
          <CtaBtn />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="self-center relative"
      >
        <Image
          src={"/images/laptop.gif"}
          alt="laptop"
          width={500}
          height={500}
        />
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.3 }}
          exit={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          className="absolute top-0 -left-4"
        >
          <Image
            src={"../icons/bootcamp.svg"}
            alt="laptop"
            width={80}
            height={80}
          />
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.3 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          className="absolute top-0 -right-4"
        >
          <Image
            src={"../icons/workshop.svg"}
            alt="laptop"
            width={80}
            height={80}
          />
        </motion.div>
        <motion.div
          className="absolute bottom-12 -left-4"
          initial={{ scale: 1 }}
          animate={{ scale: 1.3 }}
          exit={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        >
          <Image
            src={"../icons/resources.svg"}
            alt="laptop"
            width={80}
            height={80}
          />
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.3 }}
          exit={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          className="absolute bottom-12 -right-4"
        >
          <Image
            src={"../icons/game.svg"}
            alt="laptop"
            width={80}
            height={80}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
