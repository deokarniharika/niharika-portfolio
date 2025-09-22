export default function Courses() {
  const certifications = [
    { name: 'Machine Learning Specialization', issuer: 'Coursera', year: '2024' },
    { name: 'Deep Learning Fundamentals', issuer: 'fast.ai', year: '2024' },
    { name: 'Data Visualization with Tableau', issuer: 'Tableau', year: '2023' },
  ]

  const courses = [
    'Advanced Machine Learning',
    'Statistical Methods for Data Science',
    'Big Data and Cloud Computing',
    'Database Systems and ETL',
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


