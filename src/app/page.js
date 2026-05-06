"use client";

import Navbar from "../component/Navbar";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Page() {

  const iconRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {

    
    gsap.set(videoRef.current, {
      opacity: 1,
      filter: "blur(0px)"
    });

    
    const videoAnim = gsap.from(videoRef.current, {
      opacity: 0,
      filter: "blur(20px)",
      duration: 1.5,
      ease: "power2.out"
    });


    const iconAnim = gsap.to(iconRef.current, {
      y: 20,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    return () => {
      videoAnim.kill();
      iconAnim.kill();
    };

  }, []);

  return (
    <div>

      <video
        ref={videoRef}
        width="400"
        autoPlay
        muted
        loop
        className="aspect-video rounded-lg home-bg"
      >
        <source src="/trans.mp4" type="video/mp4" />
      </video>

      <div className="scrollicon" ref={iconRef}>
        <span className="material-symbols-outlined siize-100">
          keyboard_double_arrow_up
        </span>
      </div>

    </div>
  );
}