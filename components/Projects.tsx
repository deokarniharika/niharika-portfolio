import { ExternalLink, Github, Globe } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  image?: string
  github?: string
  live?: string
  category: string
}

const projects: Project[] = [
  {
    title: "Machine Learning for Climate Change",
    description: "Developed predictive models to analyze climate data and predict environmental changes using advanced ML algorithms.",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Matplotlib"],
    category: "Data Science"
  },
  {
    title: "Financial Risk Assessment System",
    description: "Built a comprehensive risk assessment tool using machine learning to predict loan defaults with 89% accuracy.",
    technologies: ["Python", "SVM", "NLTK", "Seaborn", "PostgreSQL"],
    category: "Finance"
  },
  {
    title: "Sustainable Restaurant Database",
    description: "Created an automated database system for plant-forward restaurants using Google Cloud API and data analysis.",
    technologies: ["Python", "Google Cloud", "Data Analysis", "Automation"],
    category: "Sustainability"
  },
  {
    title: "Legal Document Automation",
    description: "Developed GenAI solutions for legal document automation, improving efficiency and accuracy in legal processes.",
    technologies: ["AI/ML", "NLP", "Legal Tech", "Automation"],
    category: "AI/ML"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          A selection of my work showcasing expertise in data science, machine learning, and sustainable technology
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-200 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-green-800 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                      >
                        <Globe size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-800 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}