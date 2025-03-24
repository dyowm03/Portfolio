import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Android Developer Portfolio',
  description: 'Professional portfolio showcasing Android development expertise in Kotlin, Java, and modern Android technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] text-zinc-50`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
