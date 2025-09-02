'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const sections = ['About', 'Expertise', 'Experience', 'Projects', 'Events', 'Volunteering', 'Contact']

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <a href="#hero" className="text-xl font-bold text-gray-900 dark:text-white hover:text-green-800 dark:hover:text-green-400 transition-colors">
            Niharika Deokar
          </a>
          
          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 font-medium">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition-colors"
              >
                {section}
              </a>
            ))}
          </div>
          
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {mounted && (theme === 'light' ? <Moon size={20} /> : <Sun size={20} />)}
          </button>
        </div>
      </div>
    </nav>
  )
}