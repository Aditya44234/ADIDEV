import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-gray-900 to-blue-900/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <p className="text-cyan-400 font-semibold tracking-wide mb-3">
              Hello, I’m
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Aditya Joshi
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
              Full Stack Developer
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10">
              I build clean, scalable, and high-performance web applications
              with modern technologies and a strong focus on user experience.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300"
              >
                Get In Touch
              </button>

              <a
                href="/resume2.pdf"
                // download
                className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all duration-300"
              >
                Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Aditya44234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/70 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-lg transition"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-joshi-115a6b308"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/70 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-lg transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:aj6305897005@gmail.com"
                className="p-3 bg-gray-800/70 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-lg transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          {/* <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-2xl opacity-30" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center text-5xl font-bold">
              <img src="./mypic.jpg" alt="" />
                
              </div>
            </div>
          </div> */}

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 blur-3xl opacity-30" />

              {/* Image Container */}
              <div
                className="
      relative 
      w-64 h-64 
      sm:w-72 sm:h-72 
      md:w-80 md:h-80 
      lg:w-96 lg:h-96 
      rounded-full 
      border border-white/10 
      overflow-hidden
    "
              >
                <img
                  src="/mypic.jpg"
                  alt="Aditya Joshi"
                  className="w-full h-full p-4 object-cover  rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </button>
    </section>
  );
}
