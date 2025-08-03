import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eclipse } from "lucide-react";

const skillLogos: Record<string, string> = {
  HTML: "/logos/html.png",
  CSS: "/logos/css.svg",
  JavaScript: "/logos/java-script.png",
  Bootstrap: "/logos/bootstrap.png",
  Tailwind: "/logos/tailwind.png",
  "React.js": "/logos/react.svg",
  "Next.js": "/logos/next.png",
  TypeScript: "/logos/typescript.png",
  Java: "/logos/icons8-java.png",
  C: "/logos/C_Logo.png",
  Python: "/logos/python.webp",
  "Node.js": "/logos/nodejs.png",
  Express: "/logos/express-js.png",
  MongoDB: "/logos/mongodb.svg",
  MySQL: "/logos/mysql.png",
  FastAPI: "/logos/fastapi.svg",
  SpringBoot: "/logos/springboot.svg",
  android: "/logos/android-logo.png",
  django: "/logos/django.png",
  "UI/UX": "/logos/uiux.png",
};

const toolLogos: Record<string, string> = {
  Git: "/logos/git.png",
  Docker: "/logos/docker-logo-blue.png",
  GitHub: "/logos/github-logo.png",
  AWS: "/logos/aws_logo.png",
  Postman: "/logos/postman.png",
  Vercel: "/logos/Vercel.svg",
  Figma: "/logos/figma-logo.png",
  Eclipse: "/logos/eclips-logo.png",
  unity: "/logos/unitilogo.png",
  "VS Code": "/logos/vscode.png",
};
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
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-full transition-all duration-300"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-full transition-all duration-300"
            >
              Tools
            </TabsTrigger>
            <TabsTrigger
              value="certificates"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-full transition-all duration-300"
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
              {Object.keys(skillLogos).map((skill, idx) => (
                <div
                  key={idx}
                  className="relative group bg-[#1f1f1f] rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-red-500/50 transition"
                >
                  <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-lg">
                      {skill}
                    </span>
                  </div>
                  <Image
                    src={skillLogos[skill]}
                    alt={skill}
                    width={48}
                    height={48}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          {/* TOOLS TAB */}
          <TabsContent value="tools">
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-5">
              {Object.keys(toolLogos).map((tool, idx) => (
                <div
                  key={idx}
                  className="relative group bg-[#1f1f1f] rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-red-500/50 transition"
                >
                  <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-lg">
                      {tool}
                    </span>
                  </div>
                  <Image
                    src={toolLogos[tool]}
                    alt={tool}
                    width={48}
                    height={48}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
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
