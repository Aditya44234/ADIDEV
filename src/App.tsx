import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, MessageSquare } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Code2 className="w-8 h-8 text-cyan-400" />
              <span className="ml-2 text-xl font-bold">DevPortfolio</span>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">About</button>
                <button onClick={() => scrollToSection('skills')} className="hover:text-cyan-400 transition-colors">Skills</button>
                <button onClick={() => scrollToSection('experience')} className="hover:text-cyan-400 transition-colors">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition-colors">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contact</button>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
