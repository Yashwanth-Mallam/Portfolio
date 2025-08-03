"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

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
      <h1 className="text-3xl font-bold text-center">My Projects</h1>

      {/* Intro Paragraph */}
      <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-8 animate-fadeIn">
        Each project reflects my passion for crafting solutions that blend
        creativity with functionality. From sleek frontend designs to secure
        full-stack systems, I focus on delivering high-quality, user-friendly
        experiences while maintaining clean, scalable code.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {projects.map((project, index) => {
          const isExpanded = expanded === index;
          const shortDesc = project.description.slice(0, 160) + "...";

          return (
            <Card
              key={index}
              className="w-full max-w-sm shadow-lg border border-purple-500 hover:shadow-xl hover:shadow-purple-500/50 transition duration-300 hover:scale-105"
            >
              {/* Gradient Header */}
              <CardHeader className="flex flex-col items-center text-center space-y-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
                <Image
                  src={project.logo}
                  alt={`${project.title} Logo`}
                  width={64}
                  height={64}
                  className="object-contain rounded-full border border-white shadow-md transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/64?text=Logo";
                  }}
                />
                <CardTitle className="text-xl font-semibold">
                  {project.title}
                </CardTitle>
                <p className="text-xs opacity-80">
                  {project.startDate} - {project.endDate}
                </p>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="space-y-3 px-4 pb-5 text-sm">
                {/* Type */}
                <p>
                  <span className="font-semibold">Type:</span>{" "}
                  {project.projectType}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-purple-200 text-purple-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Languages */}
                <div className="flex flex-wrap gap-2">
                  {project.languages.map((lang, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-purple-400 text-purple-600"
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
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
                    className="hover:text-gray-700 flex items-center gap-1"
                  >
                    GitHub <FaGithub className="text-sm" />
                  </a>
                </div>

                {/* Description */}
                <div>
                  <p className="mt-2">
                    {isExpanded ? project.description : shortDesc}
                  </p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-2 flex items-center gap-1 text-purple-600 hover:underline"
                  >
                    {isExpanded ? (
                      <>
                        Show Less <FaChevronUp className="text-sm" />
                      </>
                    ) : (
                      <>
                        Show More <FaChevronDown className="text-sm" />
                      </>
                    )}
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
