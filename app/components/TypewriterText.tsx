'use client'

import { TypeAnimation } from 'react-type-animation'

export default function TypewriterText() {
  return (
    <TypeAnimation
      sequence={[
        'Native Android Developer',
        2000,
        'Competitive Programmer',
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-gradient"
    />
  )
} 