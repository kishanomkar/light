'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Github, 
    Linkedin, 
    Twitter, 
    Instagram, 
    Mail, 
    ArrowRight, 
    Send,
    Terminal,
    Heart,
    Coffee,
    Cpu
} from 'lucide-react';

export default function Footer() {
    const [currentYear, setCurrentYear] = useState('');
    const [time, setTime] = useState('');
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [matrixMode, setMatrixMode] = useState(false);

    // Set Year and Live Clock
    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
        
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        setSubscribed(true);
        setTimeout(() => {
            setSubscribed(false);
            setEmail('');
        }, 3000);
    };

    const toggleMatrixMode = () => {
        setMatrixMode(!matrixMode);
        if (!matrixMode) {
            // Auto turn off after 5 seconds to not annoy user
            setTimeout(() => setMatrixMode(false), 5000);
        }
    };

    return (
        <footer className="relative bg-[#050505] text-white pt-20 pb-10 overflow-hidden border-t border-white/10">
            
            {/* --- Matrix Mode Overlay (Easter Egg) --- */}
            <AnimatePresence>
                {matrixMode && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black font-mono text-green-500 overflow-hidden pointer-events-none flex flex-col items-center justify-center text-xl"
                    >
                        <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] opacity-20 bg-cover"></div>
                        <motion.h1 
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1.2 }}
                            className="z-10 text-4xl font-bold bg-black px-4"
                        >
                            SYSTEM OVERRIDE INITIATED
                        </motion.h1>
                        <p className="z-10 mt-4 bg-black px-2">Kishan Omkar is watching...</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Background Effects --- */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
            
            {/* Glowing Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-12 gap-12 mb-16">
                    
                    {/* Column 1: Brand & Identity (Span 5) */}
                    <div className="md:col-span-5 space-y-6">
                        <Link href="#home" className="inline-block">
                            <h2 className="text-3xl font-bold tracking-tighter">
                                Kishan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Omkar</span>
                            </h2>
                        </Link>
                        
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Architecting digital ecosystems with AI & Web technologies. 
                            Focused on performance, scalability, and user-centric design.
                        </p>

                        <div className="flex items-center gap-4 pt-2">
                            <SocialLink href="https://github.com/kishanomkar" icon={<Github size={20} />} label="GitHub" />
                            <SocialLink href="https://www.linkedin.com/in/kishan-omkar-022226314/" icon={<Linkedin size={20} />} label="LinkedIn" />
                            {/* <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" /> */}
                            <SocialLink href="https://www.instagram.com/omkar_kishan06/" icon={<Instagram size={20} />} label="Instagram" />
                            {/* <SocialLink href="#" icon={<Mail size={20} />} label="Email" /> */}
                        </div>
                    </div>

                    {/* Column 2: Navigation (Span 3) */}
                    <div className="md:col-span-3">
                        <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-6 flex items-center gap-2">
                            <Terminal size={16} className="text-purple-400" /> Directory
                        </h3>
                        <ul className="space-y-3">
                            <FooterLink href="#about">About System</FooterLink>
                            <FooterLink href="#projects">Project Modules</FooterLink>
                            <FooterLink href="#skills">Tech Specs</FooterLink>
                            <FooterLink href="#blog">Dev Logs</FooterLink>
                            <FooterLink href="#contact">Signal Me</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3: Newsletter & Status (Span 4) */}
                    <div className="md:col-span-4">
                        <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-6 flex items-center gap-2">
                            <Cpu size={16} className="text-blue-400" /> System Updates
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe for the latest tech drops and articles. No spam, just code.
                        </p>
                        
                        <form onSubmit={handleNewsletterSubmit} className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                            <div className="relative flex bg-[#0a0a0a] rounded-lg p-1">
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="user@domain.com" 
                                    required
                                    className="flex-1 bg-transparent border-none text-white px-4 py-2 focus:ring-0 placeholder-gray-600 outline-none" 
                                />
                                <button 
                                    type="submit" 
                                    className={`px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                                        subscribed 
                                        ? 'bg-green-500 text-black' 
                                        : 'bg-white/10 hover:bg-white/20 text-white'
                                    }`}
                                >
                                    {subscribed ? 'Joined!' : <Send size={18} />}
                                </button>
                            </div>
                        </form>

                        {/* Live Status Widget */}
                        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-400 font-mono">STATUS: ONLINE</span>
                                    <span className="text-xs text-gray-500 font-mono">LOC: INDIA</span>
                                </div>
                            </div>
                            <div className="text-xs font-mono text-gray-400 border-l border-white/10 pl-4">
                                {time}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Kishan Omkar. 
                        <span className="hidden sm:inline"> Built with React & Next.js.</span>
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                            Made with <Heart size={14} className="text-red-500 fill-red-500" />
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                            Fueled by <Coffee size={14} className="text-amber-600" />
                        </span>
                        
                        {/* Easter Egg Trigger */}
                        <button 
                            onClick={toggleMatrixMode}
                            className="hover:text-green-400 transition-colors cursor-help"
                            title="Do not click"
                        >
                            v2.0.5
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// --- Helper Components ---

const SocialLink = ({ href, icon, label }) => (
    <a 
        href={href} 
        aria-label={label}
        className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 group relative overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative z-10">{icon}</div>
    </a>
);

const FooterLink = ({ href, children }) => (
    <li>
        <Link 
            href={href} 
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400" />
            <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
        </Link>
    </li>
);