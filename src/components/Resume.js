function Resume() {
  return (
    <section
      id="resume"
      className="scroll-mt-24 bg-slate-900 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>

        <p className="text-gray-400 mb-8">
          Download my resume to learn more about my background.
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-block px-8 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}

export default Resume
