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
    title: 'Outstanding PLUS Award and Bristol PLUS Award',
    description:
      "UoB Employability Award (\u003c5% recipients) and Outstanding PLUS (10 shortlisted) — Partnership Builders.",
    date: 'Feb 2025',
    location: 'University of Bristol',
    category: 'Achievement',
    link: 'https://universityofbristolcareers.blogs.bristol.ac.uk/2025/03/21/outstanding-plus-award-honourable-mentions-2024-25/'
  },
  {
    title: 'Youth Climate Fund',
    description:
      "Technical Lead, There Is No Earth B — €4,000 grant to advance climate-tech initiatives.",
    date: 'Jul 2022',
    location: 'Youth and Environment Europe',
    category: 'Grant',
    link: 'https://yeenet.eu/call-for-proposals-youth-climate-fund/'
  },
  {
    title: 'TDRA Designing a Sustainable Future using ICTs Hackathon',
    description:
      'Top 40 / 2,745 teams internationally; $25 prize for relevant idea.',
    date: '2022',
    location: 'International',
    category: 'Hackathon'
  },
  {
    title: 'Encode London: Web3 Hackathon and Research Conference',
    description:
      'Built CryptoLens for DeFi data analysis (Ethereum/Arbitrum): patterns, connectivity, mint/burn and loan spikes; Streamlit dashboard + iOS app.',
    date: 'Oct 25–27',
    location: 'Shoreditch Exchange, London, UK',
    category: 'Hackathon'
  },
  {
    title: 'EnviroSummit 2024 — Poster Presentation',
    description:
      'Plant-based diets for climate mitigation — visuals on food footprints (Our World in Data).',
    date: 'Mar 1, 2024',
    location: 'MIT WPU, Pune, India',
    category: 'Conference',
    link: 'https://ourworldindata.org/environmental-impacts-of-food'
  },
  {
    title: 'ICSTA 2023 — Conference Presentation',
    description:
      'Smart Agriculture: soil temperature analysis and forecasting — ML for climate impact in agri.',
    date: 'Dec 19–20, 2023',
    location: 'Kolkata, India',
    category: 'Conference',
    link: "https://link.springer.com/chapter/10.1007/978-981-97-5157-0_29"
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
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={14} />
                    Link
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}