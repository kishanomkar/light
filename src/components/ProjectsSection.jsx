'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Github, 
    ExternalLink, 
    X, 
    Smartphone, 
    BrainCircuit, 
    ShoppingCart, 
    Languages, 
    LayoutDashboard, 
    Terminal, 
    Layers, 
    Image as ImageIcon,
    Maximize2
} from 'lucide-react';

// --- Project Data with Gallery Images ---
const projects = [
    {
        id: 1,
        category: 'ai',
        title: 'AI Code Reviewer',
        subtitle: 'Automated Refactoring Engine',
        description: 'An intelligent analysis tool powered by the Gemini API. It parses ASTs (Abstract Syntax Trees) to detect potential bugs, calculates time complexity (Big O), and suggests optimized refactoring patterns automatically. The system learns from user feedback to improve suggestion quality over time.',
        tech: ['React', 'Node.js', 'Gemini API', 'Tailwind', 'Monaco Editor'],
        github: '#',
        demo: '#',
        icon: <Terminal size={32} />,
        color: 'from-purple-500 to-blue-500',
        border: 'hover:border-purple-500/50',
        // Placeholder Gallery Images
        gallery: [
            '/CODE_Reviewer/1.png',
            '/CODE_Reviewer/2.png',
            '/CODE_Reviewer/3.png',
            '/CODE_Reviewer/4.png',
            '/CODE_Reviewer/5.png',
            '/CODE_Reviewer/6.png',
            '/CODE_Reviewer/7.png',
            '/CODE_Reviewer/8.png',
            '/CODE_Reviewer/9.png',
            '/CODE_Reviewer/10.png'
        ]
    },
    {
        id: 2,
        category: 'web',
        title: 'India Growth Dashboard',
        subtitle: 'Economic Visualization Platform',
        description: 'Interactive analytics platform visualizing economic data with dynamic Chart.js graphing and localized data mapping via Leaflet. Features include exportable PDF reports, dark/light mode toggles, and real-time API data fetching for GDP and population metrics.',
        tech: ['React', 'Chart.js', 'Leaflet', 'Tailwind', 'Redux'],
        github: 'https://github.com/kishanomkar/India-s-Growth-Dashboard',
        demo: 'https://urbandevelopmentanalyticsdashboard.vercel.app/',
        icon: <LayoutDashboard size={32} />,
        color: 'from-orange-500 to-red-500',
        border: 'hover:border-orange-500/50',
        gallery: [
            '/CODE_Reviewer/1.png',
            '/CODE_Reviewer/2.png',
            '/CODE_Reviewer/3.png',
            '/CODE_Reviewer/4.png',
            '/CODE_Reviewer/5.png',
            '/CODE_Reviewer/6.png',
            '/CODE_Reviewer/7.png',
            '/CODE_Reviewer/8.png',
            '/CODE_Reviewer/9.png',
            '/CODE_Reviewer/10.png'
        ]
    },
    {
        id: 3,
        category: 'mobile',
        title: 'TaskFlow Mobile',
        subtitle: 'AI-Driven Productivity',
        description: 'Cross-platform productivity suite featuring AI-driven task prioritization using ML Kit. Includes offline synchronization, smart push notification scheduling based on user activity patterns, and biometric authentication.',
        tech: ['React Native', 'Firebase', 'ML Kit', 'TypeScript'],
        github: '#',
        demo: '#',
        icon: <Smartphone size={32} />,
        color: 'from-green-400 to-emerald-600',
        border: 'hover:border-green-500/50',
        gallery: [
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop', // Mobile App
            'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000&auto=format&fit=crop', // Phone in hand
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop'  // Planning
        ]
    },
    {
        id: 4,
        category: 'ai',
        title: 'Vision API Core',
        subtitle: 'Real-time Object Detection',
        description: 'High-performance computer vision API handling object detection, facial recognition, and scene classification. Optimized with PyTorch for low-latency inference and deployed via FastAPI with Docker containerization.',
        tech: ['PyTorch', 'FastAPI', 'OpenCV', 'Docker'],
        github: '#',
        demo: '#',
        icon: <BrainCircuit size={32} />,
        color: 'from-indigo-500 to-purple-500',
        border: 'hover:border-indigo-500/50',
        gallery: [
            'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop', // Neural Net
            'https://images.unsplash.com/photo-1535378437323-9555f374669e?q=80&w=1000&auto=format&fit=crop', // AI Eye
            'https://images.unsplash.com/photo-1527474305487-2070118b8d98?q=80&w=1000&auto=format&fit=crop'  // Server room
        ]
    },
    {
        id: 5,
        category: 'web',
        title: 'Luxe E-Commerce',
        subtitle: 'Headless Shopping Experience',
        description: 'Full-stack shopping platform with Stripe payment integration, real-time inventory management, and admin analytics. Built with Next.js 14 Server Actions for maximum performance and SEO optimization.',
        tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Prisma'],
        github: '#',
        demo: '#',
        icon: <ShoppingCart size={32} />,
        color: 'from-pink-500 to-rose-500',
        border: 'hover:border-pink-500/50',
        gallery: [
            'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop', // Payment
            'https://images.unsplash.com/photo-1472851294608-415522f96319?q=80&w=1000&auto=format&fit=crop', // Store
            'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop'  // Dashboard
        ]
    },
    {
        id: 6,
        category: 'web',
        title: 'LinguaLive',
        subtitle: 'Real-time Translation Engine',
        description: 'Real-time translation interface supporting 50+ languages with voice-to-text input and synthesized speech output. Utilizes WebSockets for instant bidirectional communication streams.',
        tech: ['React', 'Web Speech API', 'Socket.io', 'Node.js'],
        github: '#',
        demo: '#',
        icon: <Languages size={32} />,
        color: 'from-cyan-400 to-blue-500',
        border: 'hover:border-cyan-500/50',
        gallery: [
            'https://images.unsplash.com/photo-1543165796-5426273eaab3?q=80&w=1000&auto=format&fit=crop', // Global
            'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop', // Chat
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop'  // Network
        ]
    },
];

