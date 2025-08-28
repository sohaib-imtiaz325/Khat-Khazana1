import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Aboutus from "./components/aboutus";
import Latters from "./components/Letters";
import Homepage from "./components/HomePage";
import Englishletter from "./components/Englishletter";
import Urduletter from "./components/Urduletter";
import Punjabiletter from "./components/Punjabiletter";
import LattersDetailpage from "./components/LattersDetailpage";

// Simple placeholders – replace with your real pages
const Page = ({ title }) => (
  <div className="max-w-[1240px] mx-auto mt-6 bg-white/75 p-6 rounded-md border border-black/10">
    <h1 className="text-2xl font-title mb-2">{title}</h1>
    <p>Content goes here…</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage title="Homepage" />} />
        <Route path="/about" element={<Aboutus title="About Us" />} />
        {/* Main Letters page */}
        <Route path="/letters" element={<Latters title="Letters" />} />

       {/* Sub routes with details */}
<Route path="/letters/english" element={<Englishletter title="Englishletter" />} />
<Route path="/letters/english/:id" element={<LattersDetailpage title="LattersDetailpage" />} />

<Route path="/letters/urdu" element={<Urduletter title="Urduletter" />} />
<Route path="/letters/urdu/:id" element={<LattersDetailpage title="LattersDetailpage" />} />

<Route path="/letters/punjabi" element={<Punjabiletter title="Punjabiletter" />} />
<Route path="/letters/punjabi/:id" element={<LattersDetailpage title="LattersDetailpage" />} />



        <Route path="/photographs" element={<Page title="Photographs" />} />
        <Route
          path="/featured"
          element={<Page title="Featured letters & Photographs" />}
        />
        <Route path="/contact" element={<ContactUs title="ContactUs" />} />
        <Route path="/submission" element={<Page title="Submission" />} />
        <Route path="/shop" element={<Page title="Shop" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
