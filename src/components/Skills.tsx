import { Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'HTML, CSS, Typescript', level: 90 },
      { name: 'Redux', level: 85 },
      { name: 'Next.js', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'Django', level:70 },
      { name: 'MongoDB', level: 80 },
      { name: 'REST APIs', level: 80 },
      { name: 'Firebase', level: 80 },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'GitHub', level: 95 },
      { name: 'Vercel', level: 90 },
      { name: 'Render', level: 90 },
      { name: 'VS Code', level: 95 },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'REST API', level: 95 },
      { name: 'Google Gemini API (AI Integration)', level: 85 },
      { name: 'Context API-based state management', level: 65 },
      { name: 'Problem Solving, Adaptability', level: 65 },
      { name: 'Self-learning (Soft Skills)', level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Skills & Technologies</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
