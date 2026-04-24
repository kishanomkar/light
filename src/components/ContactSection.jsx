'use client';
import emailjs from '@emailjs/browser';
import { useState,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Send, 
    Mail, 
    MapPin, 
    Phone, 
    Globe, 
    CheckCircle2, 
    Loader2, 
    MessageSquare,
    Copy,
    ArrowRight,
    Linkedin,
    Instagram
} from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
}, []);

const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
                to_email: 'kishan123406@gmail.com',
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
            }
        );
        
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
        console.error('Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
    }
};

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert(`Copied: ${text}`);
    };

    return (
        <section id="contact" className="py-24 relative bg-[#0a0a0a] text-white overflow-hidden">
            {/* --- Background Ambience --- */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Connect</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind? Let's turn your abstract ideas into digital reality.
                        I'm currently available for freelance work and open collaborations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    
                    {/* --- Left Column: The Form Interface --- */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative glow behind form */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>

                        <div className="relative bg-[#111] border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl overflow-hidden">
                            {/* Tech Header inside Form */}
                            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                <div className="flex items-center gap-2">
                                    <div className="flex space-x-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    </div>
                                </div>
                                <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${status === 'submitting' ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></span>
                                    SYSTEM ONLINE
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                                            <CheckCircle2 size={40} className="text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">Transmission Received</h3>
                                            <p className="text-gray-400 max-w-xs mx-auto">
                                                Thank you for reaching out. I'll decrypt your message and get back to you shortly.
                                            </p>
                                        </div>
                                        <button 
                                            onClick={() => setStatus('idle')}
                                            className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 transition-colors"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit} 
                                        className="space-y-6"
                                    >
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-medium text-gray-400 ml-1 uppercase tracking-wider">Coordinates (Name)</label>
                                                <input 
                                                    type="text" 
                                                    name="name" 
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-medium text-gray-400 ml-1 uppercase tracking-wider">Frequency (Email)</label>
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-medium text-gray-400 ml-1 uppercase tracking-wider">Signal Type (Subject)</label>
                                            <select 
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all appearance-none"
                                            >
                                                <option value="" className="bg-[#111]">Select a topic...</option>
                                                <option value="project" className="bg-[#111]">Project Collaboration</option>
                                                <option value="freelance" className="bg-[#111]">Freelance Inquiry</option>
                                                <option value="other" className="bg-[#111]">Other</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-medium text-gray-400 ml-1 uppercase tracking-wider">Payload (Message)</label>
                                            <textarea 
                                                name="message"
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none"
                                                placeholder="Tell me about your project..."
                                            ></textarea>
                                        </div>

                                        <button 
                                            type="submit" 
                                            disabled={status === 'submitting'}
                                            className="w-full group relative flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                                        >
                                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                            {status === 'submitting' ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={20} />
                                                    <span>Transmitting...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                                    <span>Initialize Transmission</span>
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* --- Right Column: Interactive Info & 3D Element --- */}
                    <div className="space-y-8 lg:mt-8">
                        
                        {/* 1. Contact Cards */}
                        <div className="grid gap-4">
                            <ContactCard 
                                icon={<Mail className="text-purple-400" />} 
                                label="Email" 
                                value="Kishan123406@gmail.com" 
                                onCopy={() => copyToClipboard('Kishan123406@gmail.com')}
                            />
                            <ContactCard 
                                icon={<Phone className="text-blue-400" />} 
                                label="Phone" 
                                value="+91 9166124449" 
                                onCopy={() => copyToClipboard('9166124449')}
                            />
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 group">
                                <div className="p-3 bg-white/5 rounded-xl text-green-400 group-hover:bg-green-500/20 transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-medium">Base of Operations</p>
                                    <p className="text-white font-medium">Jaipur, Rajasthan</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Chat Platforms */}
                        <div className="grid grid-cols-2 gap-4">
                             <a href="https://www.linkedin.com/in/kishan-omkar-022226314/" className="flex items-center justify-center gap-2 p-4 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] rounded-xl font-bold hover:bg-[#25D366]/20 transition-colors">
                                <Linkedin size={20} /> Linkedin 
                             </a>
                             <a href="https://www.instagram.com/omkar_kishan06/" className="flex items-center justify-center gap-2 p-4 bg-[#0088cc]/10 border border-[#0088cc]/20 text-[#0088cc] rounded-xl font-bold hover:bg-[#0088cc]/20 transition-colors">
                                <Instagram size={20} /> Instagram
                             </a>
                        </div>

                        {/* 3. Global Map Visualization (Abstract) */}
                        <div className="relative h-64 bg-[#111] border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center group">
                            {/* Abstract Grid Map Background */}
                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                            
                            {/* Glowing Core */}
                            <div className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                            
                            {/* Animated Spinning Globe Icon (CSS Animation) */}
                            <div className="relative z-10 text-center">
                                <div className="mb-4 inline-block p-4 rounded-full bg-blue-500/10 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-float">
                                    <Globe size={48} className="text-blue-400 animate-spin-slow" />
                                </div>
                                <div className="flex items-center gap-2 justify-center text-sm text-gray-400">
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    Accepting New Projects
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Helper Component: Copyable Contact Card ---
const ContactCard = ({ icon, label, value, onCopy }) => (
    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group hover:border-purple-500/30 transition-all">
        <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                {icon}
            </div>
            <div>
                <p className="text-xs text-gray-500 uppercase font-medium">{label}</p>
                <p className="text-white font-medium group-hover:text-purple-300 transition-colors">{value}</p>
            </div>
        </div>
        <button 
            onClick={onCopy}
            className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
            title="Copy to clipboard"
        >
            <Copy size={18} />
        </button>
    </div>
);