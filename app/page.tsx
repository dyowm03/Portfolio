'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaAndroid, FaJava } from 'react-icons/fa'
import { SiKotlin, SiPython, SiAndroidstudio, SiJetpackcompose, SiC } from 'react-icons/si'
import ProfileImage from './components/ProfileImage'
import TypewriterText from './components/TypewriterText'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import AnimatedBackground from './components/AnimatedBackground'

// Base64 encoded image data
const profileImage = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiS0hLPVBVW1xbOEVJW1L/2wBDARUXFx4aHjshITtSQ0lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=`

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center p-24 relative">
          <div className="flex flex-col-reverse md:flex-row w-full gap-12 max-w-7xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="flex-1 space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl space-y-2"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-gradient block"
                >
                  Hi, I'm Owm Dubey
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-2 text-3xl sm:text-4xl"
                >
                  <span className="text-zinc-400">I am a</span>
                  <TypewriterText />
                </motion.div>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-zinc-300"
              >
                Crafting beautiful and performant mobile applications with modern technologies.
                Specialized in Android development with Kotlin and competitive programming.
              </motion.p>

              <div className="flex gap-6 mt-8 flex-wrap justify-start">
                {[
                  { Icon: FaAndroid, label: 'Android' },
                  { Icon: SiKotlin, label: 'Kotlin' },
                  { Icon: SiJetpackcompose, label: ['Jetpack', 'Compose'] },
                  { Icon: FaJava, label: 'Java' },
                  { Icon: SiC, label: 'C' },
                  { Icon: SiPython, label: 'Python' },
                  { Icon: SiAndroidstudio, label: ['Android', 'Studio'] },
                ].map(({ Icon, label }, index) => (
                  <motion.div
                    key={typeof label === 'string' ? label : label.join('')}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                    className="flex flex-col items-center gap-2 w-[85px]"
                  >
                    <div className="p-3 rounded-xl glass-effect custom-border">
                      <Icon className="w-6 h-6 text-zinc-50" />
                    </div>
                    {Array.isArray(label) ? (
                      <div className="text-center">
                        <span className="text-sm text-zinc-400 block leading-tight">{label[0]}</span>
                        <span className="text-sm text-zinc-400 block leading-tight">{label[1]}</span>
                      </div>
                    ) : (
                      <span className="text-sm text-zinc-400 text-center">{label}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 flex items-center justify-center">
              <ProfileImage />
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <Skills />
        <Education />
        <Experience />
      </main>
    </>
  )
}
