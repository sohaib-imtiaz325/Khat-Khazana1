import React from "react";

export default function ContactUs() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        fontFamily: "Philosopher, sans-serif",
        textTransform: "capitalize",
        backgroundImage: "url('/images/bg.webp')", // 👈 apni background image ka path yahan do
      }}
    >
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16">
        {/* Title */}
        <h1 className="text-center text-[30px] sm:text-[36px] font-semibold text-neutral-900 mb-6 sm:mb-8">
          Contact Us
        </h1>

        {/* One rounded container for BOTH columns (transparent, soft shadow) */}
        <div
          className="
            relative rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.18)]
            bg-white/30 backdrop-blur-[3px]
            p-4 sm:p-6 md:p-8
          "
        >
          {/* 2-col layout (stacks on mobile) */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-[380px_minmax(0,1fr)]">
            {/* LEFT: How to Contact Us with centered decorative bg */}
            <div className="relative">
              {/* centered background behind parchment */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-17 bottom-[-24px] bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/Union.webp')",
                  backgroundSize: "contain",
                }}
              />
              {/* parchment content */}
              <div className="relative sm:p-6">
                <h2 className="text-[22px] font-semibold text-neutral-900 mb-3">
                  How to Contact Us
                </h2>

                <p
                  className="text-[13px] text-black leading-5 italic mb-5"
                  style={{ fontFamily: "'Ephesis', cursive" }}
                >
                  We welcome your questions, comments, and feedback. Please
                  choose a way to get in touch, or fill out the form.
                </p>

                <div className="space-y-4 text-[14px]">
                  <div>
                    <div className="font-semibold text-neutral-900">
                      General Email:
                    </div>
                    <div
                      className="font-[500] italic"
                      style={{ fontFamily: "'Ephesis', cursive" }}
                    >
                      khatkhazana25@heritage.com
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-neutral-900">
                      Email Brian Wilson directly:
                    </div>
                    <div
                      className="font-[500] italic"
                      style={{ fontFamily: "'Ephesis', cursive" }}
                    >
                      khatkhazana@bwilson.com
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-neutral-900">
                      By Phone:
                    </div>
                    <div
                      className="font-[500] italic"
                      style={{ fontFamily: "'Ephesis', cursive" }}
                    >
                      (830) 675-1718
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-neutral-900">
                      By Snailmail:
                    </div>
                    <div
                      className="font-[500] italic leading-6"
                      style={{ fontFamily: "'Ephesis', cursive" }}
                    >
                      Khat Khazana, c/o Zip
                      <br />
                      P.O. Box 1877
                      <br />
                      Khat Khazana, TX 9000-1847 US
                    </div>
                  </div>

                  {/* Socials */}
                  <div className="pt-3 flex items-center gap-3 text-neutral-900/90">
                    {/* LinkedIn */}
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="p-2 rounded-full ring-1 ring-black/15"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <path
                          fill="currentColor"
                          d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.5 2.5 0 0 1 4.98 3.5zM3 8.98h4v12H3zM9 8.98h3.83v1.64h.05A4.2 4.2 0 0 1 17.5 8.7c4.08 0 4.83 2.69 4.83 6.2v6.08h-4v-5.39c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.49H9z"
                        />
                      </svg>
                    </a>
                    {/* Twitter */}
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="p-2 rounded-full ring-1 ring-black/15"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <path
                          fill="currentColor"
                          d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.9-2.6 1.1A4.07 4.07 0 0 0 12 8.5c0 .3 0 .6.1.8A11.5 11.5 0 0 1 3 5.2a4.1 4.1 0 0 0-.6 2.1c0 1.4.7 2.6 1.8 3.3-.6 0-1.2-.2-1.7-.5v.1c0 2 1.4 3.8 3.3 4.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.7 2 3 3.8 3a8.2 8.2 0 0 1-5.1 1.8c-.3 0-.6 0-.8-.1A11.6 11.6 0 0 0 9.3 21c7 0 10.8-5.8 10.8-10.8v-.5c.7-.5 1.3-1.1 1.9-1.9z"
                        />
                      </svg>
                    </a>
                    {/* YouTube */}
                    <a
                      href="#"
                      aria-label="YouTube"
                      className="p-2 rounded-full ring-1 ring-black/15"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <path
                          fill="currentColor"
                          d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 30 30 0 0 0 0 12a30 30 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A30 30 0 0 0 24 12a30 30 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Transparent form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-transparent"
            >
              {/* Top row */}
              <div className="grid sm:grid-cols-2 gap-3">
                <Field label="Name" required />
                <Field label="Email" type="email" required />
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-3 mt-3">
                <Field label="Country" />
                <Field label="Phone" type="tel" />
              </div>

              {/* Row 3 */}
              <div className="grid sm:grid-cols-3 gap-3 mt-3">
                <Field label="City" required />
                <Field label="State" required />
                <Field label="Zip" />
              </div>

              {/* Address */}
              <div className="mt-3">
                <Field label="Address" required />
              </div>

              {/* Message */}
              <div className="mt-3">
                <label className="block text-[13px] font-medium text-black mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="
                    w-full rounded-md bg-transparent
                    border border-black/30
                    px-3 py-2 text-[13px] text-black placeholder-black/50
                    outline-none focus:ring-2 focus:ring-black/15 focus:border-black/50
                    shadow-sm
                  "
                />
              </div>

              {/* Checkbox */}
              <label className="mt-3 flex items-start gap-2 text-[12.5px] text-black">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-black/40 accent-[#5a3c1e]"
                />
                <span>
                  Yes, please put me on your email list
                  <br />
                  <em className="text-neutral-700">
                    (We will never share your email address with anyone.)
                  </em>
                </span>
              </label>

              {/* Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full sm:w-[260px] rounded-md bg-[#5a3c1e] text-white py-2.5 text-[14px] shadow-md hover:bg-[#3f2b15] transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Reusable input field */
function Field({ label, required, type = "text" }) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-black mb-1">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        type={type}
        required={required}
        className="
          w-full rounded-md bg-transparent
          border border-black/30
          px-3 py-2 text-[13px] text-black placeholder-black/50
          outline-none focus:ring-2 focus:ring-black/15 focus:border-black/50
          shadow-sm
        "
      />
    </div>
  );
}
