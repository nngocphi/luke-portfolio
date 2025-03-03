import RevealOnScroll from "../RevealOnScroll";

const projects = [
  {
    title: "KLIS – Kingdom of Light International Schools",
    description:
      "A company website showcasing school information, gallery, news, and contact details. Built with WordPress and optimized for performance.",
    technologies: ["HTML", "CSS", "PHP", "Bootstrap", "jQuery", "WordPress"],
    link: "#",
  },
  {
    title: "KLIS – Kingdom of Light International Schools",
    description:
      "A company website showcasing school information, gallery, news, and contact details. Built with WordPress and optimized for performance.",
    technologies: ["HTML", "CSS", "PHP", "Bootstrap", "jQuery", "WordPress"],
    link: "#",
  },
  {
    title: "KLIS – Kingdom of Light International Schools",
    description:
      "A company website showcasing school information, gallery, news, and contact details. Built with WordPress and optimized for performance.",
    technologies: ["HTML", "CSS", "PHP", "Bootstrap", "jQuery", "WordPress"],
    link: "#",
  },
  {
    title: "KLIS – Kingdom of Light International Schools",
    description:
      "A company website showcasing school information, gallery, news, and contact details. Built with WordPress and optimized for performance.",
    technologies: ["HTML", "CSS", "PHP", "Bootstrap", "jQuery", "WordPress"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
              >
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all duration-300 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-blue-400 transition-colors duration-300 hover:text-blue-300"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
