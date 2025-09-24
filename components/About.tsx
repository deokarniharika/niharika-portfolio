export default function About() {
  return (
    <section id="about" className="px-6 py-16 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        
        {/* Actively looking status moved here, with blue highlight */}
        <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 shadow-sm mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-sm font-medium text-center">
            🎯 Actively looking for <span className="text-blue-800 dark:text-blue-400 font-semibold">Data Science Internships and Full-time Roles</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Motivated Data Science professional with a strong foundation in machine learning, 
              data analysis, and programming. Experienced in working on diverse projects and internships 
              across technology, sustainability, and finance.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Current Focus
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-800 rounded-full"></span>
                Data Science & Machine Learning
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-800 rounded-full"></span>
                Partnerships and Networking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-800 rounded-full"></span>
                Climate-Tech, Finance and Data Analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-800 rounded-full"></span>
                Sustainability 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
