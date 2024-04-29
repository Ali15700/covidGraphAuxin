import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Graph from "./pages/Graph/Graph";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // restrict to only logged in users

  return (
    <div  className="App">
     <Routes>
     <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
     {isLoggedIn ? <Route path="/graph" element={<Graph />} /> :  <Route path="/" element={<Login/> } />}
     </Routes>
    </div>
  );
};


export default App;

