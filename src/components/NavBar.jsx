import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navElements = ["Home", "Gallery", "Wisdom"];

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center p-5 bg-yellow-100 text-yellow-900 shadow-md">
      <NavLink to={"/"} onClick={() => setIsOpen(false)}>
        <span className="text-2xl font-serif font-semibold">DharmaVerse</span>
      </NavLink>

      <button
        className="md:hidden focus:outline-none text-yellow-900"
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

      <div
        className={`absolute flex flex-col bg-yellow-100 left-0 w-full
            md:flex-row md:items-center md:space-x-8 md:static md:w-auto
            transition-transform  duration-900 ease-in-out md:text-xl
            ${
              isOpen
                ? "translate-y-24 opacity-100 pointer-events-auto"
                : "-translate-y-24 opacity-80 pointer-events-none"
            }
         md:translate-y-0 md:opacity-100 md:pointer-events-auto
        `}
      >
        {navElements.map((link) => (
          <NavLink
            key={link}
            to={`/${link.toLowerCase()}`}
            className={({ isActive }) =>
              `block px-6 py-3 rounded-md transition-colors ${
                isActive
                  ? "text-yellow-700 font-semibold underline"
                  : "text-yellow-900 hover:bg-yellow-300 md:hover:bg-transparent"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            {link}
          </NavLink>
        ))}
      </div>
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
        className="mr-4 p-2 rounded focus:outline-none text-2xl"
      >
        {darkMode ? <i className="ri-moon-fill"></i> : <i className="ri-sun-fill"></i>}
      </button>
    </nav>
  );
};

export default NavBar;
