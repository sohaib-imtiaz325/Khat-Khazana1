"use client";
import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (1).webp" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (2).webp" },
  { img: "/images/Card.webp", overlay: "/images/Group 1000005552 (3).webp" },
];

const LattersDetailpage = () => {
  const audioRef = useRef(null);
  const dateInputRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [date, setDate] = useState("2025-01-08");

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!audioRef.current) return;

    const updateTime = () => setCurrentTime(audioRef.current.currentTime);
    const setAudioData = () => setDuration(audioRef.current.duration);

    audioRef.current.addEventListener("timeupdate", updateTime);
    audioRef.current.addEventListener("loadedmetadata", setAudioData);

    return () => {
      if (!audioRef.current) return;
      audioRef.current.removeEventListener("timeupdate", updateTime);
      audioRef.current.removeEventListener("loadedmetadata", setAudioData);
    };
  }, []);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const formatDate = (dateStr) => {
    try {
      const options = { day: "2-digit", month: "short", year: "numeric" };
      return new Date(dateStr).toLocaleDateString("en-GB", options);
    } catch {
      return dateStr;
    }
  };

  return (
    <>
      {/* ✅ Base background wrapper */}
      <div
        className="min-h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.webp')" }}
      >
        <div className="px-6 py-10 max-w-5xl w-full mx-auto text-black">
          {/* Date + Category */}
          <div className="flex items-center text-sm mb-4">
            <div className="inline-flex items-center bg-white text-black px-4 py-1 rounded-full shadow-sm border border-gray-300 space-x-2">
              <button
                onClick={() => dateInputRef.current.showPicker()}
                className="text-gray-700 hover:text-black flex items-center"
              >
                <Calendar className="w-4 h-4 mr-1" />
              </button>
              <span className="text-sm">{formatDate(date)}</span>
              <input
                type="date"
                ref={dateInputRef}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="hidden"
              />
              <span className="w-px h-4 bg-black mx-3" />
              <span className="text-sm">War Political</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-6">Want More Historic Letters?</h1>
        </div>

        {/* ✅ Second background wrapper */}
        <div
          className="bg-cover bg-center px-6 py-10 mt-[20px]"
          style={{ backgroundImage: "url('/images/Card.webp')" }}
        >
          <div className="max-w-5xl w-full mx-auto text-black">
            {/* Historic Letter Image */}
            <div className="bg-gradient-to-b from-yellow-100 to-yellow-200 text-black rounded-lg overflow-hidden shadow-xl mb-6">
              <img
                src="/images/latterdetailpage img.webp"
                alt="Historic Letter"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ✅ Audio Player */}
            <div className="rounded-2xl overflow-hidden shadow-md p-2 mb-8 bg-white/80 w-full">
              <div className="flex items-center space-x-3 w-full">
                <button
                  onClick={togglePlay}
                  style={{ backgroundColor: "#6E4A27" }}
                  className="text-white rounded-full p-2 shadow-md hover:scale-105 transition-transform"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <div className="flex-1">
                  <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
                    <div
                      className="h-1"
                      style={{
                        width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                        backgroundColor: "#6E4A27",
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-700 mt-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
                <audio ref={audioRef}>
                  <source src="/audio/test audio 1.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </div>

            {/* Paragraph + Right Cards */}
            <div className="mt-10 flex flex-col md:flex-row items-stretch gap-10">
              <div
                className="md:w-2/3 w-full text-[22px] md:text-[26px] lg:text-[30px] text-black leading-9 md:leading-10 italic"
                style={{ fontFamily: "'Ephesis'" }}
              >
                Reduced documents processing time by 60% & improved collaboration
                efficiency. Reduced documents processing time by 60% & improved
                collaboration efficiency. Reduced documents processing time by 60% & improved
                collaboration efficiency.
                <br />
                <br />
                Reduced documents processing time by 60% & improved collaboration
                efficiency. Reduced documents processing time by 60% & improved
                collaboration efficiency.
                <br />
                <br />
                Reduced documents processing time by 60% & improved collaboration
                efficiency. Reduced documents processing time by 60% & improved
                collaboration efficiency.
              </div>

              {/* ✅ Thumbnails with smaller size */}
              <div className="md:w-1/3 w-full flex flex-col justify-between">
                <div className="rounded-lg shadow-md border border-gray-300 overflow-hidden flex-1">
                  <img
                    src="/images/thumbnails.webp"
                    alt="Thumbnail 1"
                    className="w-full h-48 object-cover" // 👈 kam height
                  />
                  <p
                    className="text-[20px] font-semibold text-white italic p-3 text-center bg-black"
                    style={{ fontFamily: "'Ephesis'" }}
                  >
                    Join our archive mailing list and never miss an update.
                  </p>
                </div>
                <div className="rounded-lg shadow-md border border-gray-300 overflow-hidden flex-1 mt-6">
                  <img
                    src="/images/thumbnails.webp"
                    alt="Thumbnail 2"
                    className="w-full h-48 object-cover" // 👈 kam height
                  />
                  <p
                    className="text-[20px] font-semibold text-white italic p-3 text-center bg-black"
                    style={{ fontFamily: "'Ephesis'" }}
                  >
                    Join our archive mailing list and never miss an update.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Related Letters Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-black">Related Letters</h2>
        </div>

        {/* ✅ End Cards Section (Base bg only) */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6">
          {cards.map((card, i) => (
            <Link to={`/letters/punjabi/${i}`} key={i}>
              <div
                className="relative w-full rounded-xl overflow-hidden shadow-lg bg-center bg-cover bg-no-repeat h-[450px] flex flex-col justify-between cursor-pointer"
                style={{ backgroundImage: `url(${card.img})` }}
              >
                {/* ✅ Top Image */}
                <div className="flex justify-center items-center flex-1">
                  <img
                    src={card.overlay}
                    alt="Overlay"
                    className="max-w-[90%] max-h-[90%] object-contain"
                  />
                </div>

                {/* ✅ Text with Image */}
                <div className="p-4 text-center ">
                  <h3 className="text-2xl font-extrabold text-black mb-2">
                    What More Historical Letters?
                  </h3>
                  <p
                    className="text-lg font-medium  italic leading-snug"
                    style={{ fontFamily: "'Ephesis'" }}
                  >
                    Join our archive mailing list <br /> and never miss an update.
                  </p>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LattersDetailpage;
