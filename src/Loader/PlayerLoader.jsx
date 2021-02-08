import React from "react";
import Loader from "react-loader-spinner";
import "./PlayerLoader.scss";

const PlayerLoader = () => {
  return (
    <div className="loader-wrapper">
      <Loader
        className="loader"
        type="Audio"
        color="#D83256"
        height={80}
        width={80}
      />
    </div>
  );
};

export default PlayerLoader;
