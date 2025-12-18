function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Android Quiz App</h3>
            <p className="text-gray-400 mt-3">
              Quiz app with score tracking and instant feedback.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Book Kiosk System</h3>
            <p className="text-gray-400 mt-3">
              Laravel RFID-based library management system.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Expense Tracker</h3>
            <p className="text-gray-400 mt-3">
              Kotlin + SQLite mobile expense tracker.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
