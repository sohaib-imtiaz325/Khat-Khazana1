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

      >
        <div className="px-6 py-10 max-w-5xl w-full mx-auto text-black">
          {/* Date + Category */}
          <div className="flex items-center text-sm mb-4 mt-6">
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
          <h1 className="w-full max-w-[700px] text-[32px] sm:text-[40px] md:text-[50px] font-bold leading-[130%] tracking-normal capitalize mb-6">
            Want More Historic Letters?
          </h1>
        </div>

        {/* ✅ Second background wrapper */}
        <div
          className="mt-5 w-full max-w-[1270px] rounded-[16px] 
             pt-10 pr-4 pb-10 pl-4 flex flex-col gap-10 
             bg-cover bg-center mx-auto"
          style={{ backgroundImage: "url('/images/Card.webp')" }}
        >
          <div className="w-full text-black">
            {/* Historic Letter Image */}
            <div className="mb-6">
              <img
                src="/images/latterdetailpage img.webp"
                alt="Historic Letter"
                className="object-cover rounded-[20px] mx-auto w-full max-w-[1200px] h-auto max-h-[550px]"
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
                className="md:w-2/3 w-full text-[18px] sm:text-[20px] md:text-[26px] lg:text-[30px] 
                   text-black leading-7 sm:leading-8 md:leading-10 italic"
                style={{ fontFamily: "'Ephesis'" }}
              >
                Reduced documents processing time by 60% & improved collaboration
                efficiency Reduced documents processing time by 60% & improved
                collaboration efficiency Reduced documents processing time by 60% &
                improved collaboration efficiency.
                <br/>
                <br/>
                Reduced documents processing time by 60% & improved collaboration
                efficiency Reduced documents processing time by 60% & improved
                collaboration efficiency Reduced documents processing time by 60% &
                improved collaboration efficiency.
                <br/> 
                <br/>
                Reduced documents processing time by 60% & improved collaboration
                efficiency Reduced documents processing time by 60% & improved
                collaboration efficiency Reduced documents processing time by 60% &
                improved collaboration efficiency.
              </div>

              {/* ✅ Thumbnails */}
              <div className="md:w-1/3 w-full flex flex-col justify-between relative items-center">
                {/* Heading */}
                <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
                  Related Thumbnails
                </h2>

                {/* Vertical Line → always visible */}
                <div className="absolute top-[70px] left-[10px] sm:left-[20px] w-px h-[400px] border-l border-black opacity-100"></div>

                {/* Card 1 */}
                <div className="w-[180px] sm:w-[200px] h-[200px] rounded-lg shadow-md border border-gray-300 overflow-hidden flex flex-col">
                  <img
                    src="/images/thumbnails.webp"
                    alt="Thumbnail 1"
                    className="w-full h-[140px] object-cover"
                  />
                  <p
                    className="text-[12px] font-semibold text-white italic px-2 py-1 text-center bg-black flex-1 flex items-center justify-center"
                    style={{ fontFamily: "'Ephesis'" }}
                  >
                    Join our archive mailing list and never miss an update.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="w-[180px] sm:w-[200px] h-[200px] rounded-lg shadow-md border border-gray-300 overflow-hidden mt-6 flex flex-col">
                  <img
                    src="/images/thumbnails.webp"
                    alt="Thumbnail 2"
                    className="w-full h-[140px] object-cover"
                  />
                  <p
                    className="text-[12px] font-semibold text-white italic px-2 py-1 text-center bg-black flex-1 flex items-center justify-center"
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

        {/* ✅ End Cards Section with fixed layout */}
       <div className="mt-12 w-full flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" style={{ maxWidth: "1270px" }}>
    {cards.map((card, i) => (
      <div
        className="relative cursor-pointer rounded-[20px] mx-auto overflow-hidden"
        style={{ width: "364px", height: "416.34px" }}
        key={i}
      >
        {/* Card Background Image */}
        <img
          src={card.img}
          alt="Card Background"
          className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
        />

        {/* Overlay Image */}
        <div className="flex justify-center z-10 pt-[30px] relative">
          <img
            src={card.overlay}
            alt="Overlay"
            className="object-contain drop-shadow-lg"
            style={{
              width: "324px",
              height: "252.34px",
            }}
          />
        </div>

        {/* Bottom Text */}
        <div
          className="absolute text-left"
          style={{
            width: "290px",
            height: "27px",
            top: "302.34px",
            left: "23px",
          }}
        >
          <h2
            className="font-semibold text-black mb-1 drop-shadow text-24px">
            Want more historic letters?
          </h2>
          <p
            className="font-medium italic leading-snug text-20px"
            style={{ fontFamily: "'Ephesis'",  }}
          >
            Join our archive mailing list and never miss an update. Join our archive mailing list and never miss an update.
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </>
  );
};

export default LattersDetailpage;
