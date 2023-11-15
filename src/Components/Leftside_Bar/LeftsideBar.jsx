import React from "react";
import "./LeftsideBar.css";

function LeftsideBar() {
  return (
    <div className="LeftsideBar_Container">
      <div className="icones_Container">
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-sharp/24/home.png"
          alt="home"
          className="homeIcone"
        />
        <span className="homeIconeText">Home</span>
      </div>
    </div>
  );
}

export default LeftsideBar;
