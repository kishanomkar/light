'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Download, PenTool, Music, TreePine, Rocket, Sparkles } from 'lucide-react';

// --- Data Matching the Image ---
const cards = [
  {
    icon: <PenTool size={20} />,
    title: "Content Creator",
    desc: "Sharing tech insights via blogs & mentorship.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50"
  },
  {
    icon: <Music size={20} />,
    title: "Music Enthusiast",
    desc: "Coding fueled by Lo-Fi & Rock playlists.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/50"
  },
  {
    icon: <TreePine size={20} />,
    title: "Nature Lover",
    desc: "Recharging creativity in the outdoors.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50"
  },
  {
    icon: <Rocket size={20} />,
    title: "Dreamer & Doer",
    desc: "Turning wild ideas into deployed apps.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50"
  }
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // --- Background Mouse Spotlight Logic (From Hero) ---
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);
    return () => window.removeEventListener("mousemove", handleWindowMouseMove);
  }, []);

  // --- 3D Tilt Logic for Profile Card ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the tilt
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleCardMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/KishanOmkarResume.pdf';
    link.download = 'Kishan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      id="about"
      ref={ref}
      // Changed bg color to #0a0a0a to match Hero
      className="py-32 relative overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* --- Background Effects (Exact Match from Hero) --- */}

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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >

          {/* --- LEFT: 3D Interactive Profile Card --- */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start perspective-1000"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="relative w-80 h-[450px] sm:w-[400px] sm:h-[500px] bg-[#0a0a0a] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden group cursor-pointer"
            >
              {/* Inner Lighting Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

              {/* Image Container */}
              <div className="absolute inset-2 bg-[#111] rounded-[1.7rem] overflow-hidden">
                <img
                  src="./profile.png"
                  alt="Profile"
                  className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                {/* Bottom Shadow Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              </div>

              {/* "Open to Work" Badge */}
              <div className="absolute bottom-6 left-6 right-6 translate-z-20 z-20">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-white font-medium text-sm">Open to Work</span>
                  </div>
                  <Sparkles className="text-yellow-400 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT: Content & Grid --- */}
          <div className="space-y-8">

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Me</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                I create seamless digital experiences by blending <span className="text-purple-400 font-medium">MERN Stack</span> expertise with <span className="text-blue-400 font-medium">Next.js</span> performance. Currently diving deep into the world of AI to build smarter, more adaptive applications.
              </p>
            </motion.div>

            {/* Interactive Grid Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`group p-5 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:bg-[#151515] ${card.border} transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    {/* Colored Icon Box */}
                    <div className={`p-3 rounded-xl ${card.bg} ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <h4 className="font-bold text-gray-100 text-lg">{card.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Download Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <button
                onClick={downloadResume}
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-gray-200/50 to-transparent z-0"></div>

                <span className="relative z-10 flex items-center gap-2">
                  <Download size={20} 
                  onClick={downloadResume}
                  className="group-hover:translate-y-0.5 transition-transform" />
                  Download Resume
                </span>
              </button>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}