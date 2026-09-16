import { MapPin, Languages, GraduationCap } from 'lucide-react';

const stats = [
  {
    icon: Languages,
    label: 'Languages Known',
    value: 'English, Hindi, Gujarati, Urdu',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bharuch, Gujarat, India',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'BCA Graduate',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 lg:px-8">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold-300/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold-300 text-sm font-medium tracking-widest uppercase mb-2">
            Get to know me
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            About <span className="text-gradient-gold">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative group w-64 h-[340px] [perspective:1200px]">
              <div className="absolute -inset-8 rounded-[2.5rem] bg-gold-300/10 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 rounded-[2rem] border border-gold-300/30 rotate-[-6deg] scale-[0.96] transition-transform duration-700 group-hover:rotate-[-10deg] group-hover:scale-100" />
              <div className="absolute inset-0 rounded-[2rem] border border-rose-gold/30 rotate-[6deg] scale-[0.96] transition-transform duration-700 group-hover:rotate-[10deg] group-hover:scale-100" />
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-gold-200/50 bg-ink-700 shadow-[0_25px_80px_rgba(0,0,0,0.7),0_0_45px_rgba(212,175,55,0.25)] transition-all duration-700 group-hover:-translate-y-3 group-hover:[transform:rotateY(-7deg)_rotateX(3deg)]">
                <img
                  src="/images/masu_transparent.png"
                  alt="Shaikh Masudur Rahman ✔️"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-12">
                  <p className="text-white font-heading text-lg font-semibold">Shaikh Masudur</p>
                  <p className="text-gold-200 text-xs tracking-[0.18em] uppercase mt-1">Software Developer</p>
                </div>
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-40 h-5 rounded-full bg-black/70 blur-xl group-hover:w-48 transition-all duration-700" />
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              I'm a passionate software developer with hands-on expertise in
              building web applications using{' '}
              <span className="text-gold-300 font-medium">React, PHP, Firebase, and MySQL</span>.
              My journey in software development is driven by continuous learning,
              a deep curiosity for software architecture, and a commitment to
              crafting scalable, user-centric solutions.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              From real-time cloud platforms to database-driven applications, I
              thrive on turning complex problems into elegant, functional code.
              I believe in writing clean, maintainable software that delivers real
              value to end users.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-5 transition-all duration-300 hover:scale-105"
                >
                  <stat.icon size={24} className="text-gold-300 mb-3" />
                  <p className="text-gold-200 text-xs font-medium tracking-wider uppercase mb-1">
                    {stat.label}
                  </p>
                  <p className="text-white text-sm font-medium">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
