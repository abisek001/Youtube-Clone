import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
