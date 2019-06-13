import React from "react";

const VideoDetail = ({ video, searched }) => {
  if (!video) {
    return <div>{searched ? "...loading" : ""}</div>;
  }
  const {
    id: { videoId }
  } = video;

  const { title, description } = video.snippet;

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          allowFullScreen="allowfullscreen"
          frameBorder="0"
          src={videoSrc}
          title={title}
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
