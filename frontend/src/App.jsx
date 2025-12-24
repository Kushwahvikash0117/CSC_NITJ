import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Teams from "./pages/Teams";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateBlog from "./pages/CreateBlog";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
