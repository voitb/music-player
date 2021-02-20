import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../Components/Icon";
import { ReactComponent as Speaker } from "../../svgs/speaker.svg";
import { ReactComponent as SpeakerSilent } from "../../svgs/speaker-silent.svg";
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
  setFullSize,
  fullSize,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onSpeakerOver = () => {
    setIsOpen(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const setMute = () => {
    if (volumeState > 0) {
      setVolumeState(0);
    } else {
      setVolumeState(100);
    }
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
        <div
          className={`controller-row ${!fullSize && "controller-row-small"}`}
        >
          <motion.div
            className="side-controlls"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
          >
            <Playlist className="svg" />
          </motion.div>
          <div className="middle-controlls">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FastForward
                onClick={() => previousSong()}
                alt="FastForward Icon"
                className="rotate-icon nav-controlls svg"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
              whileTap={{ scale: 0.9 }}
              onClick={() => setMute()}
            >
              {volumeState > 0 && <Speaker className="svg" />}
              {volumeState < 1 && <SpeakerSilent className="svg" />}
            </motion.div>
          </div>
        </div>
      </div>
      {fullSize && (
        <motion.div
          className="lower-controller"
          onClick={() => setFullSize(!fullSize)}
          whileTap={{ scale: 0.85 }}
        >
          <Chevron className="svg" alt="Chevron Icon" />
        </motion.div>
      )}
    </>
  );
};

export default Controller;
