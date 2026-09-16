import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

const projects = [
  {
    title: 'Bus Reservation System',
    subtitle: 'Academic Project',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    features: [
      'Secure user authentication',
      'Admin control panel',
      'Ticket booking logic',
      'Real-time data validation & error handling',
    ],
    link: 'https://smartbus.rf.gd/?i=1',
  },
  {
    title: 'Peer Notes Sharing Platform',
    subtitle: 'Student Collaboration Tool',
    tech: ['React', 'Firebase Firestore', 'JavaScript'],
    features: [
      'Real-time notes uploading',
      'Seamless cloud database integration',
      'Modern responsive UI',
      'Notes management for students',
    ],
    link: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 lg:px-8">
      <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-rose-gold/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold-300 text-sm font-medium tracking-widest uppercase mb-2">
            My work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Projects <span className="text-gradient-gold">Showcase</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <TiltCard key={project.title} className="h-full">
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col transition-all duration-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-gold-300 text-xs font-medium tracking-wider uppercase">
                      {project.subtitle}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white mt-1">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-gold-300/10 border border-gold-300/20 text-gold-200 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2.5 mb-8 flex-grow">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-gold-300 mt-0.5 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-gold text-ink-900 px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform gold-glow"
                    >
                      <ExternalLink size={16} />
                      Live Preview
                    </a>
                  )}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 border border-gold-300/40 text-gold-300 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gold-300/10 transition-all ${
                      project.link ? '' : 'flex-1'
                    }`}
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
