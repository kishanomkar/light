<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Johnson - AI & Web Developer | Portfolio</title>
    <meta name="description" content="Alex Johnson - Expert AI & Web Developer specializing in React, Python, and Machine Learning. View my portfolio, projects, and get in touch for collaborations.">
    <meta name="keywords" content="AI Developer, Web Developer, React, Python, Machine Learning, Portfolio">
    <meta name="author" content="Alex Johnson">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://alexjohnson.dev/">
    <meta property="og:title" content="Alex Johnson - AI & Web Developer">
    <meta property="og:description" content="Expert AI & Web Developer specializing in React, Python, and Machine Learning.">
    <meta property="og:image" content="https://alexjohnson.dev/og-image.jpg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://alexjohnson.dev/">
    <meta property="twitter:title" content="Alex Johnson - AI & Web Developer">
    <meta property="twitter:description" content="Expert AI & Web Developer specializing in React, Python, and Machine Learning.">
    <meta property="twitter:image" content="https://alexjohnson.dev/og-image.jpg">

    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#eff6ff',
                            500: '#3b82f6',
                            600: '#2563eb',
                            700: '#1d4ed8',
                            900: '#1e3a8a'
                        },
                        secondary: {
                            500: '#8b5cf6',
                            600: '#7c3aed'
                        }
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.5s ease-in-out',
                        'slide-up': 'slideUp 0.5s ease-out',
                        'bounce-slow': 'bounce 2s infinite',
                        'pulse-slow': 'pulse 3s infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'glow': 'glow 2s ease-in-out infinite alternate'
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' }
                        },
                        slideUp: {
                            '0%': { transform: 'translateY(20px)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' }
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-20px)' }
                        },
                        glow: {
                            '0%': { boxShadow: '0 0 5px #3b82f6' },
                            '100%': { boxShadow: '0 0 20px #3b82f6, 0 0 30px #3b82f6' }
                        }
                    }
                }
            }
        }
    </script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <style>
        .custom-cursor {
            width: 20px;
            height: 20px;
            border: 2px solid #3b82f6;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
        }
        .gradient-text {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .dark .glass-effect {
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
    </style>
</head>
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
    <!-- Custom Cursor -->
    <div class="custom-cursor hidden lg:block"></div>

    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <!-- Logo -->
                <div class="text-2xl font-bold gradient-text cursor-pointer" onclick="scrollToSection('home')">
                    Alex Johnson
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden lg:flex space-x-8">
                    <a href="#home" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Home</a>
                    <a href="#about" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">About</a>
                    <a href="#experience" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Experience</a>
                    <a href="#projects" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Projects</a>
                    <a href="#skills" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Skills</a>
                    <a href="#achievements" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Achievements</a>
                    <a href="#blog" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Blog</a>
                    <a href="#contact" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Contact</a>
                </div>
                
                <!-- Dark Mode Toggle & Mobile Menu -->
                <div class="flex items-center space-x-4">
                    <button id="theme-toggle" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                        <i class="fas fa-moon dark:hidden"></i>
                        <i class="fas fa-sun hidden dark:block"></i>
                    </button>
                    
                    <button id="mobile-menu-btn" class="lg:hidden text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
            
            <!-- Mobile Navigation -->
            <div id="mobile-menu" class="lg:hidden hidden pb-4">
                <div class="flex flex-col space-y-4">
                    <a href="#home" class="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Home</a>
                    <a href="#about" class="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">About</a>
                    <a href="#experience" class="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Experience</a>
                    <a href="#projects" class="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Projects</a>
                    <a href="#skills" class="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Skills</a>
                    <a href="#achievements" class="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Achievements</a>
                    <a href="#blog" class="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Blog</a>
                    <a href="#contact" class="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 relative overflow-hidden">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full animate-pulse-slow"></div>
            <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-500/10 rounded-full animate-bounce-slow"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-full animate-float"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div data-aos="fade-up" data-aos-duration="1000">
                <!-- Stats Counter -->
                <div class="flex justify-center space-x-8 mb-8">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-primary-500" id="projects-count">0</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-primary-500" id="experience-count">0</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-primary-500" id="clients-count">0</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                    </div>
                </div>

                <h1 class="text-5xl md:text-7xl font-bold mb-6">
                    Hi, I'm <span class="gradient-text">Alex Johnson</span>
                </h1>
                <h2 class="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
                    <span id="typing-text"></span><span class="animate-pulse">|</span>
                </h2>
                <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                    Crafting intelligent solutions and beautiful web experiences with cutting-edge technology. 
                    Passionate about AI, machine learning, and creating impactful digital products.
                </p>
                
                <!-- Hero Video/Animation Placeholder -->
                <div class="mb-8">
                    <div class="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center animate-glow">
                        <i class="fas fa-code text-4xl text-white"></i>
                    </div>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onclick="downloadResume()" class="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <i class="fas fa-download mr-2"></i>View Resume
                    </button>
                    <button onclick="scrollToSection('contact')" class="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        <i class="fas fa-envelope mr-2"></i>Contact Me
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i class="fas fa-chevron-down text-2xl text-gray-400"></i>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold mb-4">About Me</h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="text-center lg:text-left" data-aos="fade-right">
                    <div class="relative inline-block mb-8">
                        <div class="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-8xl shadow-2xl">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="absolute -bottom-4 -right-4 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white">
                            <i class="fas fa-check text-2xl"></i>
                        </div>
                    </div>
                </div>
                
                <div data-aos="fade-left">
                    <h3 class="text-2xl font-bold mb-6 gradient-text">Passionate Developer & AI Enthusiast</h3>
                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        I'm a passionate AI and web developer with 5+ years of experience creating innovative solutions that bridge the gap between artificial intelligence and user-friendly web applications. I specialize in building scalable, efficient systems that solve real-world problems.
                    </p>
                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        When I'm not coding, you'll find me exploring the latest AI research, contributing to open-source projects, or mentoring aspiring developers in the tech community. I believe in continuous learning and sharing knowledge with others.
                    </p>
                    
                    <!-- Fun Facts -->
                    <div class="grid md:grid-cols-2 gap-4 mb-8">
                        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <i class="fas fa-coffee text-primary-500 mb-2"></i>
                            <div class="font-semibold">Coffee Lover</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">500+ cups consumed while coding</div>
                        </div>
                        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <i class="fas fa-gamepad text-primary-500 mb-2"></i>
                            <div class="font-semibold">Gamer</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">Strategy games & puzzle solving</div>
                        </div>
                        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <i class="fas fa-mountain text-primary-500 mb-2"></i>
                            <div class="font-semibold">Hiker</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">Nature inspires creativity</div>
                        </div>
                        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <i class="fas fa-book text-primary-500 mb-2"></i>
                            <div class="font-semibold">Bookworm</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">Sci-fi & tech books enthusiast</div>
                        </div>
                    </div>
                    
                    <button onclick="downloadResume()" class="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <i class="fas fa-download mr-2"></i>Download Resume
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold mb-4">Experience</h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
            </div>
            
            <div class="relative">
                <!-- Timeline Line -->
                <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-500"></div>
                
                <!-- Experience Items -->
                <div class="space-y-12">
                    <!-- Experience 1 -->
                    <div class="flex items-center" data-aos="fade-right">
                        <div class="w-1/2 pr-8 text-right">
                            <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                                <h3 class="text-xl font-bold text-primary-500">Senior AI Developer</h3>
                                <h4 class="text-lg font-semibold mb-2">TechCorp Inc.</h4>
                                <p class="text-gray-600 dark:text-gray-400 mb-2">2022 - Present</p>
                                <p class="text-gray-700 dark:text-gray-300">Led development of AI-powered analytics platform, improving client insights by 40%. Managed team of 5 developers and implemented ML models for predictive analysis.</p>
                            </div>
                        </div>
                        <div class="w-8 h-8 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                        <div class="w-1/2 pl-8"></div>
                    </div>
                    
                    <!-- Experience 2 -->
                    <div class="flex items-center" data-aos="fade-left">
                        <div class="w-1/2 pr-8"></div>
                        <div class="w-8 h-8 bg-secondary-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                        <div class="w-1/2 pl-8">
                            <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                                <h3 class="text-xl font-bold text-secondary-500">Full Stack Developer</h3>
                                <h4 class="text-lg font-semibold mb-2">StartupXYZ</h4>
                                <p class="text-gray-600 dark:text-gray-400 mb-2">2020 - 2022</p>
                                <p class="text-gray-700 dark:text-gray-300">Built scalable web applications using React and Node.js. Developed RESTful APIs and integrated third-party services. Increased application performance by 60%.</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Experience 3 -->
                    <div class="flex items-center" data-aos="fade-right">
                        <div class="w-1/2 pr-8 text-right">
                            <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                                <h3 class="text-xl font-bold text-green-500">Frontend Developer Intern</h3>
                                <h4 class="text-lg font-semibold mb-2">WebSolutions Ltd.</h4>
                                <p class="text-gray-600 dark:text-gray-400 mb-2">2019 - 2020</p>
                                <p class="text-gray-700 dark:text-gray-300">Developed responsive web interfaces using modern JavaScript frameworks. Collaborated with design team to implement pixel-perfect UI components.</p>
                            </div>
                        </div>
                        <div class="w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                        <div class="w-1/2 pl-8"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold mb-4">Featured Projects</h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
                
                <!-- Project Filter Buttons -->
                <div class="flex flex-wrap justify-center gap-4 mb-8">
                    <button onclick="filterProjects('all')" class="filter-btn active bg-primary-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">All</button>
                    <button onclick="filterProjects('web')" class="filter-btn bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-full font-semibold transition-all duration-300">Web Apps</button>
                    <button onclick="filterProjects('ai')" class="filter-btn bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-full font-semibold transition-all duration-300">AI/ML</button>
                    <button onclick="filterProjects('mobile')" class="filter-btn bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-full font-semibold transition-all duration-300">Mobile</button>
                </div>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
                <!-- Project 1 -->
                <div class="project-card web ai bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" data-aos="fade-up">
                    <div class="h-48 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-4xl">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-3">AI Chat Assistant</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Intelligent chatbot powered by machine learning with natural language processing capabilities and sentiment analysis.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">Python</span>
                            <span class="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                            <span class="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">React</span>
                        </div>
                        <div class="flex gap-3">
                            <button class="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                                <i class="fab fa-github mr-2"></i>GitHub
                            </button>
                            <button class="flex-1 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white py-2 px-4 rounded-lg transition-all duration-300">
                                <i class="fas fa-external-link-alt mr-2"></i>Demo
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="project-card web bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                    <div class="h-48 bg-gradient-to-br from-secondary-500 to-pink-500 flex items-center justify-center text-white text-4xl">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-3">Analytics Dashboard</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Real-time data visualization platform with interactive charts, predictive analytics, and custom reporting features.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 px-3 py-1 rounded-full text-sm">Vue.js</span>
                            <span class="bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 px-3 py-1 rounded-full text-sm">D3.js</span>
                            <span class="bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                        </div>
                        <div class="flex gap-3">
                            <button class="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                                <i class="fab fa-github mr-2"></i>GitHub
                            </button>
                            <button class="flex-1 border border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white py-2 px-4 rounded-lg transition-all duration-300">
                                <i class="fas fa-external-link-alt mr-2"></i>Demo
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="project-card mobile bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                    <div class="h-48 bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-4xl">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-3">Mobile Task Manager</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Cross-platform mobile app for productivity with AI-powered task prioritization and smart notifications.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">React Native</span>
                            <span class="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">Firebase</span>
                            <span class="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">ML Kit</span>
                        </div>
                        <div class="flex gap-3">
                            <button class="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                                <i class="fab fa-github mr-2"></i>GitHub
                            </button>
                            <button class="flex-1 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-2 px-4 rounded-lg transition-all duration-300">
                                <i class="fas fa-external-link-alt mr-2"></i>Demo
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Project 4 -->
                <div class="project-card ai bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" data-aos="fade-up" data-aos-delay="300">
                    <div class="h-48 bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-4xl">
                        <i class="fas fa-brain"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-3">Image Recognition API</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Advanced computer vision API with object detection, facial recognition, and image classification capabilities.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm">PyTorch</span>
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm">OpenCV</span>
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm">FastAPI</span>
                        </div>
                        <div class="flex gap-3">
                            <button class="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                                <i class="fab fa-github mr-2"></i>GitHub
                            </button>
                            <button class="flex-1 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-4 rounded-lg transition-all duration-300">
                                <i class="fas fa-external-link-alt mr-2"></i>Demo
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Project 5 -->
                <div class="project-card web bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" data-aos="fade-up" data-aos-delay="400">
                    <div class="h-48 bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-4xl">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-3">E-commerce Platform</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Full-featured e-commerce solution with payment integration, inventory management, and admin dashboard.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm">Next.js</span>
                            <span class="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm">Stripe</span>
                            <span class="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                        </div>
                        <div class="flex gap-3">
                            <button class="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                                <i class="fab fa-github mr-2"></i>GitHub
                            </button>
                            <button class="flex-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded-lg transition-all duration-300">
                                <i class="fas fa-external-link-alt mr-2"></i>Demo
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Project 6 -->
                <div class="project-card ai web bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" data-aos="fade-up" data-aos-delay="500">
                    <div class="h-48 bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-4xl">
                        <i class="fas fa-language"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-3">Language Translator</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Real-time language translation web app with voice input, text-to-speech, and support for 50+ languages.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm">React</span>
                            <span class="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm">Google AI</span>
                            <span class="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm">Web Speech API</span>
                        </div>
                        <div class="flex gap-3">
                            <button class="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                                <i class="fab fa-github mr-2"></i>GitHub
                            </button>
                            <button class="flex-1 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white py-2 px-4 rounded-lg transition-all duration-300">
                                <i class="fas fa-external-link-alt mr-2"></i>Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold mb-4">Skills & Technologies</h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Skills Grid -->
                <div data-aos="fade-right">
                    <h3 class="text-2xl font-bold mb-8 text-center">Technologies</h3>
                    <div class="grid grid-cols-3 md:grid-cols-4 gap-6">
                        <!-- Frontend Skills -->
                        <div class="skill-card bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <i class="fab fa-react text-4xl text-blue-500 mb-2"></i>
                            <h4 class="font-semibold text-sm">React</h4>
                        </div>
                        
                        <div class="skill-card bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <i class="fab fa-vuejs text-4xl text-green-500 mb-2"></i>
                            <h4 class="font-semibold text-sm">Vue.js</h4>
                        </div>
                        
                        <div class="skill-card bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <i class="fab fa-js-square text-4xl text-yellow-500 mb-2"></i>
                            <h4 class="font-semibold text-sm">JavaScript</h4>
                        </div>
                        
                        <div class="skill-card bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <i class="fab fa-node-js text-4xl text-green-600 mb-2"></i>
                            <h4 class="font-semibold text-sm">Node.js</h4>
                        </div>
                        
                        <div class="skill-card bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <i class="fab fa-python text-4xl text-blue-600 mb-2"></i>
                            <h4 class="font-semibold text-sm">Python</h4>
                        </div>
                        
                        <div class="skill-card bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <i class="fas fa-database text-4xl text-orange-500 mb-2"></i>
                            <h4 class="font-semibold text-sm">MongoDB</h4>
                        </div>
                        
                        <div class="skill-card bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <i class="fas fa-brain text-4xl text-purple-500 mb-2"></i>
                            <h4 class="font-semibold text-sm">TensorFlow</h4>
                        </div>
                        
                        <div class="skill-card bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <i class="fas fa-robot text-4xl text-red-500 mb-2"></i>
                            <h4 class="font-semibold text-sm">PyTorch</h4>
                        </div>
                        
                        <div class="skill-card bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <i class="fab fa-git-alt text-4xl text-orange-600 mb-2"></i>
                            <h4 class="font-semibold text-sm">Git</h4>
                        </div>
                        
                        <div class="skill-card bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <i class="fab fa-docker text-4xl text-blue-400 mb-2"></i>
                            <h4 class="font-semibold text-sm">Docker</h4>
                        </div>
                        
                        <div class="skill-card bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <i class="fab fa-aws text-4xl text-orange-400 mb-2"></i>
                            <h4 class="font-semibold text-sm">AWS</h4>
                        </div>
                        
                        <div class="skill-card bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <i class="fas fa-code text-4xl text-gray-600 mb-2"></i>
                            <h4 class="font-semibold text-sm">TypeScript</h4>
                        </div>
                    </div>
                </div>
                
                <!-- Skill Progress Bars -->
                <div data-aos="fade-left">
                    <h3 class="text-2xl font-bold mb-8 text-center">Proficiency</h3>
                    <div class="space-y-6">
                        <div>
                            <div class="flex justify-between mb-2">
                                <span class="font-semibold">JavaScript/TypeScript</span>
                                <span class="text-primary-500">95%</span>
                            </div>
                            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                <div class="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full skill-progress" style="width: 0%" data-width="95%"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between mb-2">
                                <span class="font-semibold">React/Vue.js</span>
                                <span class="text-primary-500">90%</span>
                            </div>
                            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                <div class="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full skill-progress" style="width: 0%" data-width="90%"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between mb-2">
                                <span class="font-semibold">Python/AI/ML</span>
                                <span class="text-primary-500">88%</span>
                            </div>
                            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                <div class="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full skill-progress" style="width: 0%" data-width="88%"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between mb-2">
                                <span class="font-semibold">Node.js/Backend</span>
                                <span class="text-primary-500">85%</span>
                            </div>
                            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                <div class="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full skill-progress" style="width: 0%" data-width="85%"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between mb-2">
                                <span class="font-semibold">Database Design</span>
                                <span class="text-primary-500">82%</span>
                            </div>
                            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                <div class="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full skill-progress" style="width: 0%" data-width="82%"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between mb-2">
                                <span class="font-semibold">DevOps/Cloud</span>
                                <span class="text-primary-500">78%</span>
                            </div>
                            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                <div class="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full skill-progress" style="width: 0%" data-width="78%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Achievements Section -->
    <section id="achievements" class="py-20 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold mb-4">Achievements & Certifications</h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Achievement 1 -->
                <div class="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-all duration-300" data-aos="zoom-in">
                    <i class="fas fa-trophy text-4xl mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Competition Winner</h3>
                    <p class="text-yellow-100">1st Place - Battle Of Brains 2025</p>
                </div>
                
                <!-- Achievement 2 -->
                <div class="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-all duration-300" data-aos="zoom-in" data-aos-delay="100">
                    <i class="fas fa-certificate text-4xl mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">AWS Certified</h3>
                    <p class="text-blue-100">Solutions Architect Professional</p>
                </div>
                
                <!-- Achievement 3 -->
                <div class="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-all duration-300" data-aos="zoom-in" data-aos-delay="200">
                    <i class="fas fa-code text-4xl mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Open Source</h3>
                    <p class="text-green-100">500+ GitHub Contributions</p>
                </div>
                
                <!-- Achievement 4 -->
                <div class="bg-gradient-to-br from-red-500 to-pink-600 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-all duration-300" data-aos="zoom-in" data-aos-delay="300">
                    <i class="fas fa-users text-4xl mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Tech Speaker</h3>
                    <p class="text-red-100">10+ Conference Talks</p>
                </div>
                
                <!-- Achievement 5 -->
                <div class="bg-gradient-to-br from-indigo-500 to-blue-600 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-all duration-300" data-aos="zoom-in" data-aos-delay="400">
                    <i class="fas fa-graduation-cap text-4xl mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Google Certified</h3>
                    <p class="text-indigo-100">Machine Learning Engineer</p>
                </div>
                
                <!-- Achievement 6 -->
                <div class="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-all duration-300" data-aos="zoom-in" data-aos-delay="500">
                    <i class="fas fa-star text-4xl mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Top Rated</h3>
                    <p class="text-purple-100">Freelancer - 5.0/5.0 Rating</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold mb-4">What People Say</h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
            </div>
            
            <div class="relative">
                <div class="testimonial-carousel overflow-hidden">
                    <div class="flex transition-transform duration-500 ease-in-out" id="testimonial-track">
                        <!-- Testimonial 1 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-4xl mx-auto text-center">
                                <div class="text-5xl text-primary-500 mb-4">"</div>
                                <p class="text-lg text-gray-600 dark:text-gray-400 mb-6 italic">
                                    "Alex is an exceptional developer who delivered our AI-powered analytics platform ahead of schedule. His expertise in machine learning and web development is truly impressive. The solution increased our data processing efficiency by 300%."
                                </p>
                                <div class="flex items-center justify-center">
                                    <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold">Sarah Johnson</h4>
                                        <p class="text-gray-600 dark:text-gray-400">CTO, TechCorp Inc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Testimonial 2 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-4xl mx-auto text-center">
                                <div class="text-5xl text-primary-500 mb-4">"</div>
                                <p class="text-lg text-gray-600 dark:text-gray-400 mb-6 italic">
                                    "Working with Alex was a game-changer for our startup. He built our entire e-commerce platform from scratch and integrated advanced features we didn't even know we needed. His attention to detail and problem-solving skills are outstanding."
                                </p>
                                <div class="flex items-center justify-center">
                                    <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold">Michael Chen</h4>
                                        <p class="text-gray-600 dark:text-gray-400">Founder, StartupXYZ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Testimonial 3 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-4xl mx-auto text-center">
                                <div class="text-5xl text-primary-500 mb-4">"</div>
                                <p class="text-lg text-gray-600 dark:text-gray-400 mb-6 italic">
                                    "Alex mentored me through my transition into tech and helped me land my first developer job. His teaching style is clear, patient, and encouraging. He's not just a great developer but also an amazing mentor and human being."
                                </p>
                                <div class="flex items-center justify-center">
                                    <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold">Emily Rodriguez</h4>
                                        <p class="text-gray-600 dark:text-gray-400">Junior Developer, WebSolutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Carousel Controls -->
                <button onclick="previousTestimonial()" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <i class="fas fa-chevron-left text-primary-500"></i>
                </button>
                <button onclick="nextTestimonial()" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <i class="fas fa-chevron-right text-primary-500"></i>
                </button>
                
                <!-- Carousel Indicators -->
                <div class="flex justify-center mt-8 space-x-2">
                    <button onclick="goToTestimonial(0)" class="testimonial-indicator w-3 h-3 bg-primary-500 rounded-full transition-all duration-300"></button>
                    <button onclick="goToTestimonial(1)" class="testimonial-indicator w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full transition-all duration-300"></button>
                    <button onclick="goToTestimonial(2)" class="testimonial-indicator w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full transition-all duration-300"></button>
                </div>
            </div>
        </div>
    </section>

    <!-- Blog Section -->
    <section id="blog" class="py-20 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold mb-4">Latest Blog Posts</h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Blog Post 1 -->
                <article class="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up">
                    <div class="h-48 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-4xl">
                        <i class="fas fa-brain"></i>
                    </div>
                    <div class="p-6">
                        <div class="text-sm text-primary-500 mb-2">AI & Machine Learning</div>
                        <h3 class="text-xl font-bold mb-3">The Future of AI in Web Development</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications...
                        </p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-500">Dec 15, 2023</span>
                            <button class="text-primary-500 hover:text-primary-600 font-semibold">Read More →</button>
                        </div>
                    </div>
                </article>
                
                <!-- Blog Post 2 -->
                <article class="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
                    <div class="h-48 bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-4xl">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <div class="p-6">
                        <div class="text-sm text-green-500 mb-2">Performance</div>
                        <h3 class="text-xl font-bold mb-3">Optimizing React Apps for Production</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Best practices and techniques to make your React applications lightning fast and production-ready...
                        </p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-500">Dec 10, 2023</span>
                            <button class="text-primary-500 hover:text-primary-600 font-semibold">Read More →</button>
                        </div>
                    </div>
                </article>
                
                <!-- Blog Post 3 -->
                <article class="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
                    <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="p-6">
                        <div class="text-sm text-purple-500 mb-2">Mobile Development</div>
                        <h3 class="text-xl font-bold mb-3">Building Cross-Platform Apps with React Native</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            A comprehensive guide to creating mobile applications that work seamlessly on both iOS and Android...
                        </p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-500">Dec 5, 2023</span>
                            <button class="text-primary-500 hover:text-primary-600 font-semibold">Read More →</button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold mb-4">What I Do</h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center" data-aos="fade-up">
                    <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Web Development</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-6">
                        Full-stack web applications using modern frameworks like React, Vue.js, and Node.js. From concept to deployment.
                    </p>
                    <div class="text-2xl font-bold text-primary-500 mb-2">Starting at $2,500</div>
                    <button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                        Get Quote
                    </button>
                </div>
                
                <!-- Service 2 -->
                <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4">AI Solutions</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-6">
                        Custom AI and machine learning solutions including chatbots, recommendation systems, and predictive analytics.
                    </p>
                    <div class="text-2xl font-bold text-primary-500 mb-2">Starting at $5,000</div>
                    <button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                        Get Quote
                    </button>
                </div>
                
                <!-- Service 3 -->
                <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Mobile Apps</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-6">
                        Cross-platform mobile applications using React Native and Flutter. iOS and Android development.
                    </p>
                    <div class="text-2xl font-bold text-primary-500 mb-2">Starting at $3,500</div>
                    <button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                        Get Quote
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Community Section -->
    <section class="py-20 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold mb-4">Community & Open Source</h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <h3 class="text-2xl font-bold mb-6">Contributing to the Developer Community</h3>
                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        I believe in giving back to the community that has helped me grow. Through open source contributions, 
                        mentoring, and volunteering, I try to make the tech world more inclusive and accessible.
                    </p>
                    
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <i class="fab fa-github text-2xl text-primary-500 mr-4"></i>
                            <div>
                                <div class="font-semibold">500+ GitHub Contributions</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Active contributor to popular open source projects</div>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <i class="fas fa-users text-2xl text-green-500 mr-4"></i>
                            <div>
                                <div class="font-semibold">Tech Mentor</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Mentored 50+ aspiring developers</div>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <i class="fas fa-heart text-2xl text-red-500 mr-4"></i>
                            <div>
                                <div class="font-semibold">Volunteer Work</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Teaching coding to underserved communities</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div data-aos="fade-left">
                    <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                        <h4 class="text-xl font-bold mb-6 text-center">Recent GitHub Activity</h4>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-lg">
                                <div>
                                    <div class="font-semibold">react-ai-components</div>
                                    <div class="text-sm text-gray-600 dark:text-gray-400">Added new ML integration features</div>
                                </div>
                                <div class="text-sm text-gray-500">2 days ago</div>
                            </div>
                            
                            <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-lg">
                                <div>
                                    <div class="font-semibold">web-accessibility-toolkit</div>
                                    <div class="text-sm text-gray-600 dark:text-gray-400">Fixed screen reader compatibility</div>
                                </div>
                                <div class="text-sm text-gray-500">5 days ago</div>
                            </div>
                            
                            <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-lg">
                                <div>
                                    <div class="font-semibold">python-data-viz</div>
                                    <div class="text-sm text-gray-600 dark:text-gray-400">Contributed new chart types</div>
                                </div>
                                <div class="text-sm text-gray-500">1 week ago</div>
                            </div>
                        </div>
                        
                        <div class="text-center mt-6">
                            <button class="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                                <i class="fab fa-github mr-2"></i>View GitHub Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold mb-4">Get In Touch</h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? I'd love to hear from you! Let's create something amazing together.
                </p>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div data-aos="fade-right">
                    <form id="contact-form" class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
                        <div class="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label for="name" class="block text-sm font-medium mb-2">Name *</label>
                                <input type="text" id="name" name="name" required 
                                       class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium mb-2">Email *</label>
                                <input type="email" id="email" name="email" required 
                                       class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800">
                            </div>
                        </div>
                        
                        <div class="mb-6">
                            <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
                            <input type="text" id="subject" name="subject" 
                                   class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800">
                        </div>
                        
                        <div class="mb-6">
                            <label for="message" class="block text-sm font-medium mb-2">Message *</label>
                            <textarea id="message" name="message" rows="5" required 
                                      class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-800"></textarea>
                        </div>
                        
                        <button type="submit" 
                                class="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <i class="fas fa-paper-plane mr-2"></i>Send Message
                        </button>
                    </form>
                </div>
                
                <!-- Contact Info & Map -->
                <div data-aos="fade-left">
                    <div class="space-y-8">
                        <!-- Contact Info -->
                        <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
                            <h3 class="text-xl font-bold mb-6">Contact Information</h3>
                            <div class="space-y-4">
                                <div class="flex items-center">
                                    <i class="fas fa-envelope text-primary-500 text-xl mr-4"></i>
                                    <div>
                                        <div class="font-semibold">Email</div>
                                        <div class="text-gray-600 dark:text-gray-400">alex@alexjohnson.dev</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <i class="fas fa-phone text-primary-500 text-xl mr-4"></i>
                                    <div>
                                        <div class="font-semibold">Phone</div>
                                        <div class="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <i class="fas fa-map-marker-alt text-primary-500 text-xl mr-4"></i>
                                    <div>
                                        <div class="font-semibold">Location</div>
                                        <div class="text-gray-600 dark:text-gray-400">San Francisco, CA</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Quick Contact Buttons -->
                            <div class="mt-6 space-y-3">
                                <button class="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                    <i class="fab fa-whatsapp mr-2"></i>WhatsApp Chat
                                </button>
                                <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                    <i class="fab fa-telegram mr-2"></i>Telegram Chat
                                </button>
                            </div>
                        </div>
                        
                        <!-- Map Placeholder -->
                        <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
                            <h3 class="text-xl font-bold mb-6">Location</h3>
                            <div class="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                <div class="text-center">
                                    <i class="fas fa-map text-4xl text-gray-400 mb-2"></i>
                                    <p class="text-gray-500">Interactive Map</p>
                                    <p class="text-sm text-gray-400">San Francisco Bay Area</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-3 gap-8 mb-8">
                <!-- Brand & Description -->
                <div>
                    <div class="text-2xl font-bold gradient-text mb-4"></div>
                    <p class="text-gray-400 mb-4">
                        AI & Web Developer passionate about creating innovative solutions that make a difference. 
                        Let's build the future together.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            <i class="fab fa-github text-2xl"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            <i class="fab fa-linkedin text-2xl"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            <i class="fab fa-twitter text-2xl"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            <i class="fab fa-instagram text-2xl"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            <i class="fas fa-envelope text-2xl"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Quick Links -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                    <div class="space-y-2">
                        <a href="#about" class="block text-gray-400 hover:text-white transition-colors duration-300">About</a>
                        <a href="#projects" class="block text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
                        <a href="#skills" class="block text-gray-400 hover:text-white transition-colors duration-300">Skills</a>
                        <a href="#blog" class="block text-gray-400 hover:text-white transition-colors duration-300">Blog</a>
                        <a href="#contact" class="block text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
                    </div>
                </div>
                
                <!-- Newsletter -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Stay Updated</h3>
                    <p class="text-gray-400 mb-4">Subscribe to get the latest updates on my projects and blog posts.</p>
                    <form id="newsletter-form" class="flex">
                        <input type="email" placeholder="Enter your email" required
                               class="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                        <button type="submit" class="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-lg transition-colors duration-300">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
            
            <div class="border-t border-gray-800 pt-8 text-center">
                <p class="text-gray-400">
                    © <span id="current-year"></span> Alex Johnson. All rights reserved. Made with ❤️ and lots of ☕
                </p>
                
                <!-- Easter Egg Trigger -->
                <div class="mt-4">
                    <button id="easter-egg-trigger" class="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-300">
                        🥚 Click me for a surprise!
                    </button>
                </div>
            </div>
        </div>
    </footer>

    <!-- Easter Egg Modal -->
    <div id="easter-egg-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div class="bg-white dark:bg-gray-800 p-8 rounded-xl max-w-md mx-4 text-center">
            <div class="text-6xl mb-4">🎉</div>
            <h3 class="text-2xl font-bold mb-4">Congratulations!</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
                You found the easter egg! Here's a fun fact: This portfolio was built with over 1000 lines of code and lots of passion! 🚀
            </p>
            <button onclick="closeEasterEgg()" class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                Awesome! 🎊
            </button>
        </div>
    </div>

    <script>
        // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });

        // Custom cursor functionality
        const cursor = document.querySelector('.custom-cursor');
        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        // Dark mode toggle
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;

        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 'light';
        html.classList.toggle('dark', currentTheme === 'dark');

        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            const theme = html.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });

        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on nav links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Smooth scrolling for navigation links
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                const offsetTop = section.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }

        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                scrollToSection(targetId);
            });
        });

        // Typing animation for hero section
        const typingText = document.getElementById('typing-text');
        const texts = ['AI & Web Developer', 'Machine Learning Engineer', 'Full Stack Developer', 'Tech Innovator'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeWriter() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(typeWriter, typeSpeed);
        }

        // Start typing animation
        typeWriter();

        // Stats counter animation
        function animateCounter(element, target, duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16);
            
            function updateCounter() {
                start += increment;
                if (start < target) {
                    element.textContent = Math.floor(start);
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target;
                }
            }
            
            updateCounter();
        }

        // Trigger counters when hero section is visible
        const heroSection = document.getElementById('home');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(document.getElementById('projects-count'), 50);
                    animateCounter(document.getElementById('experience-count'), 5);
                    animateCounter(document.getElementById('clients-count'), 100);
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(heroSection);

        // Project filtering
        function filterProjects(category) {
            const projectCards = document.querySelectorAll('.project-card');
            const filterBtns = document.querySelectorAll('.filter-btn');
            
            // Update active button
            filterBtns.forEach(btn => {
                btn.classList.remove('active', 'bg-primary-500', 'text-white');
                btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            });
            
            event.target.classList.add('active', 'bg-primary-500', 'text-white');
            event.target.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            
            // Filter projects
            projectCards.forEach(card => {
                if (category === 'all' || card.classList.contains(category)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Skill progress bars animation
        const skillsSection = document.getElementById('skills');
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBars = document.querySelectorAll('.skill-progress');
                    progressBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 500);
                    });
                    skillObserver.unobserve(entry.target);
                }
            });
        });
        skillObserver.observe(skillsSection);

        // Testimonial carousel
        let currentTestimonial = 0;
        const testimonialTrack = document.getElementById('testimonial-track');
        const testimonialIndicators = document.querySelectorAll('.testimonial-indicator');

        function updateTestimonialIndicators() {
            testimonialIndicators.forEach((indicator, index) => {
                if (index === currentTestimonial) {
                    indicator.classList.add('bg-primary-500');
                    indicator.classList.remove('bg-gray-300', 'dark:bg-gray-600');
                } else {
                    indicator.classList.remove('bg-primary-500');
                    indicator.classList.add('bg-gray-300', 'dark:bg-gray-600');
                }
            });
        }

        function goToTestimonial(index) {
            currentTestimonial = index;
            testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
            updateTestimonialIndicators();
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % 3;
            goToTestimonial(currentTestimonial);
        }

        function previousTestimonial() {
            currentTestimonial = currentTestimonial === 0 ? 2 : currentTestimonial - 1;
            goToTestimonial(currentTestimonial);
        }

        // Auto-advance testimonials
        setInterval(nextTestimonial, 5000);

        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Show success message (demo functionality)
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
            
            // Reset form
            contactForm.reset();
        });

        // Newsletter form submission
        const newsletterForm = document.getElementById('newsletter-form');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = e.target.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! You'll receive updates about my latest projects and blog posts.`);
            
            // Reset form
            newsletterForm.reset();
        });

        // Resume download function
        function downloadResume() {
            // In a real application, this would trigger an actual file download
            alert('Resume download started! (This is a demo - in a real site, this would download the actual PDF)');
        }

        // Easter egg functionality
        const easterEggTrigger = document.getElementById('easter-egg-trigger');
        const easterEggModal = document.getElementById('easter-egg-modal');

        easterEggTrigger.addEventListener('click', () => {
            easterEggModal.classList.remove('hidden');
            // Add confetti effect
            for (let i = 0; i < 50; i++) {
                createConfetti();
            }
        });

        function closeEasterEgg() {
            easterEggModal.classList.add('hidden');
        }

        function createConfetti() {
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
        }

        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Add scroll effect to navbar
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('shadow-lg');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });

        // Add intersection observer for fade-in animations
        const fadeElements = document.querySelectorAll('[data-aos]');
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(element => {
            fadeObserver.observe(element);
        });

        // Smooth scroll behavior for all internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });

        // Performance optimization: Lazy load images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9705d9b4d2cfa7fe',t:'MTc1NTM5ODg4NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
