import RevealOnScroll from "../RevealOnScroll";

const techSkills = [
  "React.js",
  "React Hooks",
  "Next.js",
  "Redux",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "TailwindCSS",
  "Bootstrap",
  "Git",
  "WordPress",
  "Elementor",
  "jQuery",
  "PHP",
  "Laravel",
];

const softSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Research",
  "Teamwork",
  "Communication",
  "Organization",
  "Flexibility",
  "Adaptability",
  "Growth Mindset",
  "Self-learning",
  "Emotional Intelligence",
];

export const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            About Me
          </h2>

          <div className="rounded-xl border border-white/10 p-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
            <p className="mb-8 text-gray-300">
              As a React.js developer, I focus on building efficient,
              maintainable, and high-performance web applications. I love
              optimizing UI interactions, improving accessibility, and creating
              seamless user experiences through clean and reusable components.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold">Technology Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all duration-300 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all duration-300 ease-in-out hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
            <h3 className="mb-4 text-xl font-bold">🏫 Education</h3>
            <ul className="list-inside list-disc text-gray-300">
              <li>
                <strong>Frontend Development Courses</strong> – Frontend
                Masters, LinkedIn Learning, Coursera
              </li>
              <li>
                <strong>Information Technology (Completed 3rd Year)</strong> –
                Posts and Telecommunications Institute of Technology, HCM Branch
                (2017-2020)
              </li>
            </ul>
          </div>
          <div className="mt-6 rounded-xl border border-white/10 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
            <h3 className="mb-4 text-xl font-bold">💻 Work Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="mb-1">
                  <strong>Freelance Web Developer</strong> (Sep 2023 - Present)
                </h4>
                <ul className="list-inside list-disc text-gray-300">
                  <li>
                    Build and customize WordPress websites using Elementor,
                    WooCommerce, and custom themes.
                  </li>
                  <li>
                    Work closely with clients to create responsive, SEO-friendly
                    websites optimized for performance.
                  </li>
                  <li>
                    Handle website maintenance, plugin integration, and
                    troubleshooting to ensure smooth functionality.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-1">
                  <strong>Web Developer at Corsiva Lab Pte Ltd.</strong> (Aug
                  2022 - Jan 2025)
                </h4>
                <ul className="list-inside list-disc text-gray-300">
                  <li>
                    Developed and maintained 50+ WordPress websites, including
                    landing pages, company sites and e-commerce solutions.
                  </li>
                  <li>
                    Ensured responsive, high-performance websites with
                    cross-browser compatibility.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-1">
                  <strong>
                    UI Developer Intern at Namtech Solutions Pte Ltd.
                  </strong>{" "}
                  (May 2022 - Jul 2022)
                </h4>
                <ul className="list-inside list-disc text-gray-300">
                  <li>
                    Analyzed Figma designs and developed WordPress & Shopify
                    themes..
                  </li>
                  <li>
                    Proposed and implemented high-quality features to enhance
                    speed, scalability, and user experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
