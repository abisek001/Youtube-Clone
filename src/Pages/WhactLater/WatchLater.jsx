import React from 'react';
import WHL from '../../Components/WHL/WHL';

function WatchLater() {
  const WatchLater = [
    {
      _id: 1,
      video_src:
        "https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4",
      Chanel: "Marvel India",
      logo: "https://img.icons8.com/avantgarde/100/avengers.png",
      Uploder: "Srikanth",
      title: "Marvel Studios' The Marvels | Official Trailer",
      description: "description of video 1",
    },
    {
      _id: 2,
      video_src:
        "https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4",
      Chanel: "Marvel Artist",
      /* logo:"https://img.icons8.com/avantgarde/100/avengers.png", */
      Uploder: "Abisek",
      title: "Madame Web | Official Trailer",
      description: "description of video 2",
    },
    {
      _id: 3,
      video_src:
        "https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4",
      Chanel: "Marvel Entertinment",
      title: "Top 10 Superheroes Too Dark For The MCU",
      Uploder: "Ranjith",
      logo: "https://img.icons8.com/fluency/48/marvel.png",
      description: "description of video 3",
    },
    {
      _id: 4,
      video_src:
        "https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4",
      Chanel: "Marvel Edit",
      title:
        "Marvel Studios' What If...? Season 2 | Official Trailer In Hindi (AI) | Disney+",
      Uploder: "Naveen",
      /* logo:"https://img.icons8.com/fluency/48/marvel.png", */
      description: "description of video 4",
    },
  ];

  return (
  <div>
    <WHL page = {"Watch Later"} videoList = { WatchLater } />
  </div>
  )
}

export default WatchLater;