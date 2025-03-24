'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const education = [
  {
    school: 'Dayananda Sagar College of Engineering',
    degree: 'Bachelor of Engineering - BE, Computer Science',
    duration: '2024 - 2028',
    location: 'Bangalore, Karnataka',
    description: 'Currently pursuing my Bachelor\'s degree in Computer Science Engineering, focusing on software development and programming.'
  }
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-zinc-50 mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl glass-effect custom-border bg-black/40 backdrop-blur-sm"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl glass-effect custom-border">
                  <FaGraduationCap className="w-6 h-6 text-zinc-50" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.school}</h3>
                  <p className="text-zinc-300 mt-1">{edu.degree}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                    <span className="text-sm text-zinc-400">{edu.duration}</span>
                    <span className="text-sm text-zinc-400">{edu.location}</span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-4 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 