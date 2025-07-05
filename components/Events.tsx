export default function Events() {
  return (
    <section id="events" className="px-6">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <h3 className="font-semibold mb-2">Hackathons</h3>
      <div className="flex overflow-x-auto gap-4 mb-6">
        {[1, 2].map(i => (
          <div key={i} className="min-w-[250px] p-4 bg-secondary dark:bg-gray-800 rounded-lg">
            <p className="font-semibold">Hackathon Title</p>
            <p className="text-sm">Short description</p>
          </div>
        ))}
      </div>
      <h3 className="font-semibold mb-2">Conferences</h3>
      <div className="flex overflow-x-auto gap-4">
        {[1, 2].map(i => (
          <div key={i} className="min-w-[250px] p-4 bg-secondary dark:bg-gray-800 rounded-lg">
            <p className="font-semibold">Conference Title</p>
            <p className="text-sm">Short description</p>
          </div>
        ))}
      </div>
    </section>
  )
}