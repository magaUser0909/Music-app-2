import React, { useEffect, useState } from "react";
import "./Playbar.scss";

import { FaPause, FaPlay } from "react-icons/fa";

import { useAudio } from "../../../hooks/useAudio";
import secondsToMMSS from "../../../utils/secondsToMMSS";

const TimeControls = () => {
  const [currentTime, setCurrentTime] = useState(0);

  const { audio, currentTrack } = useAudio();

  const { duration } = currentTrack;

  const sliderCurrentTime = Math.round((currentTime / duration) * 100);

  const formattedCurrentTime = secondsToMMSS(currentTime);

  const handleChangeCurrentTime = ({ target }) => {
    const time = Math.round((target.value / 100) * duration);

    setCurrentTime(time);
    audio.currentTime = time;
  };

  useEffect(() => {
    const timeInterval = window.setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 1000);

    return () => {
      window.clearInterval(timeInterval);
    };
  }, []);

  console.log("time controls");

  return (
    <>
      <div className="current-time">{formattedCurrentTime}</div>
      <input
        className="range"
        type="range"
        min={0}
        max={100}
        value={sliderCurrentTime}
        onChange={handleChangeCurrentTime}
      />
    </>
  );
};

const Playbar = () => {
  const { isPlaying, currentTrack, handleToggleAudio } = useAudio();
  const { title, preview, artists, duration } = currentTrack;

  const formattedDuration = secondsToMMSS(duration);

  console.log("playbar");

  return (
    <div className="playbar">
      <div className="content">
        <div className="content-left">
          <img className="preview" src={preview} alt="" />
          <button
            className="btn-play"
            onClick={() => handleToggleAudio(currentTrack)}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <div className="credits">
            <b className="title">{title}</b>
            <span className="artists">{artists}</span>
          </div>
        </div>

        <div className="controls">
          <TimeControls />
          <div className="duration">{formattedDuration}</div>
        </div>
      </div>
    </div>
  );
};

export default Playbar;
