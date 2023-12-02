import React from "react";
import ShowVideo from "../ShowVideo/ShowVideo";
import './ShowVideoGrid.css';

function ShowVideoGrid({ videos }) {
  return (
    <div className="video_Grid_Container">
      {videos.map((vid) => {
        return <div className="video_Box_App" key={vid._id}>
            <ShowVideo vids = {vid}/>
        </div>
      })}
    </div>
  );
}

export default ShowVideoGrid;
