import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    image: 'https://images.pexels.com/photos/6214477/pexels-photo-6214477.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'Real-time collaborative task management application with team workspaces and progress tracking.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Tailwind'],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard with real-time metrics, custom reports, and data export functionality.',
    technologies: ['Vue.js', 'Express', 'Chart.js', 'Redis', 'Docker'],
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Social Media API',
    description: 'RESTful API for a social media platform with authentication, posts, comments, and real-time notifications.',
    technologies: ['Node.js', 'GraphQL', 'PostgreSQL', 'JWT', 'WebSocket'],
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Portfolio CMS',
    description: 'Content management system for creating and managing portfolio websites with drag-and-drop interface.',
    technologies: ['React', 'Python', 'Django', 'SQLite', 'S3'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Booking System',
    description: 'Online booking and scheduling system with calendar integration, notifications, and payment processing.',
    technologies: ['Next.js', 'Supabase', 'Stripe', 'Vercel', 'Tailwind'],
    image: 'https://images.pexels.com/photos/5439492/pexels-photo-5439492.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    live: 'https://example.com',
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
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
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
                <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

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
