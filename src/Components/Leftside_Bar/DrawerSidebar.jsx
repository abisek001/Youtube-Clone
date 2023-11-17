import React from "react";
import { NavLink } from "react-router-dom";

import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineExplore,
  MdOutlineWatchLater,
} from "react-icons/md";

function DrawerSidebar({ toggleDrawer, toggleDrawerSidebar }) {
  return (
    <div className="container_DrawerSidebar" style={toggleDrawerSidebar}>
      <div className="drawerSidebar_Items">
        <NavLink to={'/'} className="drawer_Icone">
          <AiOutlineHome size={22} />
          <span className="drawer_HomeIconeText">Home</span>
        </NavLink>
        <div className="drawer_Icone">
          <MdOutlineExplore size={22} />
          <span className="drawer_HomeIconeText">Explore</span>
        </div>
        <div className="drawer_Icone">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/youtube-shorts.png"
            alt="youtube-shorts"
          />
          <span className="drawer_HomeIconeText">Shorts</span>
        </div>
        <div className="drawer_Icone">
          <MdOutlineSubscriptions size={22} />
          <span className="drawer_HomeIconeText">Subscriptions</span>
        </div>
        <div className="library_Drawer_Sidebar">
          <NavLink to={'/library'} className="drawer_Icone">
            <MdOutlineVideoLibrary size={22} />
            <span className="drawer_HomeIconeText">Library</span>
          </NavLink>
          <NavLink to={'/history'} className="drawer_Icone">
            <FaHistory size={22} />
            <span className="drawer_HomeIconeText">History</span>
          </NavLink>
          <NavLink to={'/yourvideo'} className="drawer_Icone">
            <AiFillPlaySquare size={22} />
            <span className="drawer_HomeIconeText">Your Video</span>
          </NavLink>
          <NavLink to={'/watchlater'} className="drawer_Icone">
            <MdOutlineWatchLater size={22} />
            <span className="drawer_HomeIconeText">Watch Later</span>
          </NavLink>
          <NavLink to={'/likedvideo'} className="drawer_Icone">
            <AiFillLike size={22} />
            <span className="drawer_HomeIconeText">Liked Videos</span>
          </NavLink>
        </div>
        <div className="Subscription_Container">
          <h3 className="subscription_title">Subscriptions</h3>
          <div className="subscription_Chanel">
            <p className="chanel_Logo">C</p>
            <span className="chanel_Name">Chanel</span>
          </div>
          <div className="subscription_Chanel">
            <p className="chanel_Logo">C</p>
            <span className="chanel_Name">Chanel</span>
          </div>
          <div className="subscription_Chanel">
            <p className="chanel_Logo">C</p>
            <span className="chanel_Name">Chanel</span>
          </div>
          <div className="subscription_Chanel">
            <p className="chanel_Logo">C</p>
            <span className="chanel_Name">Chanel</span>
          </div>
        </div>
      </div>
      <div
        className="toggle_Drawer_Leftsidebar"
        onClick={() => toggleDrawer()}
      ></div>
    </div>
  );
}

export default DrawerSidebar;
