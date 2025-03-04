import { useEffect, useRef } from "react";

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.replace("opacity-0", "opacity-100");
          element.classList.replace("translate-y-5", "translate-y-0");
          observer.unobserve(element); // Unobserve after reveal (performance boost)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []); // Empty dependency array to run only once

  return (
    <div
      ref={ref}
      className="translate-y-5 opacity-0 transition-all duration-300"
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
