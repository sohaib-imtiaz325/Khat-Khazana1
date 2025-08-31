import React from "react";

function Aboutus() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-10"
      style={{ backgroundImage: "url('/images/bg.webp')" }}
    >
      <div className="max-w-3xl text-center space-y-8 text-gray-800">
        {/* Top Paragraph */}
        <p  className="text-[40px] text-black leading-10 italic mb-5"
                  style={{ fontFamily: "'Ephesis'" }}>
          Leeds Muslim Youth Forum is an organization that supports young people by
          providing opportunities for growth, learning, and leadership. <br />
          We do this by enrolling, supporting and training young people to create
          positive changes in their community while preserving cultural heritage.
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-black font-philosopher">
          Why it is Needed
        </h2>

        {/* Paragraph */}
        <p  className="text-[40px] text-black leading-10 italic mb-5"
                  style={{ fontFamily: "'Ephesis'" }}>
          Through this project we as young people were attempting to retain this
          history in the form of stories, film, archives and memorabilia and
          cascade this to our peer group and other sections of the community. In
          charting this history, we aim to give our community the knowledge and
          confidence to be proud of their heritage while still being confidently
          immersed in modern society today.
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-black font-philosopher">
          The Story
        </h2>

        {/* Paragraph */}
        <p  className="text-[40px] text-black leading-10 italic mb-5"
                  style={{ fontFamily: "'Ephesis'" }}>
          Looking back over sixty years the initiative explores the arrival of the
          Pakistani / Kashmiri community who first arrived in the Leeds area in
          meaningful numbers in the 1950s and 1960s.
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-black font-philosopher">
          Want more historic letters?
        </h2>

        {/* Paragraph */}
        <p  className="text-[40px] text-black leading-10 italic mb-5"
                  style={{ fontFamily: "'Ephesis'" }}>
          Join our archive mailing list and never miss an update.
        </p>

        {/* Input & Button */}
        <div className="flex justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="
              px-4 py-3 w-64 rounded-md
              text-stone-900 placeholder-stone-700
              bg-cover bg-center border border-black
              font-philosopher
            "
            style={{ backgroundImage: "url('/images/Email bg.webp')" }}
          />

          <ParchmentButton onClick={() => alert("Subscribed!")}>
            Shop Now
          </ParchmentButton>
        </div>
      </div>
    </div>
  );
}

/**
 * ParchmentButton
 */
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
        "px-2 py-2",
        "min-w-[100px] md:min-w-[80px]",
        "text-center",
        "text-lg md:text-xl font-semibold",
        "text-stone-900 drop-shadow",
        "bg-center bg-no-repeat bg-cover",
        "rounded-xl shadow-md",
        "transition-transform duration-200 ease-out",
        "hover:scale-[1.02]",
        "active:scale-[0.98]",
        "focus:outline-none focus:ring-2 focus:ring-amber-600/50",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "font-philosopher", // 👈 Button text Philosopher
        className,
      ].join(" ")}
      style={{
        backgroundImage: "url('/images/bg button.webp')",
      }}
    >
      {children}
    </button>
  );
}

export default Aboutus;
