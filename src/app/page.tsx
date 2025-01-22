"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle";
import TechnicalSkills from "./TechnicalSkills";
import Projects from "./Projects";
import AboutMe from "./Aboutme";
import ContactMe from "./Contact";
import Experience from "./Experiance";
import { AiOutlineDownload } from "react-icons/ai";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col m-2">
      <div className="max-w-full p-6 flex items-center justify-between">
        {/* Avatar Section */}
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>MY</AvatarFallback>
          </Avatar>
        </div>
        {/* Buttons Section */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => {
              document.getElementById("contact-section")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Contact
          </Button>
          <Button
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1fpX1ai-TI6wSlUrhozsWRGhM7Pu1HfHq/view?usp=sharing",
                "_blank"
              );
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <AiOutlineDownload />
            Resume
          </Button>
          <ModeToggle />
        </div>
      </div>
      {/* intro section */}
      <div className=" items-center justify-center">
        <div className="text-center space-y-6">
          {/* Heading Section */}
          <h1 className="text-4xl font-extrabold sm:text-6xl">
            <span className="animate-blink text-purple-600">Hello</span>, Im{" "}
            <span className="text-purple-600">Mallam Yashwanth</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            A passionate developer focused on creating beautiful and functional
            user experiences. Lets connect and build something amazing together!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen ">
        <TechnicalSkills />
      </div>
      <div className="flex justify-center items-center min-h-screen ">
        <Projects />
      </div>
      <div className="flex justify-center items-center min-h-screen ">
        <Experience />
      </div>
      <div className="flex justify-center items-center min-h-screen ">
        <AboutMe />
      </div>
      <div
        id="contact-section"
        className="flex justify-center items-center min-h-screen "
      >
        <ContactMe />
      </div>
      {/* Decorative Elements in the background */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
    </div>
  );
}
