import React, { useState, useEffect } from "react";
import "./components.scss";
import Africa from "../../imgs/toto_africa.jpg";
import Everything from "../../imgs/cover1.png";
import DownUnder from "../../imgs/men_at_work_down_under.jpg";

const Image = ({ className, songIndex }) => {
  const cover = [Africa, Everything, DownUnder];

  return (
    <div className={`image ${className}`}>
      <img src={cover[songIndex]} alt={cover} />
    </div>
  );
};

export default Image;
