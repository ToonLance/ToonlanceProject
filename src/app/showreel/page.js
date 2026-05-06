"use client";

import React, { useEffect, useRef } from 'react'
import gsap from "gsap";

const page = () => {

  const headingRef = useRef(null);
  const videosRef = useRef([]);

  useEffect(() => {

    
    gsap.set([headingRef.current, videosRef.current], {
      opacity: 1,
      filter: "blur(0px)",
      y: 0
    });

    
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      opacity: 0,
      y: -50,
      filter: "blur(10px)",
      duration: 1,
      ease: "power3.out"
    });

    
    tl.from(videosRef.current, {
      opacity: 0,
      y: 50,
      filter: "blur(15px)",
      duration: 1,
      stagger: 0.3,
      ease: "power3.out"
    }, "-=0.5");

    
    return () => {
      tl.kill();
    };

  }, []);

  return (
    <div>

      <div className='heading' ref={headingRef}>
        <h1 className='text-9xl mt-14 text-center'>SHOWREEL</h1>
      </div>

      <div className='flex gap-6 align-bottom justify-center mt-12'>

        <video ref={el => videosRef.current[0] = el} width="400" autoPlay muted loop className='aspect-video rounded-lg'>
          <source src="projectfile.mp4" type="video/mp4" />
        </video>

        <video ref={el => videosRef.current[1] = el} width="400" autoPlay muted loop className='aspect-video rounded-lg'>
          <source src="projectfile.mp4" type="video/mp4" />
        </video>

        <video ref={el => videosRef.current[2] = el} width="400" autoPlay muted loop className='aspect-video rounded-lg'>
          <source src="projectfile.mp4" type="video/mp4" />
        </video>

      </div>

    </div>
  )
}

export default page;