import React from "react";
import "./components.scss";

const Image = ({
  className,
  songIndex,
  showPlaylist,
  cover,
  playlistCover,
}) => {
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
