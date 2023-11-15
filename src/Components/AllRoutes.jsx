import React from 'react';
import Home from "../Pages/Home/Home";
import Library from '../Pages/Library/Library';
import { Routes, Route, Link } from "react-router-dom";


function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>} />
    </Routes>
  )
}

export default AllRoutes;