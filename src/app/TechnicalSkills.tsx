import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import Image from "next/image";

const skillLogos: Record<string, string> = {
  "React.js": "/logos/react.png",
  "Next.js": "/logos/nextjs.png",
  TypeScript: "/logos/typescript.png",
  "UI/UX": "/logos/uiux.png",
  HTML: "/logos/hml.png",
  CSS: "/logos/css.png",
  "Tailwind CSS": "/logos/tailwindcss.png",
  Git: "/logos/git-logo.png",
  Docker: "/logos/docker-logo-blue.png",
  GitHub: "/logos/github-logo.png",
  "AWS Cloud": "/logos/aws_logo.png",
  Vercel: "/logos/vercel.png",
  Postman: "/logos/postman-logo.png",
  "Unity Game Engine": "/logos/unitilogo.png",
  Figma: "/logos/figma-logo.png",
  "Node.js": "/logos/nodejs-logo.png",
  Django: "/logos/django-python-logo.png",
  "Java: Spring Boot": "/logos/sprinBoot-logo.png",
  Python: "/logos/icons8-python.png",
  Java: "/logos/icons8-java.png",
  JavaScript: "/logos/java-script.png",
  C: "/logos/clogo.png",
  R: "/logos/r-logo.png",
  "Visual Studio Code": "/logos/vscode.png",
  Cursor: "/logos/coursor-logo.png",
  "Android Studio": "/logos/android-logo.png",
  Eclipse: "/logos/eclips-logo.png",
  MongoDB: "/logos/mongoo-logo.png",
  MySQL: "/logos/sql-logo.png",
  "SalesForce database(SOQL)": "/logos/salesforece-logo.png",
};

const skills = [
  {
    title: "Frontend Development",
    content: [
      "React.js",
      "Next.js",
      "TypeScript",
      "UI/UX",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tools & Platforms",
    content: [
      "Git",
      "Docker",
      "GitHub",
      "AWS Cloud",
      "Vercel",
      "Postman",
      "Unity Game Engine",
      "Figma",
    ],
  },
  {
    title: "Backend Development & IDE's",
    content: [
      "Node.js",
      "Django",
      "Java: Spring Boot",
      "Visual Studio Code",
      "Cursor",
      "Android Studio",
      "Eclipse",
    ],
  },
  {
    title: "Programming Languages & Databases",
    content: [
      "Python",
      "Java",
      "JavaScript",
      "C",
      "R",
      "MongoDB",
      "MySQL",
      "SalesForce database(SOQL)",
    ],
  },
];
export default function TechnicalSkills() {
  return (
    <div className="p-6 space-y-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-white">
        Technical Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-center items-start">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="shadow-lg border-2 border-purple-600 w-full p-4 max-w-lg hover:shadow-xl hover:shadow-purple-500/50"
          >
            <CardHeader>
              <CardTitle className="text-xl text-purple-600 font-semibold text-center">
                {skill.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-4 max-sm:grid-cols-3 gap-24 place-items-center">
                {skill.content.map((item, i) => (
                  <li
                    key={i}
                    className="group relative flex flex-col items-center"
                  >
                    {/* Tooltip on hover */}
                    <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition duration-300">
                      <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-lg">
                        {item}
                      </span>
                    </div>

                    {/* Logo with hover spin */}
                    <div className="w-20 h-20 bg-[#1f1f1f] rounded-xl flex items-center justify-center transition">
                      <Image
                        src={skillLogos[item] || "/logos/loading.png"}
                        alt={item}
                        width={72} // 18 * 4 = 72px since w-18 h-18 means 4.5rem (assuming 16px base font, 18 * 4 = 72)
                        height={72}
                        className="object-contain group-hover:animate-spin-once transition-transform"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
