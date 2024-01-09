import React from "react";
import "./Track.scss";

import { FaPause, FaPlay } from "react-icons/fa";
import secondsToMMSS from "../../../../utils/secondsToMMSS";
import { useAudio } from "../../../../hooks/useAudio";

const Track = (track) => {
  const { id, preview, duration, title, artists } = track;

  const { currentTrack, isPlaying, handleToggleAudio } = useAudio();
  const isCurrentTrack = currentTrack.id === id && isPlaying;

  const formattedDuration = secondsToMMSS(duration);

  return (
    <div className={`track ${isCurrentTrack ? "active" : ""}`}>
      <div className="controls">
        <button className="btn-play" onClick={() => handleToggleAudio(track)}>
          {isCurrentTrack ? <FaPause /> : <FaPlay />}
        </button>
        <img className="preview" src={preview} alt="" />
        <div className="credits">
          <strong className="title">{title}</strong>
          <span className="artists">{artists}</span>
        </div>
      </div>
      <div className="duration">{formattedDuration}</div>
    </div>
  );
};

export default Track;
