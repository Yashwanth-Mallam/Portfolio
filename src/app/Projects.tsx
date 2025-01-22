import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "Netflix Clone",
      description:
        "A Netflix Clone Frontend Project is a web development project that replicates the frontend design and functionality of the Netflix platform. The project focuses on building the user interface (UI) and user experience (UX) to mimic Netflix's main features.",
      link: "https://github.com/Yashwanth-Mallam/NetflixClone-frontend-",
    },
    {
      title: "Guide",
      description:
        "Guide is a platform that allows users to learn courses and practice their skills while interacting with friends. It combines learning and social elements, providing a space where users can study and apply knowledge together, making the learning experience more engaging and collaborative. ",
      link: "https://github.com/Yashwanth-Mallam/Guide",
    },
    {
      title: "Virtual Meeting",
      description:
        "A Virtual Meeting is an online gathering where participants communicate through video, audio, or text in real-time, typically using platforms like Zoom, Microsoft Teams, or Google Meet. It allows people from different locations to collaborate, share screens, and discuss topics without physical presence.",
      link: "https://github.com/Yashwanth-Mallam/VirtualMeeting",
    },
    {
      title: "Personal Portfolio",
      description:
        "I developed my personal portfolio to showcase my skills, projects, and accomplishments in a professional way. It serves as a central hub where potential employers, clients, or collaborators can learn more about me and see the work I've done. Creating this portfolio allowed me to display my proficiency in web development, design, and any other relevant fields.",
      link: "https://github.com/Yashwanth-Mallam/Personal-Portfolio",
    },
    // Add more projects as needed
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="shadow-lg border-2 border-purple-600 w-72 hover:shadow-xl hover:shadow-purple-500/50"
            onClick={() => window.open(project.link, "_blank")}
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold  text-purple-600 text-center">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{project.description}</p>
              <p className="text-blue-600 mt-5">Click Me To View Project!.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
