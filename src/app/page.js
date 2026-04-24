'use client';

import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import AchievementsSection from '../components/AchievementsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
    useEffect(() => {
        // Initialize AOS if not already initialized by layout.js script
        // This is a fallback, as the Script component in layout.js should handle it.
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            });
        }
    }, []);

    return (
        <main>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <AchievementsSection />
            {/* <TestimonialsSection />
            <BlogSection />
            <ServicesSection /> */}
            <ContactSection />
        </main>
    );
}
