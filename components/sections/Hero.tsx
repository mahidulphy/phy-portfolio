"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {

  const roles = [
    "Frontend Developer",
    "UI Designer",
    "AI Enthusiast",
    "Future Researcher",
  ];

  const skills = [
    "Frontend",
    "UI Design",
    "AI",
    "Physics",
    "Research",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-20">

      <p className="text-xs uppercase tracking-[0.4em] text-[#895A47] md:text-sm">
        Hello, I'm
      </p>

      <h1 className="mt-4 text-center text-5xl font-bold leading-none text-[#241D1C] sm:text-6xl md:text-7xl lg:text-8xl">
        Mahidul
        <br />
        Islam
      </h1>

      {/* Animated Role */}

      <div className="h-10">

        <p className="text-center text-xl font-medium text-[#895A47] sm:text-2xl">

          {roles[currentRole]}

          <span className="animate-pulse">|</span>

        </p>

      </div>

      <p className="mt-6 max-w-2xl text-center text-base leading-8 text-[#895A47] md:text-lg">
        Where design, code, and science connect.
      </p>

      {/* Skill Chips */}

      <div className="mt-10 flex max-w-2xl flex-wrap justify-center gap-3">

        {skills.map((skill) => (

          <span
            key={skill}
            className="rounded-full border border-[#E5DDD6] bg-white px-4 py-2 text-xs font-medium text-[#241D1C] transition-all duration-300 hover:-translate-y-1 hover:border-[#E5A1B1] hover:shadow-md sm:px-5 sm:text-sm"
          >
            {skill}
          </span>

        ))}

      </div>

      {/* Scroll */}

      <a
  href="#about"
   className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-[#895A47]"
>
  <ChevronDown
    size={34}
    className="text-[#895A47]"
  />
</a>

    </section>
  );
}