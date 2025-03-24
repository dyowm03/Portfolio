'use client'

import { motion } from 'framer-motion'
import { FaLinkedinIn } from 'react-icons/fa'

const experiences = [
  {
    title: 'Innovation and Entrepreneurship Development Center (IEDC)',
    duration: '2023 - Present',
    location: 'Bangalore, India',
    description: 'Leading technical initiatives and managing club activities',
    achievements: [
      'Managing technical aspects of events and coordinating with participants',
      'Organizing workshops and technical sessions for students',
      'Contributing to the club\'s growth and development initiatives'
    ]
  },
  {
    title: 'Pointblank Project Z',
    duration: 'Nov 2024 - Present',
    location: 'Bangalore, Karnataka',
    description: 'Member of the marketing team responsible for creating engaging content and promotional materials',
    achievements: [
      'Actively participated in creating engaging reels and promotional content to showcase the project\'s impact and achievements',
      'Collaborated with the team to develop compelling visual content that effectively communicated the project\'s value proposition',
      'Contributed to the project\'s growth through creative marketing strategies and content creation',
      'Managed and coordinated marketing initiatives to increase project visibility and engagement'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-zinc-50 mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl glass-effect custom-border bg-black/40 backdrop-blur-sm"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-zinc-50">{exp.title}</h3>
                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <span>{exp.duration}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
                <p className="text-zinc-400">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 