import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Inicio", path: "#inicio" },
  { name: "Experiencia", path: "#experiencia" },
  { name: "Proyectos", path: "#proyectos" },
  { name: "Habilidades", path: "#habilidades" },
  { name: "Certificaciones", path: "#certificaciones" },
  { name: "Sobre Mí", path: "#sobre-mi" },
  { name: "Contacto", path: "#contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "#inicio";
      NAV_ITEMS.forEach(({ path }) => {
        const section = document.querySelector(path);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = path;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const navLinkClasses = (path) =>
    `px-3 py-2 transition-colors duration-200 whitespace-nowrap ${
      activeSection === path
        ? "text-yellow-200 font-semibold"
        : "text-white/90 hover:text-yellow-200"
    }`;

  return (
    <>
      {/* Header Desktop */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block 
          transition-all duration-300
          ${
            scrolled
              ? "backdrop-blur-md bg-white/10 dark:bg-gray-900/20 rounded-full px-8 py-3 shadow-lg border border-yellow-200/20"
              : "bg-transparent border border-transparent"
          }`}
      >
        <nav>
          <ul className="flex space-x-2 text-sm font-medium">
            {NAV_ITEMS.map(({ name, path }) => (
              <li key={name}>
                <a href={path} className={navLinkClasses(path)}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Header Mobile */}
      <header
        className={`fixed top-4 left-4 right-4 z-50 md:hidden 
          transition-all duration-300
          ${
            scrolled || mobileMenuOpen
              ? "backdrop-blur-md bg-white/10 dark:bg-gray-900/20 rounded-2xl px-4 py-3 shadow-lg border border-yellow-200/20"
              : "bg-transparent border border-transparent"
          }`}
      >
        <div className="flex justify-between items-center">
          <span className="text-white font-semibold text-lg">Portfolio</span>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-white/20 pt-4" role="navigation">
            <ul className="space-y-3">
              {NAV_ITEMS.map(({ name, path }) => (
                <li key={name}>
                  <a
                    href={path}
                    onClick={handleLinkClick}
                    className={`${navLinkClasses(
                      path
                    )} block rounded-lg hover:bg-white/5 text-center font-medium`}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Overlay Mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
