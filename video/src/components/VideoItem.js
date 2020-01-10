import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
  const { title, decription, thumbnails, publishedAt } = video.snippet;
  const thumbUrl = thumbnails.default.url;
  return (
    <div className="video-item item">
      <img className="ui image" src={thumbUrl}></img>
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
