"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Netflix Clone",
      logo: "/logos/netflix.png",
      startDate: "Jan 2024",
      endDate: "Feb 2024",
      techStack: ["HTML", "CSS"],
      languages: ["HTML", "CSS"],
      projectType: "Frontend",
      description:
        "A static Netflix Clone frontend project built using pure HTML and CSS, focused on replicating Netflix's iconic user interface and layout. This clone includes a custom navigation bar, responsive grid of movie thumbnails, hero section, and hover effects on movie cards. Designed as an educational exercise, it demonstrates proficiency in layout structuring, flex/grid systems, media queries for responsiveness, and aesthetic replication using only clean, semantic markup and modern CSS styling without any frameworks.",
      deployedLink: "https://netflix-clone-demo.com",
      repoLink: "https://github.com/Yashwanth-Mallam/NetflixClone-frontend-",
    },

    {
      title: "Guide",
      logo: "/logos/guide.png",
      startDate: "May 2024",
      endDate: "Jun 2024",
      techStack: ["MERN"],
      languages: ["JavaScript", "TailwindCSS", "React.js"],
      projectType: "Full Stack",
      description:
        "Guide is a full-stack learning platform built to enable students to explore courses, interact socially, and practice exercises in real-time. It blends educational content delivery with a community-based interface. It supports user authentication, profile management, and interactive discussions. Backend uses Express and MongoDB for robust data handling and secure routing. The UI emphasizes accessibility and smooth UX transitions across devices.",
      deployedLink: "https://guide-demo.com",
      repoLink: "https://github.com/Yashwanth-Mallam/Guide",
    },
    {
      title: "LoanBuddy",
      logo: "/logos/handshake.png",
      startDate: "Dec 2024",
      endDate: "Feb 2025",
      techStack: ["React", "java-SpringBoot", "MongoDB", "JWT", "Socket.io"],
      languages: ["Java", "JavaScript", "HTML", "CSS"],
      projectType: "Full Stack",
      description:
        "LoanBuddy is a secure peer-to-peer lending platform where users can connect directly to request or provide loans. It facilitates low-interest micro-lending between individuals without the need for traditional banks. Built with React on the frontend and Java Spring Boot on the backend, the platform includes user authentication, encrypted transaction handling, real-time chat between borrowers and lenders, and dynamic loan tracking dashboards. Emphasizing trust, security, and transparency, LoanBuddy empowers users with affordable loan options and seamless peer-to-peer financial interactions.",
      deployedLink: "https://loanbuddy-demo.com",
      repoLink: "https://github.com/Yashwanth-Mallam/LoanBuddy",
    },
    {
      title: "Virtual Meeting",
      logo: "/logos/virtual.png",
      startDate: "Mar 2024",
      endDate: "Apr 2024",
      techStack: ["React", "Socket.io", "Node.js", "WebRTC"],
      languages: ["JavaScript", "HTML", "CSS"],
      projectType: "Full Stack",
      description:
        "A WebRTC-based video conferencing app supporting real-time video/audio streaming, chat, and screen sharing. It allows users to create rooms, invite peers, and collaborate virtually. The project uses socket communication to manage signaling and user presence. Focused on performance and low-latency communication, the system handles multiple user streams with peer-to-peer architecture and fallback mechanisms.",
      deployedLink: "https://virtual-meet.com",
      repoLink: "https://github.com/Yashwanth-Mallam/VirtualMeeting",
    },
    {
      title: "Personal Portfolio",
      logo: "/logos/loading.png",
      startDate: "Feb 2024",
      endDate: "Mar 2024",
      techStack: ["MERN"],
      languages: ["JavaScript", "CSS"],
      projectType: "Frontend",
      description:
        "A personal portfolio website designed to professionally present my projects, technical skills, and experience. It includes responsive sections for education, experience, project previews, and contact forms. It is built using React with reusable components, Tailwind for styling, and fully mobile-optimized with performance considerations like lazy-loaded images and semantic HTML. This project represents my personal brand and serves as a point of contact for recruiters.",
      deployedLink: "https://yashwanth-portfolio.com",
      repoLink: "https://github.com/Yashwanth-Mallam/Portfolio",
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center ">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center ">
        {projects.map((project, index) => {
          const isExpanded = expanded === index;
          const shortDesc = project.description.slice(0, 180) + "...";

          return (
            <Card
              key={index}
              className="w-full max-w-sm shadow-lg border-2 border-purple-500 hover:shadow-xl hover:shadow-purple-500/50 transition duration-300"
            >
              <CardHeader className="flex flex-col items-center text-center space-y-2">
                <Image
                  src={project.logo}
                  alt={`${project.title} Logo`}
                  width={64}
                  height={64}
                  className="object-contain rounded-full border border-purple-400 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/64?text=Logo";
                  }}
                />

                <CardTitle className="text-xl font-semibold text-white-700">
                  {project.title}
                </CardTitle>
                <p className="text-sm italic">
                  <span className="font-semibold">Start:</span>{" "}
                  {project.startDate} <br />
                  <span className="font-semibold">End:</span> {project.endDate}
                </p>
              </CardHeader>

              <CardContent className="space-y-3 px-4 pb-5 text-sm text-justify">
                <p>
                  <span className="font-semibold">Type:</span>{" "}
                  {project.projectType}
                </p>
                <p>
                  <span className="font-semibold">Tech Stack:</span>{" "}
                  {project.techStack.join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Languages:</span>{" "}
                  {project.languages.join(", ")}
                </p>

                {/* Links (after languages) */}
                <div className="flex gap-4 mt-1">
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    Live <FaExternalLinkAlt className="text-sm" />
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-black flex items-center gap-1"
                  >
                    GitHub <FaGithub className="text-sm" />
                  </a>
                </div>

                {/* Description with Show More / Less */}
                <div>
                  <p className="mt-2">
                    {isExpanded ? project.description : shortDesc}
                  </p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-2 hover:underline focus:outline-none text-xl"
                  >
                    {isExpanded ? "Show Less ▲" : "Show More ▼"}
                  </button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
