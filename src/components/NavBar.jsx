import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const navElements = ["Home", "Wisdom"];

  return (
    <nav className="flex justify-between items-center p-5 bg-yellow-100 text-yellow-900 dark:text-yellow-700 shadow-md relative">
      {/* Logo */}
      <NavLink to="/" onClick={() => setIsOpen(false)}>
        <span className="text-2xl font-serif font-semibold">DharmaVerse</span>
      </NavLink>

      {/* Navigation Links + Dark Toggle */}
      <div
        className={`absolute top-16 left-0 w-full flex flex-col items-start bg-yellow-100
          md:static md:flex md:flex-row md:items-center md:space-x-6 md:w-auto
          transition-transform duration-700 ease-in-out
          ${
            isOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-24 opacity-0 pointer-events-none"
          }
          md:translate-y-0 md:opacity-100 md:pointer-events-auto
        `}
      >
        {navElements.map((link) => (
          <NavLink
            key={link}
            to={`/${link.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-6 py-3 rounded-md font-medium transition-all duration-500 ease-in-out ${
                isActive
                  ? "text-yellow-800 dark:text-yellow-700 text-xl font-semibold underline"
                  : "text-yellow-900 hover:bg-yellow-300 md:hover:bg-transparent"
              }`
            }
          >
            {link}
          </NavLink>
        ))}

        {/* Dark Mode Toggle - Desktop */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="hidden md:block px-6 py-3 text-xl rounded-md transition-colors text-yellow-900 cursor-pointer"
        >
          {darkMode ? (
            <i className="ri-moon-fill"></i>
          ) : (
            <i className="ri-sun-fill"></i>
          )}
        </button>
      </div>

      {/* Mobile Controls */}
      <div className="flex items-center gap-4 md:hidden">
        {/* Dark Mode Toggle - Mobile */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="text-2xl text-yellow-900"
        >
          {darkMode ? (
            <i className="ri-moon-fill"></i>
          ) : (
            <i className="ri-sun-fill"></i>
          )}
        </button>

        {/* Hamburger Button */}
        <button
          className="focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
