"use client";

import { fetchApi } from "@/app/api/api";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <nav className="w-full px-6 py-5 border-b border-gray-200">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="logo">
          <h1 className="text-2xl font-bold">TOONLANCE</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/">Home</Link>
           <Link href="/dashboard">Dashboard</Link>
             <Link href="/admin">admin</Link>
          <Link href="/showreel">Showreel</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/login"
            className="px-4 py-2 border rounded-lg"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-black text-white rounded-lg border"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-5 mt-6 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/showreel">Showreel</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/login"
            className="px-4 py-2 border rounded-lg w-fit"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-2 bg-black text-white rounded-lg w-fit"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;