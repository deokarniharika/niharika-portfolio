export default function Expertise() {
  return (
    <section id="expertise" className="px-6">
      <h2 className="text-2xl font-bold mb-4">Expertise</h2>
      <div className="flex overflow-x-auto gap-4">
        {['Python', 'SQL', 'Tableau', 'AWS' , 'Excel', 'Regression', 'Classification', 'Data Analysis'].map(skill => (
          <div key={skill} className="min-w-[150px] p-4 bg-secondary dark:bg-gray-800 rounded-lg text-center">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}