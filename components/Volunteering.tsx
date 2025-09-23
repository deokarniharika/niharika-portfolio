import { Heart, Users, Globe, Calendar } from 'lucide-react'

interface VolunteerWork {
  organization: string
  role: string
  description: string
  period: string
  impact: string
  category: string
}

const volunteerWork: VolunteerWork[] = [
  {
    organization: "University of Bristol",
    role: "Bristol SU Volunteer",
    description: "Representing the university as a Student Union Volunteer at events and helping current students.",
    period: "Oct 2024",
    impact: "Volunteered at the university fair to support 40+ local organisations",
    category: "Education"
  },
  {
    organization: "WomenTech Network",
    role: "Global Ambassador",
    description: "Mentoring young women interested in pursuing careers in data science and technology.",
    period: "Feb 2024- Apr 2024",
    impact: "Supported 20+ female students in their tech journey",
    category: "Mentorship"
  },
  {
    organization: "There Is No Earth B",
    role: "Technical Lead",
    description: "Providing pro-bono website development and data analysis services to help spread awareness andmake data-driven decisions.",
    period: "April 2023- May 2023",
    impact: "Won the Youth Climate Fund grant to advance climate-tech initiatives",
    category: "Environment"
  },
  {
    organization: "VKind | Vegan Business App",
    role: "Volunteer Intern",
    description: "Worked closely with fellow team members on editing WordPress websites to enhance SEO.",
    period: "Feb 2022- March 2022",
    impact: "Made the NGO website user-friendly and accessible",
    category: "Community"
  },
]

export default function Volunteering() {
  return (
    <section id="volunteering" className="px-6 py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Community Involvement</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Giving back to the community through mentorship in data science, climate and technology
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {volunteerWork.map((work, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-200 text-sm font-medium rounded-full">
                  {work.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {work.organization}
              </h3>
              
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-3">
                {work.role}
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {work.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>{work.period}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Users size={16} />
                  <span>{work.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  )
}