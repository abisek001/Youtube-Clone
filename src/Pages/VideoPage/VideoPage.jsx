import React from 'react';

import './VideoPage.css';

function VideoPage() {
  const video = "https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
  return (
    <div className='VideoPage_Container'>
        <div className="video_Display">
          <video controls className='videoPage_Video'>
            <source src={`${video}`}/>
          </video>
          <div className="videoPage_Video_Details">
          <span className="videoPage_Video_Title">title</span>
          <br/>
          <span className="videoPage_Chanel_Name">Chanel</span> 

          <span className="videoPage_video_Views">1k views<div className="dot">.</div> 1years ago</span>
        </div>
        </div>
    </div>
  )
}

export default VideoPage;