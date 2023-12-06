import React from "react";
import { Link } from "react-router-dom";

import "./ShowVideo.css";

function ShowVideo({ vids }) {
  return (
    <Link to={`/video/${vids?._id}`}>
      <div /* className="video_Container" */>
        <video controls className="Video_player">
          <source src={`${vids?.video_src}`} />
        </video>
      </div>
      <div className="video_Description">
        {vids.logo === undefined || null ? (
          <div className="chanel_Video">
            <div className="char_Video_logo">
              <span className="chanel_Video_logo">
                {vids?.Uploder?.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        ) : (
          <div className="chanel_Video">
            <div className="char_Video_logo">
              <img
                src={`${vids?.logo}`}
                alt="chanel logo"
                className="chanel_Video_logo"
              />
            </div>
          </div>
        )}
        <div className="video_Details">
          <span className="video_Title">{vids?.title}</span>
          <br />
          <span className="Chanel_Name">{vids?.Chanel}</span>

          <span className="video_Views">
            1k views<div className="dot">.</div> 1years ago
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ShowVideo;
