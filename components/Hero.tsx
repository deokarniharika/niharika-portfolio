import { Linkedin, Github, Mail, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-800 to-blue-800 bg-clip-text text-transparent mb-6">
          Niharika Deokar
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Building ML Models that Matter | University of Bristol | Outstanding PLUS Awardee | Partnerships Builder
        </p>
        
        <div className="flex items-center justify-center gap-6 mb-8">
          <a 
            href="https://www.linkedin.com/in/deokarniharika/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn Profile</span>
          </a>
          <a 
            href="https://github.com/deokarniharika" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={20} />
            <span>GitHub Profile</span>
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-4 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Bristol, United Kingdom</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>your.email@bristol.ac.uk</span>
          </div>
        </div>
      </div>
    </section>
  )
}