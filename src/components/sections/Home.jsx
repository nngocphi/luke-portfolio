import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center"
    >
      <RevealOnScroll>
        <div className="px-4 text-center">
          <h1 className="gradient mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Hi, I'm Phi Nguyen
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-lg text-gray-300">
            I'm a frontend developer who loves crafting clean, scalable, and
            high-performance web applications with exceptional user experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="rounded bg-blue-500 px-6 py-3 font-medium text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded border border-blue-500/50 px-6 py-3 font-medium text-blue-500 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
