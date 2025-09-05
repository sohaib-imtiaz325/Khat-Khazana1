import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <section className="w-screen h-screen min-h-screen relative bg-black overflow-y-auto">
      {/* 🔹 Video Section */}
      <video
        className="w-full h-[40vh] relative object-cover homepage-video"
        src="https://cdn.pixabay.com/video/2022/02/09/107243-678130082_large.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Poster Section (directly under video, no gap) */} 
      <img
        src="/images/poster.webp"
        alt="Poster"
        onClick={() => navigate("/about")}
        className="w-full h-full  sm:absolute  bottom-0 cursor-pointer homepage-poster "
      />
    </section>
  );
};

export default Homepage;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Homepage = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="w-screen min-h-screen relative bg-black overflow-y-auto">
//       {/* 🔹 Video Section */}
//       <video
//         className="
//           w-full 
//           fixed 
//           object-cover
          
//           h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[50vh]
//         "
//         src="https://cdn.pixabay.com/video/2022/02/09/107243-678130082_large.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* 🔹 Poster Section (directly under video, responsive) */}
//       <img
//         src="/src/assets/poster.png"
//         alt="Poster"
//         onClick={() => navigate('/about')}
//         className="
//           w-full 
//           absolute bottom-[20px] 
//           cursor-pointer 
//           h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh]
//         "
//       />
//     </section>
//   );
// };

// export default Homepage;
