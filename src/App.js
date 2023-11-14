import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from './Components/AllRoutes';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
