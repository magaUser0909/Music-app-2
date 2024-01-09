import { createContext, useContext, useState, useEffect } from "react";
import API from "../api";
import { useSearchTracks } from "./useSearchTracks";

const TracksContext = createContext();

export const useTracks = () => {
  return useContext(TracksContext);
};

const TracksProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const runTracks = (query) => {
    if (!query) return tracks;

    const lowerCaseQuery = query.toLowerCase().trim();

    return tracks.filter(
      (track) =>
        track.title.toLowerCase().includes(lowerCaseQuery) ||
        track.artists.toLowerCase().includes(lowerCaseQuery)
    );
  };

  const handleChange = (value) => {
    const foundTracks = runTracks(value);
    setFilteredTracks(foundTracks);
  };

  useEffect(() => {
    API.tracks.fetchAll().then((data) => {
      setTracks(data);
      setFilteredTracks(data);
      setLoading(false);
    });
  }, []);

  return (
    <TracksContext.Provider value={{ tracks: filteredTracks, handleChange }}>
      {!isLoading ? children : "Loading..."}
    </TracksContext.Provider>
  );
};

export default TracksProvider;
