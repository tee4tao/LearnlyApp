"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
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
    <div className=" w-full flex flex-col items-center  justify-center min-h-screen">
      <nav
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
          <button className="bg-purple-700 text-white p-2 px-4 capitalize rounded-lg font-semibold text-nowrap hover:scale-90 transition-all duration-300">
            start leaning
          </button>
        </div>
      </nav>
      <section className="w-full mt-[var(--navbar-height)] container px-10 flex flex-col lg:flex-row justify-center lg:items-center">
        <div className="mb-10">
          <h2 className=" text-3xl lg:text-5xl font-semibold mb-2">
            The <span className="text-purple-700">Most Fun</span> Way To Learn
          </h2>
          <p className="[word-spacing:2px] text-[#6e6e6e]">
            Welcome to the most thrilling and enjoyable way to learn. Level up
            your skills with LearnlyApp&apos;s immersive gamified learning
            experience.
          </p>
          <button className="bg-purple-700 text-white p-2 px-4 capitalize rounded-lg font-semibold text-nowrap hover:scale-90 transition-all duration-300 mt-8">
            start leaning
          </button>
        </div>
        <div className="self-center relative">
          <Image
            src={"/images/laptop.gif"}
            alt="laptop"
            width={500}
            height={500}
          />
          <Image
            src={"../icons/bootcamp.svg"}
            alt="laptop"
            width={80}
            height={80}
            className="absolute top-0 -left-4"
          />
          <Image
            src={"../icons/workshop.svg"}
            alt="laptop"
            width={80}
            height={80}
            className="absolute top-0 -right-4"
          />
          <Image
            src={"../icons/resources.svg"}
            alt="laptop"
            width={80}
            height={80}
            className="absolute bottom-12 -left-4"
          />
          <Image
            src={"../icons/game.svg"}
            alt="laptop"
            width={80}
            height={80}
            className="absolute bottom-12 -right-4"
          />
        </div>
      </section>
    </div>
  );
}
