import React from "react";

function Contact() {
  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="border-t border-[#EAE9E4] pt-12 mt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
        {/* Contact Text Column */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl md:text-3xl text-[#333333] tracking-wide">
            Interested in knowing more?
          </h2>
          <p className="font-sans text-sm md:text-base text-[#666666] leading-relaxed max-w-md">
            Shoot me an email if you'd like to chat about design, internship or full-time opportunities, side projects, or the latest app I've been obsessing over. Or connect with me through my other platforms.
          </p>
        </div>

        {/* Social Icons & Back to Top Column */}
        <div className="flex flex-col items-start md:items-end justify-between h-full space-y-6 md:space-y-0">
          <div className="space-y-4">
            <h3 className="font-serif text-lg md:text-xl text-[#333333] md:text-right">
              Let' Connect:
            </h3>
            <div className="flex space-x-4">
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/asmibattu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[#0077B5] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="w-6 h-6 fill-white"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7zM6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5v8.37z" />
                </svg>
              </a>

              {/* Email Link */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=asmitech25@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[#E64B3B] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="Send Email"
              >
                <svg
                  className="w-6 h-6 fill-white"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>

              {/* Instagram Link */}
              <a
                href="https://instagram.com/asmidesigns"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#FFB900] via-[#E10077] to-[#4F5BD5] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="Instagram Profile"
              >
                <svg
                  className="w-6 h-6 fill-white"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="pt-2 md:pt-6">
            <a
              href="#"
              onClick={handleBackToTop}
              className="font-sans font-bold text-xs md:text-sm tracking-widest text-[#A2A19C] hover:text-[#333333] transition-colors uppercase inline-flex items-center space-x-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
