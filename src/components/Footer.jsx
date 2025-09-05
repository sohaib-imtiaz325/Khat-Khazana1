import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        relative text-black bg-center 
        w-full max-w-[1440px] min-h-[559px] 
        gap-[29px] 
        rounded-t-[52.14px] 
        pt-[40px] px-6 md:px-[185px] pb-[80px] 
        mx-auto flex flex-col items-center
        overflow-hidden
      "
      style={{
        backgroundImage: "url('/images/footer-bg.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* 🔹 Top: Logo + Brand */}
      <div className="w-full max-w-[420px] h-auto mx-auto mt-[40px]">
        <div className="flex items-center justify-center gap-5">
          <img
            src="/images/logo.webp"
            alt="Khat Khazana"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain"
          />
          <div className="leading-tight text-left">
            <h2 className="font-['Philosopher'] text-2xl md:text-[32px] font-bold">
              Khat Khazana
            </h2>
            <p className="font-['Ephesis'] text-lg md:text-[24px] leading-[24px] font-normal">
              Love 1st Letter
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Middle: Links & Info */}
      <div className="w-full max-w-[1070px] mx-auto mt-[30px]">
        <div
          className="
            grid grid-cols-2 md:grid-cols-4 
            text-center md:text-left 
            gap-[30px] pt-[30px] pb-[30px]
          "
        >
          {/* Quick Links */}
          <div>
            <h3 className="font-['Philosopher'] font-bold text-lg md:text-xl mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 font-['Ephesis'] text-lg md:text-[24px] leading-[24px] font-normal">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/submission" className="hover:underline">Submission</a></li>
            </ul>
          </div>

          {/* Submission */}
          <div>
            <h3 className="font-['Philosopher'] font-bold text-lg md:text-xl mb-3">
              Submission
            </h3>
            <ul className="space-y-2 font-['Ephesis'] text-lg md:text-[24px] leading-[24px] font-normal">
              <li><a href="/submission" className="hover:underline">Submit a Letter</a></li>
              <li><a href="/submission" className="hover:underline">View Submission</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-['Philosopher'] font-bold text-lg md:text-xl mb-3">
              Support
            </h3>
            <ul className="space-y-2 font-['Ephesis'] text-lg md:text-[24px] leading-[24px] font-normal">
              <li>Email: info@example.com</li>
              <li>Location: 123 Main St, City</li>
              <li>Phone: +123 456 7890</li>
              <li>Working Hours: Mon–Fri, 9am–6pm</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-['Philosopher'] font-bold text-lg md:text-xl mb-3">
              Social Links
            </h3>
            <div className="flex justify-center md:justify-start gap-4 text-xl md:text-2xl font-['Ephesis']">
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter/X" className="hover:opacity-80">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook" className="hover:opacity-80">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom: Copyright */}
      <div className="text-center mt-[10px]">
        <p className="font-['Ephesis'] text-lg md:text-[24px] leading-[24px] font-normal">
          © {new Date().getFullYear()} Khat Khazana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
