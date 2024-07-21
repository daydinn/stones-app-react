import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import logo1 from '../assets/logos/logo1.png'; 
import profilePic from '../assets/images/image.png';
import Spinner from './Spinner';
import { GiCrystalGrowth } from "react-icons/gi";
import {Link } from 'react-router-dom';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const navigate = useNavigate();
  const auth = getAuth();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 4000);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleSignInClick = () => {
    navigate("/SignIn");
  };

  const handleSignOut = () => {
    auth.signOut();
    navigate("/");
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
    <nav className="flex justify-between items-center h-20 px-10 bg-green-300 sticky top-0 z-40">
      {/* Linke Sektion (Burger-Menü) */}
      <div className="flex items-center xl:hidden cursor-pointer">
        <FaBars className="text-2xl" onClick={toggleMenu} />
      </div>

      {/* Mittlere Sektion (Logo und Titel) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
      <Link
      to="/"
      className="flex justify-center items-center"
    >
      <GiCrystalGrowth className="mr-2 text-3xl text-fuchsia-600 bg-cyan-200 rounded p-1 border-2 h-12 w-12" />
    </Link>      
    </div>

      {/* Navigation und Profilbild */}
      <div className="flex items-center ml-auto space-x-32">
        <div className="hidden xl:flex items-center space-x-32">
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

        {/* Profilbild oder Sign In */}
        <div className="relative" ref={profileDropdownRef}>
          {loading ? null : (
            isAuthenticated ? (
              <>
                <img
                  src={profilePic}
                  alt="Profile"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  onClick={handleProfileClick}
                />
                {isProfileDropdownOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-36 bg-white shadow-lg border rounded-md">
                    <a href="/Collection" className="block px-4 py-2 hover:bg-purple-200">Collection</a>
                    <a href="/Profile" className="block px-4 py-2 hover:bg-purple-200">Profile</a>
                    <a href="/logout" onClick={handleSignOut} className="block px-4 py-2 hover:bg-purple-200">Logout</a>
                  </div>
                )}
              </>
            ) : (
              <button
                className="text-xl"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            )
          )}
        </div>
      </div>

      {/* Dropdown-Menü für kleine Bildschirme */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-20 left-0 w-full bg-gray-100 transition-transform duration-300 transform translate-y-0">
          <div className="flex flex-col items-start p-4">
            <a href="/all-crystals" className="block w-full mb-2 hover:bg-purple-200">All Crystals</a>
            <a href="/properties" className="block w-full mb-2 hover:bg-purple-200">Properties</a>
            <a href="/chakra-stones" className="block w-full mb-2 hover:bg-purple-200">Chakra Stones</a>
            <a href="/about" className="block w-full mb-2 hover:bg-purple-200">About</a>
          </div>
        </div>
      )}
    </nav>
  );
}
