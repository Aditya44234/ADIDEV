import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Job Search and Analysis Platform",
    description: "Smart career guidance and job insights powered by AI.",
    technologies: ["React", "Node.js", "Express.js", "Tailwind", "chart.js"],
    image:
      "https://favourable-yellow-13g2avna7a.edgeone.app/WhatsApp%20Image%202025-11-03%20at%2012.37.17_c7a715f6.jpg",
    github: "https://github.com/Aditya44234/AI-Career-Guide.git",
    live: "https://ai-career-guide-jet.vercel.app",
  },
  {
    title: "Notes App with CRUD & Backend",
    description:
      "Organize notes efficiently—full stack support for create, read, update, delete.",
    technologies: ["React.js", "javaScript", "MongoDB", "Tailwind"],
    image:
      "https://favourable-yellow-13g2avna7a.edgeone.app/WhatsApp%20Image%202025-11-03%20at%2012.38.28_2b7409de.jpg",
    github: "https://github.com/Aditya44234/Note-manager-app.git",
    live: " https://note-manager-app-henna.vercel.app",
  },
  {
    title: "ResuMentor",
    description:
      "Automatically generates interview quizzes from uploaded resumes using AI.",
    technologies: ["React.js", "Express", "Tailwind CSS"],
    image:
      "https://favourable-yellow-13g2avna7a.edgeone.app/WhatsApp%20Image%202025-10-20%20at%2020.14.19_96f7f164.jpg",
    github: "https://github.com/Aditya44234/ResuMentor.git",
    live: "https://resu-mentor.vercel.app ",
  },
  {
    title: "Landing Page for Edutech Platform",
    description: " Conversion-focused landing page for IELTS test preparation.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    image:
      "https://favourable-yellow-13g2avna7a.edgeone.app/WhatsApp%20Image%202025-11-03%20at%2012.41.52_cdfeb423.jpg",
    github: "https://github.com/Aditya44234/IELTS-homepage.git",
    live: "https://ielts-dev.vercel.app",
  },
  {
    title: "Speech to Text Generator",
    description:
      "Real-time speech transcription for fast and accurate note-taking.",
    technologies: ["React", "React Speech Recognition", "Tailwind CSS"],
    image:
      "https://favourable-yellow-13g2avna7a.edgeone.app/WhatsApp%20Image%202025-11-03%20at%2012.43.13_a746e313.jpg",
    github: "https://github.com/Aditya44234/SpeechTotext.git",
    live: "https://speech-totext-henna.vercel.app",
  },
  {
    title: "Firebase Auth Journal App",
    description:
      "A cloud-based journal platform with real-time synchronization and authentication.",
    technologies: [
      "React",
      "Firebase",
      "Firestore",
      "Google",
      "Authentication",
    ],
    image:
      "https://favourable-yellow-13g2avna7a.edgeone.app/WhatsApp%20Image%202025-11-03%20at%2012.44.07_720a1b3c.jpg",
    github: "https://github.com/Aditya44234/Journal-App.git",
    live: "https://journal-app-seven-nu.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-3">
            <ExternalLink className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 cursor-pointer rounded-xl overflow-hidden border border-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:border-2xl   hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
