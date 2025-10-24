"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle";
import TechnicalSkills from "./TechnicalSkills";
import Projects from "./projects/page";
import AboutMe from "./Aboutme";
import ContactMe from "./Contact";
import Experience from "./Experiance";
import { AiOutlineDownload } from "react-icons/ai";
import ParticlesBackground from "./particles";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 2) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col m-2 relative">
      <div className="max-w-full p-6 flex items-center justify-between">
        <ParticlesBackground />
        {/* Avatar Section */}
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="/logos/profile.png" alt="Mallam Yashwanth" />
            <AvatarFallback>MY</AvatarFallback>
          </Avatar>
        </div>

        {/* Buttons Section */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => {
              document.getElementById("contact-section")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Contact
          </Button>
          <Button
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1hBywoxj7OZ8-dwuUzCNjWaUHnYDS5Nec/view?usp=sharing",
                "_blank"
              );
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <AiOutlineDownload />
            Resume
          </Button>
          <ModeToggle />
        </div>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col items-center justify-center text-center space-y-6 p-8 max-w-4xl mx-auto">
        {/* Image + Button side by side */}
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
          {/* Image */}
          <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-xl overflow-hidden border-4 border-purple-600 shadow-lg relative">
            <Image
              src="/logos/profile.png"
              alt="Mallam Yashwanth"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <Button
            onClick={() => {
              const aboutSection = document.getElementById("aboutme");
              if (aboutSection)
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center text-white bg-purple-600 hover:bg-purple-700 space-x-3"
          >
            <div className="relative w-6 h-6 bg-white rounded-full">
              <Image
                src="/logos/down.png"
                alt="Intro Icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span>Intro</span>
          </Button>
        </div>

        {/* Text Content below */}
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl font-extrabold sm:text-6xl">
            <span className="animate-blink text-purple-600">Hello!</span>{" "}
            <span className="text-purple-600">I&apos;m Mallam Yashwanth</span>
          </h1>
          <p className="text-lg text-gray-300">
            A passionate developer focused on creating beautiful and functional
            user experiences. Let&apos;s connect and build something amazing
            together!
          </p>
        </div>
      </div>

      {/* Other sections */}
      <div className="flex justify-center items-center min-h-screen ">
        <TechnicalSkills />
      </div>
      <div className="flex justify-center items-center min-h-screen ">
        <Experience />
      </div>
      <div className="flex justify-center items-center min-h-screen ">
        <Projects />
      </div>

      <div
        id="aboutme"
        className="flex justify-center items-center min-h-screen "
      >
        <AboutMe />
      </div>
      <div
        id="contact-section"
        className="flex justify-center items-center min-h-screen "
      >
        <ContactMe />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <div
          className="
      fixed
      bottom-8 right-4         /* bottom right for small screens */
      md:top-1/2 md:right-8    /* center right for medium and up */
      md:-translate-y-1/2
      transform
      z-50
      group
    "
        >
          <button
            onClick={scrollToTop}
            className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all"
            aria-label="Scroll to top"
          >
            <div className="relative w-8 h-8 bg-white rounded-full">
              <Image
                src="/logos/up-arrow.png"
                alt="Up Arrow"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </button>
          {/* Tooltip text */}
          <span className="absolute -top-10 w-full left-1/2 -translate-x-1/2 bg-purple-700 text-white text-sm px-1 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            To Top
          </span>
        </div>
      )}
    </div>
  );
}
