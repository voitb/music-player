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
      className={`full-height-wrapper ${!fullSize ? "pinned-to-bottom" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div
        className={`cover-container ${
          !fullSize ? "cover-container-small" : ""
        }`}
        onClick={() => setFullSize(!fullSize)}
      >
        <Image
          songIndex={songIndex}
          className={`cover-image ${!fullSize ? "img-smaller" : ""}`}
        />
        {!fullSize && (
          <div className="small-title">
            <Title artist={artist} songName={songName} fullSize={fullSize} />
          </div>
        )}
      </div>
      <div className={`${!fullSize && "controls-center"}`}>
        <div className={`controls-container ${!fullSize && "progress-center"}`}>
          {fullSize && (
            <Title artist={artist} songName={songName} fullSize={fullSize} />
          )}
          <Progress
            progressWidth={progressWidth}
            setProgressWidth={setProgressWidth}
            currentTime={currentAudio.currentTime}
            songTime={currentAudio.duration}
            fullSize={fullSize}
            setFullSize={setFullSize}
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
            fullSize={fullSize}
            setFullSize={setFullSize}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Player;
