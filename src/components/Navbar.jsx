import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <nav className="bg-black text-white px-4 sm:px-6 md:px-16 lg:px-24 sticky top-0 z-50">
      <div className="container py-2 flex justify-between items-center">
        
        <div className="text-2xl font-bold">SagarB</div>
        <div className="hidden md:flex space-x-6">
          <button onClick={() => handleScroll("home")} className="hover:text-gray-400">Home</button>
          <button onClick={() => handleScroll("about")} className="hover:text-gray-400">About Me</button>
          <button onClick={() => handleScroll("service")} className="hover:text-gray-400">Services</button>
          <button onClick={() => handleScroll("project")} className="hover:text-gray-400">Projects</button>
          <button onClick={() => handleScroll("contact")} className="hover:text-gray-400">Contact</button>
        </div>

        <button
          onClick={() => handleScroll("contact")}
          className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect Me
        </button>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2">
          <button onClick={() => handleScroll("home")} className="block w-full text-left hover:text-gray-400">Home</button>
          <button onClick={() => handleScroll("about")} className="block w-full text-left hover:text-gray-400">About Me</button>
          <button onClick={() => handleScroll("service")} className="block w-full text-left hover:text-gray-400">Services</button>
          <button onClick={() => handleScroll("project")} className="block w-full text-left hover:text-gray-400">Projects</button>
          <button onClick={() => handleScroll("contact")} className="block w-full text-left hover:text-gray-400">Contact</button>
          <button
            onClick={() => handleScroll("contact")}
            className="w-full mt-2 bg-gradient-to-r from-green-400 to-blue-500 text-white
            px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
          >
            Connect Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
