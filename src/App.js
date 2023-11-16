import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from './Components/AllRoutes';
import { BrowserRouter } from "react-router-dom";
import DrawerSidebar from './Components/Leftside_Bar/DrawerSidebar';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      {
        <DrawerSidebar/>
      }
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
