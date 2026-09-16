import { GraduationCap, Award, School } from 'lucide-react';

const timeline = [
  {
    icon: GraduationCap,
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Veer Narmad South Gujarat University',
    period: 'Graduated',
    description:
      'Advanced coursework & hands-on development projects covering software engineering, database management, and web development.',
  },
  {
    icon: Award,
    title: 'Advanced Certification in C Programming',
    institution: 'Professional Certification',
    period: 'Certified',
    description:
      'Comprehensive training and certification in C programming covering data structures, memory management, and algorithmic problem-solving.',
  },
  {
    icon: Award,
    title: 'Advanced Certification in Python',
    institution: 'Professional Certification',
    period: 'Certified',
    description:
      'In-depth training and certification in Python programming, including object-oriented concepts, libraries, and practical application development.',
  },
  {
    icon: School,
    title: 'Secondary & Higher Secondary Education',
    institution: 'School Education',
    period: 'Completed',
    description:
      'Foundation in mathematics, science, and computer fundamentals during secondary (10th) and higher secondary (12th) education.',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 lg:px-8">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-300/5 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold-300 text-sm font-medium tracking-widest uppercase mb-2">
            My journey
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Education & <span className="text-gradient-gold">Certifications</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-300/50 via-gold-300/20 to-transparent md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <div
              key={item.title}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block flex-1" />

              <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold-300 rounded-full blur-md opacity-50 animate-glow-pulse" />
                  <div className="relative w-12 h-12 rounded-full glass-card border-gold-300/40 flex items-center justify-center">
                    <item.icon size={20} className="text-gold-300" />
                  </div>
                </div>
              </div>

              <div className="flex-1 pl-20 md:pl-0 md:pr-0">
                <div
                  className={`glass-card rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  <span className="text-gold-300 text-xs font-medium tracking-wider uppercase">
                    {item.period}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white mt-1.5 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gold-200 text-sm font-medium mb-3">
                    {item.institution}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
