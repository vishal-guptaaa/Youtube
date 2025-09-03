import React from "react";

const VideoCard = ({ info }) => {

  const { snippet, statistics} = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (!info) ? null : (
    <div className="shadow-lg w-72 m-4 bg-gray-100 rounded-md">
      <div>
        <img src={thumbnails.medium.url} className="rounded-lg p-2" alt="thumbnail" />
        <div className="p-2">
            <h2 className="font-bold">{title}</h2>
            <p className="text-sm text-gray-500">{channelTitle}</p>
            <span className="text-xs font-semibold">{viewCount} views</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
