import React, { FC } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  previewLink?: string;
  githubLink?: string;
  techStack?: string[];
}

const projects: ProjectInterface[] = [
  {
    id: 1,
    title: "Multistack Hire",
    description:
      "Full-stack recruitment platform that ranks candidates on GitHub activity, LeetCode performance, and resume data through a trained XGBoost model, replacing subjective CV screening.",
    githubLink: "https://github.com/DSxManash/multistack-hire",
    techStack: ["FastAPI", "React.js", "PostgreSQL", "SQLAlchemy", "XGBoost", "MinIO", "pdfplumber", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "NutriApp",
    description:
      "A web application that generates personalized meal plans using user health data.",
    githubLink: "https://github.com/chhatraraj/-nutriai-mvp",
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Gemini AI API", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Restaurant Management System",
    description:
      "A restaurant management system with real-time analytics, inventory management, and order processing.",
    githubLink: "https://github.com/chhatraraj/resturant-system",
    techStack: ["Node.js", "React.js", "PostgreSQL", "Prisma ORM", "Socket.io", "Tailwind CSS"],
  },
];

const ProjectRow: FC<{ project: ProjectInterface; index: number; total: number }> = ({
  project,
  index,
  total,
}) => {
  const num = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
      className="group relative border-t border-white/10 py-10 md:py-12 first:border-t-0 transition-colors duration-300 hover:bg-white/[0.03] rounded-lg"
    >
      {/* Accent bar that grows in on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-orange-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start px-4 md:px-6">
        {/* Index */}
        <div className="md:col-span-1">
          <span className="text-sm font-light tracking-widest text-gray-600 transition-colors duration-300 group-hover:text-orange-400">
            {num}
            <span className="text-gray-700">/{totalStr}</span>
          </span>
        </div>

        {/* Title + description */}
        <div className="md:col-span-6">
          <h3 className="text-xl md:text-2xl font-light tracking-tight text-white mb-2 transition-colors duration-300 group-hover:text-orange-400">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-md">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="md:col-span-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-light text-gray-500 border border-white/10 rounded px-2 py-1 transition-colors duration-300 group-hover:border-orange-400/30 group-hover:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Link */}
        <div className="md:col-span-1 flex md:justify-end">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-gray-500 transition-all duration-300 hover:scale-110 hover:border-orange-400 hover:text-orange-400 group-hover:border-white/30 group-hover:text-gray-300"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full bg-black text-white py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 md:mb-16 max-w-xl"
        >
          <div className="text-gray-600 text-sm font-light tracking-widest mb-3">03</div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-orange-400 to-transparent mb-6" />
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Selected work
          </h2>
          <p className="text-gray-400 text-base font-light leading-relaxed">
            A few projects across full-stack development and machine learning that I&apos;ve worked on.
          </p>
        </motion.div>

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;