const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai', label: 'AI / ML' },
    { id: 'mobile', label: 'Mobile' },
];

export default function ProjectsSection() {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projects.filter(project => 
        filter === 'all' || project.category === filter || (Array.isArray(project.category) && project.category.includes(filter))
    );

    return (
        <section id="projects" className="py-24 relative bg-[#0a0a0a] text-white overflow-hidden">
            {/* --- Ambient Background --- */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* --- Header --- */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Works</span>
                    </h2>
                    
                    {/* --- Animated Filter Tabs --- */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                                    filter === cat.id ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {filter === cat.id && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-white/10 border border-white/20 rounded-full backdrop-blur-md"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{cat.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Projects Grid --- */}
                <motion.div 
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <ProjectCard 
                                key={project.id} 
                                project={project} 
                                onClick={() => setSelectedProject(project)} 
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* --- Project Gallery Modal --- */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal 
                        project={selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

// --- Individual Grid Card ---
const ProjectCard = ({ project, onClick }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
        className={`group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-300 flex flex-col cursor-pointer ${project.border}`}
    >
        {/* Glow Effect Behind Icon */}
        <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${project.color} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

        <div className="p-6 flex-1 flex flex-col relative z-10">
            <div className="flex justify-between items-start mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                </div>
                <div className="p-2 rounded-full bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <Maximize2 size={16} />
                </div>
            </div>
            
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                {project.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">
                        {t}
                    </span>
                ))}
                {project.tech.length > 3 && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">
                        +{project.tech.length - 3}
                    </span>
                )}
            </div>
        </div>
        
        {/* Click Instruction Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-md flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <ImageIcon size={16} /> View Gallery
            </span>
        </div>
    </motion.div>
);

// --- Detailed Modal Component ---
const ProjectModal = ({ project, onClose }) => {
    const [activeImage, setActiveImage] = useState(project.gallery[0]);

    // Lock Scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl h-[90vh] bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors border border-white/10"
                >
                    <X size={20} />
                </button>

                {/* --- Left Column: Gallery --- */}
                <div className="w-full lg:w-2/3 h-1/2 lg:h-full bg-black relative flex flex-col">
                    {/* Main Image Stage */}
                    <div className="flex-1 relative overflow-hidden group">
                        <motion.img
                            key={activeImage}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            src={activeImage} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
                        
                        {/* Overlay Gradient Border for effect */}
                        <div className={`absolute inset-0 border-[6px] border-transparent bg-gradient-to-br ${project.color} opacity-20 pointer-events-none mix-blend-overlay`}></div>
                    </div>

                    {/* Filmstrip Thumbnails */}
                    <div className="h-24 bg-[#0a0a0a] border-t border-white/10 flex items-center gap-3 px-4 overflow-x-auto">
                        {project.gallery.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(img)}
                                className={`relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                                    activeImage === img 
                                    ? 'border-purple-500 opacity-100 scale-105' 
                                    : 'border-transparent opacity-60 hover:opacity-100'
                                }`}
                            >
                                <img src={img} alt="thumbnail" className="w-full h-full object-fit" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Right Column: Details --- */}
                <div className="w-full lg:w-1/3 h-1/2 lg:h-full p-8 flex flex-col overflow-y-auto bg-[#111]">
                    
                    {/* Header Info */}
                    <div className="mb-6">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} text-white mb-4 shadow-lg`}>
                            {project.icon}
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-1">{project.title}</h2>
                        <p className={`text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}>
                            {project.subtitle}
                        </p>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Layers size={14} /> Project Overview
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            {project.description}
                        </p>
                    </div>

                    {/* Tech Stack Grid */}
                    <div className="mb-8">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <BrainCircuit size={14} /> Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto flex flex-col gap-3">
                        <Link 
                            href={project.demo}
                            className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r ${project.color}`}
                        >
                            <ExternalLink size={18} /> Launch Live Demo
                        </Link>
                        
                        <Link 
                            href={project.github}
                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Github size={18} /> View Source Code
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};