import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const bgRef = useRef(null);
  const brandRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      { scale: 0.9, opacity: 0, y: 20 },
      { scale: 1, opacity: 0.6, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      brandRef.current,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    gsap.fromTo(
      buttonRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.8 }
    );

    gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], {
      y: 50,
      opacity: 0,
    });

    gsap.to(line1Ref.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(line2Ref.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });

    gsap.to(line3Ref.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.6,
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 bg-white overflow-hidden">
      {/* Brand Name (top-left) */}
      <div
        ref={brandRef}
        className="fixed top-6 left-6 z-50 flex items-start gap-1"
      >
        <h1 className="text-xl sm:text-2xl font-bold tracking-widest text-black">
          KANISHK
        </h1>
        <sup className="text-[10px] sm:text-xs font-medium text-black mt-[2px]">
          ™
        </sup>
      </div>

      {/* Background Image Layer */}
      <div className="absolute z-20 w-[290px] sm:w-[300px] md:w-[400px] lg:w-[600px]">
        <img
          ref={bgRef}
          src="/bg-image2.jpg"
          alt="abstract background"
          className="w-full h-full object-cover rounded-3xl opacity-60"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rotate-6 blur-xl opacity-30 rounded-3xl"></div>
      </div>

      {/* Let's Talk Button (below background in z-index) */}
      <div
        ref={buttonRef}
        className="absolute top-6 left-1/2 -translate-x-1/2 z-10"
      >
        <button className="px-6 py-2 text-sm sm:text-base font-semibold text-white bg-black rounded-full hover:bg-neutral-800 transition-colors duration-300">
          Let’s Talk
        </button>
      </div>

      {/* Text Lines */}
      <div className="relative z-30 text-center font-extrabold uppercase leading-tight tracking-tight">
        <h1
          ref={line1Ref}
          className="text-4xl sm:text-5xl  md:text-6xl lg:text-8xl text-black"
        >
          HEY, I'M KANISHK
        </h1>
        <h1
          ref={line2Ref}
          className="text-4xl sm:text-5xl  md:text-6xl lg:text-8xl stroke-text text-black"
        >
          HEY, I'M KANISHK
        </h1>
        <h1
          ref={line3Ref}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-black"
        >
          HEY, I'M KANISHK
        </h1>
      </div>
    </section>
  );
};

export default Hero;
