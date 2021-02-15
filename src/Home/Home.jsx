import React, { useState } from "react";
import Player from "../Player/Player";
import Africa from "../music/africa.mp3";
import Everything from "../music/everything-i-wanted.mp3";
import DownUnder from "../music/Men-At-Work-Down-Under.mp3";
import AroundTheWorld from "../music/around-the-world.mp3";
import { songs, playlists } from "./data";
import HomeContainer from "./HomeContainer";

const Home = () => {
  const audio = [Africa, Everything, DownUnder, AroundTheWorld];
  const [songIndex, setSongIndex] = useState(0);
  const [artist, setArtist] = useState(songs[songIndex].artist);
  const [songName, setSongName] = useState(songs[songIndex].songName);

  const [progressWidth, setProgressWidth] = useState(0);
  const [volumeState, setVolumeState] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(new Audio(audio[songIndex]));

  const [fullSize, setFullSize] = useState(true);

  console.log(songIndex);

  return (
    <>
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
    </>
  );
};

export default Home;
