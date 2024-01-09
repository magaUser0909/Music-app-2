import React from "react";
import "./SearchTracks.scss";
import { useSearchTracks } from "../../../hooks/useSearchTracks";

const SearchTracks = ({ onChange }) => {
  const { value, handleChange } = useSearchTracks(onChange);

  return (
    <input
      className="search-field"
      type="text"
      placeholder="Поиск треков"
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchTracks;
