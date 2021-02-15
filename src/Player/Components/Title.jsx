import React from "react";

const Title = ({ songName, artist, fullSize }) => {
  return (
    <div className="title-container">
      <div className={`song-name ${!fullSize && "song-name-smaller"}`}>
        {songName}
      </div>
      <div className={`artist ${!fullSize && "artist-smaller"}`}>{artist}</div>
    </div>
  );
};

export default Title;
