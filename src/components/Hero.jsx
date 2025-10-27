function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 to-white"
    >
      <div className="text-center py-16 md:py-24 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          NxtRole.AI
        </h1>
        <h2 className="text-3xl md:text-5xl block font-bold bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Career Guidance & Roadmap Generator
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          AI-powered platform that helps students and professionals find the
          right career path, discover job roles, and learn skills to grow.
        </p>
        <button className="btn px-8 py-4">Explore Now</button>
      </div>
    </section>
  );
}

export default Hero;
