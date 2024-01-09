import { createContext, useContext, useState } from "react";
import { useTracks } from "./useTracks";

const AudioContext = createContext();

export const useAudio = () => {
  return useContext(AudioContext);
};

const audio = new Audio();

const AudioProvider = ({ children }) => {
  const { tracks } = useTracks();
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setPlaying] = useState(false);

  const handleToggleAudio = (track) => {
    if (currentTrack.id !== track.id) {
      setCurrentTrack(track);
      setPlaying(true);

      audio.src = track.src;
      audio.currentTime = 0;
      audio.play();
    } else {
      if (!audio.src) audio.src = track.src;

      if (isPlaying) {
        audio.pause();
        setPlaying(false);
      } else {
        audio.play();
        setPlaying(true);
      }
    }
  };

  return (
    <AudioContext.Provider
      value={{ audio, currentTrack, isPlaying, handleToggleAudio }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
