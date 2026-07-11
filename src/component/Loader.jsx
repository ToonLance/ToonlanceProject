"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">

      <div className="text-center">

        {/* Logo */}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold tracking-wide"
        >
          Toon
          <span className="text-purple-500">
            lance
          </span>
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
          className="text-zinc-500 tracking-[0.4em] uppercase mt-5 text-sm"
        >
          Human-made Animation
        </motion.p>

        {/* Loading Bar */}

        <div className="w-72 h-[5px] bg-zinc-800 rounded-full overflow-hidden mt-12 mx-auto">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-400"
          />

        </div>

        {/* Loading */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
          }}
          className="mt-8 text-zinc-500 tracking-[0.25em]"
        >
          Loading...
        </motion.p>

      </div>

    </div>
  );
}