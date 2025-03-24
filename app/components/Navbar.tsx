'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' }
]

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-zinc-50 hover:text-white transition-all px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 backdrop-blur-lg border border-purple-500/20 hover:border-purple-500/40 shadow-lg hover:shadow-purple-500/20"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/owm-dubey-23311b318/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-xl glass-effect custom-border hover:scale-110 transition-transform bg-black/20 backdrop-blur-lg"
            >
              <FaLinkedinIn className="w-5 h-5 text-zinc-50" />
            </motion.a>
            <motion.a
              href="https://github.com/dyowm03"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-3 rounded-xl glass-effect custom-border hover:scale-110 transition-transform bg-black/20 backdrop-blur-lg"
            >
              <FaGithub className="w-5 h-5 text-zinc-50" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/dy.owm?igsh=ZmV3anB6azV1N2Rn"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-3 rounded-xl glass-effect custom-border hover:scale-110 transition-transform bg-black/20 backdrop-blur-lg"
            >
              <FaInstagram className="w-5 h-5 text-zinc-50" />
            </motion.a>
            <motion.a
              href="https://x.com/dy_owm16?t=XSjiUwnp2_WpLpMtBV6sVA&s=08"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-3 rounded-xl glass-effect custom-border hover:scale-110 transition-transform bg-black/20 backdrop-blur-lg"
            >
              <FaXTwitter className="w-5 h-5 text-zinc-50" />
            </motion.a>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=owmdubey163@gmail.com&su=Portfolio%20Contact&body=Hello%20Owm%2C%0A%0AI%20am%20reaching%20out%20regarding%20"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-effect custom-border hover:scale-110 transition-transform bg-black/20 backdrop-blur-lg"
            >
              <MdEmail className="w-5 h-5 text-zinc-50" />
              <span className="text-zinc-50 text-sm font-semibold tracking-wide">Contact Me</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 