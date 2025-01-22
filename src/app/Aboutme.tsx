import React from "react";

export default function AboutMe() {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="max-w-3xl w-full bg-gray rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-center mb-6">
          Know About Me!
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          Hello! I&#39;m <span className="text-purple-600">Yashwanth</span>, a
          passionate student and aspiring software developer. Currently, I&#39;m
          honing my skills in various technologies, including TypeScript,
          JavaScript, Node.js, React.js, and Next.js, with a focus on both
          frontend and backend development.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          As a student, I am eager to learn and apply my knowledge in real-world
          projects. I&#39;ve developed a strong foundation in building dynamic
          web applications, from creating intuitive user interfaces with
          React.js to understanding the intricacies of backend logic with
          Node.js. My goal is to write clean, efficient, and scalable code while
          constantly improving my skills.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I am excited about the endless learning opportunities in the tech
          field and look forward to collaborating with others on challenging and
          innovative projects. If you&#39;re interested in discussing ideas or
          exploring potential collaborations, don&#39;t hesitate to reach out.
          Let&#39;s work together to bring creative concepts to life!
        </p>
      </div>
    </div>
  );
}
