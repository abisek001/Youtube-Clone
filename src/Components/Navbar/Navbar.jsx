import React from "react";
import "./Navbar.css";
import Searchbar from "./Searchbar/Searchbar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";

function Navbar() {
  return (
    <div className="container_navbar">
      <div className="logo_Container">
        <div className="leftside_Navbar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
          >
            <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
          </svg>
          <img
            width="100"
            height="20"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
            alt="YouTube-Logo-social-media-those-icons-flat-those-icons"
            className="nav_Logo"
          />
        </div>
        <Searchbar />
        <div className="rightside_Navbar">
          <RiVideoAddLine size={22} className="VideoIcon" />
          <div className="appIcon">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/fluency-systems-regular/48/more.png"
              alt="App icone load failed"
            />
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/fluency-systems-regular/48/more.png"
              alt="App icone load failed"
              className="appImg"
            />
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/fluency-systems-regular/48/more.png"
              alt="App icone load failed"
              className="appImg"
            />
          </div>
          <IoMdNotificationsOutline size={22} className="BellIcone" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
