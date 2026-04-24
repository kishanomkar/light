'use client';

import { useEffect, useState } from 'react';

export default function EasterEggModal() {
    const [isOpen, setIsOpen] = useState(false);

    // Confetti creation logic
    const createConfetti = () => {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 5)];
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';

        document.body.appendChild(confetti);

        let pos = -10;
        const fall = setInterval(() => {
            pos += 5;
            confetti.style.top = pos + 'px';

            if (pos > window.innerHeight) {
                clearInterval(fall);
                confetti.remove();
            }
        }, 50);
    };

    useEffect(() => {
        const trigger = document.getElementById('easter-egg-trigger');
        if (trigger) {
            const handleClick = () => {
                setIsOpen(true);
                // Add confetti effect
                for (let i = 0; i < 50; i++) {
                    createConfetti();
                }
            };
            trigger.addEventListener('click', handleClick);
            return () => trigger.removeEventListener('click', handleClick); // Cleanup
        }
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null; // Don't render if not open

    return (
        <div id="easter-egg-modal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl max-w-md mx-4 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-4">Congratulations!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    You found the easter egg! Here's a fun fact: This portfolio was built with over 1000 lines of code and lots of passion! 🚀
                </p>
                <button onClick={closeModal} className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                    Awesome! 🎊
                </button>
            </div>
        </div>
    );
}
