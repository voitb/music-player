import React, { useState, useEffect } from "react";
import "./components.scss";
import Africa from "../../imgs/toto_africa.jpg";
import Everything from "../../imgs/cover1.png";
import DownUnder from "../../imgs/men_at_work_down_under.jpg";
import AroundTheWolrd from "../../imgs/around-the-world.jpg";

import Cover1 from "../../imgs/covers/cover1.jpg";
import Cover2 from "../../imgs/covers/cover2.jpg";
import Cover3 from "../../imgs/covers/cover3.jpg";

const Image = ({ className, songIndex, showPlaylist }) => {
  const cover = [Africa, Everything, DownUnder, AroundTheWolrd];

  const playlistCover = [Cover1, Cover2, Cover3];

  return (
    <div className={`image ${className}`}>
      <img
        src={showPlaylist ? playlistCover[songIndex] : cover[songIndex]}
        alt={cover}
      />
    </div>
  );
};

export default Image;
