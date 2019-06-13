import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map(video => {
    const {
      id: { videoId: id }
    } = video;
    return <VideoItem onVideoSelect={onVideoSelect} video={video} key={id} />;
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
