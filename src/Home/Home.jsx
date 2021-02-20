import React, { useState } from "react";
import Player from "../Player/Player";
import Africa from "../music/africa.mp3";
import Everything from "../music/everything-i-wanted.mp3";
import DownUnder from "../music/Men-At-Work-Down-Under.mp3";
import AroundTheWorld from "../music/around-the-world.mp3";
import KillinIt from "../music/Killin-it.mp3";
import Stripped from "../music/Stripped.mp3";
import SweetHomeAlabama from "../music/Sweet-Home-Alabama.mp3";
import TheFinalCountdown from "../music/The-Final-Countdown.mp3";
import { songs, playlists } from "./data";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";

const Home = () => {
  const audio = [
    Africa,
    Everything,
    DownUnder,
    AroundTheWorld,
    KillinIt,
    Stripped,
    SweetHomeAlabama,
    TheFinalCountdown,
  ];
  const [songIndex, setSongIndex] = useState(0);
  const [artist, setArtist] = useState(songs[songIndex].artist);
  const [songName, setSongName] = useState(songs[songIndex].songName);

  const [progressWidth, setProgressWidth] = useState(0);
  const [volumeState, setVolumeState] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(new Audio(audio[songIndex]));

  const [fullSize, setFullSize] = useState(false);

  const variants = {
    full: { y: 0 },
    small: { y: "100%" },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HomeContainer
        songs={songs}
        playlists={playlists}
        songIndex={songIndex}
        setSongIndex={setSongIndex}
      />
      <Player
        audio={audio}
        songIndex={songIndex}
        setSongIndex={setSongIndex}
        artist={artist}
        setArtist={setArtist}
        songName={songName}
        setSongName={setSongName}
        progressWidth={progressWidth}
        setProgressWidth={setProgressWidth}
        volumeState={volumeState}
        setVolumeState={setVolumeState}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentAudio={currentAudio}
        setCurrentAudio={setCurrentAudio}
        songs={songs}
        fullSize={fullSize}
        setFullSize={setFullSize}
      />
      <motion.div
        animate={fullSize ? "full" : "small"}
        variants={variants}
        transition={{ duration: 0.1 }}
        className="player-overflow"
      ></motion.div>
    </motion.div>
  );
};

export default Home;
