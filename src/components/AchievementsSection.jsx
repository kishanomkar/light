'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Trophy, ShieldCheck, GitPullRequest, Mic, GraduationCap, Star, X, ExternalLink, ZoomIn } from 'lucide-react';

// --- Data (Now includes 'image' property) ---
const achievements = [
    {
        id: 1,
        title: 'Competition Winner',
        subtitle: '1st Place - Battle of Brains 2025',
        description: `Standing at the top among many talented participants is truly an honour. This competition was a powerful test of creativity, critical thinking, prompt engineering, and rapid innovation — all within just 90 challenging minutes.

💻𝗥𝗼𝘂𝗻𝗱 𝟭 – 𝗣𝗿𝗼𝗺𝗽𝘁 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴 & 𝗔𝗜 𝗢𝘂𝘁𝗽𝘂𝘁𝘀
I crafted impactful prompts and generated high-quality AI outputs using tools like ChatGPT and DALL·E, focusing on precision, creativity, and clear intent.
💡𝗥𝗼𝘂𝗻𝗱 𝟮 – 𝗜𝗱𝗲𝗮 𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗶𝗼𝗻 & 𝗣𝗿𝗲𝘀𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻
I presented innovative ideas within tight deadlines, demonstrating strong communication, clarity of thought, and structured problem-solving.`,
        icon: <Trophy className="text-yellow-400" size={32} />,
        gradient: 'from-yellow-400/20 to-orange-500/20',
        glow: 'group-hover:shadow-yellow-500/20',
        border: 'group-hover:border-yellow-500/50',
        // Placeholder image - replace with your real certificate URL
        image: '/achievements/battle_of_brains.jpg' 
    },
    {
        id: 2,
        title: 'C Programming',
        subtitle: 'Certification',
        description: ' ',
        icon: <ShieldCheck className="text-blue-400" size={32} />,
        gradient: 'from-blue-500/20 to-cyan-500/20',
        glow: 'group-hover:shadow-blue-500/20',
        border: 'group-hover:border-blue-500/50',
        image: '/achievements/C.jpg'
    },
    {
        id: 3,
        title: 'Data Vizualization',
        subtitle: 'Analyzing and Visualizing Data with Microsoft Power BI',
        description: `Skills I learned for Analyzing and Visualizing Data with Microsoft Power BI:
        1. Analysis & Presentation
        2. Analytics & Insights
        3. Charts & Graphs
        4. Dashboards
        5. Data Analysis
        6. Data Cleanup
        7. Data Interpretation
        8. Data Visualization
        9. Effective Communication
        10. Visual Basics
        11. Visualization`,
        icon: <GitPullRequest className="text-green-400" size={32} />,
        gradient: 'from-green-500/20 to-emerald-500/20',
        glow: 'group-hover:shadow-green-500/20',
        border: 'group-hover:border-green-500/50',
        image: '/achievements/data_visualization-1.png'
    },
    {
        id: 4,
        title: 'Consolation Prize Winner',
        subtitle: 'At Clash of Code 2024',
        description: 'A college level Coding Competition on C programming. I was in the Top 10 Consolation Prize Winner 🏆.',
        icon: <Mic className="text-red-400" size={32} />,
        gradient: 'from-red-500/20 to-pink-500/20',
        glow: 'group-hover:shadow-red-500/20',
        border: 'group-hover:border-red-500/50',
        image: '/achievements/COC.jpg'
    },
    {
        id: 5,
        title: '14th at Projectathon',
        subtitle: 'Malviya National Institute of Technology, Jaipur',
        description: 'Our team 𝐓𝐫𝐢𝐩𝐒𝐡𝐢𝐞𝐥𝐝 from Jaipur Engineering College and Research Centre (JECRC) secured the 𝟏𝟒𝐭𝐡 position (Top 15) at Malaviya National Institute of Technology Jaipur PROJECTATHON 2025 among several outstanding innovations across Rajasthan!',
        icon: <GraduationCap className="text-indigo-400" size={32} />,
        gradient: 'from-indigo-500/20 to-purple-500/20',
        glow: 'group-hover:shadow-indigo-500/20',
        border: 'group-hover:border-indigo-500/50',
        image: '/achievements/34.png'
    },
    // {
    //     id: 6,
    //     title: 'Top Rated',
    //     subtitle: '5.0 Star Freelancer',
    //     description: 'Maintained a perfect 5-star rating across 50+ contracts on Upwork. Recognized for clear communication and code quality.',
    //     icon: <Star className="text-purple-400" size={32} />,
    //     gradient: 'from-purple-500/20 to-violet-500/20',
    //     glow: 'group-hover:shadow-purple-500/20',
    //     border: 'group-hover:border-purple-500/50',
    //     image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop'
    // },
];

