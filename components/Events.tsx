import { Award, Calendar, MapPin, ExternalLink } from 'lucide-react'

interface Event {
  title: string
  description: string
  date: string
  location: string
  category: string
  link?: string
}

const events: Event[] = [
  {
    title: "Outstanding PLUS Award",
    description: "Recognized for exceptional academic performance and partnerships building at University of Bristol.",
    date: "2024",
    location: "University of Bristol",
    category: "Academic Achievement"
  },
  {
    title: "Data Science Conference",
    description: "Presented research on machine learning applications in sustainability and climate change.",
    date: "2024",
    location: "Bristol, UK",
    category: "Research Presentation"
  },
  {
    title: "Partnerships Builder Recognition",
    description: "Awarded for successfully building and maintaining strategic partnerships across multiple organizations.",
    date: "2024",
    location: "University of Bristol",
    category: "Leadership"
  },
  {
    title: "Sustainability Hackathon Winner",
    description: "Led team to victory in developing innovative solutions for environmental challenges using data science.",
    date: "2023",
    location: "Remote",
    category: "Competition"
  }
]

export default function Events() {
  return (
    <section id="events" className="px-6 py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Achievements & Events</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Recognition for my work and participation in notable events and competitions
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm font-medium rounded-full">
                  {event.category}
                </span>
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                                          className="p-2 text-gray-600 hover:text-green-800 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {event.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {event.description}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}