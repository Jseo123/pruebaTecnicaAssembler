import React from "react";
import "./Header.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { KeyboardArrowDown } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header">
      <img src="/images/giphyLogo.png" alt="Page Logo"></img>
      <div className="menu">
        <h2>Reactions</h2>
        <h2>Sports</h2>
        <h2>Entertainment</h2>
        <h2>Artists</h2>
        <h2>Stickers</h2>
        <MoreVertIcon />
      </div>
      <div className="button">
        <h2>Upload</h2>
      </div>
      <div className="button">
        <h2>Create</h2>
      </div>
      <div className="profile">
        <img src="/images/avatar.png" alt="avatar"></img>
        <h2>name</h2>
        <KeyboardArrowDown />
      </div>
    </div>
  );
};

export default Header;
