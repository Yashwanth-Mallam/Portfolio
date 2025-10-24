import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaJava,
  FaAws,
  FaFigma,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiFastapi,
  SiSpringboot,
  SiPostman,
  SiDocker,
  SiVercel,
  SiEclipseide,
  SiDjango,
  SiJavascript,
  SiCss3,
  SiC,
  SiAndroid,
} from "react-icons/si";
import { DiPython } from "react-icons/di";
import { VscCode } from "react-icons/vsc"; // From Visual Studio Code icon set

const skillIcons = [
  {
    name: "React.js",
    icon: <FaReact color="rgb(97,219,251)" />,
    glow: "0 0 15px rgba(97,219,251,0.6)",
  },
  {
    name: "HTML5",
    icon: <SiJavascript color="rgb(227,76,38)" />,
    glow: "0 0 15px rgba(227,76,38,0.4)",
  },
  {
    name: "CSS3",
    icon: <SiCss3 color="rgb(38,77,228)" />,
    glow: "0 0 15px rgba(38,77,228,0.4)",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript color="rgb(240,219,79)" />,
    glow: "0 0 15px rgba(240,219,79,0.4)",
  },
  {
    name: "C",
    icon: <SiC color="rgb(0,122,204)" />,
    glow: "0 0 15px rgba(0,122,204,0.4)",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color="white" />,
    glow: "0 0 15px rgba(255,255,255,0.4)",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color="rgb(104,160,99)" />,
    glow: "0 0 15px rgba(0,255,0,0.4)",
  },
  {
    name: "Express",
    icon: <SiExpress color="white" />,
    glow: "0 0 15px rgba(255,255,255,0.4)",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color="rgb(0,122,204)" />,
    glow: "0 0 15px rgba(0,122,204,0.4)",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss color="rgb(6,182,212)" />,
    glow: "0 0 15px rgba(6,182,212,0.4)",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap color="rgb(125,17,248)" />,
    glow: "0 0 15px rgba(125,17,248,0.4)",
  },
  {
    name: "Java",
    icon: <FaJava color="rgb(255,102,0)" />,
    glow: "0 0 15px rgba(255,102,0,0.4)",
  },
  {
    name: "Python",
    icon: <DiPython color="rgb(255,255,0)" />,
    glow: "0 0 15px rgba(255,255,0,0.4)",
  },
  {
    name: "FastAPI",
    icon: <SiFastapi color="rgb(0,204,153)" />,
    glow: "0 0 15px rgba(0,204,153,0.4)",
  },
  {
    name: "SpringBoot",
    icon: <SiSpringboot color="rgb(118,185,0)" />,
    glow: "0 0 15px rgba(118,185,0,0.4)",
  },
  {
    name: "Django",
    icon: <SiDjango color="rgb(4,83,58)" />,
    glow: "0 0 15px rgba(4,83,58,0.4)",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color="rgb(0,237,100)" />,
    glow: "0 0 15px rgba(0,237,100,0.6)",
  },
  {
    name: "MySQL",
    icon: <SiMysql color="rgb(0,122,158)" />,
    glow: "0 0 15px rgba(0,122,158,0.6)",
  },
];

