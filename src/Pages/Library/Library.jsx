import React from "react";
import { FaHistory } from "react-icons/fa";

import LeftsideBar from "../../Components/Leftside_Bar/LeftsideBar";
import "./Library.css";
import WHLVideoList from "../../Components/WHL/WHLVideoList";

function Library() {
  const videos = [
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
    {
      _id: 5,
      video_src:
        "https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4",
      Chanel: "Marvel Edit",
      title:
        "Marvel Studios' What If...? Season 2 | Official Trailer In Hindi (AI) | Disney+",
      Uploder: "Naveen",
      /* logo:"https://img.icons8.com/fluency/48/marvel.png", */
      description: "description of video 4",
    },
    {
      _id: 5,
      video_src:
        "https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4",
      Chanel: "Marvel Edit",
      title:
        "Marvel Studios' What If...? Season 2 | Official Trailer In Hindi (AI) | Disney+",
      Uploder: "Naveen",
      /* logo:"https://img.icons8.com/fluency/48/marvel.png", */
      description: "description of video 4",
    },
    {
      _id: 5,
      video_src:
        "https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4",
      Chanel: "Marvel Edit",
      title:
        "Marvel Studios' What If...? Season 2 | Official Trailer In Hindi (AI) | Disney+",
      Uploder: "Naveen",
      /* logo:"https://img.icons8.com/fluency/48/marvel.png", */
      description: "description of video 4",
    },
    {
      _id: 5,
      video_src:
        "https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4",
      Chanel: "Marvel Edit",
      title:
        "Marvel Studios' What If...? Season 2 | Official Trailer In Hindi (AI) | Disney+",
      Uploder: "Naveen",
      /* logo:"https://img.icons8.com/fluency/48/marvel.png", */
      description: "description of video 4",
    },
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
    {
      _id: 5,
      video_src:
        "https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4",
      Chanel: "Marvel Edit",
      title:
        "Marvel Studios' What If...? Season 2 | Official Trailer In Hindi (AI) | Disney+",
      Uploder: "Naveen",
      /* logo:"https://img.icons8.com/fluency/48/marvel.png", */
      description: "description of video 4",
    },
    {
      _id: 5,
      video_src:
        "https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4",
      Chanel: "Marvel Edit",
      title:
        "Marvel Studios' What If...? Season 2 | Official Trailer In Hindi (AI) | Disney+",
      Uploder: "Naveen",
      /* logo:"https://img.icons8.com/fluency/48/marvel.png", */
      description: "description of video 4",
    },
    {
      _id: 5,
      video_src:
        "https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4",
      Chanel: "Marvel Edit",
      title:
        "Marvel Studios' What If...? Season 2 | Official Trailer In Hindi (AI) | Disney+",
      Uploder: "Naveen",
      /* logo:"https://img.icons8.com/fluency/48/marvel.png", */
      description: "description of video 4",
    },
    {
      _id: 5,
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
    <div className="app_Page_Container">
      <LeftsideBar />
      <div className="app_Page_Items">
        <div className="videoPage_Container">
          <h1 className="libraryPage_Title">
            <b className="libraryPage_History_Icone">
              <FaHistory />
            </b>
            <b>History</b>
          </h1>
          <div className="library_VideoList">
            <div>
              <WHLVideoList page={"History"} videoList={videos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
