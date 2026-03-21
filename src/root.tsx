import React, { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

// Lazy load components that are not immediately visible
const Navbar = lazy(() => import('@/components/Navbar'))
const HeroSection = lazy(() => import('@/components/HeroSection'))
const AboutSection = lazy(() => import('@/components/AboutSection'))
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'))
const SkillsSection = lazy(() => import('@/components/SkillsSection'))
const ContactSection = lazy(() => import('@/components/ContactSection'))

import { Providers } from '@/components/Providers'

// Loading component
const SectionLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
    <div className="relative w-16 h-1 bg-gray-700 overflow-hidden">
      <motion.div 
        className="absolute h-full bg-blue-400"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
    <p className="text-gray-400 text-sm font-medium animate-pulse">Loading...</p>
  </div>
)

export default function App() {
  return (
    <Providers>
      <Suspense fallback={<div />}>
        <Navbar />
      </Suspense>
      
      <main className="pt-16">
        <Suspense fallback={<SectionLoader />}>
          <HeroSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ProjectsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <SkillsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>
    </Providers>
  )
}


