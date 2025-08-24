
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image"; // Ensure Image is imported if used

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setCurrentHash(window.location.hash);

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname, searchParams]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    if (path.includes("#")) {
      const [basePath, hash] = path.split("#");
      return pathname === basePath && currentHash === `#${hash}`;
    }
    return pathname === path && currentHash === "";
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-4 bg-white sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <div>
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Image src="/colsol_logo.svg" alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
      </button>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <span
            className={
              isActive("/") ? "text-blue-600 font-semibold" : "text-[#6B6B6B]"
            }
          >
            Home
          </span>
        </Link>
        <Link href="/#services" onClick={() => setIsMenuOpen(false)}>
          <span
            className={
              isActive("/#services")
                ? "text-blue-600 font-semibold"
                : "text-[#6B6B6B]"
            }
          >
            Services
          </span>
        </Link>
        <Link href="/about" onClick={() => setIsMenuOpen(false)}>
          <span
            className={
              isActive("/about")
                ? "text-blue-600 font-semibold"
                : "text-[#6B6B6B]"
            }
          >
            About Us
          </span>
        </Link>
        <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
          <span
            className={
              isActive("/#contact")
                ? "text-blue-600 font-semibold"
                : "text-[#6B6B6B]"
            }
          >
            Contact Us
          </span>
        </Link>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <span
              className={
                isActive("/") ? "text-blue-600 font-semibold" : "text-[#6B6B6B]"
              }
            >
              Home
            </span>
          </Link>
          <Link href="/#services" onClick={() => setIsMenuOpen(false)}>
            <span
              className={
                isActive("/#services")
                  ? "text-blue-600 font-semibold"
                  : "text-[#6B6B6B]"
              }
            >
              Services
            </span>
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            <span
              className={
                isActive("/about")
                  ? "text-blue-600 font-semibold"
                  : "text-[#6B6B6B]"
              }
            >
              About Us
            </span>
          </Link>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
            <span
              className={
                isActive("/#contact")
                  ? "text-blue-600 font-semibold"
                  : "text-[#6B6B6B]"
              }
            >
              Contact Us
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
