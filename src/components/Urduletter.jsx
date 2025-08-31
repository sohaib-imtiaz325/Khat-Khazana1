import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const cards = [
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (1).webp", title: "Letter 1", desc: "This is Urdu historic letter 1" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (2).webp", title: "Letter 2", desc: "This is Urdu historic letter 2" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (3).webp", title: "Letter 3", desc: "This is Urdu historic letter 3" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (4).webp", title: "Letter 4", desc: "This is Urdu historic letter 4" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (5).webp", title: "Letter 5", desc: "This is Urdu historic letter 5" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (6).webp", title: "Letter 6", desc: "This is Urdu historic letter 6" },
];

function Urduletter() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/images/bg.webp')" }}
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
        Urdu Letters
      </h1>
      <p className="text-base sm:text-lg italic text-gray-500 mt-2 text-center max-w-xl">
        Get the latest items immediately with promo prices
      </p>

      {/* Filter Section */}
      <div className="w-full max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {["Category", "Owner's Name", "Decade"].map((filter, idx) => (
          <div key={idx} className="flex flex-col items-center w-full">
            <button className="text-lg font-semibold text-[#704214] hover:text-black mb-2">
              By {filter}
            </button>
            <div className="flex items-center w-full border-2 border-[#704214] rounded-full px-4 py-2 bg-white/70">
              <FiSearch className="text-[#704214] mr-2" size={20} />
              <input
                type="text"
                placeholder={`Search ${filter.toLowerCase()}...`}
                className="w-full outline-none bg-transparent placeholder:text-[#704214]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Divider Line */}
      <div className="w-full max-w-5xl border-b border-[#704214] mt-8"></div>

      {/* Historic Letters Cards Section */}
      <div className="mt-12 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((card, i) => (
          <Link to={`/letters/urdu/${i}`} key={i}>
            <div
              className="relative w-full rounded-xl overflow-hidden shadow-lg bg-center bg-cover bg-no-repeat aspect-[4/3] flex flex-col cursor-pointer"
              style={{
                backgroundImage: `url(${card.img})`,
              }}
            >
              {/* Overlay Image */}
              <div className="flex justify-center mt-4 sm:mt-6 z-10 relative">
                <img
                  src={card.overlay}
                  alt="Overlay"
                  className="w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 object-contain drop-shadow-lg"
                />
              </div>

              {/* Bottom Text */}
              <div className="mt-auto py-2 sm:py-3 px-3 sm:px-4 bg-white/70 rounded-t-lg">
                <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-black mb-1 drop-shadow">
                  {card.title}
                </h2>
                <p className="text-xs sm:text-sm lg:text-sm italic text-gray-700 drop-shadow">
                  {card.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Urduletter;
