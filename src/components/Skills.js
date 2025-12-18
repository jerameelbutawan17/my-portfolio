function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Android Studio",
    "Kotlin",
    "Laravel",
    "PHP",
    "MySQL",
    "Git & GitHub",
  ]

  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-slate-900 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 text-center py-3 rounded-lg font-medium hover:bg-blue-500 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
