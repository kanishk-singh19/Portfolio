import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MePage = () => {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const textRef = useRef(null);
  const bgImgRef = useRef(null);

  useGSAP(() => {
    // Profile image animation
    gsap.from(imageContainerRef.current, {
      opacity: 0,
      x: -50,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center"
      }
    });

    // Text animation
    gsap.from(textRef.current.querySelectorAll("p"), {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%"
      }
    });

    // Background text fade-in
    gsap.from(".bg-text-element", {
      opacity: 0,
      duration: 2,
      stagger: 0.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom"
      }
    });

  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-black relative flex items-center justify-between overflow-hidden px-6 md:px-12 lg:px-16"
      id="me-page"
    >
      {/* Background Texture with rounded corners */}
      <div className="absolute inset-0 p-10 overflow-hidden rounded-3xl z-0 pointer-events-none">
        <img
          ref={bgImgRef}
          src="/bg-textured.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Left side empty space for balance */}
      <div className="w-16 md:w-24"></div>

      {/* Content Container */}
      <div className="relative z-20 flex-1 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24">
          {/* Profile Image */}
          <div
            ref={imageContainerRef}
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-white/20 shrink-0"
          >
            <img
              src="/me2.jpg"
              alt="Portrait"
              className="w-full h-full object-cover object-center scale-125 grayscale hover:grayscale-0 transition-all duration-500 opacity-90"
            />
          </div>

          {/* Text Content */}
          <div 
            ref={textRef}
            className="text-white w-full uppercase opacity-70 space-y-4 md:space-y-6 lg:space-y-8 flex-1"
          >
            <p className="text-xl md:text-4xl lg:text-xl font-extralight tracking-[0.2em] ">
              Designing with intent,<br className="hidden md:block"/> building with precision.
            </p>
            <p className="text-lg md:text-2xl lg:text-xl tracking-[0.2em] font-light">
              Translating vision into immersive digital experiences.
            </p>
            <p className="text-lg tracking-[0.2em] md:text-xl lg:text-xl font-medium">
              Blending usability, performance, and storytelling.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Currently building at <span className="font-normal underline">______</span>.
            </p>
          </div>
        </div>
      </div>

      {/* "Rugged" Vertical Text - Right Side */}
      <h2 className="text-white tracking-[0.4em] text-sm md:text-base lg:text-sm opacity-70 z-30 transform -rotate-90 whitespace-nowrap">
        RUGGED
      </h2>
    </section>
  );
};

export default MePage;