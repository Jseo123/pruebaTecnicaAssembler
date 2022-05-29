import React from "react";
import "./Header.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { KeyboardArrowDown } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header">
      <img src="/images/giphyLogo.png" alt="Page Logo"></img>
      <div className="menu">
        <div className="buttonWrap reactions">
          <div className="menu-button hover-reactions">
            <h2>Reactions</h2>
          </div>
        </div>
        <div className="buttonWrap sports">
          <div className="menu-button hover-sports">
            <h2>Sports</h2>
          </div>
        </div>
        <div className="buttonWrap entertainment">
          <div className="menu-button hover-entertainment">
            <h2>Entertainment</h2>
          </div>
        </div>
        <div className="buttonWrap artists">
          <div className="menu-button hover-artists">
            <h2>Artists</h2>
          </div>
        </div>
        <div className="buttonWrap stickers">
          <div className="menu-button hover-stickers">
            <h2>Stickers</h2>
          </div>
        </div>
        <div className="butonWrap moreVertIcon">
          <div className="menu-button hover-moreVertIcon">
            <MoreVertIcon />
          </div>
        </div>
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
