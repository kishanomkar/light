'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code2, Cpu } from 'lucide-react';

// --- Experience Data ---
const experiences = [
  {
    id: 1,
    role: "Content Writer & Innovator",
    company: "Spiritual Research Cell",
    period: "2024 - Present",
    location: "Jaipur, India",
    description: "Spearheaded the gamification of the Myers-Briggs Personality Test. Crafted engaging narratives that bridged ancient wisdom with modern psychology, resulting in record-breaking participant engagement.",
    skills: ["Gamification", "Psychology", "Storytelling", "Event Mgmt"],
    icon: <Briefcase size={20} />,
    type: 'work'
  },
  {
    id: 2,
    role: "MERN Stack Developer",
    company: "Edunet Foundation x Shell",
    period: "June 2025 - July 2025",
    location: "Remote",
    description: "Engineered an AI-powered Code Reviewer using the MERN stack. The system analyzes syntax, detects bugs, and suggests optimizations, significantly reducing debugging time.",
    skills: ["MongoDB", "Express", "React", "Node.js", "GenAI"],
    icon: <Code2 size={20} />,
    type: 'internship'
  }
];

// --- Sub-Component: The Holographic Card ---
const ExperienceCard = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative flex items-center justify-between w-full mb-16 lg:mb-32 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col group`}>
      
      {/* 1. Spacer for Desktop Layout */}
      <div className="hidden lg:block w-5/12" />

      {/* 2. Central Data Core (Timeline Node) */}
      <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
        {/* Outer Rotating Ring */}
        <div className="w-12 h-12 rounded-full border border-purple-500/30 flex items-center justify-center animate-[spin_4s_linear_infinite] bg-[#0a0a0a]">
            <div className="w-full h-full rounded-full border-t-2 border-purple-500"></div>
        </div>
        {/* Inner Glowing Core */}
        <div className="absolute w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse"></div>
      </div>

      {/* 3. Horizontal Connector Beam (Desktop Only) */}
      <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-[calc(8.33%-1.5rem)] h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent z-0
        ${isEven ? 'left-1/2 bg-gradient-to-r' : 'right-1/2 bg-gradient-to-l'}`} 
      />

      {/* 4. The Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className={`w-full lg:w-5/12 pl-12 lg:pl-0 ${isEven ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'} relative z-10`}
      >
        <div className="relative overflow-hidden rounded-2xl bg-[#0f0f0f]/80 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] group">
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

            {/* Top Decoration Line */}
            <div className={`absolute top-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-50 ${isEven ? 'right-0' : 'left-0'}`} />

            <div className="p-8">
                {/* Header */}
                <div className={`flex flex-col gap-2 mb-6 ${isEven ? 'lg:items-end' : 'lg:items-start'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">
                        {experience.icon} {experience.type === 'work' ? 'Professional' : 'Internship'}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-colors">
                        {experience.role}
                    </h3>
                    <h4 className="text-lg font-medium text-gray-400 flex items-center gap-2">
                        {experience.company}
                    </h4>
                </div>

                {/* Metadata */}
                <div className={`flex flex-wrap gap-4 text-sm text-gray-500 mb-6 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-blue-400" />
                        {experience.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-blue-400" />
                        {experience.location}
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 font-light">
                    {experience.description}
                </p>

                {/* Tech Stack Chips */}
                <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    {experience.skills.map((skill, i) => (
                        <span 
                            key={i} 
                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-purple-500/30 transition-all cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ExperienceSection() {
    const ref = useRef(null);
    
    // --- Mouse Spotlight Logic ---
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // --- Scroll Progress for Laser Line ---
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section 
            id="experience" 
            // Matched bg color to #0a0a0a
            className="py-32 relative bg-[#0a0a0a] text-white overflow-hidden"
        >
            {/* --- Background Effects (Unified Theme) --- */}
            
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
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow delay-1000 pointer-events-none"></div>

            {/* --- Main Content --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Trajectory</span>
                    </h2>
                    <div className="relative w-24 h-1 mx-auto bg-white/10 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-shimmer" />
                    </div>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    
                    {/* 1. Static Guide Line (Dark) */}
                    <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-white/5"></div>

                    {/* 2. Active Laser Line (Fills on scroll) */}
                    <motion.div 
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] z-10"
                    ></motion.div>

                    {/* Experience Cards */}
                    <div className="relative z-10">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={exp.id} experience={exp} index={index} />
                        ))}
                    </div>

                    {/* "More to come" Endpoint */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-20 relative z-20"
                    >
                        <div className="px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3 text-gray-400 text-sm hover:bg-white/10 transition-colors cursor-default shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                            <Cpu size={16} className="text-purple-400 animate-pulse" />
                            <span>System awaiting new data modules...</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}