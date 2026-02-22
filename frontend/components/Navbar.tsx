"use client";

import { useState } from "react";
import Link from "next/link";
import DarkToggle from "./DarkToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-color)]/80 backdrop-blur-md">
      <nav className="max-w-[1440px] mx-auto px-8 md:px-16 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tighter serif-font"
        >
          Pradeep<span className="text-[var(--accent-purple)]">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/works" className="nav-link">
            Work
          </Link>
          <Link href="/project-details/1" className="nav-link">
            Case-Study
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
          <DarkToggle />
          {/* <button
            className="text-[var(--text-main)] p-2"
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            <span className="material-symbols-outlined !text-[20px]">
              contrast
            </span>
          </button> */}
        </div>

        {/* Mobile Button */}
        <div className="flex items-center gap-4 md:hidden">
          <DarkToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden overflow-hidden border-t border-[var(--border-color)] transition-all duration-400 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-8 py-10">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="nav-link"
            >
              About
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="nav-link"
            >
              Work
            </Link>
            <Link
              href="/projectdetails"
              onClick={() => setIsOpen(false)}
              className="nav-link"
            >
              Case-Study
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="nav-link"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
