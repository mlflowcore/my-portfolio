import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { FaEnvelope, FaUser, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';


export default function ContactWithFooter() {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error('Please fill in all fields.', {
        position: 'top-center',
        style: {
          backgroundColor: 'black',
          color: '#ffffff',
          fontWeight: 'bold',
          borderRadius: '8px',
          fontSize: '12px',
        },
      });
      return;
    }

    if (!form.current) {
      toast.error('Form not available', {
        position: 'top-center',
      });
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success('Message sent successfully!', {
          position: 'top-center',
          style: {
            backgroundColor: 'gray',
            color: '#ffffff',
            fontWeight: 'bold',
            borderRadius: '8px',
          },
        });
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error(error.text);
        toast.error('Failed to send message.', {
          position: 'top-center',
          style: {
            backgroundColor: 'gray',
            color: '#ffffff',
            fontWeight: 'bold',
            borderRadius: '8px',
          },
        });
      });
  };

  return (
    <>
      <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-black text-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Form Section */}
          <div>
            {/* Gallery Number Indicator */}
            <motion.div 
              className="text-gray-600 text-sm font-light tracking-widest mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              05
            </motion.div>
            
            {/* Divider Line */}
            <motion.div
              className="w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            
            <div className="mb-4">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-700 to-gray-300 text-transparent bg-clip-text"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Let's Build Together
              </motion.h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-400 font-mono">Available for projects</span>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Transform your ideas into powerful backend solutions. 
                From APIs to ML integration, I deliver production-ready code that scales.
              </p>
            </div>

          </div>

          {/* Right: Professional Contact Component */}
          <div className="flex flex-col items-start space-y-11 space-x-24">
            {/* Professional Message */}
            <div className="space-y-4">
              <p className="text-sm text-neutral-500 font-mono leading-relaxed max-w-sm">
               Obsessed with building things that think - from intelligent backends to AI-driven interfaces that actually ship.
              </p>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-3 gap-3 max-w-sm">
              {[
                {
                  label: "Email",
                  href: "mailto:chhatraneupane999@gmail.com",
                  icon: <FaEnvelope className="w-4 h-4 text-red-500" />,
                  hoverBorder: "hover:border-red-800",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/chhatraraj",
                  icon: <FaGithub className="w-4 h-4 text-slate-400" />,
                  hoverBorder: "hover:border-blue-800",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/chhatra-neupane-95476b296",
                  icon: <FaLinkedin className="w-4 h-4 text-sky-400" />,
                  hoverBorder: "hover:border-green-800",
                },
              ].map(({ label, href, icon, hoverBorder }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group flex items-center gap-3 px-4 py-3.5
                    border border-neutral-800 bg-neutral-950
                    font-mono text-xs text-neutral-400
                    hover:text-white hover:bg-neutral-900
                    ${hoverBorder}
                    transition-all duration-200
                  `}
                >
                  {icon}
                  <span>{label}</span>
                  <span className="ml-auto text-neutral-600 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-[10px]">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            {/* Professional Info for Upwork Clients */}
           
              {/* <p className="text-lg font-semibold text-white mb-3">
                Ready to build something amazing?
              </p>
              <p className="text-sm text-gray-300 mb-4">
                Specialized in backend development and AI powered solutions. 
                Delivering secure, clean, and scalable code that powers real-world applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full font-mono">
                  Available Now
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-mono">
                  Quick Response
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full font-mono">
                  Quality Code
                </span>
              </div> */}
            
          </div>
        </div>
      </section>

     <footer className="w-full py-6 flex justify-center items-center bg-neutral-950 border-t border-white/5">
  <p className="text-[11px] text-gray-500 text-center tracking-wide">
    © {new Date().getFullYear()} Chhatra Neupane · All rights reserved
  </p>
</footer>
    </>
  );
}
