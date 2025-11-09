"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function NavHoverBtn() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!btnRef.current) return;

    const textEl = btnRef.current.querySelector(".btn-text");
    const svgTop = btnRef.current.querySelector(".svg-top-left");
    const svgBottom = btnRef.current.querySelector(".svg-bottom-right");

    tlRef.current = gsap.timeline({ paused: true });
    tlRef.current
      .to(textEl, {
        scrambleText: {
          text: "Hover Me",
          chars: "upperCase",
          speed: 0.4,
        },
        duration: 0.5,
        ease: "power2.out",
      })
      .fromTo(
        [svgTop, svgBottom],
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );
  }, []);

  const handleEnter = () => {
    tlRef.current?.restart();
  };

  const handleLeave = () => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current.querySelector(".btn-text"), {
      scrambleText: {
        text: "Hover Me",
        chars: "upperCase",
        speed: 0.3,
      },
      duration: 0.8,
    });
    gsap.to(btnRef.current.querySelectorAll("svg"), {
      scale: 0,
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <span className="btn-text relative z-10">Hover Me</span>

      {/* SVG Top Left */}
      <svg
        className="svg-top-left absolute top-2 left-2 w-5 h-5 text-white opacity-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 3l7 7-7 7" />
      </svg>

      {/* SVG Bottom Right */}
      <svg
        className="svg-bottom-right absolute bottom-2 right-2 w-5 h-5 text-white opacity-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 21l-7-7 7-7" />
      </svg>
    </button>
  );
}
