import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme.text} ${theme.background} transition-colors duration-200`}>
      <nav className={`border-b ${theme.border}`}>
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-serif tracking-tight">
              HummHive
            </Link>
            <div className="flex items-center gap-8">
              <a 
                href="https://humm.earth" 
                className="hover:text-stone-500 dark:hover:text-stone-300 transition-colors"
              >
                <strong>Humm.earth</strong>
              </a>
              <button
                onClick={() => setTheme(theme.name === 'light' ? 'dark' : 'light')}
                className="hover:text-stone-500 dark:hover:text-stone-300 transition-colors"
                aria-label="Toggle theme"
              >
                {theme.name === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <div className="hidden sm:flex items-center gap-8">
                <a 
                  href="https://x.com/hummearth" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-stone-500 dark:hover:text-stone-300 transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="https://github.com/hummhive/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-stone-500 dark:hover:text-stone-300 transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {children}
      </main>

      <footer className={`border-t ${theme.border} mt-14`}>
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className={`text-sm ${theme.text} whitespace-nowrap mb-4 sm:mb-0`}>
              © {new Date().getFullYear()} HummHive
            </p>
            <div className="text-center">
              <div className="flex justify-end items-center gap-4">
                <img 
                  src="https://humm.earth/images/holochain.png" 
                  alt="Holochain Logo" 
                  className="w-1/2 sm:w-1/4 h-auto" 
                />
                <img 
                  src="https://humm.earth/images/holo.png" 
                  alt="HummHive Logo" 
                  className="w-1/2 sm:w-1/4 h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;