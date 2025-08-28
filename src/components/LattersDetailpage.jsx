"use client";
import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Calendar } from "lucide-react";

const LattersDetailpage = () => {
  const audioRef = useRef(null);
  const dateInputRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // ✅ Date state (default: 2025-01-08)
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

  // ✅ Audio time + duration handling
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

  // ✅ Date format readable
  const formatDate = (dateStr) => {
    try {
      const options = { day: "2-digit", month: "short", year: "numeric" };
      return new Date(dateStr).toLocaleDateString("en-GB", options);
    } catch {
      return dateStr;
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center px-6 py-10"
      style={{ backgroundImage: "url('/images/bg button.webp')" }}
    >
      <div className="max-w-5xl w-full px-4 text-black">
        {/* Date + Category pill with line separator */}
        <div className="flex items-center text-sm mb-4">
          <div className="inline-flex items-center bg-white text-black px-4 py-1 rounded-full shadow-sm border border-gray-300 space-x-2">
            {/* Calendar Icon for date change */}
            <button
              onClick={() => dateInputRef.current.showPicker()} // 👈 native date picker open
              className="text-gray-700 hover:text-black flex items-center"
            >
              <Calendar className="w-4 h-4 mr-1" />
            </button>

            {/* Show formatted date */}
            <span className="text-sm">{formatDate(date)}</span>

            {/* hidden date input */}
            <input
              type="date"
              ref={dateInputRef}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="hidden"
            />

            {/* vertical line separator */}
            <span className="w-px h-4 bg-black mx-3" />

            <span className="text-sm">War Political</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">Want More Historic Letters?</h1>

        {/* Historic Letter Card */}
        <div className="bg-gradient-to-b from-yellow-100 to-yellow-200 text-black rounded-lg overflow-hidden shadow-xl mb-6">
          <img
            src="/images/latterdetailpage img.webp"
            alt="Historic Letter"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* ✅ Audio Player */}
        <div className="rounded-2xl overflow-hidden shadow-md p-2 mb-8 bg-white/80 w-full">
          <div className="flex items-center space-x-3 w-full">
            {/* Play / Pause Button */}
            <button
              onClick={togglePlay}
              style={{ backgroundColor: "#6E4A27" }}
              className="text-white rounded-full p-2 shadow-md hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Progress + Time */}
            <div className="flex-1">
              {/* Progress bar */}
              <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-1"
                  style={{
                    width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                    backgroundColor: "#6E4A27",
                  }}
                />
              </div>

              {/* Time */}
              <div className="flex justify-between text-[11px] text-gray-700 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Hidden Audio */}
            <audio ref={audioRef}>
              <source src="/audio/test audio 1.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
{/* Paragraph with Cards on Right Side */}
<div className="mt-10 flex flex-col md:flex-row items-stretch gap-10">
  {/* Left = Paragraph */}
  <div className="md:w-2/3 w-full text-[22px] md:text-[26px] lg:text-[30px] text-black leading-9 md:leading-10 italic"
       style={{ fontFamily: "'Ephesis'" }}>
    Reduced documents processing time by 60% & improved collaboration
    efficiency. Reduced documents processing time by 60% & improved
    collaboration efficiency. Reduced documents processing time by 60% &
    improved collaboration efficiency. Reduced documents processing time
    by 60% & improved collaboration efficiency. Reduced documents
    processing time by 60% & improved collaboration efficiency. Reduced
    documents processing.
    <br /><br />
    Reduced documents processing time by 60% & improved collaboration
    efficiency. Reduced documents processing time by 60% & improved
    collaboration efficiency. Reduced documents processing time by 60% &
    improved collaboration efficiency. Reduced documents processing time
    by 60% & improved collaboration efficiency. Reduced documents
    processing time by 60% & improved collaboration efficiency. Reduced
    documents processing.
    <br /><br />
    Reduced documents processing time by 60% & improved collaboration
    efficiency. Reduced documents processing time by 60% & improved
    collaboration efficiency. Reduced documents processing time by 60% &
    improved collaboration.
  </div>

  {/* Right = Cards */}
  <div className="md:w-1/3 w-full flex flex-col justify-between">
    {/* Card 1 */}
    <div className="rounded-lg shadow-md border border-gray-300 overflow-hidden flex-1">
      <img
        src="/images/thumbnails.webp"
        alt="Thumbnail 1"
        className="w-full h-72 object-cover"   // 👈 height barhaya
      />
      <p className="text-[30px] text-black italic p-3 "
         style={{ fontFamily: "'Ephesis'" }}>
        Join our archive mailing list and never miss an update.
      </p>
    </div>

    {/* Card 2 */}
    <div className="rounded-lg shadow-md border border-gray-300 overflow-hidden flex-1 mt-6">
      <img
        src="/images/thumbnails.webp"
        alt="Thumbnail 2"
        className="w-full h-72 object-cover"   // 👈 height barhaya
      />
      <p className="text-[30px] text-black italic p-3 leading-5"
         style={{ fontFamily: "'Ephesis'" }}>
        Join our archive mailing list and never miss an update.
      </p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default LattersDetailpage;
