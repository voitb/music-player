import React from "react";
import Image from "../Player/Components/Image";

const SongsMap = ({ songs, setSongIndex, showPlaylist }) => {
  return (
    <div className="trending">
      {songs.map((song, key) => {
        return (
          <div
            className="trending-song"
            key={song.songName}
            onClick={() => setSongIndex(key)}
          >
            <Image
              playerImg={false}
              showPlaylist={showPlaylist}
              songIndex={key}
              className="trending-img"
            />
            {!showPlaylist ? (
              <>
                <div className="trending-artist">{song.artist}</div>
                <div className="trending-song-name">{song.songName}</div>
              </>
            ) : (
              <div className="trending-playlist">{song}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SongsMap;
