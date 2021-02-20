import React from "react";
import Loader from "react-loader-spinner";
import "./PlayerLoader.scss";

const PlayerLoader = () => {
  return (
    <div className="loader-wrapper">
      <Loader
        className="loader"
        type="Audio"
        color="rgb(231, 76, 60)"
        height={80}
        width={80}
      />
    </div>
  );
};

export default PlayerLoader;
