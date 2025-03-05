import RevealOnScroll from "../RevealOnScroll";

const projects = [
  {
    title: "Hostmost",
    description:
      "Corporate website for Hostmost Group, a leading provider of marine radio communications and navigation system services. The website showcases company information, services, solutions, products, news, and contact details.",
    technologies: [
      "WordPress",
      "jQuery",
      "Bootstrap",
      "WooCommerce",
      "TypeRocket",
      "PHP",
    ],
    link: "https://hostmostgroup.com/",
  },
  {
    title: "Legend Interiors",
    description:
      "A corporate website for Legend Interiors, a leading interior design and construction company specializing in commercial and luxury spaces across Asia. The site presents company services, project showcases, and office locations.",
    technologies: [
      "WordPress",
      "jQuery",
      "Bootstrap",
      "Polylang",
      "TypeRocket",
      "PHP",
    ],
    link: "https://legendinteriors.com/",
  },
  {
    title: "Maison Chisaka",
    description:
      "An elegant e-commerce website for Maison Chisaka, a premium bakery specializing in artisanal cakes and pastries. The platform delivers a seamless shopping experience with a refined, minimalist design.",
    technologies: [
      "WordPress",
      "jQuery",
      "Bootstrap",
      "WooCommerce",
      "TypeRocket",
      "PHP",
      "AOS",
      "Swiper",
    ],
    link: "https://shop.maisonchisaka.com/",
  },
  {
    title: "AMP Singapore",
    description:
      "A user-friendly donation platform designed to support charitable initiatives in Singapore. The website streamlines the donation process, making it accessible and efficient for donors and organizations.",
    technologies: [
      "WordPress",
      "jQuery",
      "Bootstrap",
      "WooCommerce",
      "TypeRocket",
      "PHP",
      "AOS",
      "Swiper",
      "Fancybox",
    ],
    link: "https://ampdonate.sg/",
  },
  {
    title: "Borobudur Nonya",
    description:
      "A restaurant website showcasing traditional Indonesian kuehs, allowing customers to explore the menu, and place orders online.",
    technologies: [
      "WordPress",
      "jQuery",
      "Bootstrap",
      "WooCommerce",
      "TypeRocket",
      "PHP",
      "Swiper",
    ],
    link: "https://borobudurnonya.com/",
  },
  {
    title: "Amac Sport",
    description:
      "A company website showcasing a wide range of sports equipment through an interactive thumbnail slider layout. Designed to highlight products visually without direct e-commerce functionality.",
    technologies: [
      "WordPress",
      "jQuery",
      "Bootstrap",
      "TypeRocket",
      "PHP",
      "Swiper",
    ],
    link: "https://amacsport.com/",
  },
  {
    title: "Happyland Collectibles",
    description:
      "An e-commerce website specializing in collectible cards, featuring an online store and an events calendar for community engagement.",
    technologies: [
      "WordPress",
      "jQuery",
      "Bootstrap",
      "TypeRocket",
      "WooCommerce",
      "PHP",
      "Swiper",
      "The Events Calendar",
    ],
    link: "https://happylandcollectibles.com/",
  },
  {
    title: "Kskin",
    description:
      "An e-commerce website for Kskin, offering a range of skincare and beauty products designed for healthy and radiant skin.",
    technologies: [
      "WordPress",
      "jQuery",
      "Bootstrap",
      "TypeRocket",
      "WooCommerce",
      "PHP",
      "Swiper",
      "Polylang",
      "Fancybox",
    ],
    link: "https://kskinfacial.com/",
  },
  {
    title: "Wings of the Dawn",
    description:
      "A dynamic community space in Singapore that blends creativity, connection, and commerce. Beyond offering inspiring spaces for events and gatherings, Wings of the Dawn also features an online store with curated products.",
    technologies: [
      "WordPress",
      "jQuery",
      "Bootstrap",
      "TypeRocket",
      "WooCommerce",
      "PHP",
      "Swiper",
      "Fancybox",
    ],
    link: "https://wingsofthedawn.com.sg/",
  },
  {
    title: "Nature’s Nutrition",
    description:
      "An e-commerce platform specializing in natural health supplements and wellness products. The website offers a seamless shopping experience, helping customers find high-quality nutritional products easily.",
    technologies: [
      "WordPress",
      "jQuery",
      "Bootstrap",
      "TypeRocket",
      "WooCommerce",
      "PHP",
      "Swiper",
    ],
    link: "https://natures-nutrition.co/",
  },
  {
    title: "GlobalTix",
    description:
      "A B2B digital ticketing platform that connects attractions, travel agencies, and resellers. It streamlines ticket distribution and sales through a cloud-based solution, enabling businesses to manage and sell tickets efficiently.",
    technologies: [
      "WordPress",
      "jQuery",
      "Bootstrap",
      "TypeRocket",
      "WooCommerce",
      "PHP",
      "Swiper",
      "AOS",
      "Fancybox",
      "Polylang",
    ],
    link: "https://globaltix.com/",
  },
  {
    title: "STATOS",
    description:
      "The Singapore Trade and Tourism Office (STATOS) serves as a key hub for fostering trade, investment, and tourism opportunities between Singapore and Sarawak. The website provides resources for businesses, investors, and travelers seeking cross-border collaborations.",
    technologies: [
      "WordPress",
      "jQuery",
      "Bootstrap",
      "TypeRocket",
      "PHP",
      "Swiper",
    ],
    link: "https://statos.com.sg/",
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
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
              >
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all duration-300 ease-in-out hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
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
          <div className="rounded-xl border border-white/10 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
            <h3 className="mb-2 text-xl font-bold">Other Projects</h3>
            <p className="mb-4 text-gray-300">
              I have developed and customized 50+ WordPress websites, including
              e-commerce (WooCommerce), business sites, and custom designs built
              with Elementor. Explore more of my work below.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/nguyenngocphi/details/projects/"
                target="_blank"
                className="text-blue-400 transition-colors duration-300 hover:text-blue-300"
              >
                View Projects →
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
