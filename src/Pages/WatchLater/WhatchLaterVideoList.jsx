import React from "react";
import ShiwVideoList from "../../Components/ShiwVideoList/ShiwVideoList";

function WhatchLaterVideoList({ page, videoList }) {
  return (
    <div>
      {videoList.map((video) => {
        return <div className="whatch_Later_Video">
          <ShiwVideoList videoId = {video._id} key={video._id}/>
        </div>;
      })}
    </div>
  );
}

export default WhatchLaterVideoList;
