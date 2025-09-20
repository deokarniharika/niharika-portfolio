import { Linkedin, Github, Mail, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-3 border-gray-200 dark:border-gray-600 shadow-lg">
              <img 
                src="/profile.jpeg" 
                alt="Niharika Deokar" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Optional decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-20"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Niharika Deokar
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Building ML Models that Matter | University of Bristol | Outstanding PLUS Awardee- Partnerships Builder | Over 2 years of hands-on experience in driving impactful decisions from data.
        </p>

                       {/* Sustainability Tag */}
            <div className="inline-flex mb-8">
           <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
             🌱 Passionate about Sustainability
           </span>
         </div>
 
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
        
        <div className="flex items-center justify-center gap-4 text-gray-500 dark:text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Bristol, United Kingdom</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>niharikasdeokar@gmail.com</span>
          </div>
        </div>
        
        {/* Internship Status Box */}
        <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 shadow-sm mb-4">
          <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            🎯 Actively looking for <span className="text-green-800 dark:text-green-400 font-semibold">Data Science Internships and Full-time Roles</span>
          </p>
        </div>
        
      </div>
    </section>
  )
}