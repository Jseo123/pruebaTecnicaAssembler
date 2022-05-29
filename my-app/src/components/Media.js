import React, { useState } from "react";
import "./Media.css";

const Media = () => {
  const [trending, setTrending] = useState([]);
  return (
    <div className="media">
      <div className="row">
        <div className="row-header">
          <img src="/images/trending.svg" alt="Trending" />
          <h1>Trending</h1>
        </div>
        <div className="trending-container">
          <h1>Content</h1>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/images/artists.svg" alt="Trending" />
          <h1>Artists</h1>
        </div>
        <div className="Artists-container">
          <h1>Content</h1>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/images/clips.svg" alt="Trending" />
          <h1>Clips</h1>
        </div>
        <div className="Clips-container">
          <h1>Content</h1>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/images/Stories.svg" alt="Trending" />
          <h1>Stories</h1>
        </div>
        <div className="trending-container">
          <h1>Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Media;