// --- Main Section Component ---
export default function AchievementsSection() {
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    return (
        <section id="achievements" className="py-24 relative bg-[#0a0a0a] text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Honours</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"
                    ></motion.div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <AchievementCard 
                            key={item.id} 
                            item={item} 
                            index={index} 
                            onClick={() => setSelectedAchievement(item)}
                        />
                    ))}
                </div>
            </div>

            {/* --- The Golden Modal --- */}
            <AnimatePresence>
                {selectedAchievement && (
                    <CertificateModal 
                        achievement={selectedAchievement} 
                        onClose={() => setSelectedAchievement(null)} 
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

// --- Individual Card Component ---
const AchievementCard = ({ item, index, onClick }) => {
    return (
        <motion.div
            layoutId={`card-${item.id}`} // For smooth transition if expanding
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={onClick}
            className={`group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer ${item.glow}`}
        >
            <div className={`relative h-full bg-[#0a0a0a]/90 rounded-xl p-6 border border-white/10 ${item.border} transition-colors overflow-hidden`}>
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* View Text Overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-white/50 flex items-center gap-1">
                    <ZoomIn size={12} /> View
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-white/10 rounded-full blur-md transform group-hover:scale-125 transition-transform"></div>
                        <div className="relative w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                            {item.icon}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                        {item.title}
                    </h3>
                    <p className="text-gray-400 font-medium group-hover:text-white/90 transition-colors">
                        {item.subtitle}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

// --- The Golden "Honour" Modal ---
const CertificateModal = ({ achievement, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={onClose} // Close when clicking backdrop
        >
            {/* Ambient Golden Glow Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 rounded-full blur-[150px] animate-spin-slow opacity-50"></div>
                <div className="absolute w-[600px] h-[100px] bg-yellow-500/30 blur-[80px] rotate-45"></div>
                <div className="absolute w-[600px] h-[100px] bg-yellow-500/30 blur-[80px] -rotate-45"></div>
            </div>

            {/* Modal Content */}
            <motion.div
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking modal
                className="relative w-full max-w-4xl bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.2)] flex flex-col md:flex-row"
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Left Side: The Certificate Image (The Star of the show) */}
                <div className="relative w-full md:w-3/5 min-h-[300px] md:min-h-[500px] bg-[#050505] flex items-center justify-center p-8 overflow-hidden group">
                    
                    {/* Golden Frame Effect */}
                    <div className="relative z-10 rounded-lg p-[2px] bg-gradient-to-br from-yellow-300 via-yellow-600 to-yellow-800 shadow-[0_0_30px_rgba(234,179,8,0.3)] transform transition-transform duration-700 group-hover:scale-[1.02]">
                        <div className="rounded-lg overflow-hidden relative">
                             {/* The Image */}
                            <img 
                                src={achievement.image} 
                                alt={achievement.title} 
                                className="w-full h-auto object-cover max-h-[400px]" 
                            />
                            
                            {/* Holographic Shine Effect over image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:animate-shine pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Background Pattern behind certificate */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                {/* Right Side: Details */}
                <div className="w-full md:w-2/5 p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 bg-[#151515]">
                    <div className="mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
                            <Star size={12} fill="currentColor" /> Verified Achievement
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">{achievement.title}</h3>
                        <p className="text-xl text-gray-400 font-medium">{achievement.subtitle}</p>
                    </div>

                    <div className="h-px w-full bg-white/10 mb-6"></div>

                    <p className="text-gray-300 leading-relaxed mb-8 overflow-hidden overflow-y-auto max-h-48">
                        {achievement.description}
                    </p>

                    <div className="mt-auto">
                        <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
                            <span>Verify Credential</span>
                            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};