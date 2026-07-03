import React from "react";
import {
  LuBrain,
  LuBrainCircuit,
  LuWorkflow,
} from "react-icons/lu";

const skillData = [
  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/38BDF8" },
  { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/38BDF8" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/38BDF8" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/38BDF8" },

  { name: "React", icon: "https://cdn.simpleicons.org/react/38BDF8" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/38BDF8" },

  { name: "Git", icon: "https://cdn.simpleicons.org/git/38BDF8" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/38BDF8" },

  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/38BDF8" },
  { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/38BDF8" },
  { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/38BDF8" },

  { name: "Machine Learning", Icon: LuBrain },
  { name: "Deep Learning", Icon: LuBrainCircuit },
  { name: "DevOps Fundamentals", Icon: LuWorkflow },
];

const SkillPill = ({ skill, index }) => {
  return (
    <div
      className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-indigo-400/50 transition-all duration-500 cursor-default"
      style={{
        animation: `float-nebula ${4 + (index % 3)}s ease-in-out infinite`,
        animationDelay: `${index * 0.2}s`,
      }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-indigo-500/0 group-hover:bg-indigo-500/5 group-hover:shadow-[0_0_30px_rgba(129,140,248,0.3)] transition-all duration-500 -z-10" />

      {skill.icon ? (
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      ) : (
        <skill.Icon className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
      )}

      <span className="text-gray-300 group-hover:text-white font-medium text-sm md:text-base whitespace-nowrap transition-colors">
        {skill.name}
      </span>
    </div>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="nebula-container" />
      <div className="nebula-container !bg-purple-500/10 !animation-delay-[2s] !w-[60%] !h-[60%]" />

      {/* Heading */}
      <div className="text-center mb-20 z-10">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
          My{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="h-1.5 w-32 bg-indigo-500 mx-auto mt-4 rounded-full blur-[1px]" />
      </div>

      {/* Skills */}
      <div className="max-w-6xl w-full flex flex-wrap justify-center gap-6 md:gap-8 z-10">
        {skillData.map((skill, index) => (
          <SkillPill key={skill.name} skill={skill} index={index} />
        ))}
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
}