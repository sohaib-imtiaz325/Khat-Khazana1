import React from "react";
import { FiSearch } from "react-icons/fi";

const cards = [
  { img: "/images/Card.webp", overlay: "/images/image 5-min.webp" },
  { img: "/images/Card.webp", overlay: "/images/image 5 (1)-min.webp" },
  { img: "/images/Card.webp", overlay: "/images/image 5 (2).webp" },
  { img: "/images/Card.webp", overlay: "/images/image 5-min.webp" },
  { img: "/images/Card.webp", overlay: "/images/image 5 (1)-min.webp" },
  { img: "/images/Card.webp", overlay: "/images/image 5 (2).webp" },
  { img: "/images/Card.webp", overlay: "/images/image 5-min.webp" },
  { img: "/images/Card.webp", overlay: "/images/image 5 (1)-min.webp" },
  { img: "/images/Card.webp", overlay: "/images/image 5 (2).webp" },
];

const PhotoGraph = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center py-12 px-4"
      style={{ backgroundImage: "url('/images/bg.webp')" }}
    >
      <h1 className="text-4xl font-bold text-gray-900">Photographs</h1>
      <p className="text-lg italic text-gray-600 mt-2 text-center">
        Get the latest items immediately with promo prices
      </p>

      {/* Filters */}
      <div className="w-full max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Category", "Owner's Name", "Decade"].map((filter) => (
          <div key={filter} className="flex flex-col items-center">
            <button className="text-lg font-semibold text-[#704214] hover:text-black">
              By {filter}
            </button>
            <div className="flex items-center mt-3 border-2 border-[#704214] rounded-full px-4 py-2 w-full bg-transparent">
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

      <div className="w-full max-w-5xl border-b border-[#704214] mt-8"></div>

      {/* Cards */}
      <div className="mt-12 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative text-center h-[30rem] flex flex-col items-center rounded-xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url('/images/dev background.png-min.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Frame */}
            <div className="absolute top-6 flex items-center justify-center z-10 w-full h-[65%]">
              <img
                src="/images/frame-min.webp"
                alt="Frame"
                className="w-3/5 h-full object-contain"
              />
            </div>

            {/* Overlay Image */}
            <div className="absolute top-6 flex items-center justify-center z-20 w-full h-[65%]">
              <img
                src={card.overlay}
                alt="Overlay"
                className="w-2/5 h-full object-contain"
              />
            </div>

            {/* Bottom text */}
            <div className="absolute bottom-10 w-full px-4 z-30">
              <h2 className="text-lg font-semibold text-black mb-2">
                Want more photographs?
              </h2>
              <p className="text-sm italic text-black">
                Join our archive mailing list and never miss an update.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More & Mailing List */}
      <div className="mt-12 flex flex-col items-center gap-6 w-full max-w-md text-center">
        <ParchmentButton onClick={() => alert("Load More clicked!")}>
          Load More
        </ParchmentButton>

        <h2 className="text-3xl font-bold text-black font-philosopher mt-4">
          Want more historic letters?
        </h2>

        <p className="leading-relaxed font-ephesis text-gray-900">
          Join our archive mailing list and never miss an update.
        </p>

        <div className="flex justify-center items-center gap-4 mt-4 w-full">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 w-64 md:w-80 rounded-md text-stone-900 placeholder-stone-700 border border-black font-philosopher text-base md:text-lg bg-cover bg-center"
            style={{ backgroundImage: "url('/images/Email bg.webp')" }}
          />
          <ParchmentButton onClick={() => alert("Subscribed!")}>
            Shop Now
          </ParchmentButton>
        </div>
      </div>
    </div>
  );
};

// Reusable Button
function ParchmentButton({
  children = "Shop Now",
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center",
        "px-3 py-1",
        "min-w-[60px]",
        "text-center",
        "text-sm font-medium",
        "text-stone-900 drop-shadow",
        "bg-center bg-no-repeat bg-cover",
        "rounded-md border border-black",
        "transition-transform duration-200 ease-out",
        "hover:scale-[1.02]",
        "active:scale-[0.98]",
        "focus:outline-none focus:ring-2 focus:ring-amber-600/50",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "font-philosopher",
        className,
      ].join(" ")}
      style={{ backgroundImage: "url('/images/Email bg.webp')" }}
    >
      {children}
    </button>
  );
}

export default PhotoGraph;
