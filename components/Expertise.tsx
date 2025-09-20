interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["Python", "R", "SQL", "JavaScript", "HTML/CSS", "TypeScript", "Java"]
  },
  {
    name: "ML and AI",
    skills: ["Keras", "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "NLTK", "Hugging Face", "GANs", "LLMs", "Statistical Analysis"]
  },
  {
    name: "Data Visualisation and Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Power BI", "Microsoft Excel", "Power Query"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "MongoDB Atlas", "Google Cloud Platform", "Git", "CI/CD", "Azure"]
  },
  {
    name: "Soft Skills",
    skills: ["Stakeholder Communication", "Presentation", "Leadership", "Problem-Solving", "Teamwork", "Analytical Mindset"]
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
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
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