import React, { useState } from "react";

//Recat Icons
import { BsThreeDots } from "react-icons/bs";
import { MdPlaylistAddCheck } from "react-icons/md";
import { RiPlayListAddFill } from "react-icons/ri";

//created files
import "./VideoPage.css";

function VideoPage_Buttons() {
  const [saveVideo, setSaveVideo] = useState(false);
  return (
    <div className="VideoPage_Buttons">
      <div className="threeDot_button">
        <BsThreeDots size={22} />
      </div>
      <div className="save_button">
        {saveVideo ? (
          <>
            <MdPlaylistAddCheck size={22} />
            <b className="Save_text">save</b>
          </>
        ) : (
          <>
            <RiPlayListAddFill size={15} />
            <b className="Save_text">saved</b>
          </>
        )}
      </div>
    </div>
  );
}

export default VideoPage_Buttons;
