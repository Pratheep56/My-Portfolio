import SectionHeading from "../ui/SectionHeading";
import SkillChip from "../ui/SkillChip";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Java", icon: "openjdk" },
      { name: "C++", icon: "cplusplus" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },

  {
    title: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "OpenCV", icon: "opencv" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "Keras", icon: "keras" },
    ],
  },

  {
    title: "Web Development",
    skills: [
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Vite", icon: "vite" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },

  {
    title: "DevOps & Automation",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Ansible", icon: "ansible" },
      { name: "Grafana", icon: "grafana" },
      { name: "Poetry", icon: "poetry" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          subtitle="TECH STACK"
          title="Technologies I Work With"
          description="A collection of technologies I use to build modern web applications, AI-powered solutions and reliable deployment workflows."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-cyan-400/30
              "
            >
              <h3 className="mb-6 text-2xl font-semibold text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill) => (
                  <SkillChip
                    key={skill.name}
                    {...skill}
                  />
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}