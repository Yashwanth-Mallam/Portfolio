"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card"; // Adjust path to match your project structure

const experiences = [
  {
    role: "Full Stack Developer Intern",
    organization: "Ruthi Private Limited",
    duration: "oct 2024 - jan 2023",
    description: [
      "Developed and maintained scalable web applications using React.js and Node.js.",
      "Collaborated with a team to design and implement RESTful APIs.",
      "Worked with databases such as MongoDB.",
    ],
  },
];

export default function Experience() {
  return (
    <div className=" flex flex-col items-center p-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold text-center  mb-6">
          My Experience
        </h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="shadow-lg border-2 border-purple-600 w-72 hover:shadow-xl hover:shadow-purple-500/50"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold ">
                  {exp.role} -{" "}
                  <span className="text-purple-600">{exp.organization}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">{exp.duration}</p>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="text-right text-sm text-gray-500">
                {exp.duration}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
