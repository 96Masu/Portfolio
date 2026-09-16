import { Code, Database, Wrench } from 'lucide-react';

const categories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: [
      { name: 'C', level: 85 },
      { name: 'C++', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'JavaScript', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'PHP', level: 85 },
      { name: 'React.js', level: 80 },
    ],
  },
  {
    icon: Database,
    title: 'Databases & Backend',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 72 },
      { name: 'Firebase Firestore', level: 80 },
      { name: 'Node.js', level: 70 },
      { name: 'DBMS', level: 78 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Core Concepts',
    skills: [
      { name: 'MS Excel', level: 85 },
      { name: 'MS Word', level: 90 },
      { name: 'PowerPoint', level: 85 },
      { name: 'OS Fundamentals', level: 75 },
      { name: 'Internet Research', level: 88 },
      { name: 'Data Entry', level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 lg:px-8">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-300/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold-300 text-sm font-medium tracking-widest uppercase mb-2">
            What I bring to the table
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Technical <span className="text-gradient-gold">Skills</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="glass-card rounded-2xl p-7 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gold-300/10 flex items-center justify-center">
                  <cat.icon size={22} className="text-gold-300" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gold-300 text-xs font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-ink-500 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-gold transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
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
