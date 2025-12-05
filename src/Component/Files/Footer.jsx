import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#3d1b34] to-[#84227b] rounded-t-3xl text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* About Us Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">About Us</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/resources" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                                    Resources
                                </a>
                            </li>
                            <li>
                                <a href="/company" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                                    Company
                                </a>
                            </li>
                            <li>
                                <a href="/property" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                                    Property
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h3>
                        <div className="space-y-2">
                            <a href="mailto:hello.abc@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm block">
                                hello.abc@gmail.com
                            </a>
                            <a href="tel:+01223345667" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm block">
                                +01223345667
                            </a>
                        </div>
                    </div>

                    {/* Follow Us Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h3>
                        <div className="flex space-x-3">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 transform hover:scale-110"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="text-white w-4 h-4" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 transform hover:scale-110"
                                aria-label="Twitter/X"
                            >
                                <FaXTwitter className="text-white w-4 h-4" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 transform hover:scale-110"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-white w-4 h-4" />
                            </a>
                            <a
                                href="https://whatsapp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 transform hover:scale-110"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="text-white w-4 h-4" />
                            </a>
                            <a
                                href="https://threads.net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 transform hover:scale-110"
                                aria-label="Threads"
                            >
                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.186 3.998c-.79.004-2.446.033-3.808.754-1.09.577-1.99 1.477-2.567 2.567-.721 1.362-.75 3.018-.754 3.808v.746c.004.79.033 2.446.754 3.808.577 1.09 1.477 1.99 2.567 2.567 1.362.721 3.018.75 3.808.754h.746c.79-.004 2.446-.033 3.808-.754 1.09-.577 1.99-1.477 2.567-2.567.721-1.362.75-3.018.754-3.808v-.746c-.004-.79-.033-2.446-.754-3.808-.577-1.09-1.477-1.99-2.567-2.567-1.362-.721-3.018-.75-3.808-.754h-.746zm0-2h.746c.897.004 2.784.035 4.376.85 1.387.732 2.491 1.835 3.222 3.222.816 1.592.847 3.479.85 4.376v.746c-.004.897-.035 2.784-.85 4.376-.732 1.387-1.835 2.491-3.222 3.222-1.592.816-3.479.847-4.376.85h-.746c-.897-.004-2.784-.035-4.376-.85-1.387-.732-2.491-1.835-3.222-3.222-.816-1.592-.847-3.479-.85-4.376v-.746c.004-.897.035-2.784.85-4.376.732-1.387 1.835-2.491 3.222-3.222 1.592-.816 3.479-.847 4.376-.85h.746z" />
                                    <path d="M14.722 11.996c-.023-1.09-.821-1.866-1.998-1.866-1.177 0-1.975.776-1.998 1.866h3.996zm-1.998 3.997c-.961 0-1.74-.595-1.946-1.477h-2.054c.224 1.953 1.892 3.473 4 3.473 2.346 0 4-1.504 4-3.746v-.247c0-2.242-1.654-3.746-4-3.746-2.108 0-3.776 1.52-4 3.473h2.054c.206-.882.985-1.477 1.946-1.477 1.177 0 1.975.776 1.998 1.866v.247c-.023 1.09-.821 1.866-1.998 1.866z" />
                                </svg>
                            </a>
                            <a
                                href="https://tiktok.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 transform hover:scale-110"
                                aria-label="TikTok"
                            >
                                <FaTiktok className="text-white w-4 h-4" />
                            </a>
                        </div>
                        {/* Copyright */}
                        <div className=" pt-6">
                            <p className="text-gray-400 text-sm">
                                © 2025 Havenix. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Logo Section */}
                <div className="flex flex-col items-center mb-8">
                    {/* Replace 'logo-path-here.png' with your actual logo path */}
                    <div className="w-full h-38 flex items-center justify-center">
                        <img
                            src="/images/company_logo.png"
                            alt="WiztecBD Logo"
                            className="w-full h-full object-contain opacity-60"
                        />
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;