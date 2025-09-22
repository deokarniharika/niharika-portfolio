'use client'

import { ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Project {
  title: string
  description: string
  topic: string
  link?: string
  slug?: string
}

const projects: Project[] = [
  {
    title: 'University Internship Management System (SQL)',
    topic: 'Databases',
    description:
      'MySQL-backed internship management system; automated workflows cut admin effort ~40% and enabled structured reporting for faculty and placement.',
  },
  {
    title: 'Mitigating Climate Change via Smart Agriculture',
    topic: 'Climate/ML',
    description:
      'Soil temperature forecasting using RF/SVM/kNN on multi‑year EDS data; presented at ICSTA 2023 and published in Springer Proceedings (ICT).',
    link: 'https://link.springer.com/chapter/10.1007/978-981-97-5157-0_29'
  },
  {
    title: 'Advancements in Football Analytics: xG Modelling',
    topic: 'Sports Analytics',
    description:
      'xG modelling on StatsBomb data; handled class imbalance with SMOTENC; LightGBM outperformed logistic regression with better calibration.',
  },
  {
    title: 'Automated MCQ Generation for Video Lectures',
    topic: 'NLP/EdTech',
    description:
      'Pipeline with Pytube + Whisper + spaCy to transcribe and generate MCQs with distractors; ~81% answer‑key accuracy in evaluations.',
  },
  {
    title: 'FinPredict and Insights',
    topic: 'FinTech/ML',
    description:
      'Streamlit suite for BoM: churn prediction, report summarisation/sentiment, time‑series forecasts, and early‑warning indicators for loan risk.',
  },
  {
    title: 'Early Detection of Epileptic Seizures (Bioinformatics)',
    topic: 'Health/ML',
    description:
      'EEG‑based seizure prediction on 11.5k samples/178 features; best test AUC 0.767; SVM recall 82.4%; Twilio SMS alerts and secure Streamlit UI.',
  },
  {
    title: 'Occlusion‑Aware Face Recognition',
    topic: 'CV/Deep Learning',
    description:
      'Reconstruction of occluded faces using GANs + Siamese TL; improved matching under occlusions using campus image dataset.',
  },
  {
    title: 'Prediction and Analysis of Carbon Footprint of Food',
    topic: 'Sustainability/ML',
    description:
      'Visual analytics of GHG emissions per kg; ensemble models reached 88.2% test accuracy; advocates plant‑based dietary shifts.',
  },
  {
    title: "There Is No Earth B — Website Revamp",
    topic: 'Climate Tech/Web',
    description:
      'Led redesign for clearer content (events, guides, videos, petitions); improved UX to support awareness and community action.',
  },
  {
    title: 'InTheEco Bot',
    topic: 'Automation',
    description:
      'Bot that surfaces Reddit environmental news to keep communities updated on key sustainability topics.',
  },
]

export default function Projects() {
  const router = useRouter()
  
  return (
    <section id="projects" className="px-6 py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          A selection of my work showcasing expertise in data science, machine learning, and sustainable technology
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-200 text-sm font-medium rounded-full">
                    {project.topic}
                  </span>
                  <div className="flex gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 py-1.5 px-3 rounded-md text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Link</span>
                      </a>
                    )}
                    <button
                      onClick={() => {
                        const slugMap: Record<string, string> = {
                          'University Internship Management System (SQL)': '/projects/internship-management',
                          'Mitigating Climate Change via Smart Agriculture': '/projects/smart-agriculture',
                          'Advancements in Football Analytics: xG Modelling': '/projects/football-analytics',
                          'Automated MCQ Generation for Video Lectures': '/projects/mcq-generation',
                          'FinPredict and Insights': '/projects/finpredict',
                          'Early Detection of Epileptic Seizures (Bioinformatics)': '/projects/epilepsy-detection',
                          'Occlusion‑Aware Face Recognition': '/projects/face-recognition',
                          'Prediction and Analysis of Carbon Footprint of Food': '/projects/carbon-footprint',
                          "There Is No Earth B — Website Revamp": '/projects/earth-b-website',
                          'InTheEco Bot': '/projects/ecobot'
                        }
                        const href = slugMap[project.title] ?? '/projects'
                        router.push(href)
                      }}
                      className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 py-1.5 px-3 rounded-md text-sm"
                    >
                      <span>View details</span>
                    </button>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}