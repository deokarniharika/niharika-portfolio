import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 space-y-24">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}