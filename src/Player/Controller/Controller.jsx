import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../Components/Icon";
import { ReactComponent as Speaker } from "../../svgs/speaker.svg";
import { ReactComponent as Chevron } from "../../svgs/chevron.svg";
import { ReactComponent as FastForward } from "../../svgs/fast-forward.svg";
import { ReactComponent as PlayButton } from "../../svgs/play-button.svg";
import { ReactComponent as PauseButton } from "../../svgs/pause.svg";
import { ReactComponent as Playlist } from "../../svgs/playlist.svg";
import Africa from "../../music/africa.mp3";
import Everything from "../../music/everything-i-wanted.mp3";
import DownUnder from "../../music/Men-At-Work-Down-Under.mp3";

import "./controller.scss";

const Controller = ({ songIndex, previousSong, nextSong }) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  const audio = [Africa, Everything, DownUnder];

  const currentAudio = new Audio(audio[songIndex]);

  const play = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      currentAudio.pause();
    } else {
      currentAudio.play();
    }
  };

  useEffect(() => {
    return () => {
      setProgressWidth((100 / audio.duration) * audio.currentTime);
      console.log(progressWidth);
    };
  }, [audio && audio.currentTime]);

  return (
    <>
      <div className="controller-container">
        <div className="controller-row">
          <motion.div className="side-controlls" whileTap={{ scale: 1.1 }}>
            <Playlist className="svg" />
          </motion.div>
          <div className="middle-controlls">
            <motion.div whileTap={{ scale: 0.9 }}>
              <FastForward
                onClick={() => previousSong()}
                alt="FastForward Icon"
                className="rotate-icon nav-controlls svg"
              />
            </motion.div>
            <motion.div onClick={play} whileTap={{ scale: 0.9 }}>
              {isPlaying ? (
                <PauseButton
                  alt="PauseButton Icon"
                  className="nav-controlls play svg"
                />
              ) : (
                <PlayButton
                  alt="PlayButton Icon"
                  className="nav-controlls play svg"
                />
              )}
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }}>
              <FastForward
                onClick={() => nextSong()}
                alt="FastForward Icon"
                className="nav-controlls svg"
              />
            </motion.div>
          </div>
          <div className="volume-handle">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="volume"
                  layout
                  initial={{ opacity: 0, height: 20 }}
                  animate={{ opacity: 1, height: 60 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, height: 20 }}
                >
                  <div className="line" />
                  <motion.div
                    className="dot"
                    whileHover={{ scale: 1.1 }}
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 35 }}
                    dragElastic={false}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              className="side-controlls"
              whileHover={{ scale: 1.1 }}
              onClick={toggleOpen}
            >
              <Speaker className="svg" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="lower-controller">
        <Chevron className="svg" alt="Chevron Icon" />
      </div>
    </>
  );
};

export default Controller;
