import React, { useState, useEffect } from "react";
import { CodeIcon, MenuIcon, XIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { smoothScrollTo } from "@/src/smoothScroll";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    smoothScrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#2A2D2D] border-b border-gray-700" 
            : "bg-[#2A2D2D]"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Brand - Only logo, no CN text */}
            <a 
              href="#home" 
              className="flex items-center group"
              onClick={(e) => handleNavClick(e, "#home")}
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.2 }}
              >
                <CodeIcon className="h-8 w-8 text-white" />
              </motion.div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium transition-all duration-200 hover:text-blue-400 ${
                    activeSection === link.href.substring(1)
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {link.name}
                  {/* Active indicator */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                    initial={false}
                    animate={{
                      width: activeSection === link.href.substring(1) ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              <ModeToggle />
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle navigation menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <XIcon className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MenuIcon className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#2A2D2D] border-b border-gray-700 md:hidden"
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeSection === link.href.substring(1)
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <span>{link.name}</span>
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        layoutId="activeTab"
                        className="w-2 h-2 rounded-full bg-current"
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
