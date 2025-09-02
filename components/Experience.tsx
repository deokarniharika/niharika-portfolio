import { Calendar, MapPin, ExternalLink } from 'lucide-react'

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: string
  logo?: string
  link?: string
}

const experiences: ExperienceItem[] = [
  {
    company: "University of Bristol",
    role: "MSc Data Science Student",
    period: "2024 - Present",
    location: "Bristol, UK",
    description: "Pursuing advanced studies in machine learning, statistical analysis, and data engineering. Outstanding PLUS Awardee for exceptional academic performance and partnerships building."
  },
  {
    company: "Technology Company",
    role: "Data Science Intern",
    period: "Summer 2024",
    location: "Remote",
    description: "Developed machine learning models for data analysis and insights generation. Worked on sustainability and finance projects using Python and ML frameworks."
  },
  {
    company: "Finance Organization",
    role: "Data Analyst",
    period: "2023 - 2024",
    location: "London, UK",
    description: "Analyzed financial data and created predictive models for risk assessment. Implemented data pipelines and visualization dashboards."
  }
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  {exp.logo && (
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-600 dark:text-gray-300">
                        {exp.company.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-green-800 dark:text-green-400 font-medium">
                      {exp.role}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {exp.description}
              </p>
              
              {exp.link && (
                <a 
                  href={exp.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-800 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                >
                  <span>Learn More</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

