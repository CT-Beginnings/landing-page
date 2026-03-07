"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que-nodo", label: "Por Qué Nodo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#fundadores", label: "Fundadores" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-nodo-950/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <svg className="h-8 w-8 transition-transform group-hover:scale-105" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#3b82f6"/>
              <circle cx="16" cy="12" r="3.5" fill="white"/>
              <circle cx="8" cy="22" r="2.5" fill="white" opacity="0.8"/>
              <circle cx="24" cy="22" r="2.5" fill="white" opacity="0.8"/>
              <line x1="14" y1="14.5" x2="9.5" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              <line x1="18" y1="14.5" x2="22.5" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              <line x1="10.5" y1="22" x2="21.5" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
            </svg>
            <span className="text-xl font-bold text-white tracking-tight">Nodo</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-nodo-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/25"
            >
              Cotiza Gratis
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-nodo-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-nodo-950/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base text-nodo-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full rounded-lg bg-accent-500 px-5 py-3 text-center text-sm font-medium text-white mt-4"
              >
                Cotiza Gratis
              </a>
              <div className="flex justify-center pt-2">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
