import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            name: "María González",
            role: "Cliente Frecuente",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
            text: "El mejor café de la ciudad. El ambiente es acogedor y el servicio excepcional. ¡Vengo todos los días!",
            rating: 5
        },
        {
            name: "Carlos Rodríguez",
            role: "Amante del Café",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
            text: "La calidad de los granos es incomparable. Se nota la pasión en cada taza que preparan.",
            rating: 5
        },
        {
            name: "Ana Martínez",
            role: "Diseñadora",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
            text: "Mi lugar favorito para trabajar. WiFi rápido, café delicioso y un ambiente perfecto para concentrarse.",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-coffee-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        className="text-yellow-700 font-semibold tracking-widest uppercase mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Testimonios
                    </motion.p>
                    <h2 className="text-4xl md:text-6xl font-bold text-coffee-900 mb-6 font-serif">
                        Lo Que Dicen Nuestros Clientes
                    </h2>
                    <p className="text-coffee-600 text-lg max-w-2xl mx-auto">
                        Miles de clientes satisfechos disfrutan de nuestro café cada día.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="bg-coffee-50 rounded-2xl p-8 hover-lift transition-all duration-300 h-full">
                                {/* Quote icon */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-2xl text-white">"</span>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                                    ))}
                                </div>

                                {/* Testimonial text */}
                                <p className="text-coffee-700 text-lg mb-8 leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover ring-4 ring-yellow-500/20"
                                    />
                                    <div>
                                        <p className="font-bold text-coffee-900">{testimonial.name}</p>
                                        <p className="text-sm text-coffee-600">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {[
                        { number: "10k+", label: "Clientes Felices" },
                        { number: "50+", label: "Variedades de Café" },
                        { number: "14+", label: "Años de Experiencia" },
                        { number: "4.9", label: "Valoración Promedio" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <p className="text-5xl font-bold text-gradient-gold mb-2">{stat.number}</p>
                            <p className="text-coffee-600 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
