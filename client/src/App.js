import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Reg from './components/Reg';
import Dashboard from './components/Dashboard';
// import Posts from './components/Posts';
// import PostForm from './components/PostForm';

function App() {   
    return (
        <div>
            <TopBar />
            <Navbar />
            <Routes>
              <Route path="*" element={<Hero />} />
              <Route path="/deals" element={<Booking />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Reg />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer /> 
        </div>
    )
}
export default App;
