import React from "react";
import "./Container.scss";

import SearchTracks from "../../ui/searchTracks";
import Tracks from "../../ui/tracks";
import Playbar from "../../ui/playbar";

import { useTracks } from "../../../hooks/useTracks";

const Container = () => {
  const { handleChange } = useTracks();

  return (
    <div className="container">
      <SearchTracks onChange={handleChange} />
      <Tracks />
      <Playbar />
    </div>
  );
};

export default Container;
