import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from './Components/AllRoutes';
import DrawerSidebar from './Components/Leftside_Bar/DrawerSidebar';

function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({ display: "none" });
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex"
      })
    } else {
      setToggleDrawerSidebar({
        display: "none"
      })
    }
  }
  return (
    <BrowserRouter >
      <Navbar toggleDrawer={toggleDrawer} />
      <DrawerSidebar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar} />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
