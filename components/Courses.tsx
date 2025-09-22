export default function Courses() {
  const certifications = [
    { name: 'Sustainable Futures', issuer: 'FutureLearn', year: '2025' },
    { name: 'AWS Academy Graduate — AWS Cloud Foundations', issuer: 'AWS', year: '2024' },
    { name: 'AI and Climate Change', issuer: 'DeepLearning.AI', year: '2023' },
    { name: 'Supervised Machine Learning', issuer: 'Stanford', year: '2023' },
    { name: 'Geospatial and Environmental Analysis', issuer: 'UC Davis', year: '2023' },
    { name: 'M001: MongoDB Basics', issuer: 'MongoDB University', year: '2022' },
  ]

  const courses = [
    'Launchpad Cohort 3.0 Fellow — College to Climate (2024)',
    'Student Mobility Innovation Program: For New Technologies on Development — AIT, Thailand (2023)',
    'VC Industry Research and Pitch Analysis Extern — Energy Innovation Capital (2023)',
  ]

  return (
    <section id="courses" className="px-6 py-16 bg-white dark:bg-gray-900 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Courses & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((c, idx) => (
                <li key={idx} className="flex items-center justify-between text-gray-700 dark:text-gray-300">
                  <span>{c.name} — <span className="text-gray-500 dark:text-gray-400">{c.issuer}</span></span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Relevant Courses</h3>
            <ul className="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
              {courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


