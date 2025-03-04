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

          <div className="flex gap-4 md:hidden">
            <a
              href="https://www.linkedin.com/in/nguyenngocphi/"
              className="inline-block"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
            </a>
            <button
              className="h-5 w-7 cursor-pointer text-white focus:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Open menu"
            >
              &#9776;
            </button>
          </div>

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
            <a
              href="https://www.linkedin.com/in/nguyenngocphi/"
              className="inline-block"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
