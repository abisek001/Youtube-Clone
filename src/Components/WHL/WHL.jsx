import React from "react";

import LeftsideBar from "../Leftside_Bar/LeftsideBar";
import "./WHL.css";
import WHLVideoList from "./WHLVideoList";

function WHL({ page, videoList }) {
  return (
    <div className="WHL_Container">
      <LeftsideBar />
      <div className="history_Container">
        <div className="history_Leftside">
          <b>Your {page} Shown Here</b>
          {page === "History" && (
            <span className="clear_History">Clear History</span>
          )}
        </div>
        <div className="history_Rightside">
          <h1>{page}</h1>
          <div className="WHL_List">
            <WHLVideoList page={page} videoList={videoList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WHL;
