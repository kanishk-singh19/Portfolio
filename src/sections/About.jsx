import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // 1. Background fade animation
    gsap.fromTo(
      sectionRef.current,
      { backgroundColor: "white" },
      {
        backgroundColor: "#000",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        }
      }
    );

    // 2. Minimalist text animation
    const text = textRef.current.textContent;
    textRef.current.textContent = '';
    
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.willChange = 'opacity';
      
      // Slight vertical offset for each character
      gsap.set(span, { y: 10 });
      
      textRef.current.appendChild(span);

      // Animate with scroll trigger
      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.03, // Adjust timing here
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-start bg-white px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="w-full max-w-screen-lg mx-auto">
        <p
          ref={textRef}
          className="oswald font-extralight text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.2em] leading-tight text-white"
        >
          I create elevating digital  experiences that inspire and connect with people through development and design.
        </p>
      </div>
    </section>
  );
};

export default About;