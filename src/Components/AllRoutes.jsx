import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Library from '../Pages/Library/Library';
import WatchLater from '../Pages/WatchLater/WatchLater';
import YourVideo from '../Pages/YourVideo/YourVideo';
import LikedVideo from '../Pages/LikedVideo/LikedVideo';
import History from '../Pages/History/History';
import VideoPage from '../Pages/VideoPage/VideoPage';


function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/watchlater' element={<WatchLater/>} />
        <Route path='/yourvideo' element={<YourVideo/>} />
        <Route path='/likedvideo' element={<LikedVideo/>} />
        <Route path='/video/:id' element={<VideoPage/>} />
    </Routes>
  )
}

export default AllRoutes;