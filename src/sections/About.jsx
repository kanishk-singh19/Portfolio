import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  

  useGSAP(() => {
    sectionRef.current.id = "about";

    // Background fade animation
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

    
    

    // Text animation
    const nodes = Array.from(textRef.current.childNodes);
    textRef.current.textContent = '';
    
    nodes.forEach((node, i) => {
      if (node.nodeName === 'BR') {
        textRef.current.appendChild(document.createElement('br'));
      } else {
        const text = node.textContent;
        text.split('').forEach((char, charIndex) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.opacity = '0';
          span.style.display = 'inline-block';
          gsap.set(span, { y: 10 });
          textRef.current.appendChild(span);

          gsap.to(span, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: (i + charIndex) * 0.03,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });
        });
      }
    });

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-white p-5 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Minimal text - Right side */}
      <div 
        
        className="absolute bottom-10 lg:right-20 lg:top-1/2   z-50"
      >
        <h2 
          className=" left-4 lg:top-1/2 transform bottom-5 lg:-translate-y-1/2 lg:-rotate-90 text-white tracking-[0.4em] text-sm md:text-base lg:text-sm opacity-70 z-30 whitespace-nowrap"
          
        >
          MINIMAL
        </h2>
      </div>
      
      <div className="w-full max-w-screen-lg mx-auto">
        <div
          ref={textRef}
          className="oswald opacity-70 font-extralight text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.2em] leading-tight text-white"
        >
          I <br/>create elevating digital<br />experiences that inspire<br/>and connect with people<br/>through development &<br/>design.
        </div>
      </div>
    </section>
  );
};

export default About;