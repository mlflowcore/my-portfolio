import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "LANGUAGES",
    items: ["Python", "JavaScript", "TypeScript",  "SQL", ]
  },
   {
    category: "BACKEND",
    items: ["Node.js", "Flask", "Django", "PostgreSQL", "MongoDB"]
  },
   {
    category: "Frontend ",
    items: ["React", "Next.js", "Shadcn", "Tailwind CSS"]
  },
  {
    category: "LLM FRAMEWORKS", 
    items: ["LangChain", "LlamaIndex", "OpenAI API", "Hugging Face", "Anthropic Claude"]
  },
  {
    category: "MODELS",
    items: ["GPT-4", "Claude", "Llama 2", "Mistral", "Gemini" ]
  },
  // {
  //   category: "VECTOR DBS",
  //   items: ["Pinecone", "Chroma", "Weaviate", "FAISS", "Milvus"]
  // },
  {
    category: "INFRASTRUCTURE",
    items: ["Docker", "Kubernetes",  "Google Cloud"]
  },
 
];


const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
    
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Technical Toolkit - Left aligned with animation */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-300 via-red-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                TECHNICAL TOOLKIT
              </span>
             
            </h2>
          </motion.div>

          {/* Skills Categories Grid*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: categoryIndex * 0.1, 
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="space-y-3"
              >
                {/* Category Title - Orange color  */}
                <h3 className="text-lg font-bold text-orange-400 uppercase tracking-wider">
                  {category.category}
                </h3>
                
                {/* Skills List */}
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.1 + itemIndex * 0.05, 
                        duration: 0.4 
                      }}
                      className="text-white text-sm hover:text-gray-300 transition-colors duration-200"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophy - Left aligned with same animation */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left mb-8"
          >
            <h2 className="text-[5px] md:text-xs font-bold tracking-wider uppercase whitespace-nowrap">
  <span className="bg-gradient-to-r from-orange-300 via-red-500 to-purple-500 bg-clip-text text-transparent">
    Engineering
  </span>
  <span className="text-gray-500 ml-1 from-orange-100 via-red-300 to-purple-400">Philosophy</span>
</h2>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              What Drives My Engineering Approach ? 
            </h3>
            
            <div className="text-gray-500 space-y-3 text-base leading-relaxed">
              <p>
                Every AI-powered system I build follows a modular, backend-first, and evaluation-driven architecture. 
                My security philosophy is "Zero Trust at the Boundary." I implement strict input validation, least-privilege access for database users, and encrypted-at-rest protocols for sensitive fields.
              </p>
              <p>
                I build backend systems where predictability is a feature and security is an architectural constraint, not a checklist item. My approach centers on high-performance data modeling and modular service design.
              </p>
              <p>
              I build Node.js applications with a "production-first" mindset—prioritizing type safety, database integrity, and asynchronous performance over "clever" shortcuts.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;