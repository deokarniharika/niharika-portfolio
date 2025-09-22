import Hero from '@/components/Hero'
import About from '@/components/About'
import Expertise from '@/components/Expertise'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Events from '@/components/Events'
import Volunteering from '@/components/Volunteering'
import Contact from '@/components/Contact'
import Courses from '@/components/Courses'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Courses />
      <Events />
      <Volunteering />
      <Contact />
    </main>
  )
}