import React from "react";

import LeftsideBar from "../../Components/Leftside_Bar/LeftsideBar";
import "./WatchLater.css";
import WhatchLaterVideoList from "./WhatchLaterVideoList";

function WatchLater({ page, videoList }) {
  return (
    <div>
      <div className="app_Page_Container">
        <LeftsideBar />
        <div className="history_Container">
          <div className="history_Leftside">
            <b>Your {page} Shown Here</b>
            <span className="clear_History">Clear History</span>
          </div>
          <div className="history_Rightside">
            <h1>{page}</h1>
            <div className="watchlater_List">
              <WhatchLaterVideoList page={page} videoList={videoList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchLater;
