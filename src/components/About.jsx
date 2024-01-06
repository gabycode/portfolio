import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Hello! 👋 I'm Gabriella, a highly motivated and passionate front-end
        developer based in the vibrant city of Santo Domingo, Dominican
        Republic. With a deep appreciation for the art and science of web
        development, I bring 2+ years of hands-on experience in creating
        user-friendly and visually appealing web applications.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]">
        My journey in front-end development has equipped me with a strong
        command of the latest technologies, with a particular focus on
        JavaScript. I thrive on crafting dynamic and responsive websites that
        not only meet clients' expectations but also provide an exceptional user
        experience. Let's team up and build some awesome digital experiences
        together!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
