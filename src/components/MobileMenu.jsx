const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[rgba(10,10,10,0.95)] transition-all duration-300 ease-in-out ${menuOpen ? "pointer-events-auto h-screen opacity-100" : "pointer-events-none h-0 opacity-0"}`}
    >
      <button
        className="absolute top-4 right-5 cursor-pointer text-3xl text-white focus:outline-none"
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
      >
        &times;
      </button>

      <div className="flex flex-col items-center space-y-6">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <a
            key={item.toLowerCase()}
            href={`#${item.toLowerCase()}`}
            className={`text-2xl font-semibold text-white ${menuOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MobileMenu;
