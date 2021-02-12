import React, { useState, useEffect } from "react";
import Controller from "./Controller/Controller";
import Image from "./Components/Image";
import Title from "./Components/Title";
import Progress from "./Components/Progress";
import songs from "./data";
import { motion } from "framer-motion";
import Africa from "../music/africa.mp3";
import Everything from "../music/everything-i-wanted.mp3";
import DownUnder from "../music/Men-At-Work-Down-Under.mp3";

const Player = () => {
  const audio = [Africa, Everything, DownUnder];
  const [songIndex, setSongIndex] = useState(0);
  // const [audio, setAudio] = useState(new Audio(songs.audio[songIndex]));
  const [artist, setArtist] = useState(songs.artist[songIndex]);
  const [songName, setSongName] = useState(songs.songName[songIndex]);
  // const [cover, setCover] = useState(songs.cover[songIndex]);

  const [progressWidth, setProgressWidth] = useState(0);
  const [volumeState, setVolumeState] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(new Audio(audio[songIndex]));

  const nextSong = () => {
    if (audio.length === songIndex + 1) {
      setSongIndex(0);
    } else {
      setSongIndex(songIndex + 1);
    }
  };

  const previousSong = () => {
    if (songIndex === 0) {
      setSongIndex(audio.length - 1);
    } else {
      setSongIndex(songIndex - 1);
    }
  };

  useEffect(() => {
    setArtist(songs.artist[songIndex]);
    setSongName(songs.songName[songIndex]);
    setCurrentAudio(new Audio(audio[songIndex]));
    currentAudio.pause();
    currentAudio.currentTime = 0;
    setIsPlaying(false);
    // setCover(songs.cover[songIndex]);
  }, [songIndex]);

  useEffect(() => {
    setIsPlaying(true);
  }, [artist]);

  useEffect(() => {
    setIsPlaying(false);
  }, []);

  currentAudio.ontimeupdate = () => {
    setProgressWidth((100 / currentAudio.duration) * currentAudio.currentTime);
  };

  return (
    <motion.div
      className="full-height-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="cover-container">
        <Image songIndex={songIndex} className="cover-image" />
      </div>
      <div className="controls-container">
        <Title artist={artist} songName={songName} />
        <Progress
          progressWidth={progressWidth}
          setProgressWidth={setProgressWidth}
          currentTime={currentAudio.currentTime}
          songTime={currentAudio.duration}
        />
        <Controller
          songIndex={songIndex}
          nextSong={nextSong}
          previousSong={previousSong}
          progressWidth={progressWidth}
          setProgressWidth={setProgressWidth}
          volumeState={volumeState}
          setVolumeState={setVolumeState}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentAudio={currentAudio}
        />
      </div>
    </motion.div>
  );
};

export default Player;
