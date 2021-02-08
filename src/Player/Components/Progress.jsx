import React from "react";

const Progress = ({
  progressWidth,
  setProgressWidth,
  currentTime,
  songTime,
}) => {
  console.log(!!songTime);
  return (
    <>
      <div className="progress-container">
        <input
          type="range"
          min="0"
          max="100"
          value={progressWidth}
          style={{
            background: `-webkit-linear-gradient(left, rgb(231, 76, 60) 0%, rgb(231, 76, 60) ${progressWidth}%, rgb(153, 153, 153) ${progressWidth}%)`,
          }}
          onChange={(e) => setProgressWidth(e.target.value)}
          step="0.001"
        />
      </div>
      <div className="progress-container timers-padding">
        <div className="timers">
          <div className="time">
            {Math.floor(currentTime % 60) > 10
              ? Math.floor(currentTime / 60) +
                ":" +
                Math.floor(currentTime % 60)
              : Math.floor(currentTime / 60) +
                ":0" +
                Math.floor(currentTime % 60)}
          </div>
          <div className="time">
            {!songTime
              ? "0:00"
              : Math.floor(songTime % 60) > 10
              ? Math.floor(songTime / 60) + ":" + Math.floor(songTime % 60)
              : Math.floor(songTime / 60) + ":0" + Math.floor(songTime % 60)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
