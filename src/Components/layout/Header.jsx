import React, { useState } from 'react';
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGooglePlay,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full">
      {/* Top Info Bar */}
      <div className="hidden md:flex text-[#04703a] justify-between items-center px-4 md:px-16 py-2 text-sm font-medium">
  <div className="flex items-center ml-28 space-x-4">
    <div className="flex items-center space-x-1">
      <FaEnvelope />
      <span>support@agridoot.co.in</span>
    </div>
    <div className="flex items-center space-x-1">
      <FaWhatsapp />
      <span>+91 94296 91650</span>
    </div>
  </div>
  <div className="hidden md:flex items-center space-x-4 text-xl">
    <FaFacebook className="hover:scale-110 transition" />
    <FaInstagram className="hover:scale-110 transition" />
    <FaLinkedin className="hover:scale-110 transition" />
    <FaYoutube className="hover:scale-110 transition" />
    <FaGooglePlay className="hover:scale-110 transition" />
  </div>
</div>


      {/* Main Navbar */}
      <div className="relative bg-[#006837] text-white flex items-center justify-between">
        {/* Angled Logo Section */}
        <div
          className="relative h-full z-10"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
            backgroundColor: 'white'
          }}
        >
          <div className="flex items-center px-6 py-3 mr-10">
            <a href="https://agridoot.com" className="block bg-[#03552c] rounded-md p-2">
              <img
                src="https://agridoot.com/wp-content/uploads/2025/02/AgriDoot.png"
                alt="AgriDoot Logo"
                className="h-14 w-14 object-contain"
              />
            </a>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center flex-grow space-x-6 font-semibold text-white ml-6">
          <a href="#" className="hover:underline underline-offset-8">Home</a>
          <a href="#" className="hover:underline underline-offset-8">About Us</a>
          <a href="#" className="hover:underline underline-offset-8">Product</a>
          <a href="#" className="hover:underline underline-offset-8">Partner ▾</a>
          <a href="#" className="hover:underline underline-offset-8">Solutions ▾</a>
          <a href="#" className="hover:underline underline-offset-8">Resources ▾</a>
          <a href="#" className="hover:underline underline-offset-8">Contact Us</a>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4 px-6">
          <button className="bg-white text-[#04703a] px-4 py-2 font-bold rounded-md hover:scale-105 transition">
            Earn with Us!
          </button>
          <button className="bg-[#f6d366] text-[#04703a] px-4 py-2 font-bold rounded-md hover:scale-105 transition">
            Book Demo
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden px-4 text-2xl text-white" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white text-[#04703a] px-4 py-4 space-y-4 shadow-md z-50">
          <a href="#" className="block font-bold border-b pb-2">Home</a>
          <a href="#" className="block">About Us</a>
          <a href="#" className="block">Product</a>
          <a href="#" className="block">Partner ▾</a>
          <a href="#" className="block">Solutions ▾</a>
          <a href="#" className="block">Resources ▾</a>
          <a href="#" className="block">Contact Us</a>
          <div className="pt-4 space-y-2">
            <button className="w-full bg-white text-[#04703a] border border-[#04703a] py-2 font-bold rounded-md">
              Earn with Us!
            </button>
            <button className="w-full bg-[#f6d366] text-[#04703a] py-2 font-bold rounded-md">
              Book Demo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
