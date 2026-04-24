'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Server, 
  Layout, 
  Smartphone, 
  Terminal, 
  Cloud, 
  Cpu, 
  GitBranch, 
  Layers,
  Globe
} from 'lucide-react';

// --- Data ---
const technologies = [
  { name: 'React', icon: <Code2 className="text-blue-400" /> },
  { name: 'Next.js', icon: <Globe className="text-white" /> },
  { name: 'Node.js', icon: <Server className="text-green-500" /> },
  { name: 'TypeScript', icon: <Code2 className="text-blue-300" /> },
  { name: 'Python', icon: <Terminal className="text-yellow-400" /> },
  { name: 'MongoDB', icon: <Database className="text-green-400" /> },
  { name: 'Express.js', icon: <Server className="text-gray-400" /> },
//   { name: 'PostgreSQL', icon: <Database className="text-blue-500" /> },
  { name: 'Tailwind', icon: <Layout className="text-cyan-400" /> },
  { name: 'React Native', icon: <Smartphone className="text-blue-600" /> },
//   { name: 'AWS', icon: <Cloud className="text-orange-400" /> },
//   { name: 'Docker', icon: <Layers className="text-blue-400" /> },
  { name: 'Git', icon: <GitBranch className="text-red-500" /> },
];

const proficiencies = [
  { label: 'Frontend Architecture', pct: 95, color: 'from-blue-500 to-cyan-400' },
  { label: 'Backend & API Design', pct: 90, color: 'from-purple-500 to-pink-500' },
  { label: 'AI/ML Integration', pct: 85, color: 'from-emerald-500 to-green-400' },
  { label: 'Database Management', pct: 88, color: 'from-orange-500 to-red-500' },
  { label: 'DevOps & CI/CD', pct: 70, color: 'from-blue-600 to-indigo-500' },
];

// --- Components ---

const TechCard = ({ tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm group cursor-default"
    >
      <div className="mb-3 p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
        {tech.icon}
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
        {tech.name}
      </span>
    </motion.div>
  );
};

const ProgressBar = ({ item, index }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-end mb-2">
        <h4 className="text-gray-200 font-medium flex items-center gap-2">
           {/* Decorative dot */}
           <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}></div>
           {item.label}
        </h4>
        <div className="font-mono text-sm text-gray-400">
           {item.pct}%
        </div>
      </div>
      
      {/* Track */}
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
         {/* Animated Bar */}
         <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${item.pct}%` }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
            className={`h-full rounded-full bg-gradient-to-r ${item.color} relative`}
         >
            {/* Shimmer Effect on Bar */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
         </motion.div>
      </div>
    </div>
  );
};

export default function SkillsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section 
            id="skills" 
            ref={ref}
            className="py-24 relative bg-[#0a0a0a] text-white overflow-hidden"
        >
            {/* --- Background Ambience --- */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                
                {/* --- Section Header --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Arsenal</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* --- Left Column: Tech Grid --- */}
                    <div>
                        <motion.h3 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-2xl font-bold mb-8 flex items-center gap-3"
                        >
                            <Cpu className="text-purple-400" /> 
                            Core Technologies
                        </motion.h3>
                        
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                            {technologies.map((tech, idx) => (
                                <TechCard key={idx} tech={tech} index={idx} />
                            ))}
                        </div>
                    </div>

                    {/* --- Right Column: Proficiency Metrics --- */}
                    <div className="relative">
                        {/* Decorative Vertical Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -ml-8 hidden lg:block"></div>

                        <motion.h3 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-2xl font-bold mb-8 flex items-center gap-3"
                        >
                            <Terminal className="text-blue-400" />
                            System Proficiency
                        </motion.h3>

                        <div className="space-y-2">
                           {proficiencies.map((item, idx) => (
                              <ProgressBar key={idx} item={item} index={idx} />
                           ))}
                        </div>
                        
                        {/* Stats Summary Box */}
                        <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.8 }}
                           className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between"
                        >
                            <div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Total Commits</div>
                                <div className="text-2xl font-mono font-bold text-white">2,400+</div>
                            </div>
                            <div className="h-8 w-px bg-white/10"></div>
                            <div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Hours Coded</div>
                                <div className="text-2xl font-mono font-bold text-white">5,000+</div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}