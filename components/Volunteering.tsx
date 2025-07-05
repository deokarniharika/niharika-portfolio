export default function Volunteering() {
  return (
    <section id="volunteering" className="px-6">
      <h2 className="text-2xl font-bold mb-4">Volunteering</h2>
      <div className="flex overflow-x-auto gap-4">
        {[1, 2].map(i => (
          <div key={i} className="min-w-[300px] p-4 bg-secondary dark:bg-gray-800 rounded-lg">
            <h3 className="font-semibold">Role Name</h3>
            <p className="text-sm">NGO/Company</p>
            <p className="text-xs">Duration</p>
            <p className="mt-2 text-sm">Short description of the volunteering experience.</p>
          </div>
        ))}
      </div>
    </section>
  )
}