const toolIcons = [
  {
    name: "Git",
    icon: <FaGitAlt color="rgb(240,80,50)" />,
    glow: "0 0 15px rgba(240,80,50,0.4)",
  },
  {
    name: "Android Studio",
    icon: <SiAndroid color="rgb(164,198,57)" />,
    glow: "0 0 15px rgba(164,198,57,0.4)",
  },
  {
    name: "GitHub",
    icon: <FaGithub color="white" />,
    glow: "0 0 15px rgba(255,255,255,0.4)",
  },
  {
    name: "Postman",
    icon: <SiPostman color="rgb(255,108,55)" />,
    glow: "0 0 15px rgba(255,108,55,0.4)",
  },
  {
    name: "Docker",
    icon: <SiDocker color="rgb(0,123,255)" />,
    glow: "0 0 15px rgba(0,123,255,0.4)",
  },
  {
    name: "AWS",
    icon: <FaAws color="rgb(255,153,0)" />,
    glow: "0 0 15px rgba(255,153,0,0.4)",
  },
  {
    name: "Vercel",
    icon: <SiVercel color="white" />,
    glow: "0 0 15px rgba(255,255,255,0.4)",
  },
  {
    name: "Figma",
    icon: <FaFigma color="rgb(242,78,30)" />,
    glow: "0 0 15px rgba(242,78,30,0.4)",
  },
  {
    name: "Eclipse",
    icon: <SiEclipseide color="rgb(102,0,153)" />,
    glow: "0 0 15px rgba(102,0,153,0.4)",
  },
  {
    name: "VS Code",
    icon: <VscCode color="rgb(0,122,204)" />,
    glow: "0 0 15px rgba(0,122,204,0.4)",
  },
];

