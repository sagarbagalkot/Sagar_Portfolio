import React from "react";
import templeImg from "../assets/temple.png";
import notesImg from "../assets/notes.png";
import votingImg from "../assets/voting.png";
import goldenBakesImg from "../assets/golden-bakes.png";

const projects = [
  {
    id: 1,
    name: "Temple Website with Online Services",
    technologies: "Technologies Using MERN Stack and Tailwind CSS",
    image: templeImg,
    github: "https://github.com/sagarbagalkot/Temple_Website.git",
  },
  {
    id: 2,
    name: "Notes App",
    technologies: "Technologies Using MERN Stack and Tailwind CSS",
    image: notesImg,
    github: "https://github.com/sagarbagalkot/NotesApp.git",
  },
  {
    id: 3,
    name: "Online Voting System",
    technologies: "Technologies Using HTML, CSS, JavaScript, PHP & MySQL",
    image: votingImg,
    github: "https://github.com/sagarbagalkot/Online_Voting_System.git",
  },
  {
    id: 4,
    name: "Golden Bakes",
    technologies: "Technologies Using HTML, CSS & JavaScript",
    image: goldenBakesImg,
    github: "https://github.com/sagarbagalkot/Golden-Bakes.git",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-16" id="project">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-lg
              transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-md mb-4 w-full h-40 object-cover"
              />

              <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.technologies}</p>

              {/* GitHub button aligned at bottom */}
              <div className="mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-gradient-to-r
                  from-green-400 to-blue-500 text-white text-sm px-3 py-2 rounded-full
                  hover:scale-105 transform transition-transform duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
