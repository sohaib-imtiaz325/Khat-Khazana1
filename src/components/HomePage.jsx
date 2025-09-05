import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <section className="w-screen min-h-screen relative bg-black overflow-hidden">
      {/* 🔹 Video Section */}
      <video
        className="
          w-full 
          h-[40vh]    /* small phones */
          sm:h-[50vh] /* tablets */
          md:h-[60vh] /* laptops */
          lg:h-[80vh] /* desktops */
          xl:h-screen /* very large desktops */
          object-cover
          block
          align-top
        "
        src="https://cdn.pixabay.com/video/2022/02/09/107243-678130082_large.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Poster Section */}
      <img
        src="/images/poster.webp"
        alt="Poster"
        onClick={() => navigate("/About")}
        className="
          w-full 
          h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] xl:h-[120vh]
          object-cover 
          block 
          align-top 
          cursor-pointer
          mt-0          /* Mobile/Tablet: gap-free below video */
          lg:-mt-52     /* Desktop: -200px overlap */
          transition-transform duration-300 ease-in-out hover:scale-105
        "
      />
    </section>
  );
};

export default Homepage;