const certificates = [
  {
    title: "React Developer Certification",
    img: "/certificates/react.png",
    pdf: "/certificates/react.pdf",
    description:
      "Recognized for completing an advanced React.js course covering component-based architecture, state management, hooks, routing, and building production-ready web applications.",
  },
  {
    title: "HTML5 Web Development Certificate",
    img: "/certificates/html.png",
    pdf: "/certificates/html.pdf",
    description:
      "Awarded for mastering HTML5, including semantic elements, forms, multimedia integration, accessibility practices, and structuring responsive web pages according to modern standards.",
  },
  {
    title: "Python Programming for Data Science",
    img: "/certificates/python.png",
    pdf: "/certificates/python.pdf",
    description:
      "Completed a comprehensive Python course focused on data science, covering Pandas, NumPy, Matplotlib, and data preprocessing, visualization, and analysis techniques.",
  },
  {
    title: "Java Programming Certification",
    img: "/certificates/java.png",
    pdf: "/certificates/java.pdf",
    description:
      "Certified in Java programming fundamentals and object-oriented programming concepts, including classes, inheritance, interfaces, exception handling, and file I/O operations.",
  },
  {
    title: "Git and GitHub Mastery Certificate",
    img: "/certificates/git.png",
    pdf: "/certificates/git.pdf",
    description:
      "Recognized for proficiency in version control using Git and collaboration on GitHub, covering branching strategies, pull requests, conflict resolution, and repository management.",
  },
  {
    title: "AWS Cloud Practitioner Certification",
    img: "/certificates/aws.png",
    pdf: "/certificates/aws.pdf",
    description:
      "Credential awarded for demonstrating understanding of AWS cloud concepts, core services, security best practices, pricing models, and architecture fundamentals.",
  },
  {
    title: "NPTEL Java Programming Certificate",
    img: "/certificates/javanp.png",
    pdf: "/certificates/javanp.pdf",
    description:
      "Successfully completed the NPTEL-certified Java programming course, covering core concepts, object-oriented programming, collections, multithreading, and database connectivity.",
  },
  {
    title: "NPTEL Algorithms and Data Structures Certificate",
    img: "/certificates/npteldsa.png",
    pdf: "/certificates/npteldsa.pdf",
    description:
      "Earned certification from NPTEL for mastering algorithms and data structures, including sorting, searching, graph algorithms, dynamic programming, and complexity analysis.",
  },
  {
    title: "UI/UX Design Certification",
    img: "/certificates/ui.png",
    pdf: "/certificates/ui.pdf",
    description:
      "Awarded for successfully completing a UI/UX design course, covering design principles, wireframing, prototyping, color theory, typography, user research, and usability testing.",
  },
  {
    title: "Hackathon Winner/Participation Certificate",
    img: "/certificates/hacka.jpeg",
    pdf: "/certificates/hacka.pdf",
    description:
      "Recognition for participating in and contributing to an innovative hackathon project, showcasing problem-solving, teamwork, coding efficiency, and rapid prototyping skills under time constraints.",
  },
];
export default function TechnicalSkills() {
  const [selectedCert, setSelectedCert] = useState<
    null | (typeof certificates)[0]
  >(null);

  return (
    <div className=" text-white py-16">
      <Tabs
        defaultValue="skills"
        className="w-3/4 mx-auto flex flex-col lg:flex-row gap-12"
      >
        {/* LEFT SECTION */}
        <div className="lg:w-1/3 space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-sm tracking-widest rotate-180 [writing-mode:vertical-lr]">
              MY SKILLS
            </span>
            <h2 className="text-4xl font-extrabold leading-tight">
              What My Skills Included?
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            I create efficient, user-friendly, and responsive interfaces that
            enhance user experience and enable faster, easier interactions with
            modern technologies.
          </p>

          {/* Tabs */}
          <TabsList className="grid grid-cols-3 bg-[#1f1f1f] rounded-full w-[300px]">
            <TabsTrigger
              value="skills"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full transition-all duration-300"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full transition-all duration-300"
            >
              Tools
            </TabsTrigger>
            <TabsTrigger
              value="certificates"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full transition-all duration-300"
            >
              Certificates
            </TabsTrigger>
          </TabsList>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:w-2/3">
          {/* SKILLS TAB */}
          <TabsContent value="skills">
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-5">
              {skillIcons.map((skill, idx) => {
                const hoverBg = skill.glow.replace("0 0 15px", "").trim();

                return (
                  <div
                    key={idx}
                    className="relative group rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 overflow-visible"
                    style={{
                      backgroundColor: "#0a0a0a",
                      boxShadow: skill.glow,
                      border: `1px solid ${
                        skill.glow.split("(")[1]?.split(",")[0]
                          ? hoverBg
                          : "transparent"
                      }`,
                    }}
                  >
                    {/* Tooltip (name above on hover) */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-500 text-gray-200 text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap z-50">
                      {skill.name}
                      <div className="absolute left-1/2 -bottom-1 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-800 -translate-x-1/2"></div>
                    </div>

                    {/* Hover Background (uses glow color) */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                      style={{ background: hoverBg }}
                    ></div>

                    {/* Icon */}
                    <div className="text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* TOOLS TAB */}
          <TabsContent value="tools">
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-5">
              {toolIcons.map((tool, idx) => {
                // extract rgba() part from the glow value for bg color
                const hoverBg = tool.glow.replace("0 0 15px", "").trim();

                return (
                  <div
                    key={idx}
                    className="relative group rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: "#0a0a0a",
                      boxShadow: tool.glow,
                      border: `1px solid ${
                        tool.glow.split("(")[1].split(",")[0]
                          ? hoverBg
                          : "transparent"
                      }`,
                    }}
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-500 text-gray-200 text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap">
                      {tool.name}
                      <div className="absolute left-1/2 -bottom-1 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-800 -translate-x-1/2"></div>
                    </div>

                    {/* Hover Background (colored glow layer) */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                      style={{ background: hoverBg }}
                    ></div>

                    {/* Icon */}
                    <div className="text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* CERTIFICATES TAB */}
          <TabsContent value="certificates">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {certificates.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-[#1f1f1f] rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/50 transition cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <Image
                    src={cert.img}
                    alt={cert.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-40"
                  />
                  <div className="p-3">
                    <p className="text-sm font-bold text-center">
                      {cert.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>

      {/* MODAL */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-4xl bg-[#1f1f1f] text-white">
          {selectedCert && (
            <div className="flex flex-col md:flex-row gap-6">
              {/* IMAGE */}
              <div className="flex-shrink-0">
                <Image
                  src={selectedCert.img}
                  alt={selectedCert.title}
                  width={500}
                  height={350}
                  className="rounded-lg object-contain"
                />
              </div>
              {/* INFO */}
              <div className="flex flex-col justify-center">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">
                    {selectedCert.title}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-gray-300 mt-4">{selectedCert.description}</p>
                <a
                  href={selectedCert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition"
                >
                  View Full Certificate (PDF)
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
