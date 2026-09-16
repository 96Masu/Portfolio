import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9023427054',
    href: 'tel:+919023427054',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'masudur82729@gmail.com',
    href: 'mailto:masudur82729@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mohammad pura road, Madina Hotel, Bharuch, 392001, Gujarat, India',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;

    setStatus('sending');
    const { error } = await supabase.from('contact_messages').insert({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    });

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 lg:px-8">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gold-300/8 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold-300 text-sm font-medium tracking-widest uppercase mb-2">
            Get in touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Let's Build Something <span className="text-gradient-gold">Golden</span> Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="glass-card rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-300/10 flex items-center justify-center flex-shrink-0">
                  <info.icon size={22} className="text-gold-300" />
                </div>
                <div>
                  <p className="text-gold-200 text-xs font-medium tracking-wider uppercase mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white text-sm font-medium hover:text-gold-300 transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium leading-relaxed">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-gold-200 text-xs font-medium tracking-wider uppercase mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-ink-800/60 border border-gold-300/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-gold-300/50 focus:outline-none focus:ring-1 focus:ring-gold-300/30 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-gold-200 text-xs font-medium tracking-wider uppercase mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-ink-800/60 border border-gold-300/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-gold-300/50 focus:outline-none focus:ring-1 focus:ring-gold-300/30 transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-gold-200 text-xs font-medium tracking-wider uppercase mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-ink-800/60 border border-gold-300/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-gold-300/50 focus:outline-none focus:ring-1 focus:ring-gold-300/30 transition-all"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="text-gold-200 text-xs font-medium tracking-wider uppercase mb-2 block">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full bg-ink-800/60 border border-gold-300/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-gold-300/50 focus:outline-none focus:ring-1 focus:ring-gold-300/30 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="relative w-full overflow-hidden bg-gradient-gold text-ink-900 py-3.5 rounded-xl font-semibold text-sm hover:scale-[1.02] transition-transform duration-300 gold-glow disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <span className="relative z-10 flex items-center gap-2">
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </span>
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle2 size={16} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
