"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] =
useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);
 useEffect(() => {

    if(pathname!=="/") return;

    const handleScroll=()=>{

        const sections=
        document.querySelectorAll(".scroll-section");

        let current="home";

        sections.forEach((section)=>{

            const top=
            section.offsetTop-120;

            if(window.scrollY>=top){
                current=section.id;
            }

        });

        setActive(current);

    };

    window.addEventListener(
        "scroll",
        handleScroll
    );

    handleScroll();

    return ()=>window.removeEventListener(
        "scroll",
        handleScroll
    );

},[pathname]);
  const navLinks = [
  {
    title: "Home",
    href: "/#hero",
    id: "hero",
  },
  {
    title: "Showreel",
    href: "/#showreel",
    id: "showreel",
  },
  {
    title: "Pricing",
    href: "/#pricing",
    id: "pricing",
  },
  {
    title: "Testimonial",
    href: "/#testimonial",
    id: "testimonial",
  },
  {
    title: "Contact",
    href: "/#contact",
    id: "contact",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    id: "dashboard",
  },
];


  return (
  <motion.header
    initial={{ y: -80 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-zinc-950/70 backdrop-blur-xl shadow-xl border-b border-white/10"
        : "bg-transparent"
    }`}
  >
    <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

      {/* Logo */}

      <Link
        href="/"
        className="text-3xl font-bold tracking-wide"
      >
        Toon<span className="text-purple-500">lance</span>
      </Link>

      {/* Desktop Links */}

      <nav className="hidden lg:flex items-center gap-10">

        {navLinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={`relative py-2 transition-all duration-300 ${
              pathname === "/"
                ? active === item.id
                  ? "text-purple-500"
                  : "text-white hover:text-purple-400"
                : "text-white hover:text-purple-400"
            }`}
          >
            {item.title}

            {pathname === "/" &&
              active === item.id && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-500 rounded-full"
                />
              )}
          </Link>
        ))}

      </nav>

      {/* Right Buttons */}

      <div className="hidden lg:flex items-center gap-4">

        <Link
          href="/login"
          className={`px-5 py-2 rounded-full transition ${
            pathname === "/login"
              ? "text-purple-500"
              : "hover:text-purple-400"
          }`}
        >
          Login
        </Link>

        <Link
          href="/register"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full font-semibold rounded-full hover:scale-105"
        >
          Get Started
        </Link>

      </div>

    </div>
  </motion.header>
);
}