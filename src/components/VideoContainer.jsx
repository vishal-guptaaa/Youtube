import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import useVideoContainer from "../hooks/useVideoContainer";
import { Link } from "react-router-dom";


const VideoContainer = () => {
  useVideoContainer();
  const videos = useSelector((store) => store.card.videos);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch"} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
