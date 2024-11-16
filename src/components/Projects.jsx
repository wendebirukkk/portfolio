import React from "react";
import wezaderImage from "../assets/wezader.png";
import HahuJobsImage from "../assets/HahuJobs.png";
import vamosImage from "../assets/Vamos.png";

const projects = [
  {
    id: 1,
    name: "Wezader App",
    technologies: "Flutter and Firebase",
    image: wezaderImage,
    github: "https://github.com/wendebirukkk/wezader",
  },
  {
    id: 2,
    name: "HahuJobs UI Clone",
    technologies: "React and Tailwind CSS",
    image: HahuJobsImage,
    github: "https://github.com/wendebirukkk/HahuJobs",
  },
  {
    id: 3,
    name: "Vamos Betting UI Clone",
    technologies: "React and Tailwind CSS",
    image: vamosImage,
    github: "https://github.com/wendebirukkk/vamos-betting",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
