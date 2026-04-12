import { motion } from 'framer-motion';
import React from 'react';

interface IconButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export const IconButton = ({ href, icon, label, onClick }: IconButtonProps) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      aria-label={label}
      className="group w-12 h-12 rounded-full bg-white-600 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-slate-400 hover:text-orange-300 hover:border-orange-400 hover:bg-orange-400/10 transition-all duration-300"
      whileHover={{ scale: 1.1, y: -1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
};
