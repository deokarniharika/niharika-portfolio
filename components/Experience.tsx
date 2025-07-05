export default function Experience() {
  return (
    <section id="experience" className="px-6">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="flex overflow-x-auto gap-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="min-w-[300px] p-4 bg-secondary dark:bg-gray-800 rounded-lg">
            <h3 className="font-semibold">Role Title</h3>
            <p className="text-sm">Company Name</p>
            <p className="text-xs">Duration</p>
            <p className="mt-2 text-sm">Short description about the role and work.</p>
          </div>
        ))}
      </div>
    </section>
  )
}