import { Calendar, MapPin, ExternalLink, Trello, School, University, Earth, Power, Globe } from 'lucide-react'

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  logo?: string
  link?: string
}

const experiences: ExperienceItem[] = [
    {
      company: "180 Degree Consulting",
      role: "Data Science Consultant",
      period: "Jul 2025- Sept 2025",
      location: "Bristol, UK",
      description: [
        "Delivered a scalable database management system for Weston Housing Action, supporting 5+ administrators and processing ~40 client cases monthly",
        "Created interactive dashboards using Python and Tableau, enabling data-driven decision making and improved reporting efficiency",
        "Streamlined data workflows through automation while maintaining strict GDPR compliance and data security standards",
        "Helped technical integration across development teams, establishing best practices and ensuring seamless system functionality",
        "Managed project coordination, stakeholder communication, and timeline delivery for successful project completion"
      ]
    },
  {
    company: "ECOZE",
    role: "Data Science Student Consultant",
    period: "May 2025- Sept 2025",
    location: "Bristol, UK",
    description: [
      "Managed a thesis on carbon footprint prediction, categorising 500+ grocery products via advanced data handling using Pandas that enhanced sustainable market strategies.", 
      "Enhanced data management using GCP and optimised data pipelines, increasing data processing speeds by 20% for improved efficiency.",
      "DesignedinteractiveTableaudashboardspresentingkeyinsights,enhancingclientengagementby15%towardssustainabilitygoals, and demonstrating the ability of data storytelling.",
      "Collaborated with stakeholders working remotely, translating business needs into effective data analysis strategies and the imple- mentation of functional, data-backed solutions, increasing market position by 10%.",
    ]
  },
  {
    company: "Fidelis AI",
    role: "Data Science and AI Research Intern",
    period: "Jan 2025 - Jul 2025",
    location: "Bristol, UK",
    description: [
      "Enhanced autonomous vehicle model accuracy by using CycleGAN to refine the quality of generated synthetic images by 15% contributing to advancements in safer AI systems.",
      "Developed an automated data pipeline on AWS for the website using Lambda (Python), S3 buckets and EC2 instances, improving data delivery and operational efficiency.",
      "Initiated team coordination efforts in a remote setting and created technical documentation, recorded minutes of meetings, ensuring smooth project progression (using Gantt charts) and effective communication of key insights.",
      "Analysed large sensor data sets with Python, utilising relevant libraries like Pandas to enhance autonomous vehicle perception and decision-making capabilities through strategic insights.",
    ]
  },
  {
    company: "University of Bristol",
    role: "Data Science Admin (Client Project)",
    period: "Jan 2025 - May 2025",
    location: "Bristol, UK",
    description: [
      "Led as the group admin for predicting the variation in fossils and their sizes with environmental change using PCA, the Fourier analysis, k-means clustering and DBSCAN.", 
    "Unified individual data to the master sheet and calculated different metrics like mean sphericity, median shape factor, etc. using Power Query resulting in data visualisation of 300k+ data entries using Power BI.", 
    "Successfully concluded the project with proof of concept, earning appreciation from the problem owner from University of Bristol School of Earth Sciences."
    ]
  },
  {
    company: "Humane Society International",
    role: "Summer Intern (Data and Strategy)",
    period: "Jun 2024 - Aug 2024",
    location: "Remote",
    description: [
      "Curated databases for plant-based and vegan-friendly restaurants in Pune and Mumbai.",
      "Developed a code to automate database creation using the Google Cloud API.",
      "Interviewed restaurant owners and conducted telephone interviews with owners from Bangalore.",
      "Developed business case studies and derived conclusions based on these interviews and insights helped shape the NGO's next action plan for plant-based activism and outreach efforts",
    ]
  },
  {
    company: "GreenPepper",
    role: "AI Research Intern",
    period: "Feb 2024 - Jun 2024",
    location: "Remote",
    description: [
      "Ideated, researched and developed GenAI legal document automation solutions, focusing on efficiency, accuracy, and usability.",
      "Crafted articles for GreenPepper on different Legal Language Models (LLM), highlighting their applications and benefits."
    ]
  },
  {
    company: "Bank of Maharashtra",
    role: "Data Science Intern",
    period: "Jul 2023- Dec 2023",
    location: "Pune, India",
    description: [
      "Predicted financial distress with 89% accuracy via Python using z-score and SVM models, facilitating proactive management of over 200 high-risk loans.",
      "Reduced loan default rates by 10% through strategic risk mitigation based on key insights derived from advanced predictive models, enabling better outcomes.",
      "PerformedsentimentanalysisoncreditandcustomerdatausingNLTK,pinpointing30%ofcommongrievances,informingtargeted customer satisfaction improvements.",
      "Worked independently and delivered executable insights as a sole intern to stakeholders through compelling presentations and reports with clear data visualisations using Matplotlib, enhancing customer satisfaction rates by 15%.",
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
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
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-gray-600 dark:text-gray-300 leading-relaxed flex items-start">
                    <span className="text-green-800 dark:text-green-400 mr-2 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
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
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Interested in collaborating on data science projects or need AI/ML solutions for your organization?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <Globe size={18} />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

