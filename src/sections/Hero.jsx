import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const bgRef = useRef(null);
  const brandRef = useRef(null);
  const buttonRef = useRef(null);
  const marqueeContainerRef = useRef(null);
  const marqueeContentRef = useRef(null);

  const handleWhatsAppClick = () => {
    const phoneNumber = "9319373141";
    const defaultMessage = "Hi Kanishk, I'd like to discuss a project!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  

  useEffect(() => {
    // Background animation
    gsap.fromTo(
      bgRef.current,
      { scale: 0.9, opacity: 0, y: 20 },
      { scale: 1, opacity: 0.6, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Brand and Button animations
    gsap.fromTo(brandRef.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 });
    gsap.fromTo(buttonRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.8 });

    // Text lines animations
    gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], { y: 50, opacity: 0 });
    gsap.to(line1Ref.current, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
    gsap.to(line2Ref.current, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 });
    gsap.to(line3Ref.current, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 });

    // Infinite Marquee
    const contentWidth = marqueeContentRef.current.offsetWidth;
    gsap.to(marqueeContainerRef.current, {
      x: `-${contentWidth}`,
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth),
      },
    });

    // Brand color change on scroll to About section
    ScrollTrigger.create({
      trigger: "#about",
      start: "top center",
      onEnter: () => {
        gsap.to(brandRef.current.querySelectorAll('h1, sup'), {
          color: "#ffffff",
          duration: 0.8,
          strub:true,
        });
      },
      onLeaveBack: () => {
        gsap.to(brandRef.current.querySelectorAll('h1, sup'), {
          color: "#000000",
          duration: 0.8,
          strub:true,
        });
      }
    });

  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 bg-white overflow-hidden">
      {/* Brand Name (top-left) */}
      <div ref={brandRef} className="fixed top-6 left-6 z-50 flex items-start gap-1 transition-colors">
        <h1 className="text-xl sm:text-2xl font-bold tracking-widest text-black transition-colors">KANISHK</h1>
        <sup className="text-[10px] sm:text-xs font-medium text-black mt-[2px] transition-colors">™</sup>
      </div>

      {/* Background Image */}
      <div className="absolute z-20 w-[290px] sm:w-[350px] md:w-[450px] lg:w-[600px]">
        <img 
          ref={bgRef} 
          src="/bg-image2.jpg" 
          alt="abstract background" 
          className="w-full h-full object-cover rounded-3xl opacity-60" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rotate-6 blur-xl opacity-30 rounded-3xl"></div>
      </div>

      {/* Let's Talk Button with WhatsApp */}
      <div ref={buttonRef} className="absolute w-full left-0 right-0 top-5 flex justify-center z-10">
        <button 
          onClick={handleWhatsAppClick}
          className="px-6 py-2 text-sm sm:text-base font-semibold text-white bg-black rounded-full hover:bg-neutral-800 transition-colors duration-300 whitespace-nowrap"
          aria-label="Contact via WhatsApp"
        >
          Let's Talk
        </button>
      </div>

      {/* Hero Text Lines */}
      <div className="relative z-30 text-center font-extrabold uppercase leading-tight tracking-tight">
        <h1 ref={line1Ref} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black">HEY, I'M KANISHK</h1>
        <h1 ref={line2Ref} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl stroke-text text-black">HEY, I'M KANISHK</h1>
        <h1 ref={line3Ref} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black">HEY, I'M KANISHK</h1>
      </div>

      {/* Marquee Loop */}
      <div className="absolute bottom-2 left-0 w-full overflow-hidden whitespace-nowrap z-40 bg-white py-2">
        <div ref={marqueeContainerRef} className="flex gap-x-10">
          <div ref={marqueeContentRef} className="flex gap-x-10 text-xl font-semibold text-black uppercase">
            {["Kanishk Designs", "Portfolio", "Frontend Developer", "Creative", "GSAP", "React", "Tailwind"].map((item, i) => (
              <React.Fragment key={i}>
                <span>{item}</span>
                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;