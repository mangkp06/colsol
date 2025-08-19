"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/colsol_logo.svg" alt="ColSol Logo" width={40} height={40} />
        <span className="text-gray-700 font-semibold">COLSOL</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-gray-600">
        <Link href="/" className="text-blue-600 font-medium">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-2 rounded hover:bg-gray-100"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden">
          <Link href="/" className="text-blue-600 font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
