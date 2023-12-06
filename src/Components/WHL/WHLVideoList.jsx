import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

function WhatchLaterVideoList({ page, videoList }) {
  return (
    <>
      {videoList?.map((video) => {
        return (
          < >
            <ShowVideoList videoId={video._id} key={video._id} />
          </>
        );
      })}
    </>
  );
}

export default WhatchLaterVideoList;
