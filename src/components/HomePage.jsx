import React from "react";
import poster from "/images/poster.png";

const Homepage = () => {
  return (
    // container is full width and lets its children define height responsively
    <div className="relative w-full overflow-hidden">
      {/* Video Section: use responsive heights */}
      <div className="w-full h-48 sm:h-56 md:h-[389.61px] z-10">
        <video
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2022/02/09/107243-678130082_large.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Poster Section: placed after video and pulled up with negative margin to overlap */}
      <div className="w-full -mt-12 sm:-mt-16 md:-mt-28 flex justify-center items-start z-20">
        {/* constrain poster width so it looks good on large screens but fills small screens */}
        <img
          src={poster}
          alt="Poster"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Homepage;
