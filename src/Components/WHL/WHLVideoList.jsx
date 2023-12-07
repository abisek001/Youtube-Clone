import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

function WhatchLaterVideoList({ page, videoList }) {
  return (
    <div className="video_Grid_Container">
      {videoList?.map((video) => {
        return (
          <div className="video_Box_App" >
            <ShowVideoList videoId={video._id} key={video._id}/>
          </div>
        );
      })}
    </div>
  );
}

export default WhatchLaterVideoList;
