"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
   const { data: session } = useSession();
   const [open, setOpen] = useState(false);
   const [mobileOpen, setMobileOpen] = useState(false);
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

useEffect(() => {
  const handleClickOutside = () => {
    setOpen(false);
  };

  if (open) {
    document.addEventListener("click", handleClickOutside);
  }

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [open]);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setMobileOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () =>
    window.removeEventListener("resize", handleResize);
}, []);

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
  <div className="max-w-7xl mx-auto h-20 px-5 md:px-8 flex items-center justify-between">

      {/* Logo */}

      <Link
        href="/"
       className="text-2xl md:text-3xl font-bold tracking-wide"
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
      {/* Mobile Hamburger */}
<button
  onClick={() => setMobileOpen(!mobileOpen)}
  className="lg:hidden text-white"
>
  {mobileOpen ? (
    <X size={30} />
  ) : (
    <Menu size={30} />
  )}
</button>

      {/* Right Buttons */}

    <div className="hidden lg:flex items-center gap-4">

  {session ? (

   <div
  className="relative"
  onClick={(e) => e.stopPropagation()}
>

      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center hover:scale-105 transition"
      >

        {session.user?.image ? (

          <img
            src={session.user.image}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />

        ) : (

          <span>
            {(
              session.user?.name?.[0] ||
              session.user?.email?.[0] ||
              "U"
            ).toUpperCase()}
          </span>

        )}

      </button>

      {open && (

        <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden">

          <div className="p-4 border-b border-white/10">

            <p className="font-semibold">
              {session.user?.name || "User"}
            </p>

            <p className="text-sm text-zinc-400">
              {session.user?.email}
            </p>

          </div>

          <Link
            href={
              session.user?.email === process.env.ADMIN_EMAIL
                ? "/admin"
                : "/dashboard"
            }
            className="block px-4 py-3 hover:bg-zinc-800 transition"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>

          <button
            onClick={() => signOut()}
            className="w-full text-left px-4 py-3 text-red-400 hover:bg-zinc-800 transition"
          >
            Logout
          </button>

        </div>

      )}

    </div>

  ) : (

    <>

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
        className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full font-semibold hover:scale-105"
      >
        Get Started
      </Link>

    </>

  )}

</div>

    </div>
    {mobileOpen && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="lg:hidden bg-zinc-950 border-t border-white/10"
  >
    <div className="flex flex-col px-6 py-6 space-y-5">

      {navLinks.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={() => setMobileOpen(false)}
          className="text-lg hover:text-purple-500"
        >
          {item.title}
        </Link>
      ))}

      <hr className="border-white/10" />

      {session ? (
        <>
          <Link
            href={
              session.user?.email === "a@gmail.com"
                ? "/admin"
                : "/dashboard"
            }
            onClick={() => setMobileOpen(false)}
            className="hover:text-purple-500"
          >
            Dashboard
          </Link>

          <button
            onClick={() => signOut()}
            className="text-left text-red-400"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            href="/login"
            onClick={() => setMobileOpen(false)}
          >
            Login
          </Link>

          <Link
            href="/register"
            onClick={() => setMobileOpen(false)}
            className="bg-purple-600 text-center rounded-xl py-3"
          >
            Get Started
          </Link>
        </>
      )}

    </div>
  </motion.div>
)}
  </motion.header>
);
}