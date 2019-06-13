import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderList = videos.map(video => {
    const {
      id: { videoId: id }
    } = video;
    return <VideoItem key={id} />;
  });

  return <div>{renderList}</div>;
};

export default VideoList;
