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

import AfricaCover from "../imgs/toto_africa.jpg";
import EverythingCover from "../imgs/cover1.png";
import DownUnderCover from "../imgs/men_at_work_down_under.jpg";
import AroundTheWolrdCover from "../imgs/around-the-world.jpg";
import KillinItCover from "../imgs/killin-it.jpg";
import StrippedCover from "../imgs/stripped.jpg";
import SweetHomeCover from "../imgs/sweet-home.jpg";
import FinalCountdownCover from "../imgs/final-countdown.jpg";

import Cover1 from "../imgs/covers/cover1.jpg";
import Cover2 from "../imgs/covers/cover2.jpg";
import Cover3 from "../imgs/covers/cover3.jpg";

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

  const cover = [
    AfricaCover,
    EverythingCover,
    DownUnderCover,
    AroundTheWolrdCover,
    KillinItCover,
    StrippedCover,
    SweetHomeCover,
    FinalCountdownCover,
  ];

  const playlistCover = [Cover1, Cover2, Cover3];

  const [songIndex, setSongIndex] = useState(0);
  const [artist, setArtist] = useState(songs[songIndex].artist);
  const [songName, setSongName] = useState(songs[songIndex].songName);

  const [progressWidth, setProgressWidth] = useState(0);
  const [volumeState, setVolumeState] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(new Audio(audio[songIndex]));
  const [repeat, setRepeat] = useState(false);

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
        playlistCover={playlistCover}
        cover={cover}
        songs={songs}
        playlists={playlists}
        songIndex={songIndex}
        setSongIndex={setSongIndex}
      />
      <Player
        playlistCover={playlistCover}
        cover={cover}
        setProgressWidth={setProgressWidth}
        repeat={repeat}
        setRepeat={setRepeat}
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
