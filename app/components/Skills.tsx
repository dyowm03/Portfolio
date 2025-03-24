'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaAndroid, FaJava } from 'react-icons/fa'
import { SiKotlin, SiPython, SiAndroidstudio, SiJetpackcompose, SiC } from 'react-icons/si'
import { useState } from 'react'

const skills = [
  { 
    name: 'Android', 
    icon: FaAndroid, 
    color: 'from-green-500 to-emerald-500',
    description: 'Extensive experience in Android app development using modern practices. Proficient in building responsive, user-friendly applications.'
  },
  { 
    name: 'Kotlin', 
    icon: SiKotlin, 
    color: 'from-purple-500 to-blue-500',
    description: 'Primary programming language for Android development. Experienced in Kotlin coroutines and modern Kotlin features.'
  },
  { 
    name: 'Jetpack Compose', 
    icon: SiJetpackcompose, 
    color: 'from-blue-500 to-cyan-500',
    description: 'Modern Android UI toolkit for building native UIs. Proficient in declarative UI patterns, custom composables, and state management. Experience with animations and  UI implementations.'
  },
  { 
    name: 'Java', 
    icon: FaJava, 
    color: 'from-red-500 to-orange-500',
    description: 'Strong foundation in Java programming .Familiar with object-oriented programming principles. Experience in implementing data structures and algorithms'
  },
  { 
    name: 'C', 
    icon: SiC, 
    color: 'from-blue-600 to-blue-800',
    description: 'Strong understanding of C programming fundamentals. .'
  },
  { 
    name: 'Python', 
    icon: SiPython, 
    color: 'from-yellow-500 to-blue-500',
    description: 'Have basic knowledge in Python.'
  },
  { 
    name: 'Android Studio', 
    icon: SiAndroidstudio, 
    color: 'from-green-500 to-teal-500',
    description: 'Proficient in using Android Studio IDE for app development.'
  },
]

const bounceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  })
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null)

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-zinc-50 mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={bounceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div 
                className="relative p-6 rounded-xl glass-effect custom-border bg-black/40 backdrop-blur-sm group-hover:bg-black/60 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSkill(skill)}
              >
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg`}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <span className="text-zinc-50 font-medium text-center">{skill.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-lg w-full p-6 rounded-xl glass-effect custom-border bg-black/60 backdrop-blur-lg"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-50 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`p-4 rounded-xl bg-gradient-to-r ${selectedSkill.color} shadow-lg`}
                  >
                    <selectedSkill.icon className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-zinc-50 text-center">{selectedSkill.name}</h3>
                  <p className="text-zinc-300 text-center leading-relaxed">{selectedSkill.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 