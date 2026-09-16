import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, ArrowRight } from 'lucide-react';

const titles = [
  'Aspiring Software Developer',
  'Full-Stack Enthusiast',
  'React & PHP Developer',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: number;

    if (!isDeleting && displayText.length < current.length) {
      timeout = window.setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = window.setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-300/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-gold/8 rounded-full blur-[120px] animate-float-slow" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6">
          <span className="px-4 py-1.5 rounded-full glass-card text-gold-300 text-xs font-medium tracking-widest uppercase">
            Available for Opportunities
          </span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Hi, I'm <span className="text-gradient-gold">Shaikh Masudur Rahman</span>
        </h1>

        <div className="h-10 mb-6 flex items-center justify-center">
          <p className="font-heading text-xl md:text-2xl font-medium text-gray-300">
            <span className="shimmer-text">{displayText}</span>
            <span className="text-gold-300 animate-pulse">|</span>
          </p>
        </div>

        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          BCA Graduate skilled in building full-stack web applications, real-time
          cloud platforms, and scalable databases. Certified in C & Python.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="group relative overflow-hidden bg-gradient-gold text-ink-900 px-8 py-4 rounded-full font-semibold text-base hover:scale-105 transition-transform duration-300 gold-glow-strong"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="border border-gold-300/50 text-gold-300 px-8 py-4 rounded-full font-semibold text-base hover:bg-gold-300/10 hover:border-gold-300 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex gap-4 justify-center">
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:masudur82729@gmail.com', label: 'Email' },
            { icon: Phone, href: 'tel:+919023427054', label: 'Phone' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gold-300 hover:scale-110 hover:text-gold-200 hover:border-gold-300/60 transition-all duration-300 group"
            >
              <Icon size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-gold-300/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-gold-300 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
