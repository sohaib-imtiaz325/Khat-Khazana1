import React from "react";
import poster from "/images/poster.webp";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-hidden">
      {/* Video Section */}
      <div className="w-full h-48 sm:h-56 md:h-[389.61px] z-10">
        <video
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2022/02/09/107243-678130082_large.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Poster Section */}
      <div className="w-full -mt-12 sm:-mt-16 md:-mt-28 flex justify-center items-start z-20">
        <img
          src={poster}
          alt="Poster"
          onClick={() => navigate("/about")} // ✅ yahan "/about" rakha hai
          className="w-full object-cover cursor-pointer hover:opacity-90 transition"
        />
      </div>
    </div>
  );
};

export default Homepage;
