"use client";

import React, { useRef, useState } from "react";
import { cn } from "../../lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const gridItems = gsap.utils.toArray(containerRef.current.children) as HTMLElement[];

    gridItems.forEach((item, index) => {
      const direction = index % 3;
      const fromX = direction === 0 ? -50 : direction === 1 ? 50 : 0;
      const fromY = direction === 2 ? 50 : 0;

      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: fromX,
          y: fromY,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
            markers: false,
          },
          delay: index * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-7 sm:p-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  buttonText,
  onButtonClick,
  buttonHref,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  id?: number;
}) => {
  const [clicked, setClicked] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!itemRef.current) return;

    const hoverAnimation = gsap.to(itemRef.current, {
      y: -8,
      duration: 0.3,
      paused: true,
      ease: "power1.out",
    });

    const enter = () => hoverAnimation.play();
    const leave = () => hoverAnimation.reverse();

    itemRef.current.addEventListener("mouseenter", enter);
    itemRef.current.addEventListener("mouseleave", leave);

    return () => {
      itemRef.current?.removeEventListener("mouseenter", enter);
      itemRef.current?.removeEventListener("mouseleave", leave);
    };
  }, []);

  const handleClick = () => {
    setClicked(true);
    if (onButtonClick) onButtonClick();

    gsap.to(itemRef.current, {
      keyframes: [
        { scale: 0.95, duration: 0.1 },
        { scale: 1.05, duration: 0.1 },
        { scale: 1, duration: 0.1 },
      ],
      onComplete: () => {
        setTimeout(() => setClicked(false), 1500);
      },
    });
  };

  return (
    <div
      ref={itemRef}
      className={cn(
        "group/bento relative shadow-input flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 p-4 h-full will-change-transform",
        "bg-gray-900/50 backdrop-blur-sm transition-all duration-300",
        className
      )}
    >
      {header}

      <div className="flex flex-col h-full">
        <div className="flex-grow flex flex-col">
          <div
            className={cn(
              "mt-2 mb-2 font-sans font-bold text-neutral-400 dark:text-neutral-200",
              titleClassName
            )}
          >
            {title}
          </div>

          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>

          {img && (
            <div className="mt-4 flex-grow overflow-hidden rounded-lg">
              <img
                src={img}
                alt={typeof title === "string" ? title : ""}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-500 group-hover/bento:scale-105",
                  imgClassName
                )}
              />
            </div>
          )}
        </div>

        {buttonText && (
          <div className="mt-4">
            {buttonHref ? (
              <a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-semibold text-white bg-black rounded-lg hover:bg-neutral-800 transition"
              >
                {buttonText}
              </a>
            ) : (
              <button
                onClick={handleClick}
                className={cn(
                  "w-full px-4 py-2 text-sm font-semibold text-white rounded-lg transition",
                  clicked
                    ? "bg-white-600"
                    : "bg-white/70 hover:bg-white/90 text-black/70"
                )}
              >
                {clicked ? "Clicked!" : buttonText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
