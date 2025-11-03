import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-gray-900 to-blue-900/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-4xl font-bold">
              AJ
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Aditya Joshi
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Developer
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Building elegant solutions to complex problems with modern
            technologies
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/Aditya44234"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-lg transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-joshi-115a6b308"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-lg transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:aj6305897005@gmail.com"
              className="p-3 bg-gray-800 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-lg transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-10 h-10 text-cyan-400" />
      </button>
    </section>
  );
}
