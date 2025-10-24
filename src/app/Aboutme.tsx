"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const paragraphs = [
  `Hello! I'm Yashwanth, a passionate student and aspiring software developer. Currently, I'm honing my skills in various technologies, including TypeScript, JavaScript, Node.js, React.js, and Next.js, with a focus on both frontend and backend development. As a student, I am eager to learn and apply my knowledge in real-world projects. I've developed a strong foundation in building dynamic web applications, from creating intuitive user interfaces with React.js to understanding the intricacies of backend logic with Node.js. My goal is to write clean, efficient, and scalable code while constantly improving my skills. I am excited about the endless learning opportunities in the tech field and look forward to collaborating with others on challenging and innovative projects. If you're interested in discussing ideas or exploring potential collaborations, don't hesitate to reach out. Let's work together to bring creative concepts to life!`,
];

export default function AboutMe() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const [displayedParagraphs, setDisplayedParagraphs] = useState<string[]>(() =>
    new Array(paragraphs.length).fill("")
  );

  useEffect(() => {
    const delayBeforeStart = 1000;

    const typeParagraph = (text: string, index: number) => {
      let charIndex = 0;
      const interval = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayedParagraphs((prev) => {
            const updated = [...prev];
            updated[index] += text[charIndex] ?? "";
            return updated;
          });
          charIndex++;
        } else {
          clearInterval(interval);
        }
      }, 20);
    };

    const timeout = setTimeout(() => {
      paragraphs.forEach((para, idx) => {
        setTimeout(() => typeParagraph(para, idx), idx * 1000);
      });
    }, delayBeforeStart);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-6 gap-10 relative">
      {/* Left Video Section */}
      <div className="relative w-full max-w-md">
        <video
          ref={videoRef}
          src="/videos/about-me.mp4"
          autoPlay
          loop
          muted
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm shadow-md hover:bg-purple-700 transition"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>

      {/* Right Content */}
      <div className="max-w-xl w-full rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-center mb-6">
          Know About Me!
          <Image
            src="/logos/question.png"
            alt="Question Emoji"
            width={56}
            height={56}
            className="inline-block ml-2 align-middle rounded-full"
            priority
          />
        </h1>

        {displayedParagraphs.map((text, idx) => {
          const highlighted = text.replace(
            /Yashwanth/g,
            '<span class="font-bold text-purple-600">Yashwanth</span>'
          );

          return (
            <p
              key={idx}
              className="text-lg leading-relaxed mb-4 whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          );
        })}
      </div>
    </div>
  );
}
