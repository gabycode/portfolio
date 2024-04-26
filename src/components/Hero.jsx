import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsLargeScreen(width >= 1600);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="items-center flex justify-center h-[80vh] md:h-screen">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex items-center gap-5 mt-20 md:mt-0`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm-h-80 h-48 violet-gradient" />
        </div>
        <div className="">
          <h2 className="text-gray-400 mt-5 font-normal text-xs tracking-wider">
            Frontend Developer / Web Design Enthusiast / CSS Lover
          </h2>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Gabriella</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user-friendly and <br className="sm:block hidden" />
            visually appealing web interfaces.
          </p>
        </div>
      </div>
      {isLargeScreen ? (
        <div className="absolute top-[50rem] w-full flex justify-center items-center z-50 ">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      ) : (
        <div className="absolute top-[35rem] w-full flex justify-center items-center z-50 ">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;
