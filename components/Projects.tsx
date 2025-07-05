export default function Projects() {
  return (
    <section id="projects" className="px-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="flex overflow-x-auto gap-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="min-w-[300px] p-4 bg-primary text-white rounded-lg">
            <h3 className="font-semibold">Project Title</h3>
            <p className="text-sm mt-2">Short description and a <a href="#" className="underline">project link</a>.</p>
          </div>
        ))}
      </div>
    </section>
  )
}