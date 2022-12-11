import "./App.css";
import React from "react";
import Header from "./Layout/Header";
import Welcome from "./Pages/Welcome";
import BlogPage from "./Pages/BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="home" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
