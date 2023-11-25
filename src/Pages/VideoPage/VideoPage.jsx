import React from "react";

import "./VideoPage.css";
import VideoPage_Buttons from "./VideoPage_Buttons";
import Comments from "../../Components/Comments/Comments";

function VideoPage() {
  const video =
    "https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4";
  return (
    <div className="VideoPage_Container">
      <div className="video_Display">
        <video controls className="videoPage_Video">
          <source src={`${video}`} />
        </video>
        <div className="videoPage_Video_Description">
          <div className="videoPage_video_Details">
            <span className="videoPage_video_Title">title</span>
            <br />
            <div className="videoPage_Chanel_Details">
              <div className="videoPage_Chanel">
                <div className="videoPage_Chanel_Logo">A</div>
                <span className="videoPage_Chanel_Name">Marvel India</span>
              </div>
              <VideoPage_Buttons />
            </div>
            <br />
            <span className="videoPage_video_Views">
              1k views<div className="dot">.</div> 1years ago
            </span>
            <div className="videopage_Comments">
              <h3>Comments</h3>
              <Comments/>
            </div>
          </div>
        </div>
      </div>
      <div className="more_Video">More Video</div>
    </div>
  );
}

export default VideoPage;
