import React from "react";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineExplore,
} from "react-icons/md";
import "./LeftsideBar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

function LeftsideBar() {
  return (
    <div className="LeftsideBar_Container">
      <NavLink to={"/"} className="icones_Container">
        <AiOutlineHome className="homeIcone" size={22} />
        <span className="homeIconeText">Home</span>
      </NavLink>
      <div className="icones_Container">
        <MdOutlineExplore size={22} className="homeIcone" />
        <span className="homeIconeText">Explore</span>
      </div>
      <div className="icones_Container">
      <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/youtube-shorts.png"
            alt="youtube-shorts"
            className="homeIcone"
          />
        <span className="homeIconeText">Shorts</span>
      </div>
      <div className="icones_Container">
        <MdOutlineSubscriptions size={22} className="homeIcone" />
        <span className="homeIconeText">Subscription</span>
      </div>
      <NavLink to={"/library"} className="icones_Container">
        <MdOutlineVideoLibrary size={22} className="homeIcone" />
        <span className="homeIconeText">Library</span>
      </NavLink>
    </div>
  );
}

export default LeftsideBar;
