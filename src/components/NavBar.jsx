'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../hooks/useTheme'; 

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggleTheme } = useTheme();

    // --- Scroll Progress Bar Logic ---
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const navItems = [
        { name: 'Home', href: 'home' },
        { name: 'About', href: 'about' },
        { name: 'Experience', href: 'experience' },
        { name: 'Projects', href: 'projects' },
        { name: 'Contact', href: 'contact' },
    ];

    // --- Scroll Spy & Navbar Appearance Logic ---
    useEffect(() => {
        const handleScroll = () => {
            // 1. Navbar Appearance
            setScrolled(window.scrollY > 50);

            // 2. Scroll Spy (Detect active section)
            const sections = navItems.map(item => document.getElementById(item.href));
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            for (const section of sections) {
                if (section && 
                    section.offsetTop <= scrollPosition && 
                    (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    const scrollToSection = (sectionId) => {
        setMobileMenuOpen(false);
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
        }
    };

    return (
        <header 
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled 
                ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-lg' 
                : 'bg-transparent border-b border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    {/* --- Logo --- */}
                    <div 
                        className="flex items-center gap-2 cursor-pointer group" 
                        onClick={() => scrollToSection('home')}
                    >
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-blue-500 text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                            KO
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 hidden sm:block">
                            Kishan Omkar
                        </span>
                    </div>

                    {/* --- Desktop Navigation --- */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="relative px-4 py-2 text-sm font-medium transition-colors"
                            >
                                {/* Text Label */}
                                <span className={`relative z-10 transition-colors duration-300 ${
                                    activeSection === item.href 
                                    ? 'text-purple-600 dark:text-purple-300' 
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}>
                                    {item.name}
                                </span>

                                {/* Animated "Active Pill" Background */}
                                {activeSection === item.href && (
                                    <motion.div
                                        layoutId="activeSection"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        className="absolute inset-0 bg-purple-100 dark:bg-purple-500/10 rounded-full -z-0"
                                    ></motion.div>
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* --- Right Actions --- */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <button 
                            onClick={toggleTheme} 
                            className="p-2.5 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10 transition-colors relative overflow-hidden group"
                            aria-label="Toggle Theme"
                        >
                             <div className="relative z-10">
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                             </div>
                        </button>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                            className="lg:hidden p-2 text-gray-600 dark:text-gray-300"
                        >
                            <AnimatePresence mode="wait">
                                {mobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Scroll Progress Bar --- */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 origin-left"
                style={{ scaleX }}
            />

            {/* --- Mobile Menu Overlay --- */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navItems.map((item, idx) => (
                                <motion.button
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                                        activeSection === item.href 
                                        ? 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300' 
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
                                    }`}
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}