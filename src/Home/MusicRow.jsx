import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.scss";

const MusicRow = ({ header, children, style }) => {
  const [calcDrag, setCalcDrag] = useState(window.screen.width - 530);
  useEffect(() => {
    window.addEventListener("resize", setCalcDrag(window.screen.width - 530));
  }, []);
  return (
    <>
      <div className="home-view-container">
        <div className="home-view-wrapper-header">
          <h2>{header}</h2>
        </div>
        <motion.div className="home-view-wrapper" style={style}>
          {children}
        </motion.div>
      </div>
    </>
  );
};
export default MusicRow;
