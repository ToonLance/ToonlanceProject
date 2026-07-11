"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUp,
   Heart,
} from "lucide-react";
 
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on these pages
  if (
    pathname.startsWith("/admin") ||
    pathname === "/login" ||
    pathname === "/register"
  ) {
    return null;
  }

  return (
    <footer className="border-t border-white/10 bg-black mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-4xl font-bold">
              Toon
              <span className="text-purple-500">
                lance
              </span>
            </h2>

            <p className="text-zinc-400 mt-5 leading-7 max-w-sm">
              Premium 2D animation studio creating cinematic stories,
              custom animation, storyboards and visual experiences.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-zinc-400">

              <Link
                href="/"
                className="hover:text-purple-400 transition"
              >
                Home
              </Link>

              <Link
                href="/showreel"
                className="hover:text-purple-400 transition"
              >
                Showreel
              </Link>

              <Link
                href="/pricing"
                className="hover:text-purple-400 transition"
              >
                Pricing
              </Link>

              <Link
                href="/testimonials"
                className="hover:text-purple-400 transition"
              >
                Testimonials
              </Link>

              <Link
                href="/contact"
                className="hover:text-purple-400 transition"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Connect With Us
            </h3>

            <div className="flex gap-4">

              <Link
                href="https://www.instagram.com/toonlance/"
                target="_blank"
                className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
               <FaInstagram size={22} />
              </Link>

              <Link
                href="https://x.com/TOONLANCE281374"
                target="_blank"
                className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
               <FaTwitter size={22} />
              </Link>

              <Link
                href="https://www.youtube.com/@TOONLANCE"
                target="_blank"
                className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
               <FaYoutube size={22} />
              </Link>

              <Link
                href="https://discord.gg/"
                target="_blank"
                className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
               <FaDiscord size={22} />
              </Link>

            </div>

            <p className="text-zinc-500 mt-6">
              toonlanceservice@gmail.com
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <p className="text-zinc-500 text-center md:text-left">
              © 2026 Toonlance. All Rights Reserved.
            </p>

            <p className="text-zinc-500 flex items-center justify-center gap-2 text-sm tracking-wide">

  Created with

  <Heart
    size={18}
    className="fill-red-500 text-red-500 transition-all duration-300 hover:fill-white hover:text-white hover:scale-125 hover:drop-shadow-[0_0_10px_white] cursor-pointer"
  />

  by{" "}

  <Link
    href="https://www.linkedin.com/in/chirag-agrawal-936635329"
    target="_blank"
    className="text-white hover:text-purple-400 transition"
  >
    Chirag Agrawal
  </Link>

  &

  <span className="text-white">
    Kartik Mishra
  </span>

</p>
          </div>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 transition flex items-center justify-center"
          >
            <ArrowUp size={20} />
          </button>

        </div>

      </div>

    </footer>
  );
}