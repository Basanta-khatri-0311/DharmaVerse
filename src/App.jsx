import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Wisdom from "./pages/Wisdom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/wisdom" element={<Wisdom />} />
      </Routes>
    </>
  );
};

export default App;
