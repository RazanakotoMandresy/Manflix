import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ChoiceOfregsitre from "./pages/ChoiceOfregsitre";
import RegisterPage from "./pages/RegisterPage";
import Post from "./components/Post";
import Video from "./pages/Video";
import { List } from "./components/List";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List" element={<List />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Choice" element={<ChoiceOfregsitre />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Video/:id" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
