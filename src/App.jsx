import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Aminities from "./Components/Aminities";
import Gallery from "./Components/Gallery";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import HostInfo from "./Components/HostInfo";
import Terms from "./Components/Terms"
import Privacy from "./Components/Privacy";
import Refund from "./Components/Refund";

const Home = () => (
  <>
    <HeroSection />
    <Gallery />
    <Aminities />
    <Reviews />
    <HostInfo />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-0 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
