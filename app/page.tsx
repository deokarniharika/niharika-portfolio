import Hero from '@/components/Hero'
import About from '@/components/About'
import Expertise from '@/components/Expertise'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Events from '@/components/Events'
import Volunteering from '@/components/Volunteering'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="px-4 sm:px-6 md:px-10 lg:px-20 py-24 space-y-28">
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Events />
      <Volunteering />
      <Contact />
    </main>
  )
}