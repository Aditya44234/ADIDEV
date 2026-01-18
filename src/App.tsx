import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation Bar - Fixed at top */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Left Corner */}
            <div
              className={`flex items-center backdrop-blur-md rounded-full px-4 py-2 transition-all duration-300 ${
                scrolled
                  ? "bg-gray-800/50 border border-gray-700/50"
                  : "  border-gray-700/50"
              }`}
            >
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              <span className="ml-2 text-base sm:text-lg font-bold">
                ADIDEV
              </span>
            </div>

            {/* Desktop Navigation - Right Corner */}
            <div className="hidden md:flex items-center">
              <div
                className={`flex items-center space-x-1 lg:space-x-2 backdrop-blur-md rounded-full px-2 py-2 transition-all duration-300 `}
              >
                <button
                  onClick={() => scrollToSection("about")}
                  className="px-4 py-2 hover:text-cyan-400 hover:bg-gray-800/50 rounded-full transition-all text-sm font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="px-4 py-2 hover:text-cyan-400 hover:bg-gray-800/50 rounded-full transition-all text-sm font-medium"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="px-4 py-2 hover:text-cyan-400 hover:bg-gray-800/50 rounded-full transition-all text-sm font-medium"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-4 py-2 hover:text-cyan-400 hover:bg-gray-800/50 rounded-full transition-all text-sm font-medium"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-4 py-2 hover:text-cyan-400 hover:bg-gray-800/50 rounded-full transition-all text-sm font-medium"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile Menu Button - Right Corner */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-gray-800/50 border border-gray-700/50"
                  : "bg-gray-900/70 border border-gray-700/50"
              } hover:bg-gray-800 backdrop-blur-md`}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-cyan-400" />
              ) : (
                <Menu className="w-5 h-5 text-cyan-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-3 hover:bg-gray-800/50 hover:text-cyan-400 rounded-lg text-sm font-medium transition-all"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-4 py-3 hover:bg-gray-800/50 hover:text-cyan-400 rounded-lg text-sm font-medium transition-all"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left px-4 py-3 hover:bg-gray-800/50 hover:text-cyan-400 rounded-lg text-sm font-medium transition-all"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-3 hover:bg-gray-800/50 hover:text-cyan-400 rounded-lg text-sm font-medium transition-all"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-3 hover:bg-gray-800/50 hover:text-cyan-400 rounded-lg text-sm font-medium transition-all"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
