import React, { useEffect } from "react";
import Controller from "./Controller/Controller";
import Image from "./Components/Image";
import Title from "./Components/Title";
import Progress from "./Components/Progress";
import { motion } from "framer-motion";
import "./Player.scss";

const Player = ({
  audio,
  songIndex,
  setSongIndex,
  artist,
  setArtist,
  songName,
  setSongName,
  progressWidth,
  setProgressWidth,
  volumeState,
  setVolumeState,
  isPlaying,
  setIsPlaying,
  currentAudio,
  setCurrentAudio,
  songs,
  fullSize,
  setFullSize,
  repeat,
  setRepeat,
  cover,
}) => {
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
    setArtist(songs[songIndex].artist);
    setSongName(songs[songIndex].songName);
    setCurrentAudio(new Audio(audio[songIndex]));
    currentAudio.pause();
    currentAudio.currentTime = 0;
    setIsPlaying(false);
    // setCover(songs.cover[songIndex]);
  }, [songIndex]);

  useEffect(() => {
    currentAudio.volume = volumeState / 100;
    setIsPlaying(true);
  }, [artist]);

  useEffect(() => {
    setIsPlaying(false);
  }, []);

  currentAudio.ontimeupdate = () => {
    setProgressWidth((100 / currentAudio.duration) * currentAudio.currentTime);
    if (currentAudio.duration === currentAudio.currentTime && !repeat) {
      setSongIndex(songIndex + 1);
    } else if (currentAudio.duration === currentAudio.currentTime && repeat) {
      currentAudio.currentTime = 0;
      currentAudio.play();
    }
  };

  return (
    <motion.div
      className={`full-height-wrapper ${!fullSize ? "pinned-to-bottom" : ""}`}
    >
      <motion.div
        className={`cover-container ${
          !fullSize ? "cover-container-small" : ""
        }`}
        onClick={() => !fullSize && setFullSize(!fullSize)}
        whileTap={!fullSize && { scale: 0.985 }}
      >
        <Image
          songIndex={songIndex}
          className={`cover-image ${!fullSize ? "img-smaller" : ""}`}
          cover={cover}
        />
        {!fullSize && (
          <div className={`small-title ${!fullSize && "hide-title"}`}>
            <Title artist={artist} songName={songName} fullSize={fullSize} />
          </div>
        )}
      </motion.div>
      <div className={`${!fullSize && "controls-center"}`}>
        <div className={`controls-container ${!fullSize && "progress-center"}`}>
          {fullSize && (
            <Title artist={artist} songName={songName} fullSize={fullSize} />
          )}
          <Progress
            currentAudio={currentAudio}
            setProgressWidth={setProgressWidth}
            progressWidth={progressWidth}
            setProgressWidth={setProgressWidth}
            currentTime={currentAudio.currentTime}
            songTime={currentAudio.duration}
            fullSize={fullSize}
            setFullSize={setFullSize}
          />
          <Controller
            repeat={repeat}
            setRepeat={setRepeat}
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
            fullSize={fullSize}
            setFullSize={setFullSize}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Player;
