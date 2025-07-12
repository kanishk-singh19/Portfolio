import React, {useRef, useState, useEffect} from 'react'
import {navLinks, socials} from '../constants'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Link } from 'react-scroll'

const Navbar = () => {
    const navRef = useRef(null);
    const linksRef = useRef([]);
    const contactRef = useRef(null);
    const iconTL = useRef(null);
    const topLineRef = useRef(null);
    const bottomLineRef = useRef(null)
    const tl = useRef(null)

    const [isOpen, setIsOpen] = useState(false)
    const [showBurger, setShowBurger] = useState(true)

    useGSAP(()=>{
        gsap.set(navRef.current, {xPercent: 100});
        gsap.set([linksRef.current, contactRef.current],{
            autoAlpha: 0,
            x:-20, 
        })
        tl.current = gsap.timeline({paused:true})
        .to(navRef.current,{
            xPercent:0,
            duration:1,
            ease:"power3.out"
        })
        .to(linksRef.current,{
            autoAlpha:1,
            x:0,
            stagger:0.1,
            duration:0.5,
            ease:"power2.out"
        },"<")
        .to(contactRef.current, {
            autoAlpha:1,
            x:0,
            duration:0.5,
            ease:"power2.out",
        },"<+0.2")

        iconTL.current = gsap.timeline({paused:true})
        .to(topLineRef.current,{
            rotate:45,
            y:3.3,
            duration:0.3,
            ease:"power2.inOut",
        })
        .to(bottomLineRef.current,{
            rotate:-45,
            y:-3.3,
            duration:0.3,
            ease:"power2.inOut",
        },"<")
    },[]);

    useEffect(() => {
  const handleScroll = () => {
    const heroHeight = window.innerHeight;
    setShowBurger(window.scrollY < heroHeight);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

    



    const toggleMenu = () => {
        if(isOpen){
            tl.current.reverse();
            iconTL.current.reverse();

        }else{
            tl.current.play();
            iconTL.current.play();
        }
        setIsOpen(!isOpen)
    }

  return (
    <>
    <nav
    ref={navRef} 
    className='fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2'>
        <div className='oswald font-bold flex flex-col text-5xl gap-y-4 md:text-6xl lg:text-6xl '>
            {navLinks.map((section,index) => (
                <div key={index} ref={(el)=>(linksRef.current[index] = el)}>
                    <Link className='transition-all duration-300 cursor-pointer hover:text-white' to={`${section}`}
                    smooth
                    offset={0}
                    duration={1000}>{section}</Link>
                </div>
            ))}

        </div>
        <div ref={contactRef} className='flex flex-col flex-wrap justify-between gap-8 md:flex-row '>
            <div className='font-light'>
                <p className='tracking-wider text-white/50'>E-mail</p>
                <p className='text-xl tracking-widest lowercase text-pretty'>kanishk2feb2005@gmail.com</p>
            </div>
            <div className='font-light'>
                <p className='tracking-wider text-white/50'>Social Media</p>
                <div className='flex flex-col flex-wrap md:flex-row gap-x-2'>
                    {socials.map((social,index)=> (
                        <a key={index} href={social.href} className='text-sm leading-loose tracking-wider uppercase hover:text-white transiiton-colors duration-300'>{"{"}{social.name}{"}"}</a>
                    ))}

                </div>
            </div>
        </div>
    </nav>
    <div className='fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-lg cursor-pointer w-12 h-12  lg:w-12 lg:h-12 top-4 right-6' onClick={toggleMenu} style={showBurger? {clipPath: "circle(50% at 50% 50%)"}:{clipPath:"circle(0% at 50% 50%)"}}>
        <span ref={topLineRef} className="black w-6 h-0.5 bg-white rounded-full origin-center"></span>
        <span ref={bottomLineRef} className="black w-6 h-0.5 bg-white rounded-full origin-center"></span>


    </div>
    </>
  )
}

export default Navbar
