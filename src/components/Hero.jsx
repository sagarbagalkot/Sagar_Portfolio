import React from "react";
import HeroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-black text-white py-12 md:py-16 px-4 sm:px-6 lg:px-20 text-center"
    >
      <img
        src={HeroImage}
        alt="Sagar Bagalkot"
        className="mx-auto mb-6 sm:mb-8 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-full object-cover
        transform transition-transform duration-300 hover:scale-105"
      />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Hi, I’m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Sagar Bagalkot
        </span>
      </h1>

      <h2 className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-300">
        Full-Stack Developer | MERN Stack Enthusiast
      </h2>

      {/* Description */}
      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
        I design and develop modern, responsive, and high-performance web
        applications with clean code and user-focused experiences. Passionate
        about turning ideas into real-world digital solutions.
      </p>

      {/* Buttons */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-5 py-2.5 rounded-full text-sm sm:text-base"
        >
          Contact Me
        </button>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-5 py-2.5 rounded-full text-sm sm:text-base"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
