import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="https://agridoot.com/wp-content/uploads/2025/02/AgriDoot.png"
                alt="AgriDoot Logo"
                className="h-20 w-auto" // Adjusted for better proportions
              />
              <span className="ml-3 text-2xl font-bold">AgriDoot</span>
            </div>
            <p className="text-gray-300 mb-6">
              AgriDoot is an advanced agricultural technology platform that helps farmers monitor soil conditions, 
              predict weather patterns, detect crop diseases, and optimize farming practices through AI-powered analytics.
            </p>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="/" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="/" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="/" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">How to Use</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4">EXPLORE</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Use Cases</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Product</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Blogs</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">API Service</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Benefits</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Refund Policies</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 mt-8 pt-6 text-center text-gray-400">
          <span>Developed By Arjun gehlot❤️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;