"use client";

import React, { useEffect, useRef } from 'react'
import gsap from "gsap";

const page = () => {



  return (
    <div className='mt-25'>
      <section 
    
        className="min-h-screen flex flex-col items-center justify-center px-8 md:px-20"
      >
        <div className="max-w-6xl w-full text-center mb-16">

          <h2 
           
            className="text-5xl md:text-7xl font-light mb-8"
          >
            Studio
            <span className="font-semibold"> Showreel</span>
          </h2>

          <div className="w-24 h-px bg-white mx-auto mb-8"></div>

          <p className="max-w-2xl mx-auto text-neutral-400 text-lg leading-relaxed">
            A curated collection of our finest animation, storytelling,
            motion design and visual experiences brought together
            in one cinematic reel.
          </p>
        </div>

        <div 
      
          className="w-full max-w-6xl rounded-3xl overflow-hidden border border-white/10"
        >
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/g9_xTpoorP0?si=-cFR0-dkuLbqLxhe"
            title="Studio Showreel"
            allowFullScreen
          />
        </div>

        <div className="mt-10 text-neutral-500 text-sm tracking-[0.25em] uppercase">
        </div>
      </section>
    </div>
  )
}

export default page;