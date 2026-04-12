import React, { FC } from "react";

import { motion } from "framer-motion";

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
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative w-full rounded-xl overflow-hidden backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:bg-white/5 hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)] transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row min-h-[420px]">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-md relative">

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-tight transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-4">
            {project.description}
          </p>

          {/* TECH STACK - SHOW ALL WITH ENHANCED STYLING */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack?.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-md bg-white/7 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BUTTON */}
          <div className="flex flex-wrap gap-3">
            {project.previewLink && (
              <motion.a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-black text-white border border-white/20 rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:border-black"
              >
                View Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </motion.a>
            )}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full md:w-1/2 h-56 md:h-auto overflow-hidden ">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center  "
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/favicon.jpg";
            }}
          />

          {/* SMOOTHER OVERLAY WITH GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/70 via-black/30 to-transparent"></div>

          {/* GITHUB BUTTON - ENHANCED */}
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-5 right-5 md:top-7 md:right-7 bg-black/80 backdrop-blur-md text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] flex items-center gap-2 border border-white/10"
          >
            <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
            View Code
          </motion.a>
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

    // {
    //   id: 4,
    //   title: "Job Portal Website",
    //   description: "A modern job portal application with advanced filtering and application tracking.",
    //   image: "/favicon.jpg", 
    //   previewLink: "https://chhatra-portfolio.vercel.app",
    //   githubLink: "https://github.com/chhatraraj/portfolio",
    //   techStack: ["React", "Tailwind CSS", "Shadcn"],
    // },

  ];



  return (

    <section

      id="projects"

      className="relative w-full py-12 md:py-16 lg:py-24 bg-black text-white overflow-hidden"

    >

      {/* Section Header */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="text-center space-y-4 mb-6 md:mb-8 lg:mb-12">

          {/* Gallery Number Indicator */}

          <motion.div 

            className="text-gray-600 text-sm font-light tracking-widest"

            initial={{ opacity: 0 }}

            whileInView={{ opacity: 1 }}

            viewport={{ once: true }}

            transition={{ delay: 0.2, duration: 0.8 }}

          >

            03

          </motion.div>

          

          {/* Divider Line */}

          <motion.div

            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-6"

            initial={{ width: 0 }}

            whileInView={{ width: "8rem" }}

            viewport={{ once: true }}

            transition={{ delay: 0.4, duration: 0.8 }}

          />

          

          <motion.h2

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6 }}

            viewport={{ once: true }}

            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"

          >

            Featured <span className="text-red-300">Projects</span>

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