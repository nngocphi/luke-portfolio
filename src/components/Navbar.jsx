import { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-[rgba(10,10,10,0.8)] shadow-lg backdrop-blur-lg">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            luke<span className="text-blue-500">.portfolio</span>
          </a>

          <button
            className="relative z-40 h-5 w-7 cursor-pointer text-white focus:outline-none md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            &#9776;
          </button>

          <div className="hidden items-center space-x-8 md:flex">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item.toLowerCase()}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
