import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 lg:px-8 border-t border-gold-300/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <a href="#hero" className="font-heading text-3xl font-bold text-gradient-gold">
            MR.
          </a>

          <div className="flex gap-4">
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
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gold-300 hover:scale-110 hover:text-gold-200 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            Designed & Built by <span className="text-gold-300 font-medium">Shaikh Masudur Rahman</span>
            <Heart size={12} className="text-rose-gold" />
            <span>© 2026. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
