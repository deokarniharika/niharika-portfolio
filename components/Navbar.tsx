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
    <nav className="fixed top-0 left-0 w-full bg-backgroundLight/90 dark:bg-backgroundDark/90 backdrop-blur-md z-50 flex justify-between items-center px-4 sm:px-10 py-4 text-sm">
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="text-primary hover:text-secondary transition"
      >
        {mounted && (theme === 'light' ? <Moon size={20} /> : <Sun size={20} />)}
      </button>
      <div className="flex gap-4 sm:gap-6 font-medium">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="hover:text-primary transition"
          >
            {section}
          </a>
        ))}
      </div>
    </nav>
  )
}
