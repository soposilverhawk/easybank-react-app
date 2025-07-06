import { useState } from "react";
import "./App.css";
import Header from "./components/Shared/Header/Header"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Invitation from "./pages/Invitation";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/invitation" element={<Invitation />} />
      </Routes>
    </div>
  );
}

export default App;
