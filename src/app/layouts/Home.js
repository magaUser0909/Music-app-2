import React from "react";

import Container from "../components/common/container";

import TracksProvider from "../hooks/useTracks";
import AudioProvider from "../hooks/useAudio";

const Home = () => {
  return (
    <TracksProvider>
      <AudioProvider>
        <Container />
      </AudioProvider>
    </TracksProvider>
  );
};

export default Home;
