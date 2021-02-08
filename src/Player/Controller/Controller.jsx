import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../Components/Icon";
import { ReactComponent as Speaker } from "../../svgs/speaker.svg";
import { ReactComponent as Chevron } from "../../svgs/chevron.svg";
import { ReactComponent as FastForward } from "../../svgs/fast-forward.svg";
import { ReactComponent as PlayButton } from "../../svgs/play-button.svg";
import { ReactComponent as PauseButton } from "../../svgs/pause.svg";
import { ReactComponent as Playlist } from "../../svgs/playlist.svg";

import "./controller.scss";

const Controller = ({
  songIndex,
  previousSong,
  nextSong,
  progressWidth,
  setProgressWidth,
  volumeState,
  setVolumeState,
  isPlaying,
  setIsPlaying,
  currentAudio,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  const onSpeakerOver = () => {
    setIsOpen(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    isPlaying ? currentAudio.play() : currentAudio.pause();
  }, [isPlaying]);

  useEffect(() => {
    currentAudio.volume = volumeState / 100;
  }, [volumeState]);

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
            <motion.div whileTap={{ scale: 0.9 }}>
              <div onClick={() => togglePlay()}>
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
              </div>
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
                  className="input-styling"
                  layout
                  initial={{ opacity: 0, height: 20 }}
                  animate={{ opacity: 1, height: 60 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, height: 20 }}
                  onMouseOver={onSpeakerOver}
                  onMouseOut={toggleOpen}
                >
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volumeState}
                    style={{
                      background: `-webkit-linear-gradient(left, rgb(231, 76, 60) 0%, rgb(231, 76, 60) ${volumeState}%, rgb(153, 153, 153) ${volumeState}%)`,
                    }}
                    onChange={(e) => setVolumeState(e.target.value)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              className="side-controlls"
              whileHover={{ scale: 1.1 }}
              onMouseOver={onSpeakerOver}
              onMouseOut={toggleOpen}
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
