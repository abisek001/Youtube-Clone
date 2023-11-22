import React, { useState } from "react";

//Recat Icons
import { BsThreeDots } from "react-icons/bs";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { MdPlaylistAddCheck } from "react-icons/md";
import {
  RiHeartAddFill,
  RiPlayListAddFill,
  RiShareForwardLine,
} from "react-icons/ri";

//created files
import "./VideoPage.css";

function VideoPage_Buttons() {
  const [saveVideo, setSaveVideo] = useState(false);
  return (
    <div className="VideoPage_Buttons">
      
      <div className="save_button">
        <AiFillLike size={22} />
        <b>0</b>
      </div>
      <div className="save_button">
        <AiFillDislike size={22} />
      </div>
      
      <div className="save_button">
        {saveVideo ? (
          <>
            <MdPlaylistAddCheck size={22} />
            <b className="Save_text">save</b>
          </>
        ) : (
          <>
            <RiPlayListAddFill size={22} />
            <b className="Save_text">Saved</b>
          </>
        )}
      </div>
      <div className="save_button">
        <RiHeartAddFill size={22} />
        <b className="Save_text">Thanks</b>
      </div>
      <div className="save_button">
        <RiShareForwardLine size={22} />
        <b className="Save_text">Share</b>
      </div>
      <div className="threeDot_button">
        <BsThreeDots size={22} />
      </div>
    </div>
  );
}

export default VideoPage_Buttons;
