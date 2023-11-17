import React from "react";
import { AiFillPlaySquare, AiOutlineHome } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineExplore,
} from "react-icons/md";

function DrawerSidebar() {
  return (
    <div className="container_DrawerSidebar">
      <div className="drawerSidebar_Items">
        <div className="drawer_Icone">
          <AiOutlineHome size={22} />
          <span className="drawer_HomeIconeText">Home</span>
        </div>
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
          <div className="drawer_Icone">
            <MdOutlineVideoLibrary size={22} />
            <span className="drawer_HomeIconeText">Library</span>
          </div>
          <div className="drawer_Icone">
            <FaHistory size={22} />
            <span className="drawer_HomeIconeText">History</span>
          </div>
          <div className="drawer_Icone">
            <AiFillPlaySquare size={22} />
            <span className="drawer_HomeIconeText">Your Video</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawerSidebar;
