"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Project {
  slug: string;
  title: string;
  logo: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  languages: string[];
  projectType: string;
  description: string;
  deployedLink: string;
  repoLink: string;
  gradient: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      slug: "netflix-clone",
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
      gradient: "from-red-600 to-pink-500",
    },
    {
      slug: "guide",
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
      gradient: "from-green-500 to-emerald-600",
    },
    {
      slug: "loanbuddy",
      title: "LoanBuddy",
      logo: "/logos/handshake.png",
      startDate: "Dec 2024",
      endDate: "Feb 2025",
      techStack: ["React", "Java-SpringBoot", "MongoDB", "JWT", "Socket.io"],
      languages: ["Java", "JavaScript", "HTML", "CSS"],
      projectType: "Full Stack",
      description:
        "LoanBuddy is a secure peer-to-peer lending platform where users can connect directly to request or provide loans. It facilitates low-interest micro-lending between individuals without the need for traditional banks. Built with React on the frontend and Java Spring Boot on the backend, the platform includes user authentication, encrypted transaction handling, real-time chat between borrowers and lenders, and dynamic loan tracking dashboards. Emphasizing trust, security, and transparency, LoanBuddy empowers users with affordable loan options and seamless peer-to-peer financial interactions.",
      deployedLink: "https://loanbuddy-demo.com",
      repoLink: "https://github.com/Yashwanth-Mallam/LoanBuddy",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      slug: "virtual-meeting",
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
      gradient: "from-purple-500 to-pink-500",
    },
    {
      slug: "personal-portfolio",
      title: "Personal Portfolio",
      logo: "/logos/loading.png",
      startDate: "Feb 2024",
      endDate: "Mar 2024",
      techStack: ["MERN"],
      languages: ["JavaScript", "CSS"],
      projectType: "Frontend",
      description:
        "A personal portfolio website designed to professionally present my projects, technical skills, and experience. It includes responsive sections for education, experience, project previews, and contact forms. It is built using React with reusable components, Tailwind for styling, and fully mobile-optimized with performance considerations like lazy-loaded images and semantic HTML.",
      deployedLink: "https://yashwanth-portfolio.com",
      repoLink: "https://github.com/Yashwanth-Mallam/Portfolio",
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen  text-white py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="w-full max-w-sm overflow-hidden bg-[#101225] border border-gray-700 hover:scale-105 transition-transform duration-300 rounded-2xl"
          >
            <div
              className={`bg-gradient-to-r ${project.gradient} p-[2px] rounded-t-2xl`}
            >
              <div className="bg-[#0D1021] rounded-2xl flex justify-center p-6">
                <Image
                  src={project.logo}
                  alt={project.title}
                  width={80}
                  height={80}
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>

            <CardHeader className="px-5 pt-4">
              <CardTitle className="text-xl font-semibold text-center">
                {project.title}
              </CardTitle>
              <p className="text-xs text-gray-400 text-center">
                {project.startDate} – {project.endDate}
              </p>
            </CardHeader>

            <CardContent className="text-center px-5 pb-6">
              <p className="text-gray-300 text-sm mb-5">
                {project.description.slice(0, 140)}...
              </p>
              <div className="flex justify-center">
                <Button
                  onClick={() => setSelectedProject(project)}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl shadow-md"
                >
                  Details →
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 💬 Dialog for Project Details */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <DialogContent className="max-w-2xl bg-[#0D1021] text-white border border-gray-700 rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                {selectedProject.startDate} – {selectedProject.endDate}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col md:flex-row gap-6 mt-4">
              <Image
                src={selectedProject.logo}
                alt={selectedProject.title}
                width={120}
                height={120}
                className="object-contain mx-auto md:mx-0"
              />

              <div className="flex-1 space-y-3">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-1">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(
                      (tech: string, i: number) => (
                        <Badge key={i} className="bg-blue-500/20 text-blue-300">
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Languages:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.languages.map(
                      (lang: string, i: number) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-blue-500 text-blue-300"
                        >
                          {lang}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href={selectedProject.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    Live Site
                  </a>
                  <a
                    href={selectedProject.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
