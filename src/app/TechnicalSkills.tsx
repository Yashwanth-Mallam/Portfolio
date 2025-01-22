import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { title } from "process";

export default function TechnicalSkills() {
  const skills = [
    {
      title: "Frontend Development",
      content: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Angular",
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
        "Figma ",
      ],
    },
    {
      title: "Backend Development",
      content: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "Django",
        "Python",
        "Java: Spring Boot",
      ],
    },
    {
      title: "Programming Languages",
      content: ["Python", "Java", "JavaScript", "C++", "C#", "R"],
    },

    {
      title: "Soft Skills",
      content: [
        "Communication",
        "Leadership Qualities",
        "Teamwork",
        "Time Management",
        "Problem Solving",
      ],
    },

    {
      title: "IDE's",
      content: [
        "Visual Studio Code",
        "Cursor",
        "Android Studio",
        "PyCharm",
        "Eclipse",
      ],
    },
    {
      title: "Database Management",
      content: ["MongoDB", "MySQL", "SalesForce database(SOQL)"],
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Technical Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 justify-center items-center">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="shadow-lg border-2 border-purple-600 w-72 hover:shadow-xl hover:shadow-purple-500/50"
          >
            {" "}
            {/* Adjusted width here */}
            <CardHeader>
              <CardTitle className="text-xl text-purple-600 font-semibold text-center">
                {skill.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                {skill.content.map((item, i) => (
                  <li key={i} className="text-gray-700">
                    {item}
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
