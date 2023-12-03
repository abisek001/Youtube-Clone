import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

function WhatchLaterVideoList({ page, videoList }) {
  return (
    <div>
      {videoList?.map((video) => {
        return (
          <div className="WHL_Video">
            <ShowVideoList videoId={video._id} key={video._id} />
          </div>
        );
      })}
    </div>
  );
}

export default WhatchLaterVideoList;
