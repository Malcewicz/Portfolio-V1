"use client";

import { motion } from "framer-motion";

type MotionSectionProps = {
  id?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const MotionSection = ({ id, style, children }: MotionSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.4 }}
      id={id}
      style={style}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
