import React, { FC } from "react";
import { motion } from "framer-motion";
import { HiEye } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import Starfield from "./Starfield";

interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  previewLink?: string;
  githubLink?: string;
  techStack?: string[];
}

const ProjectCard: FC<{
  project: ProjectInterface;
}> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="group"
    >
      <motion.div 
        className="project-card flex flex-col justify-between overflow-hidden rounded-2xl transition duration-300 border border-white/10 bg-white/5 dark:bg-white/10 backdrop-blur-md shadow-[0_8px_30px_rgb(2_6_23_/_0.45)]"
      >
        
        {/* Project Image */}
        <div
          className="relative w-full h-53 overflow-hidden cursor-pointer"
        >
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="object-cover rounded-xl w-full h-full transform transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
        </div>

        {/* Project Content */}
        <div className="flex-grow space-y-3 p-5">
          <h3 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-red-400 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-gray-300/90 text-sm leading-relaxed">{project.description}</p>

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div>
              <h4 className="text-sm mt-4 font-medium text-gray-400">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-600/20 via-pink-500/20 to-cyan-500/20 border border-white/10 text-gray-300 shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 px-5 pb-5">
          {project.previewLink && (
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-md shadow-md hover:scale-105 transition-all duration-300"
            >
              Live Demo <HiEye className="text-lg" />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium border border-gray-600 px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              GitHub <FaGithub className="text-lg" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects: ProjectInterface[] = [
    
    
    {
      id: 1,
      title: "E-Commerce Website 🛒",
      description: "A full-featured e-commerce website with shopping cart and payments.",
      image: "/projects/ecommerce.png",
      previewLink: "https://shop-ease-ecommerce-smoky.vercel.app",
      githubLink: "https://github.com/chhatraraj/ShopEase-Ecommerce",
      techStack: ["React", "Sanity CMS", "Stripe", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Employee Management System",
      description: "A real-time employee management system.",
      image: "/projects/employee.png",
      // previewLink: "https://employee-management-system-six-tau.vercel.app/login",
      
      previewLink: "https://employee-management-system-six-tau.vercel.app",
      githubLink: "https://github.com/chhatraraj/employee-management-system",
      techStack: ["React", "localhost", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "job Portal Website 🌐",
      description: "My personal portfolio website built with React, Tailwind, and Framer Motion.",
      image: "/projects/portfolio.png",
      previewLink: "https://chhatra-portfolio.vercel.app",
      githubLink: "https://github.com/chhatraraj/portfolio",
      techStack: ["React", "Tailwind CSS", "Shadcn"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full py-16 md:py-24 bg-black text-white overflow-hidden"
    >
      <Starfield className="pointer-events-none absolute inset-0 -z-10" opacity={0.35} starCount={800} depth={600} />

      {/* Section Header */}
      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">Selected work highlighting clean UX, performance, and maintainable code.</p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>

      {/* Modal removed for simplicity */}
    </section>
  );
};

export default ProjectsSection;
