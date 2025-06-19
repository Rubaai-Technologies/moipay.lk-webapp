import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import moiPay from '../assets/logo/moipay.png';
import { PathsUrls } from '../utils/path_url';

const menuItems = [
  { label: 'Home', route: PathsUrls.home },
  { label: 'About Us', route: PathsUrls.about },
  { label: 'The Team', route: PathsUrls.ourTeam },
  { label: 'Contact Us', route: PathsUrls.contactUs },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="w-full max-w-5xl mx-auto px-10 py-4 md:bg-white/10 md:rounded-[10px] md:border md:border-[#87DFCA] md:backdrop-blur-[9.9px] md:mt-8 flex justify-start items-center md:gap-32 gap-10">
      {/* Logo */}
      <div className="flex items-center">
        <img src={moiPay} alt="MOI PAY" className="md:h-12 md:w-12 h-12 w-20" />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {menuItems.map(item => (
          <button
            key={item.label}
            className={`flex flex-col justify-center text-xl font-semibold transition-colors duration-200 font-['Wix_Madefor_Text',Inter,sans-serif] leading-8 bg-transparent border-none cursor-pointer ${
              location.pathname === item.route 
                ? 'text-[#87DFCA]' 
                : 'text-[#F4F4F4] hover:text-[#87DFCA]'
            }`}
            onClick={() => navigate(item.route)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Desktop Download Button */}
      <a
        href="#download"
        className="hidden md:flex w-[182px] px-2.5 py-2.5 bg-gradient-to-r from-[#87DFCA] via-[#A3AFFD] to-[#8ABEFC] rounded-[10px] border border-[#8ABEFC] justify-center items-center gap-2.5 text-xl font-['Wix_Madefor_Display',Inter,sans-serif] font-bold leading-8 text-black no-underline"
      >
        Download Now
      </a>

      {/* Mobile Layout */}
      <div className="flex w-full items-center justify-end md:hidden h-14">
        {/* Mobile Download Button & Hamburger */}
        <div className="flex items-center gap-0 ml-auto">
          <a
            href="#download"
            className="text-xm w-32 h-8 px-2 flex items-center justify-center text-sm font-bold rounded bg-gradient-to-r from-[#87DFCA] via-[#A3AFFD] to-[#8ABEFC] border border-[#8ABEFC] text-black font-['Wix_Madefor_Display',Inter,sans-serif] leading-[22.4px] mr-2"
          >
            Download Now
          </a>

          {/* Hamburger Icon */}
          <button
            className="flex items-center justify-center w-8 h-8 bg-[#302F31] rounded border border-[#87DFCA] p-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <div className="flex flex-col items-center justify-center gap-1 w-4">
              <div className="w-4 h-0.5 bg-[#F4F4F4] rounded" />
              <div className="w-4 h-0.5 bg-[#F4F4F4] rounded" />
              <div className="w-4 h-0.5 bg-[#F4F4F4] rounded" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className=" absolute top-20 right-4 bg-[rgba(35,39,47,0.98)] border border-cyan-400 rounded-lg shadow-lg flex flex-col w-32 z-50 animate-fade-in">
          {menuItems.map(item => (
            <button
              key={item.label}
              className={`px-6 py-3 text-white font-semibold border-b border-gray-700 last:border-b-0 bg-transparent border-none cursor-pointer text-left ${
                location.pathname === item.route 
                  ? 'text-gradient bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent' 
                  : ''
              }`}
              onClick={() => {
                navigate(item.route);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
} 