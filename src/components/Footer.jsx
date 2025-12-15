import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Twitter, href: "#", label: "Twitter" },
    ];

    const quickLinks = [
        { name: "Inicio", href: "#home" },
        { name: "Historia", href: "#about" },
        { name: "Menú", href: "#menu" },
        { name: "Ubicación", href: "#locations" },
    ];

    return (
        <footer className="bg-coffee-900 text-coffee-100 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold font-serif text-white mb-4">Café Aroma</h3>
                        <p className="text-coffee-300 mb-6 leading-relaxed">
                            Desde 2010, sirviendo el mejor café con pasión y dedicación.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 group"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <social.icon className="w-5 h-5 text-coffee-100 group-hover:text-white transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-xl font-bold text-white mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-coffee-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-xl font-bold text-white mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                <span className="text-coffee-300">Av. Siempre Viva 123<br />Buenos Aires</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                                <span className="text-coffee-300">+54 11 1234-5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                                <span className="text-coffee-300">info@cafearoma.com</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-xl font-bold text-white mb-6">Newsletter</h4>
                        <p className="text-coffee-300 mb-4">
                            Recibe ofertas especiales y novedades.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-coffee-300 focus:outline-none focus:border-yellow-400 transition-colors"
                            />
                            <motion.button
                                type="submit"
                                className="w-full px-6 py-3 gradient-gold text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Suscribirse
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="pt-8 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-coffee-300 text-sm">
                            © 2024 Café Aroma. Todos los derechos reservados.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-coffee-300 hover:text-yellow-400 transition-colors">
                                Privacidad
                            </a>
                            <a href="#" className="text-coffee-300 hover:text-yellow-400 transition-colors">
                                Términos
                            </a>
                            <a href="#" className="text-coffee-300 hover:text-yellow-400 transition-colors">
                                Cookies
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
