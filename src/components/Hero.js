function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Hi, I'm <span className="text-blue-400">Jaii</span>
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            React • Android • Laravel Developer
          </p>

          <a
            href="#projects"
            className="inline-block mt-8 px-8 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            View Projects
          </a>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
  src={`${process.env.PUBLIC_URL}/profile.jpg`}
  alt="Robert Ceniza" 
  className="w-64 h-64 rounded-full object-cover border-4 border-blue-500"
/>

        </div>

      </div>
    </section>
  )
}

export default Hero
