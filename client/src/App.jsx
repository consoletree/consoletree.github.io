import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Example of pulling data from backend (optional integration)
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Check local storage for theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Fetch projects from your new API (Uncomment when backend is running)
    // axios.get('http://localhost:5000/api/projects').then(res => setProjects(res.data));
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };

  const revealEmail = (e) => {
    const email = "abinrantony@icloud.com";
    e.target.innerHTML = `<i class="fas fa-envelope"></i> ${email}`;
    e.target.onclick = () => window.location.href = `mailto:${email}`;
  };

  return (
    <div className={`bg-background dark:bg-dark-bg text-slate-600 dark:text-slate-300 font-sans selection:bg-primary selection:text-white overflow-x-hidden transition-colors duration-300 min-h-screen`}>
      
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] opacity-70"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-[100px] opacity-70"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-4xl z-50 glass-nav rounded-full px-6 py-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <span className="text-xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">console<span className="text-primary dark:text-indigo-400">tree</span></span>
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center space-x-1">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 text-sm font-medium hover:text-primary dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 rounded-full transition-all">{item}</a>
                ))}
             </div>

             <button onClick={toggleTheme} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
             </button>
             
             {/* Mobile Menu Btn */}
             <div className="md:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                   <i className="fas fa-bars text-xl"></i>
                </button>
             </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 md:pt-32 z-10">
          <div className="text-center px-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-medium text-slate-700 dark:text-slate-300 mb-8">
                  <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  Available for Work
              </div>
              
              <h1 className="text-5xl md:text-8xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                  Crafting digital <br/> <span className="text-gradient">masterpieces.</span>
              </h1>
              
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 mb-10">
                  I'm a creative developer who bridges the gap between design and engineering.
              </p>

              <div className="flex justify-center gap-4">
                 <a href="#projects" className="px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm transition-transform hover:scale-105 shadow-xl">View Projects</a>
              </div>
          </div>
      </section>

      {/* Projects Section (Dynamic Mapping Example) */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-12">Projects</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Static Example Project Card */}
              <div className="lg:col-span-2 group relative rounded-3xl overflow-hidden glass-panel h-[300px] border border-white/50 dark:border-white/10">
                  <div className="absolute inset-0 bg-slate-900">
                     {/* Img placeholder */}
                     <img src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 z-20">
                      <h3 className="text-3xl font-heading font-bold text-white mb-2">Neon Marketplace</h3>
                      <p className="text-slate-100">A futuristic shopping platform with 3D product previews.</p>
                  </div>
              </div>

              {/* Add more cards here or map 'projects' state */}

           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
         <div className="max-w-5xl mx-auto px-4">
            <div className="glass-panel rounded-[3rem] p-16 text-center">
                <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6">Let's work together.</h2>
                <button onClick={revealEmail} className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
                    Reveal Email
                </button>
            </div>
         </div>
      </section>

    </div>
  );
}

export default App;
