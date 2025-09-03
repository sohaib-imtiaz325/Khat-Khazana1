import React from "react";
import poster from "/images/poster.webp";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen relative bg-black overflow-y-auto">
      
      {/* 🔹 Video Section */}
      <video
        className="w-full h-[400px] md:h-[400px] object-cover"
        src="https://cdn.pixabay.com/video/2022/02/09/107243-678130082_large.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Poster Section overlapping */}
      <div className="flex justify-center">
        <img
          src={poster}
          alt="Poster"
          onClick={() => navigate("/about")}
          style={{
            width: "1440px",
            height: "810px",
            marginTop: "-100px", // adjust overlap
          }}
          className="object-cover cursor-pointer z-10"
        />
      </div>
      
    </div>
  );
}; 
export default Homepage;
