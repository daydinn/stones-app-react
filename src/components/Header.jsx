import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa'; 
import logo1 from '../assets/logos/logo1.png'; 
import profilePic from '../assets/logos/logo1.png'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 4000); // Verzögert das Schließen des Dropdowns um 5 Sekunden
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center h-20 px-10 bg-gray-100 relative">
      {/* Linke Sektion (Burger-Menü) */}
      <div className="flex items-center md:hidden cursor-pointer">
        <FaBars className="text-2xl" onClick={toggleMenu} />
      </div>

      {/* Mittlere Sektion (Logo und Titel) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
        <img src={logo1} alt="logo" className="h-16 mr-4"/>
        <h1 className="text-2xl text-fuchsia-700">STONES</h1>
      </div>

      {/* Navigation und Profilbild */}
      <div className="flex items-center ml-auto space-x-24">
        <div className="hidden lg:flex items-center space-x-24">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
          >
            <button className="text-xl">Guides</button>
            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-36 bg-white shadow-lg border rounded-md">
              <a href="/all-crystals" className="block w-full px-4 py-2 hover:bg-purple-200">All Crystals</a>
              <a href="/properties" className="block w-full px-4 py-2 hover:bg-purple-200">Properties</a>
              <a href="/chakra-stones" className="block w-full px-4 py-2 hover:bg-purple-200">Chakra Stones</a>
            </div>
            )}
          </div>
          <a href="/about" className="text-xl">About</a>
        </div>

      {/* Profilbild */}
      <div className="relative" ref={profileDropdownRef}>
          <img
            src={profilePic}
            alt="Profile"
            className="h-10 w-10 rounded-full cursor-pointer"
            onClick={handleProfileClick}
          />
          {isProfileDropdownOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-36 bg-white shadow-lg border rounded-md">
              <a href="/Collection" className="block px-4 py-2 hover:bg-purple-200">Collection</a>
              <a href="/Profile" className="block px-4 py-2 hover:bg-purple-200">Edit Profile</a>
              <a href="/logout" className="block px-4 py-2 hover:bg-purple-200">Logout</a>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown-Menü für kleine Bildschirme */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-20 left-0 w-full bg-gray-100 transition-transform duration-300 transform translate-y-0">
          <div className="flex flex-col items-start p-4">
          <a href="/all-crystals" className="block  w-full mb-2 hover:bg-purple-200">All Crystals</a>
            <a href="/properties" className="block  w-full mb-2 hover:bg-purple-200">Properties</a>
            <a href="/chakra-stones" className="block  w-full mb-2 hover:bg-purple-200">Chakra Stones</a>
            <a href="/about" className="block   w-full mb-2 hover:bg-purple-200">About</a>
          </div>
        </div>
      )}
    </nav>
  );
}
