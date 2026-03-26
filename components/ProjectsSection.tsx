import React, { FC } from "react";
import { motion } from "framer-motion";
import { HiEye } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  previewLink?: string;
  githubLink?: string;
  techStack?: string[];
}

const ProjectCard: FC<{ project: ProjectInterface }> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md shadow-[0_8px_32px_rgb(0_0_0_/_0.3)] hover:shadow-[0_20px_60px_rgb(168_85_247_/_0.15)]"
    >
      {/* Mobile: Vertical layout | Desktop: Horizontal layout */}
      <div className="flex flex-col md:flex-row h-full min-h-[400px] md:h-[400px]">
        
        {/* LEFT CONTENT - Mobile: Top | Desktop: Left */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-black/60 backdrop-blur-md z-10">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition leading-tight">
            {project.title}
          </h3>

          <p className="text-gray-300 text-sm mb-4 md:mb-5 line-clamp-3 md:line-clamp-4 leading-relaxed">
            {project.description}
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
            {project.techStack?.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.techStack && project.techStack.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-300 border border-white/10">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
           {project.previewLink && (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2 text-sm font-medium bg-black text-white border border-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-black"
              >
                View Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm bg-black text-white px-4 py-2 rounded-lg border border-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-black"
              >
                <FaGithub />
                Code
              </a>
            )}
          </div>
        </div>

        {/* RIGHT IMAGE - Mobile: Bottom | Desktop: Right */}
        <div className="relative w-full md:w-1/2 h-48 md:h-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/favicon.jpg";
            }}
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/70 via-black/30 to-transparent"></div>

          {/* BADGE */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/70 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-white hover:text-purple-600 hover:shadow-lg">
            Web Application
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects: ProjectInterface[] = [
    {
      id: 1,
      title: "NutriApp - AI-Powered Meal Planning Web Application",
      description: "A web application that generates personalized meal plans using user health data",
      image: "/nutriai.png", 
      previewLink: "https://nutritoapp.netlify.app/",
      githubLink: "https://github.com/chhatraraj/-nutriai-mvp",
      techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Gemini AI API", "Tailwind CSS"],
    },
    
    {
      id: 2,
      title: "E-Commerce Website ",
      description: "A full-featured e-commerce website with shopping cart and payments.",
      image: "/ecommerce.png",
      previewLink: "https://shop-ease-ecommerce-smoky.vercel.app",
      githubLink: "https://github.com/chhatraraj/ShopEase-Ecommerce",
      techStack: ["React", "Sanity CMS", "Stripe", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Employee Management System",
      description: "A real-time employee management system.",
      image: "/employee.png",
      previewLink: "https://employee-management-system-six-tau.vercel.app",
      githubLink: "https://github.com/chhatraraj/employee-management-system",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 4,
      title: "Job Portal Website",
      description: "A modern job portal application with advanced filtering and application tracking.",
      image: "/favicon.jpg", 
      previewLink: "https://chhatra-portfolio.vercel.app",
      githubLink: "https://github.com/chhatraraj/portfolio",
      techStack: ["React", "Tailwind CSS", "Shadcn"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full py-12 md:py-16 lg:py-24 bg-black text-white overflow-hidden"
    >
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-4 mb-8 md:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Featured <span className="text-purple-400">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed px-4"
          >
            A curated selection of my recent work showcasing modern web development, 
            clean architecture, and attention to user experience.
          </motion.p>
        </div>

        {/* Project Cards - Mobile Responsive Grid */}
        <div className="space-y-6 md:space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;