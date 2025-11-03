import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading development of enterprise-level web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices for code quality and performance.',
    achievements: [
      'Architected and deployed microservices reducing response time by 40%',
      'Led a team of 5 developers in building a customer portal serving 100k+ users',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
    achievements: [
      'Built RESTful APIs serving 50k+ daily requests',
      'Improved application performance by 35% through code optimization',
      'Successfully delivered 15+ projects on time and within budget',
    ],
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Ventures',
    period: '2019 - 2020',
    description: 'Contributed to front-end and back-end development of various web applications. Gained experience in modern development workflows and agile methodologies.',
    achievements: [
      'Developed responsive UI components used across multiple projects',
      'Participated in code reviews and improved code quality',
      'Collaborated with designers to implement pixel-perfect interfaces',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Work Experience</h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-cyan-500 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-500 rounded-full -translate-x-[9px]"></div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-1">{exp.title}</h3>
                      <p className="text-lg text-gray-300">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-cyan-400 mb-2">Key Achievements:</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
