"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin();

const themes = [
  {
    name: "green",
    color: "from-green-400 to-emerald-600",
    glow: "0 0 20px rgba(74, 222, 128, 0.6), 0 0 40px rgba(74, 222, 128, 0.3)",
  },
  {
    name: "red",
    color: "from-red-400 to-rose-600",
    glow: "0 0 20px rgba(248, 113, 113, 0.6), 0 0 40px rgba(248, 113, 113, 0.3)",
  },
  {
    name: "yellow",
    color: "from-yellow-400 to-orange-600",
    glow: "0 0 20px rgba(250, 204, 21, 0.6), 0 0 40px rgba(250, 204, 21, 0.3)",
  },
  {
    name: "blue",
    color: "from-blue-400 to-indigo-600",
    glow: "0 0 20px rgba(96, 165, 250, 0.6), 0 0 40px rgba(96, 165, 250, 0.3)",
  },
  {
    name: "white",
    color: "from-gray-200 to-gray-400",
    glow: "0 0 20px rgba(229, 231, 235, 0.6), 0 0 40px rgba(229, 231, 235, 0.3)",
  },
];

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "he", label: "עברית" },
];

function Navbar() {
  const [selectedTheme, setSelectedTheme] = useState("blue");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showThemeMobile, setShowThemeMobile] = useState(false);
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const containers = [desktopRef.current, mobileRef.current].filter(Boolean);

    containers.forEach((container) => {
      if (!container) return;
      const circles = container.querySelectorAll<HTMLElement>("[data-glow]");

      circles.forEach((element: HTMLElement) => {
        const glowColor = element.getAttribute("data-glow-color");
        if (!glowColor) return;

        const timeline = gsap.timeline({ repeat: -1 });

        // Animate the glow effect
        timeline.fromTo(
          element,
          {
            boxShadow: glowColor,
          },
          {
            boxShadow: glowColor
              .replace(/0\.6/g, "0.9")
              .replace(/0\.3/g, "0.6"),
            duration: 1.5,
            ease: "sine.inOut",
          },
          0
        );

        // Animate floating motion
        timeline.fromTo(
          element,
          {
            y: 0,
          },
          {
            y: -8,
            duration: 2.5,
            ease: "sine.inOut",
          },
          0
        );

        // Reverse glow
        timeline.to(element, {
          boxShadow: glowColor,
          duration: 1.5,
          ease: "sine.inOut",
        });

        // Float back down
        timeline.to(
          element,
          {
            y: 0,
            duration: 2.5,
            ease: "sine.inOut",
          },
          1.5
        );
      });
    });
  }, []);

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav
        ref={desktopRef}
        className="hidden md:flex fixed top-0 w-full z-50 h-20 bg-slate-950 border-b border-slate-800 items-center justify-between px-8"
      >
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white">Rayan Farhat</h1>
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                {languages.find((l) => l.code === selectedLanguage)?.label}
                <ChevronDown size={16} />
              </button>
              {showLanguageMenu && (
                <div className="absolute top-full left-0 mt-1 bg-slate-900 border border-slate-700 rounded-lg shadow-lg z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLanguage(lang.code);
                        setShowLanguageMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button className="px-6 py-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            Launch XR
          </button>
        </div>

        {/* Middle Section - Theme Selector */}
        <div className="flex items-center gap-4">
          {themes.map((theme) => (
            <button
              key={theme.name}
              data-glow
              data-glow-color={theme.glow}
              onClick={() => setSelectedTheme(theme.name)}
              className={`w-12 h-12 rounded-full transition-all duration-300 shadow-lg ${
                selectedTheme === theme.name
                  ? `bg-linear-to-br ${theme.color} ring-2 ring-white scale-110`
                  : `bg-linear-to-br ${theme.color} opacity-70 hover:opacity-100`
              }`}
              title={theme.name}
            />
          ))}
        </div>

        {/* Right Section - Empty for balance */}
        <div className="w-32" />
      </nav>

      {/* Mobile Navbar */}
      <nav
        ref={mobileRef}
        className="md:hidden fixed top-0 w-full z-50 bg-slate-950 border-b border-slate-800 px-4 pt-4 pb-2"
      >
        <div className="flex items-center justify-between">
          {/* Left: Name & Language */}
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-white">Rayan Farhat</h1>
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center gap-1 text-xs text-gray-300 hover:text-white transition-colors"
              >
                {languages.find((l) => l.code === selectedLanguage)?.label}
                <ChevronDown size={12} />
              </button>
              {showLanguageMenu && (
                <div className="absolute top-full left-0 mt-1 bg-slate-900 border border-slate-700 rounded-lg shadow-lg z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLanguage(lang.code);
                        setShowLanguageMenu(false);
                      }}
                      className="w-full text-left px-3 py-1 text-xs text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Launch XR */}
          <button className="px-4 py-1.5 text-sm bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            Launch XR
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 mt-3 pb-3">
          {themes.map((theme) => (
            <button
              key={theme.name}
              data-glow
              data-glow-color={theme.glow}
              onClick={() => setSelectedTheme(theme.name)}
              className={`w-10 h-10 rounded-full transition-all duration-300 shadow-lg ${
                selectedTheme === theme.name
                  ? `bg-linear-to-br ${theme.color} ring-2 ring-white scale-110`
                  : `bg-linear-to-br ${theme.color} opacity-70 hover:opacity-100`
              }`}
              title={theme.name}
            />
          ))}
        </div>
      </nav>

      <div className="h-20 md:h-20" />
    </>
  );
}

export default Navbar;
