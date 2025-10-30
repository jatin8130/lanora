"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, FC } from "react";

interface MotionFadeInProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  yOffset?: number;
}

const MotionFadeIn: FC<MotionFadeInProps> = ({
  children,
  duration = 0.6,
  delay = 0,
  yOffset = 30,
}) => {
  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionFadeIn;
