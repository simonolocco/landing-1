import React from 'react';
import { motion } from 'framer-motion';
import { Award, Coffee, Heart } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 bg-coffee-50 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-yellow-300 rounded-full opacity-10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Barista pouring coffee"
                                className="rounded-3xl shadow-2xl hover:shadow-yellow-500/20 transition-shadow duration-500 w-full"
                            />

                            {/* Floating stats card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="absolute -bottom-8 -right-8 glass-dark backdrop-blur-xl rounded-2xl p-6 shadow-2xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center">
                                        <Award className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-white">14+</p>
                                        <p className="text-sm text-coffee-100">Años de experiencia</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -top-8 -left-8 w-32 h-32 gradient-coffee rounded-full opacity-20 blur-2xl"></div>
                    </motion.div>

                    {/* Content side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <motion.p
                                className="text-yellow-700 font-semibold tracking-widest uppercase mb-3"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Sobre Nosotros
                            </motion.p>
                            <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6 font-serif leading-tight">
                                Nuestra Historia
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-coffee-700 leading-relaxed">
                            <p>
                                Desde <span className="font-bold text-coffee-900">2010</span>, nos dedicamos a seleccionar los mejores granos de café de origen
                                para ofrecerte una experiencia única. Creemos en el café no solo como una bebida,
                                sino como un <span className="font-semibold text-yellow-700">ritual que une a las personas</span>.
                            </p>
                            <p>
                                Nuestros baristas expertos trabajan con pasión para extraer el sabor perfecto
                                en cada taza, utilizando métodos artesanales y tecnología de vanguardia.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <Coffee className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-coffee-900 mb-1">Café Premium</h3>
                                    <p className="text-sm text-coffee-600">Granos seleccionados de origen</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-coffee-900 mb-1">Hecho con Amor</h3>
                                    <p className="text-sm text-coffee-600">Cada taza preparada con pasión</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="pt-4"
                        >
                            <a
                                href="#menu"
                                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white gradient-coffee rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
                            >
                                Descubre Nuestro Café
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
