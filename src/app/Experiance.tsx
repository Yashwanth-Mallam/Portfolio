"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

type Experience = {
  id: number;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  industry: string;
  achievements: string[];
  certificates: string[];
  logoUrl: string;
  website: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    jobTitle: "Generative AI Intern",
    company: "Ruthi Private Limited",
    startDate: "Oct 2024",
    endDate: "Jan 2025",
    location: "Remote",
    industry: "IT Services",
    achievements: [
      "Developed and maintained scalable web applications using React.js and Node.js.",
      "Collaborated with a team to design and implement RESTful APIs.",
      "Worked with databases such as MongoDB.",
    ],
    certificates: ["/certificates/ruthiexp.png", "/certificates/ruthioff.png"],
    logoUrl: "/logos/ruthi-logo.png",
    website: "https://ruthi.in",
  },
  {
    id: 2,
    jobTitle: "Full-Stack Web Developer",
    company: "The Student Spot",
    startDate: "Mar 2023",
    endDate: "May 2025",
    location: "Remote",
    industry: "Education",
    achievements: [
      "Built reusable components using React and Tailwind CSS.",
      "Led the team.",
      "Worked closely with the UX team to deliver pixel-perfect designs.",
    ],
    certificates: [
      "/certificates/studentspotexp.png",
      "/certificates/studentoff.png",
    ],
    logoUrl: "/logos/studentspont.png",
    website: "https://thestudentspot.netlify.app/",
  },
];

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalImage(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h2 className="text-3xl font-bold  mb-8 text-center">My Experience</h2>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-purple-300" />

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex md:justify-between items-stretch mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 mt-8 z-10" />

            {/* Experience Card */}
            <div
              className={`ml-6 md:ml-0 ${
                index % 2 === 0 ? "md:mr-8" : "md:ml-8"
              } w-full md:w-5/12`}
            >
              <div
                className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
                role="button"
                tabIndex={0}
                onClick={() => toggleExpand(exp.id)}
                onKeyPress={(e) => e.key === "Enter" && toggleExpand(exp.id)}
              >
                <div className="flex items-center mb-4">
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={exp.logoUrl}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="mr-2 object-cover rounded-lg border-2 border-purple-500 hover:border-purple-700 transition duration-300"
                    />
                  </a>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {exp.jobTitle}
                    </h3>
                    <p className="text-purple-600 font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {exp.startDate} - {exp.endDate}
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    {exp.location}
                  </div>
                  <div className="flex items-center">
                    <FaBriefcase className="mr-2" />
                    {exp.industry}
                  </div>
                </div>

                <button
                  className="flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-200"
                  aria-expanded={expandedId === exp.id}
                >
                  {expandedId === exp.id ? (
                    <>
                      Show Less <FaChevronUp className="ml-2" />
                    </>
                  ) : (
                    <>
                      Show More <FaChevronDown className="ml-2" />
                    </>
                  )}
                </button>

                {expandedId === exp.id && (
                  <div className="mt-4 text-gray-700">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>

                    <h4 className="font-semibold mt-4 mb-2">Certificates:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {exp.certificates.map((cert, i) => (
                        <Image
                          key={i}
                          src={cert}
                          alt={`Certificate ${i + 1}`}
                          width={400}
                          height={300}
                          className="object-cover border border-purple-300 rounded-lg shadow-sm hover:scale-105 transition-transform cursor-pointer"
                          onClick={() => setModalImage(cert)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Modal for enlarged image */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
            onClick={() => setModalImage(null)}
          >
            <div
              className="max-w-4xl max-h-full overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={modalImage}
                alt="Enlarged Certificate"
                width={500}
                height={450}
                className="rounded-lg shadow-xl border-4 border-white"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
