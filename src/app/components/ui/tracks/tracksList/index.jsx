import React from "react";
import "./TracksList.scss";

import { useTracks } from "../../../../hooks/useTracks";
import Track from "../track";

const TracksList = () => {
  const { tracks } = useTracks();

  return (
    <div className="tracks">
      {tracks.map((track) => (
        <Track key={track.id} {...track} />
      ))}
    </div>
  );
};

export default TracksList;
