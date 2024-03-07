import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

interface Props {
  children: JSX.Element;
}

export const Reveal = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y:15,},
          visible: { opacity: 1, y:0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0, ease:[0.1, 0.7, 0.8, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};