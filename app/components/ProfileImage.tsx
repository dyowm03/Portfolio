'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-[550px] h-[550px]"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl" />
      
      {/* Image container */}
      <div className="relative h-full rounded-full overflow-hidden border-4 border-zinc-800/50 shadow-2xl">
        <Image
          src="/profile.jpg"
          alt="Owm Dubey"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 550px"
        />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
    </motion.div>
  )
} 