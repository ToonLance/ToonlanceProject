"use client";

import Navbar from "../component/Navbar";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Page() {
    const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/myzenzjg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const formMessage = document.getElementById("formMessage");

    if (response.ok) {
      formMessage.classList.remove("hidden");
      formMessage.innerHTML =
        "<p class='text-green-400'>Thanks! we will reach out in 24 Hr</p>";

      e.target.reset();
    } else {
      formMessage.classList.remove("hidden");
      formMessage.innerHTML =
        "<p class='text-red-400'>Something went wrong. Try again.</p>";
    }
  };

  const iconRef = useRef(null);
  const videoRef = useRef(null);
  const sectionRefs = useRef([]);
  const titleRefs = useRef([]);
  const cardRefs = useRef([]);
  const testimonialRefs = useRef([]);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Simple video animation
    gsap.from(videoRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    // Simple scroll arrow animation
    gsap.to(iconRef.current, {
      y: 15,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // SIMPLE: One ScrollTrigger per element with minimal config
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      
      gsap.from(section, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });

    titleRefs.current.forEach((title) => {
      if (!title) return;
      
      gsap.from(title, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });

    cardRefs.current.forEach((card) => {
      if (!card) return;
      
      gsap.from(card, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });

    testimonialRefs.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.from(card, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });

    if (formRef.current) {
      gsap.from(formRef.current, {
        opacity: 0,
        x: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    }

    if (contactInfoRef.current) {
      gsap.from(contactInfoRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    }

    if (footerRef.current) {
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="w-full h-screen object-cover"
      >
        <source src="/trans.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 text-white"
        ref={iconRef}
      >
        <span className="material-symbols-outlined text-5xl drop-shadow-lg cp">
          keyboard_double_arrow_up
        </span>
      </div>

      <section 
        ref={el => sectionRefs.current[0] = el}
        className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 md:px-20 lg:px-32 gap-16 bg-black"
      >
        <div className="flex-1 max-w-xl">
          <p className="uppercase tracking-[0.4em] text-neutral-500 text-sm mb-6">
            Showcase
          </p>

          <h2 
            ref={el => titleRefs.current[0] = el}
            className="text-5xl md:text-7xl font-light leading-tight mb-8"
          >
            Latest
            <br />
            <span className="font-semibold">Work</span>
          </h2>

          <div className="w-20 h-px bg-white mb-8"></div>

          <p className="text-neutral-400 text-lg leading-relaxed">
            A collection of our latest animation projects, visual storytelling,
            and cinematic experiences crafted with precision, creativity, and
            attention to detail.
          </p>
        </div>

        <div className="flex-1 w-full">
          <div 
            ref={el => cardRefs.current[0] = el}
            className="border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm"
          >
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Latest Work"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section 
        ref={el => sectionRefs.current[1] = el}
        className="min-h-screen flex flex-col items-center justify-center px-8 md:px-20"
      >
        <div className="max-w-6xl w-full text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-neutral-500 text-sm mb-6">
            Featured
          </p>

          <h2 
            ref={el => titleRefs.current[1] = el}
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
          ref={el => cardRefs.current[1] = el}
          className="w-full max-w-6xl rounded-3xl overflow-hidden border border-white/10"
        >
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/YOUR_SHOWREEL_VIDEO_ID"
            title="Studio Showreel"
            allowFullScreen
          />
        </div>

        <div className="mt-10 text-neutral-500 text-sm tracking-[0.25em] uppercase">
        </div>
      </section>

      <section 
        ref={el => sectionRefs.current[2] = el}
        className="min-h-screen flex items-center justify-center px-8 md:px-20 bg-black"
      >
        <div className="max-w-5xl w-full">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-neutral-500 text-sm mb-6">
              Pricing
            </p>

            <h2 
              ref={el => titleRefs.current[2] = el}
              className="text-5xl md:text-7xl font-light mb-8"
            >
              Simple &
              <span className="font-semibold"> Transparent</span>
            </h2>

            <div className="w-24 h-px bg-white mx-auto mb-8"></div>

            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              High-quality custom 2D animation tailored to your story,
              brand, or project requirements.
            </p>
          </div>

          <div 
            ref={el => cardRefs.current[2] = el}
            className="border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-sm"
          >
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

              <div>
                <h3 className="text-3xl font-light mb-3">
                  Custom 2D Animation
                </h3>

                <p className="text-neutral-500">
                  Fully customized production pipeline.
                </p>
              </div>

              <div>
                <span className="text-6xl md:text-8xl font-semibold">
                  $400
                </span>
                <span className="text-neutral-500 text-xl ml-3">
                  / minute
                </span>
              </div>

            </div>

            <div className="w-full h-px bg-white/10 my-10"></div>

            <div className="grid md:grid-cols-2 gap-6 text-neutral-300">
              {[
                "Custom Character Design", "Custom Background Design",
                "Storyboarding", "Professional Animation",
                "Cinematic Camera Movement", "Scene Composition",
                "Lighting & Effects", "HD Video Delivery",
                "Commercial Usage", "Revisions Included"
              ].map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>

          </div>

        </div>
      </section>

      <section 
        ref={el => sectionRefs.current[3] = el}
        className="py-32 px-8 md:px-20 bg-black"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-neutral-500 text-sm mb-6">
              Testimonials
            </p>

            <h2 
              ref={el => titleRefs.current[3] = el}
              className="text-5xl md:text-7xl font-light mb-8"
            >
              Trusted By
              <span className="font-semibold"> Studios</span>
            </h2>

            <div className="w-24 h-px bg-white mx-auto mb-8"></div>

            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Feedback from animation studios, production houses and creative teams
              we've collaborated with.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                text: "The people at ToonLance are some of the nicest and coolest people I have ever worked with. They focused on quality over quantity even at an affordable price when it comes to animation. I highly recommend them if you ever need a freelancing animation company to work with.",
                initials: "PT",
                name: "PanicToons",
                role: "Indie Animation Studio"
              },
              {
                text: "ToonLance's team of animators continue to provide my studio with the animations we need, intuitively and with a level of quality that reflects famous TV series. We negotiated prices that a working-class person can afford. I'll definitely be reaching out again.",
                initials: "RE",
                name: "Ryan Edgar",
                role: "Game Development Studio"
              },
              {
                text: "ToonLance is one of the greatest artists I ever worked with. They focus on attention to detail, always with quality over quantity, offering prices you can count on. I recommend ToonLance if you ever need special freelance animation work.",
                initials: "MP",
                name: "MHYT Productions",
                role: "Animation Production House"
              },
              {
                text: "ToonLance has been a big help animating on my show. They are very effective and deliver quality work at an affordable price. I highly recommend you hire them for your cartoons.",
                initials: "PP",
                name: "Plushbomb Productions",
                role: "Cartoon Studio"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                ref={el => testimonialRefs.current[index] = el}
                className="border border-white/10 rounded-3xl p-8"
              >
                <p className="text-neutral-300 leading-relaxed text-lg mb-8">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center font-semibold text-lg">
                    {testimonial.initials}
                  </div>

                  <div>
                    <h4 className="font-medium text-white">{testimonial.name}</h4>
                    <p className="text-neutral-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section
        ref={el => sectionRefs.current[4] = el}
        id="contact"
        className="min-h-screen bg-black text-white py-32 px-5"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.4em] text-neutral-500 text-sm mb-6">
              Contact
            </p>

            <h2 
              ref={el => titleRefs.current[4] = el}
              className="text-5xl md:text-7xl font-light mb-8"
            >
              Let's Create
              <span className="font-semibold"> Something Amazing</span>
            </h2>

            <div className="w-24 h-px bg-white mx-auto mb-8"></div>

            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Looking for high-quality animation, character design,
              storyboarding, or a complete production pipeline?
              We'd love to hear about your project.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div 
              ref={contactInfoRef}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-10"
            >
              <h3 className="text-3xl font-light mb-4">
                Get In Touch
              </h3>

              <p className="text-neutral-500 mb-12">
                We usually respond within 24 hours.
              </p>

              <div className="space-y-10">

                <div>
                  <p className="text-neutral-500 text-sm tracking-widest mb-2">
                    EMAIL
                  </p>

                  <h4 className="text-xl">
                    toonlanceservice@gmail.com
                  </h4>
                </div>

                <div>
                  <p className="text-neutral-500 text-sm tracking-widest mb-2">
                    DISCORD
                  </p>

                  <h4 className="text-xl">
                    @toonlance
                  </h4>
                </div>

                <div>
                  <p className="text-neutral-500 text-sm tracking-widest mb-2">
                    RESPONSE TIME
                  </p>

                  <h4 className="text-xl">
                    Within 24 Hours
                  </h4>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-2xl font-light mb-4">
                    Custom Animation
                  </h4>

                  <p className="text-neutral-400 leading-relaxed">
                    Character Design, Background Design,
                    Storyboarding, Animation, Effects,
                    Editing and Delivery.
                  </p>

                  <div className="mt-8">
                    <span className="text-5xl font-semibold">
                      $400
                    </span>

                    <span className="text-neutral-500 ml-2">
                      / minute
                    </span>
                  </div>
                </div>

              </div>

            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block mb-2 text-sm text-neutral-400">
                    Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-transparent border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white transition-all"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-neutral-400">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@gmail.com"
                    className="w-full bg-transparent border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white transition-all"
                  />
                </div>

              </div>

              <div>
                <label className="block mb-2 text-sm text-neutral-400">
                  Discord Username
                </label>

                <input
                  type="text"
                  name="discord"
                  placeholder="@username"
                  className="w-full bg-transparent border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block mb-2 text-sm text-neutral-400">
                    Budget *
                  </label>

                  <input
                    type="text"
                    name="budget"
                    placeholder="$400 - $5000+"
                    required
                    className="w-full bg-transparent border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white transition-all"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-neutral-400">
                    Service *
                  </label>

                  <select
                    name="service"
                    required
                    className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white transition-all"
                  >
                    <option value="">Select</option>
                    <option>2D Animation</option>
                    <option>Storyboard</option>
                    <option>Character Design</option>
                    <option>Background Art</option>
                    <option>Cartoon Series</option>
                  </select>
                </div>

              </div>

              <div>
                <label className="block mb-2 text-sm text-neutral-400">
                  Project Timeline
                </label>

                <select
                  name="timeline"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white transition-all"
                >
                  <option value="">Select Timeline</option>
                  <option>1 Week</option>
                  <option>2 Weeks</option>
                  <option>1 Month</option>
                  <option>2-3 Months</option>
                  <option>Flexible</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-neutral-400">
                  Project Details *
                </label>

                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full border border-white py-4 rounded-2xl hover:bg-white hover:text-black transition-all duration-300"
              >
                Start Your Project
              </button>

              <div
                id="formMessage"
                className="mt-4 hidden text-center"
              ></div>

            </form>

          </div>

          <div className="text-center mt-24">

            <h3 className="text-3xl md:text-5xl font-light mb-6">
              Ready To Bring Your Story To Life?
            </h3>

            <p className="text-neutral-500 max-w-2xl mx-auto">
              Custom characters, custom backgrounds,
              professional animation and everything needed
              to turn your idea into a finished production.
            </p>

          </div>

        </div>
      </section>

      <footer 
        ref={footerRef}
        className="border-t border-white/10 py-12 bg-black"
      >
        <div className="max-w-7xl mx-auto">

          <div className="w-16 h-px bg-white/30 mx-auto mb-6"></div>

          <p className="text-center text-neutral-500 text-sm md:text-base tracking-[0.2em] uppercase">
            Developed By
            
           <Link href={"https://www.linkedin.com/in/chirag-agrawal-936635329?utm_source=share_via&utm_content=profile&utm_medium=member_ios"}><span className="text-white" > Chirag Agrawal </span></Link>
            And
            <span className="text-white"> Kartik Mishra </span>
          </p>
         <p className="text-center ">© 2026 TOONLANCE — Human-made animation.</p>
        </div>
      </footer>
    </div>
  );
}