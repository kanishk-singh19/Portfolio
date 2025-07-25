import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSection = () => {
  const contactRef = useRef(null);
  useGSAP(() => {
    gsap.from(contactRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className=" oswald min-h-[60vh] px-6 py-20 md:px-12 lg:px-32 bg-gradient-to-b from-black to-gray-900 text-white flex flex-col justify-center items-center text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-6">
        Let’s Connect
      </h2>

      <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10">
        Open to freelance, collaborations, or just a friendly chat. Reach out via email or connect on social media.
      </p>

      <div className="oswald space-y-4">
        <a
          href="mailto:kanishk@email.com"
          className="text-xl hover:text-blue-400 transition-colors duration-300 underline"
        >
          kanishk2feb2005@email.com
        </a>
        <div className="oswald flex gap-6 justify-center text-xl mt-4">
          <a
            href="https://github.com/kanishk-singh19"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kanishk-singh-61734628a/

"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <p className="mt-16 text-white/30 text-sm">
        © {new Date().getFullYear()} Kanishk Singh. All rights reserved.
      </p>
    </section>
  );
};

export default ContactSection;
