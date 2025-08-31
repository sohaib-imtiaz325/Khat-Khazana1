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
      className="relative text-black bg-center overflow-x-hidden"
      style={{
        backgroundImage: "url('/images/footer-bg.webp')", // put your file in /public/images/
        backgroundRepeat: "repeat", // tile the parchment
        backgroundSize: "auto", // no zoom; use the image's native size
        backgroundPosition: "center top",
        fontFamily: "Philosopher, sans-serif",

        textTransform: "capitalize",
      }}
    >
      {/* lighter overlay so texture remains visible */}
      <div className="bg-white/20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
          {/* Top: Logo + Brand */}
          <div className="flex items-center justify-center gap-4 sm:gap-5 mb-10 sm:mb-12">
            <img
              src="/images/logo.webp"
              alt="Khat Khazana"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
            <div className="leading-tight text-center sm:text-left">
              <h2 className="font-title text-[26px] sm:text-[32px] font-bold">
                Khat Khazana
              </h2>
              <p
                className="text-[18px] sm:text-[22px] -mt-0.5"
                style={{ fontFamily: "'Ephesis', cursive", lineHeight: 1 }}
              >
                Love 1st Letter
              </p>
            </div>
          </div>

          {/* Middle: Links & Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 text-center md:text-left">
            <div>
              <h3 className="font-title font-bold text-lg sm:text-xl mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-[14px]">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/submission" className="hover:underline">
                    Submission
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-title font-bold text-lg sm:text-xl mb-3">
                Submission
              </h3>
              <ul className="space-y-2 text-[14px]">
                <li>
                  <a href="/submission" className="hover:underline">
                    Submit a Letter
                  </a>
                </li>
                <li>
                  <a href="/submission" className="hover:underline">
                    View Submission
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-title font-bold text-lg sm:text-xl mb-3">
                Support
              </h3>
              <ul className="space-y-2 text-[14px]">
                <li>Email: info@example.com</li>
                <li>Location: 123 Main St, City</li>
                <li>Phone: +123 456 7890</li>
                <li>Working Hours: Mon–Fri, 9am–6pm</li>
              </ul>
            </div>

            <div>
              <h3 className="font-title font-bold text-lg sm:text-xl mb-3">
                Social Links
              </h3>
              <div className="flex justify-center md:justify-start gap-4 text-xl">
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

          {/* Bottom */}
          <div className="text-center mt-10">
            <p
              className="text-[16px]"
              style={{ fontFamily: "'Ephesis', cursive" }}
            >
              © {new Date().getFullYear()} Khat Khazana. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
