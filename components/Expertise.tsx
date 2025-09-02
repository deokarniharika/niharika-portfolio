interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["Python", "R", "SQL", "JavaScript", "HTML/CSS", "TypeScript"]
  },
  {
    name: "Data Science",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Google Cloud", "Git", "CI/CD", "Docker", "Azure", "HPC"]
  },
  {
    name: "Engineering",
    skills: ["Machine Learning", "Statistical Analysis", "Data Visualization", "NLP", "Automation", "Data Engineering"]
  }
]

export default function Expertise() {
  return (
    <section id="expertise" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Expertise</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Core technologies and methodologies I work with
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
                {category.name}
              </h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 dark:text-gray-300 text-sm">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}