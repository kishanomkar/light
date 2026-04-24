'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
    // --- 1. Physics Engine ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring 1: The Core (Fast, snappy, responsive)
    const coreX = useSpring(mouseX, { damping: 20, stiffness: 800, mass: 0.2 });
    const coreY = useSpring(mouseY, { damping: 20, stiffness: 800, mass: 0.2 });

    // Spring 2: The Aura (Slow, fluid, drag effect)
    const auraX = useSpring(mouseX, { damping: 40, stiffness: 150, mass: 1 });
    const auraY = useSpring(mouseY, { damping: 40, stiffness: 150, mass: 1 });

    // --- 2. State Management ---
    const [cursorVariant, setCursorVariant] = useState('default');
    const [cursorText, setCursorText] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    
    useEffect(() => {
        const manageMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const manageMouseDown = () => setIsClicked(true);
        const manageMouseUp = () => setIsClicked(false);

        const manageMouseOver = (e) => {
            const target = e.target;
            
            // Interaction Detection Logic
            if (target.closest('a') || target.closest('button') || target.closest('.cursor-pointer')) {
                setCursorVariant('interactive'); 
            } 
            else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                setCursorVariant('text'); 
            } 
            else if (target.closest('[data-cursor]')) {
                const dataAttr = target.closest('[data-cursor]').getAttribute('data-cursor');
                setCursorText(dataAttr);
                setCursorVariant('label'); 
            } 
            else {
                setCursorVariant('default');
                setCursorText('');
            }
        };

        window.addEventListener('mousemove', manageMouseMove);
        window.addEventListener('mousedown', manageMouseDown);
        window.addEventListener('mouseup', manageMouseUp);
        window.addEventListener('mouseover', manageMouseOver);

        return () => {
            window.removeEventListener('mousemove', manageMouseMove);
            window.removeEventListener('mousedown', manageMouseDown);
            window.removeEventListener('mouseup', manageMouseUp);
            window.removeEventListener('mouseover', manageMouseOver);
        };
    }, [mouseX, mouseY]);

    // --- 3. Visual Variants ---
    
    // The inner dot
    const coreVariants = {
        default: {
            height: 10, width: 10,
            backgroundColor: "#ffffff",
            x: -5, y: -5,
        },
        interactive: {
            height: 6, width: 6,
            backgroundColor: "#ffffff",
            x: -3, y: -3,
        },
        text: {
            height: 20, width: 2,
            backgroundColor: "#ffffff",
            x: -1, y: -10,
        },
        label: {
            height: 6, width: 6,
            backgroundColor: "#ffffff",
            x: -3, y: -3,
        }
    };

    // The outer glow/ring
    const auraVariants = {
        default: {
            height: 40, width: 40,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            x: -20, y: -20,
            opacity: 1,
            scale: 1
        },
        interactive: {
            height: 70, width: 70,
            backgroundColor: "rgba(255, 255, 255, 1)",
            border: "0px solid transparent",
            x: -35, y: -35,
            opacity: 1,
            scale: 1,
            mixBlendMode: "difference"
        },
        text: {
            height: 40, width: 40,
            backgroundColor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            x: -20, y: -20,
            opacity: 0.5,
            scale: 0.8
        },
        label: {
            height: 100, width: 100,
            backgroundColor: "#ffffff",
            border: "0px solid transparent",
            x: -50, y: -50,
            opacity: 1,
            mixBlendMode: "difference"
        }
    };

    return (
        <div className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block mix-blend-difference">
            
            {/* Layer 1: The Fluid Aura (Trailing) */}
            <motion.div
                style={{
                    left: auraX, 
                    top: auraY,
                }}
                variants={auraVariants}
                animate={cursorVariant}
                // When clicked, shrink slightly
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.8 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                }}
                className={`fixed rounded-full backdrop-blur-[1px] ${isClicked ? 'scale-75' : ''} transition-transform duration-150`}
            >
                {/* Text Label Logic */}
                <AnimatePresence>
                    {cursorVariant === 'label' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="flex h-full w-full items-center justify-center"
                        >
                            <span className="text-[10px] font-black text-black uppercase tracking-widest">
                                {cursorText}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Layer 2: The Core (Sharp Pointer) */}
            <motion.div
                style={{
                    left: coreX, 
                    top: coreY,
                }}
                variants={coreVariants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 800,
                    damping: 30
                }}
                className="fixed rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            />
            
        </div>
    );
}