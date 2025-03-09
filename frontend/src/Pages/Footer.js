import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = ()=>{
    return (
        <footer className="w-full bg--900 text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center mt-100">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all">
                    <FaInstagram size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all">
                    <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all">
                    <FaTwitter size={24} />
                </a>
            </div>

            {/* Copyright Text */}
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
                © {new Date().getFullYear()} Puppettenshala. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
