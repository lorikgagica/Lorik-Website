import { motion, useScroll, useSpring } from "motion/react";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import Hero from "./components/Hero";
import SkillsExpertise from "./components/SkillsExpertise";
import Companies from "./components/Companies";
import Projects from "./components/Projects";
import About from "./components/About";
import Author from "./components/Author";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isDark, setIsDark] = useState(false);

  // Theme Check & Initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  // Toggle Function
  const toggleDarkMode = () => {
    const isNowDark = document.documentElement.classList.toggle('dark');
    setIsDark(isNowDark);
    localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
  };

  return (
    <div className="relative selection:bg-blue-600/30 selection:text-blue-600 min-h-screen text-slate-900 dark:text-white transition-colors duration-500 overflow-x-hidden w-full">
      
      {/* FIXED ANIMATED BACKGROUND LAYER */}
      <div className="fixed inset-0 -z-50 bg-[#f8fafc] dark:bg-[#020617] transition-colors duration-500">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/20 dark:bg-indigo-900/30 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[10000ms]" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-400/20 dark:bg-violet-900/30 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[12000ms]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-sky-300/20 dark:bg-blue-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[15000ms]" />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full flex items-center gap-4 md:gap-6 shadow-2xl shadow-slate-900/5 dark:shadow-black/50 whitespace-nowrap overflow-x-auto max-w-[95vw] no-scrollbar border border-slate-200 dark:border-slate-700">
        <button
          onClick={toggleDarkMode}
          className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun className="w-4 h-4 text-slate-400 hover:text-white" /> : <Moon className="w-4 h-4 text-slate-600 hover:text-blue-600" />}
        </button>
        <div className="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-1" />
        
        {/* Native Anchor Links (No JS) */}
        <a href="#home" className="text-xs md:text-sm font-bold hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-indigo-400">Home</a>
        <a href="#skills" className="text-xs md:text-sm font-bold hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-indigo-400">Skills</a>
        <a href="#companies" className="text-xs md:text-sm font-bold hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-indigo-400">Companies</a>
        <a href="#projects" className="text-xs md:text-sm font-bold hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-indigo-400">Projects</a>
        <a href="#author" className="text-xs md:text-sm font-bold hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-indigo-400">Author</a>
        <a href="#about" className="text-xs md:text-sm font-bold hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-indigo-400">About</a>
        <a href="#contact" className="text-xs md:text-sm font-bold hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-indigo-400">Contact</a>
      </nav>

      <main>
        <Hero />
        <SkillsExpertise />
        <Companies />
        <Projects />
        <Author />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}