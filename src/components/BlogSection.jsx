import Link from 'next/link';

export default function BlogSection() {
    const blogPosts = [
        {
            id: 1,
            category: 'AI & Machine Learning',
            title: 'The Future of AI in Web Development',
            description: 'Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications...',
            date: 'Dec 15, 2023',
            icon: 'fas fa-brain',
            gradient: 'from-primary-500 to-secondary-500',
            categoryColor: 'text-primary-500'
        },
        {
            id: 2,
            category: 'Performance',
            title: 'Optimizing React Apps for Production',
            description: 'Best practices and techniques to make your React applications lightning fast and production-ready...',
            date: 'Dec 10, 2023',
            icon: 'fas fa-rocket',
            gradient: 'from-green-500 to-blue-500',
            categoryColor: 'text-green-500'
        },
        {
            id: 3,
            category: 'Mobile Development',
            title: 'Building Cross-Platform Apps with React Native',
            description: 'A comprehensive guide to creating mobile applications that work seamlessly on both iOS and Android...',
            date: 'Dec 5, 2023',
            icon: 'fas fa-mobile-alt',
            gradient: 'from-purple-500 to-pink-500',
            categoryColor: 'text-purple-500'
        },
    ];

    return (
        <section id="blog" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <article key={post.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center text-white text-4xl`}>
                                <i className={post.icon}></i>
                            </div>
                            <div className="p-6">
                                <div className={`text-sm ${post.categoryColor} mb-2`}>{post.category}</div>
                                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {post.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">{post.date}</span>
                                    <Link href={`/blog/${post.id}`} className="text-primary-500 hover:text-primary-600 font-semibold">Read More →</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
