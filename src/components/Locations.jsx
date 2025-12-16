import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Locations() {
    return (
        <section id="locations" className="py-24 gradient-coffee relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-coffee-800 rounded-full opacity-20 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        className="text-yellow-400 font-semibold tracking-widest uppercase mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Ubicación
                    </motion.p>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-white">
                        Visítanos
                    </h2>
                    <p className="text-coffee-100 text-lg max-w-2xl mx-auto">
                        Estamos listos para servirte tu café favorito en un ambiente acogedor.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Info Cards */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Address Card */}
                        <motion.div
                            className="glass-dark backdrop-blur-xl p-8 rounded-2xl hover-lift group h-full flex flex-col"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-start space-x-5 flex-grow">
                                <div className="w-14 h-14 gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-yellow-500/50 transition-shadow">
                                    <MapPin className="h-7 w-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl mb-3 text-white">Ubicación Central</h3>
                                    <p className="text-coffee-100 text-lg">Av. Siempre Viva 123</p>
                                    <p className="text-coffee-100 text-lg">Ciudad de Buenos Aires</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Hours Card */}
                        <motion.div
                            className="glass-dark backdrop-blur-xl p-8 rounded-2xl hover-lift group h-full flex flex-col"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-start space-x-5 flex-grow">
                                <div className="w-14 h-14 gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-yellow-500/50 transition-shadow">
                                    <Clock className="h-7 w-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl mb-3 text-white">Horarios</h3>
                                    <div className="space-y-2 text-lg">
                                        <p className="text-coffee-100">
                                            <span className="font-semibold text-yellow-400">Lun - Vie:</span> 7:00 - 20:00
                                        </p>
                                        <p className="text-coffee-100">
                                            <span className="font-semibold text-yellow-400">Sab - Dom:</span> 8:00 - 21:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Card */}
                        <motion.div
                            className="glass-dark backdrop-blur-xl p-8 rounded-2xl hover-lift group h-full flex flex-col"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-start space-x-5 flex-grow">
                                <div className="w-14 h-14 gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-yellow-500/50 transition-shadow">
                                    <Phone className="h-7 w-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl mb-3 text-white">Contacto</h3>
                                    <p className="text-coffee-100 text-lg mb-2">+54 11 1234-5678</p>
                                    <p className="text-coffee-100 text-lg flex items-center">
                                        <Mail className="w-5 h-5 mr-2" />
                                        info@cafearoma.com
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-500/20 transition-shadow duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.23949906466!2d-58.433536!3d-34.6158238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1650000000000!5m2!1ses-419!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa de Ubicación"
                                className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/50 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute -top-6 -right-6 glass backdrop-blur-xl rounded-2xl p-6 shadow-2xl"
                        >
                            <div className="text-center">
                                <p className="text-4xl font-bold text-gradient-gold mb-1">★ 4.9</p>
                                <p className="text-sm text-coffee-700 font-semibold">Valoración</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
