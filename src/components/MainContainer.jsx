import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const buttons = [
    "All",
    "Music",
    "T-Series",
    "Mixes",
    "Movie musicals",
    "Web Development",
    "Machine Learning",
    "Software Engineering",
    "Cricket",
    "News",
    "Drama",
  ];

  return (
    <div className="col-span-10">
      <ButtonList buttons={buttons} />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
