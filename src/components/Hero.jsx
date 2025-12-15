import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                    }}
                />
                <div className="absolute inset-0 gradient-overlay"></div>
            </motion.div>

            {/* Floating coffee beans decoration */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-4 h-4 bg-yellow-600 rounded-full opacity-20"
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-40 right-20 w-3 h-3 bg-yellow-500 rounded-full opacity-30"
                    animate={{ y: [0, -40, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-40 left-1/4 w-5 h-5 bg-yellow-700 rounded-full opacity-15"
                    animate={{ y: [0, -25, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.p
                        className="text-yellow-400 text-sm sm:text-base font-semibold tracking-widest uppercase mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Bienvenido a
                    </motion.p>
                </motion.div>

                <motion.h1
                    className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white font-serif mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    El Arte del <br />
                    <span className="text-gradient-gold">Buen Café</span>
                </motion.h1>

                <motion.p
                    className="text-xl sm:text-2xl lg:text-3xl text-coffee-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    Descubre un espacio donde cada taza cuenta una historia <br className="hidden sm:block" />
                    y cada momento es especial
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#menu"
                        className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white gradient-gold rounded-full overflow-hidden shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
                    >
                        <span className="relative z-10">Ver Menú</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>

                    <a
                        href="#locations"
                        className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-coffee-900 transition-all duration-300 hover:scale-105"
                    >
                        Ubicación
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown className="w-8 h-8 text-white opacity-70 hover:opacity-100 transition-opacity" />
            </motion.a>
        </div>
    );
}
