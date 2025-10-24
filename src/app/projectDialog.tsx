import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Badge } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  logo: string;
  techStack: string[];
  languages: string[];
  deployedLink: string;
  repoLink: string;
}
export default function ProjectDialog({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl shadow-md"
      >
        Details →
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl bg-[#0D1021] text-white border border-gray-800 p-8 rounded-3xl shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold mb-4">
              {project.title}
              <div className="h-1 w-24 mt-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-[#121530] border border-gray-700 rounded-xl p-4 text-center">
                  <p className="text-indigo-400 text-lg font-semibold">
                    {project.techStack.length}
                  </p>
                  <p className="text-sm text-gray-400">Total Technologies</p>
                </div>
                <div className="flex-1 bg-[#121530] border border-gray-700 rounded-xl p-4 text-center">
                  <p className="text-purple-400 text-lg font-semibold">
                    {project.languages.length}
                  </p>
                  <p className="text-sm text-gray-400">Languages Used</p>
                </div>
              </div>

              <div className="flex gap-3 mb-8">
                <a
                  href={project.deployedLink}
                  target="_blank"
                  className="flex-1 text-center bg-gradient-to-r from-indigo-500 to-purple-500 py-2 rounded-xl text-white font-medium hover:opacity-90 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  className="flex-1 text-center bg-gradient-to-r from-purple-500 to-indigo-500 py-2 rounded-xl text-white font-medium hover:opacity-90 transition"
                >
                  GitHub
                </a>
              </div>

              <h3 className="text-lg font-semibold text-indigo-400 mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string, i: number) => (
                  <Badge
                    key={i}
                    className="bg-[#1A1C35] border border-gray-700 text-sm px-3 py-1 text-gray-200 hover:bg-[#232642]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-[2px] rounded-2xl">
                <div className="bg-[#0D1021] rounded-2xl p-4">
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="rounded-xl object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
