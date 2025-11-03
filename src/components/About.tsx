import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-3">
            <User className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with over 5 years of experience in building scalable web applications.
              I specialize in modern JavaScript frameworks and have a strong foundation in software engineering principles.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My journey in software development started with a curiosity about how things work under the hood.
              This curiosity has driven me to constantly learn and adapt to new technologies, always striving to write
              clean, efficient, and maintainable code.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, writing technical blogs,
              or exploring new technologies. I believe in continuous learning and sharing knowledge with the developer community.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">30+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
