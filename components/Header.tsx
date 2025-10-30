"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/facilities", label: "Facilities" },
    { href: "/services", label: "Services" },
    { href: "/clients", label: "Clients" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* --- Logo & Brand --- */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-extrabold text-lg shadow-sm group-hover:scale-105 transition-transform duration-300">
            LE
          </div>
          <div>
            <div className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
              Lanora Electroplaters
            </div>
            <div className="text-xs text-gray-500 tracking-wide">
              Precision coatings for industry
            </div>
          </div>
        </Link>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative hover:text-accent transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-accent text-white rounded-lg shadow-md hover:bg-primary transition-all duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* --- Mobile Menu Button --- */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-white shadow-inner border-t border-gray-100"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-block px-5 py-2.5 bg-accent text-white rounded-lg text-center hover:bg-primary transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
