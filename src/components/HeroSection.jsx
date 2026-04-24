'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Download, Mail, ChevronDown, Code2, BrainCircuit, Database, Server, Rocket } from 'lucide-react';

// --- Utility Components ---

const Badge = ({ children, className }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 border border-primary-500/20 text-primary-400 ${className}`}>
    {children}
  </span>
);

// --- Hook: Typewriter Effect (Fixed & Optimized) ---
const useTypewriter = (words, speed = 100, deleteSpeed = 50, pause = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? deleteSpeed : speed, parseInt(Math.random() * 50))); 
    // Added random delay for realistic typing feel

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, deleteSpeed]);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
};

// --- Component: Animated Counter ---
const AnimatedCounter = ({ from, to, duration = 2 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  
  // Only start counting when in view (simplified logic)
  const [count, setCount] = useState(from);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

// --- Main Hero Component ---
export default function HeroSection() {
  const typingText = useTypewriter(
    ['MERN Stack Developer', 'Next.js Specialist', 'AI & Data Enthusiast'], 
    100, 50
  );

  // Mouse move effect for background spotlight
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/KishanOmkarResume.pdf';
    link.download = 'Kishan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden pt-20"
    >
      {/* --- Background Effects --- */}
      
      {/* 1. Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
      
      {/* 2. Mouse Spotlight */}
      <div 
        className="absolute pointer-events-none z-0 inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15), transparent 80%)`
        }}
      ></div>

      {/* 3. Ambient Blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- Left Column: Text Content --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-6"
        >
          <Badge>Available for Hire</Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">
              Kishan Omkar
            </span>
          </h1>
          
          <div className="h-12 text-2xl md:text-3xl text-gray-400 font-mono">
            <span className="text-blue-400">{'>'}</span> {typingText}
          </div>
          
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            I bridge the gap between complex backend logic and fluid frontend design. 
            Specializing in scalable MERN architectures and next-gen AI integrations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              <span className="flex items-center gap-2">
                <Download size={20} /> Download CV
              </span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all text-white flex items-center gap-2"
            >
              <Mail size={20} /> Contact Me
            </motion.button>
          </div>

          {/* Glass Stats Card */}
          <div className="mt-12 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl grid grid-cols-3 divide-x divide-white/10">
            <div className="text-center px-2">
              <div className="text-3xl font-bold text-white"><AnimatedCounter from={0} to={12} />+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Projects</div>
            </div>
            <div className="text-center px-2">
              <div className="text-3xl font-bold text-white"><AnimatedCounter from={0} to={1} />+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Years Exp</div>
            </div>
            <div className="text-center px-2">
              <div className="text-3xl font-bold text-white"><AnimatedCounter from={0} to={100} />%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* --- Right Column: Abstract Visual / Tech Stack --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center h-[600px]"
        >
            {/* Central Glowing Core */}
            <div className="absolute w-64 h-64 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            
            <div className="relative w-80 h-80 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl rotate-3 transform transition-all hover:rotate-0 shadow-2xl z-10 flex flex-col overflow-hidden">
               {/* Mock Code Window */}
               <div className="flex items-center gap-2 p-4 border-b border-white/10 bg-white/5">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 <div className="text-xs text-gray-500 ml-2">Developer.tsx</div>
               </div>
               <div className="p-6 space-y-2 font-mono text-sm text-gray-400">
                 <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</div>
                 <div className="pl-4">name: <span className="text-green-400">'Kishan'</span>,</div>
                 <div className="pl-4">skills: [<span className="text-green-400">'MERN'</span>, <span className="text-green-400">'React-Native'</span>, <span className="text-green-400">'AI'</span>],</div>
                 <div className="pl-4">hardWorker: <span className="text-orange-400">true</span>,</div>
                 <div className="pl-4">coffeeLover: <span className="text-orange-400">true</span></div>
                 <div>{'}'};</div>
               </div>
            </div>

            {/* Orbiting Tech Icons using Framer Motion */}
            <FloatingIcon delay={0} className="top-0 right-10 text-blue-400">
              <Code2 size={32} />
            </FloatingIcon>
            <FloatingIcon delay={1} className="bottom-10 left-10 text-green-400">
              <Database size={32} />
            </FloatingIcon>
            <FloatingIcon delay={2} className="top-20 left-0 text-purple-400">
              <BrainCircuit size={32} />
            </FloatingIcon>
            <FloatingIcon delay={1.5} className="bottom-40 -right-10 text-pink-400">
              <Rocket size={32} />
            </FloatingIcon>
            <FloatingIcon delay={0.5} className="-bottom-5 right-20 text-gray-200">
              <Server size={32} />
            </FloatingIcon>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('projects')}
      >
        <ChevronDown className="text-gray-500 hover:text-white transition-colors" size={32} />
      </motion.div>
    </section>
  );
}

// Helper component for floating icons
const FloatingIcon = ({ children, className, delay }) => (
  <motion.div
    animate={{ 
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0] 
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay: delay 
    }}
    className={`absolute p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);