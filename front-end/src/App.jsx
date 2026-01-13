import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import RegisterEvent from './pages/RegisterEvent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            <Route path="/register/:id" element={<RegisterEvent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;