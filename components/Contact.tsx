export default function Contact() {
  return (
    <footer id="contact" className="px-6 py-10 bg-secondary dark:bg-gray-800 text-center">
      <h2 className="text-xl font-semibold mb-4">Let’s Connect</h2>
      <div className="flex justify-center gap-6 text-sm">
        <a href="mailto:niharika@example.com" className="hover:underline">Email</a>
        <a href="https://github.com/niharika" target="_blank" className="hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/niharika" target="_blank" className="hover:underline">LinkedIn</a>
      </div>
    </footer>
  )
}
