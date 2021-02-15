import React from "react";
import MusicRow from "./MusicRow";
import SongsMap from "./SongsMap";

const HomeContainer = ({ songs, songIndex, playlists, setSongIndex }) => {
  return (
    <div className="wrap-container">
      <div className="wrap-center">
        <MusicRow header="New & trending">
          <SongsMap
            showPlaylist={false}
            songs={songs}
            songIndex={songIndex}
            setSongIndex={setSongIndex}
          />
        </MusicRow>
        <MusicRow header="Your playlists">
          <SongsMap
            songs={playlists}
            showPlaylist={true}
            songIndex={songIndex}
            setSongIndex={setSongIndex}
          />
        </MusicRow>
      </div>
    </div>
  );
};

export default HomeContainer;
