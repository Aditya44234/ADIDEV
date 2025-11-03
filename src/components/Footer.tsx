import { useState } from 'react';
import { Github, Linkedin, Mail, Send, Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus('Thanks for subscribing!');
    setEmail('');
    setTimeout(() => setSubscribeStatus(''), 3000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">DevPortfolio</h3>
            <p className="text-gray-400 leading-relaxed">
              Building the future, one line of code at a time. Let's create something amazing together.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest updates about my projects and tech insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-gray-100 transition-colors"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
              {subscribeStatus && (
                <p className="text-green-400 text-sm">{subscribeStatus}</p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by John Doe</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:john@example.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
