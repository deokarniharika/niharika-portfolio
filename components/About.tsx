export default function About() {
  return (
    <section id="about" className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Motivated Data Science master's student with a strong foundation in machine learning, 
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
                Actively Looking for Data Science Roles
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-800 rounded-full"></span>
                Partnerships & Networking
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
