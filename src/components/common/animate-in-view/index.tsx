"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

import { TAnimation, getAnimation } from "./helper-function";

export interface AnimatorWrapperProps {
  delay: number;
  type: TAnimation;
  children: ReactNode;
  classStyle?: string;
}

const AnimatorWrapper = ({
  type,
  delay,
  children,
  classStyle,
}: AnimatorWrapperProps) => {
  const { init, animate, transition } = getAnimation(type, delay);

  return (
    <motion.div
      initial={init}
      whileInView={animate}
      transition={transition}
      viewport={{ once: true }}
      className={classStyle || ""}
    >
      {children}
    </motion.div>
  );
};

export default AnimatorWrapper;
