import React from "react";

const Progress = ({
  progressWidth,
  currentTime,
  songTime,
  setFullSize,
  fullSize,
}) => {
  return (
    <>
      <div
        className={`progress-container ${
          !fullSize && "progress-container-small"
        }`}
      >
        {!fullSize && (
          <div className="time-small">
            {Math.floor(currentTime % 60) > 9
              ? Math.floor(currentTime / 60) +
                ":" +
                Math.floor(currentTime % 60)
              : Math.floor(currentTime / 60) +
                ":0" +
                Math.floor(currentTime % 60)}
          </div>
        )}
        <input
          type="range"
          min="0"
          max="100"
          value={progressWidth}
          onClick={(e) => console.log(e.target.value)}
          style={{
            background: `-webkit-linear-gradient(left, rgb(231, 76, 60) 0%, rgb(231, 76, 60) ${progressWidth}%, rgb(153, 153, 153) ${progressWidth}%)`,
          }}
          step="0.001"
        />
        {!fullSize && (
          <div className="time-small">
            {!songTime
              ? "0:00"
              : Math.floor(songTime % 60) > 10
              ? Math.floor(songTime / 60) + ":" + Math.floor(songTime % 60)
              : Math.floor(songTime / 60) + ":0" + Math.floor(songTime % 60)}
          </div>
        )}
      </div>
      {fullSize && (
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
      )}
    </>
  );
};

export default Progress;
