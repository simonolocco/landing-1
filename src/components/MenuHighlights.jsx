import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MenuHighlights() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const items = [
        {
            name: "Espresso Artesanal",
            price: "$250",
            description: "Nuestra mezcla exclusiva de la casa, notas de chocolate y avellana.",
            image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            badge: "Popular"
        },
        {
            name: "Cappuccino Italiano",
            price: "$350",
            description: "Espresso perfecto con leche vaporizada y espuma cremosa.",
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            badge: "Clásico"
        },
        {
            name: "Latte de Vainilla",
            price: "$380",
            description: "Suave y dulce, con jarabe de vainilla natural hecho en casa.",
            image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            badge: "Especial"
        },
        {
            name: "Croissant de Almendras",
            price: "$300",
            description: "Horneado diariamente, crujiente por fuera y suave por dentro.",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            badge: "Nuevo"
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="menu" className="py-24 bg-gradient-to-b from-white to-coffee-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-coffee-300 rounded-full opacity-10 blur-3xl"></div>

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
                        Nuestro Menú
                    </motion.p>
                    <h2 className="text-4xl md:text-6xl font-bold text-coffee-900 mb-6 font-serif">
                        Favoritos del Menú
                    </h2>
                    <p className="text-coffee-600 text-lg max-w-2xl mx-auto">
                        Descubre nuestra selección de cafés especiales y acompañamientos perfectos,
                        preparados con pasión y dedicación.
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative"
                        >
                            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover-lift hover-glow transition-all duration-300">
                                {/* Badge */}
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="px-3 py-1 text-xs font-bold text-white gradient-gold rounded-full shadow-lg">
                                        {item.badge}
                                    </span>
                                </div>

                                {/* Image */}
                                <div className="h-56 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="font-bold text-xl text-coffee-900 group-hover:text-yellow-700 transition-colors">
                                            {item.name}
                                        </h3>
                                        <span className="text-2xl font-bold text-gradient-gold whitespace-nowrap ml-2">
                                            {item.price}
                                        </span>
                                    </div>
                                    <p className="text-sm text-coffee-600 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Hover indicator */}
                                    <div className="mt-4 flex items-center text-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-sm font-semibold">Ver más</span>
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a
                        href="#"
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white gradient-coffee rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        Ver Menú Completo
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
