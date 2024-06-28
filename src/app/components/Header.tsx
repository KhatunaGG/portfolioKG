"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: -500 },
  animate: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Header = () => {
  return (
    <div className="w-full  absolute top-[100px] flex items-cente justify-center md:h-[calc(100vh-35vh)] lg:h-[calc(100vh-25vh)]">
      <div className="w-full flex flex-col items-center justify-between px-[10%] md:flex-row">
        <div className="w-full md:w-[50%] lg:w-[50%] text-center order-2 md:order-none lg:order-none">
          <motion.p
            variants={variants}
            initial="initial"
            animate="animate"
            className="text-gray-400 font-base font-bold"
          >
            Hello, I am
            <span
              className="text-transparent bg-clip-text 
                    bg-gradient-to-r from-purple-500 to-green-500 text-[22px] font-bold tracking-[1px]"
            >
              {" "}
              Khatuna
            </span>
            <span className="mr-[10px]">.</span>I am happy to present my
            portfolio as a dedicated and passionate Front-End developer with
            experience in React and Next.js. My journey in web development was
            driven by a strong desire to be a part of a very interesting and
            exciting process of creating user interfaces. I hope to bring my
            skills and passion for creating user-friendly web applications to
            your esteemed team.
          </motion.p>
        </div>
        <div className="w-full md:w-[50%] lg:w-[50%] order-1 md:order-none lg:order-none">
          <img
            className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[500px] lg:h-[500px] "
            src="/stars/mainIconsdark.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
