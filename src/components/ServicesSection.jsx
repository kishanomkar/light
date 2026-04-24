export default function ServicesSection() {
    const services = [
        {
            id: 1,
            icon: 'fas fa-code',
            title: 'Web Development',
            description: 'Full-stack web applications using modern frameworks like React, Vue.js, and Node.js. From concept to deployment.',
            price: '$2,500',
            gradient: 'from-primary-500 to-secondary-500'
        },
        {
            id: 2,
            icon: 'fas fa-brain',
            title: 'AI Solutions',
            description: 'Custom AI and machine learning solutions including chatbots, recommendation systems, and predictive analytics.',
            price: '$5,000',
            gradient: 'from-green-500 to-blue-500'
        },
        {
            id: 3,
            icon: 'fas fa-mobile-alt',
            title: 'Mobile Apps',
            description: 'Cross-platform mobile applications using React Native and Flutter. iOS and Android development.',
            price: '$3,500',
            gradient: 'from-purple-500 to-pink-500'
        },
    ];

    const handleGetQuote = (serviceTitle) => {
        alert(`You clicked "Get Quote" for ${serviceTitle}. Please fill out the contact form to discuss your project!`);
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4">What I Do</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={service.id} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6`}>
                                <i className={service.icon}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                {service.description}
                            </p>
                            <div className="text-2xl font-bold text-primary-500 mb-2">Starting at {service.price}</div>
                            <button onClick={() => handleGetQuote(service.title)} className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                                Get Quote
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
