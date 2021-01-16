import React, { useState, useEffect } from "react";
import Controller from "./Controller/Controller";
import Image from "./Components/Image";
import Title from "./Components/Title";
import Progress from "./Components/Progress";
import songs from "./data";

const Player = () => {
  const [songIndex, setSongIndex] = useState(0);
  // const [audio, setAudio] = useState(new Audio(songs.audio[songIndex]));
  const [artist, setArtist] = useState(songs.artist[songIndex]);
  const [songName, setSongName] = useState(songs.songName[songIndex]);
  // const [cover, setCover] = useState(songs.cover[songIndex]);

  const nextSong = () => {
    setSongIndex(songIndex + 1);
  };

  const previousSong = () => {
    setSongIndex(songIndex - 1);
  };

  useEffect(() => {
    setArtist(songs.artist[songIndex]);
    setSongName(songs.songName[songIndex]);
    // setCover(songs.cover[songIndex]);
  }, [songIndex]);

  return (
    <>
      <div className="cover-container">
        <Image songIndex={songIndex} className="cover-image" />
      </div>
      <div className="controls-container">
        <Title artist={artist} songName={songName} />
        <Progress />
        <Controller
          songIndex={songIndex}
          nextSong={nextSong}
          previousSong={previousSong}
        />
      </div>
    </>
  );
};

export default Player;
