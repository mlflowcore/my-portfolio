import React, { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

// Lazy load components that are not immediately visible
const Navbar = lazy(() => import('@/components/Navbar'))
const HeroSection = lazy(() => import('@/components/HeroSection'))
const AboutSection = lazy(() => import('@/components/AboutSection'))
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'))
const SkillsSection = lazy(() => import('@/components/SkillsSection'))
const ContactSection = lazy(() => import('@/components/ContactSection'))

// Import our new LoadingScreen
const LoadingScreen = lazy(() => import('@/components/LoadingScreen'))

import { Providers } from '@/components/Providers'

export default function App() {
  return (
    <Providers>
      <Suspense fallback={<div />}>
        <Navbar />
      </Suspense>
      
      <main className="pt-16">
        <Suspense fallback={<LoadingScreen />}>
          <HeroSection />
        </Suspense>
        
        <Suspense fallback={<LoadingScreen />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<LoadingScreen />}>
          <ProjectsSection />
        </Suspense>
        
        <Suspense fallback={<LoadingScreen />}>
          <SkillsSection />
        </Suspense>
        
        <Suspense fallback={<LoadingScreen />}>
          <ContactSection />
        </Suspense>
      </main>
    </Providers>
  )
}


