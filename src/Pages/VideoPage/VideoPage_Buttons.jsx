import React, { useState } from "react";

//Recat Icons
import { BsThreeDots } from "react-icons/bs";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
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

  const [like, setLike] = useState(false);

  const [disLike, setDisLike] = useState(false);

  const toggleSave = ()  => {
    if (saveVideo) {
      setSaveVideo(false)
    } else {
      setSaveVideo(true)
    }
  }

  const togglelike = ()  => {
    if (like) {
      setLike(false)
    } else {
      setLike(true)
    }
  }

  const toggledisLike = ()  => {
    if (disLike) {
      setDisLike(false)
    } else {
      setDisLike(true)
    }
  }
  return (
    <div className="VideoPage_Buttons">
      <div className="save_button" onClick={togglelike}>
        {like ? (
          <>
            <AiFillLike size={22} />
          </>
        ) : (
          <>
            <AiOutlineLike size={22} />
          </>
        )}
        <b className="Save_text">0</b>
      </div>

      <div className="save_button" onClick={toggledisLike}>
        {disLike ? (
          <>
            <AiFillDislike size={22} />
          </>
        ) : (
          <>
            <AiOutlineDislike size={22} />
          </>
        )}
      </div>

      <div className="save_button" onClick={toggleSave}>
        {saveVideo ? (
          <>
            <MdPlaylistAddCheck size={22} />
            <b className="Save_text">Saved</b>
          </>
        ) : (
          <>
            <RiPlayListAddFill size={22} />
            <b className="Save_text">Save</b>
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
      <div className="save_button">
        <BsThreeDots size={22} />
      </div>
    </div>
  );
}

export default VideoPage_Buttons;
