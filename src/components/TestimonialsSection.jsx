'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        {
            quote: "Kishan is an exceptional developer who delivered our AI-powered analytics platform ahead of schedule. His expertise in machine learning and web development is truly impressive. The solution increased our data processing efficiency by 300%.",
            author: "Sarah Johnson",
            title: "CTO, TechCorp Inc.",
            gradient: "from-primary-500 to-secondary-500"
        },
        {
            quote: "Working with Kishan was a game-changer for our startup. He built our entire e-commerce platform from scratch and integrated advanced features we didn't even know we needed. His attention to detail and problem-solving skills are outstanding.",
            author: "Michael Chen",
            title: "Founder, StartupXYZ",
            gradient: "from-green-500 to-blue-500"
        },
        {
            quote: "Kishan mentored me through my transition into tech and helped me land my first developer job. His teaching style is clear, patient, and encouraging. He's not just a great developer but also an amazing mentor and human being.",
            author: "Emily Rodriguez",
            title: "Junior Developer, WebSolutions",
            gradient: "from-purple-500 to-pink-500"
        },
    ];

    const goToTestimonial = (index) => {
        setCurrentTestimonial(index);
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const previousTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    // Auto-advance testimonials
    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentTestimonial]); // Re-run effect if currentTestimonial changes to reset interval

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4">What People Say</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
                </div>

                <div className="relative">
                    <div className="testimonial-carousel overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-4xl mx-auto text-center">
                                        <div className="text-5xl text-primary-500 mb-4">"</div>
                                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 italic">
                                            "{testimonial.quote}"
                                        </p>
                                        <div className="flex items-center justify-center">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white text-xl mr-4`}>
                                                <i className="fas fa-user"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{testimonial.author}</h4>
                                                <p className="text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <button onClick={previousTestimonial} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                        <i className="fas fa-chevron-left text-primary-500"></i>
                    </button>
                    <button onClick={nextTestimonial} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                        <i className="fas fa-chevron-right text-primary-500"></i>
                    </button>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`testimonial-indicator w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
