import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

import weatherWardrobeImg from "../../assets/weatherWardrobeImg.png";
import brainTumorHyperModelImg from "../../assets/brainTumorHyperModelImg.png";
import XAIImg from "../../assets/XAIImg.png";

const projects = [
  {
    title: "Weather-Wardrobe",
    subtitle: "DevOps CI/CD Pipeline Implementation",
    description:
      "Developed an end-to-end DevOps CI/CD pipeline for a weather-based outfit recommendation application. Automated building, testing, Docker containerization, deployment, configuration management using Ansible on a local Ubuntu virtual machine, and monitoring through Grafana and Graphite.",
    image: weatherWardrobeImg,
    link: "https://github.com/Pratheep56/weather-wardrobe",
    tech: [
      "GitHub Actions",
      "Docker",
      "Ansible",
      "Poetry",
      "Pytest",
      "Grafana",
      "Graphite",
    ],
  },

  {
    title: "Brain Tumor HyperModel",
    subtitle: "Hybrid Ensemble MRI Classification",
    description:
      "Developed a hybrid ensemble framework for brain tumor MRI classification by combining Custom CNN, InceptionV3, and ConvNeXt with a Random Forest meta-classifier to improve prediction robustness and confidence for multi-class tumor detection.",
    image: brainTumorHyperModelImg,
    link: "https://github.com/Pratheep56/brain_tumor_mri_hypermodel",
    tech: [
      "Custom CNN",
      "InceptionV3",
      "ConvNeXt",
      "Random Forest",
      "TensorFlow",
      "Gradio",
    ],
  },

  {
    title: "Explainable Brain Tumor Classification",
    subtitle: "Explainable AI for Medical Imaging",
    description:
      "Developed an Explainable AI framework for brain tumor MRI classification using Grad-CAM, Grad-CAM++, Score-CAM, Layer-CAM, and Eigen-CAM to visualize model decisions and improve transparency in medical image analysis.",
    image: XAIImg,
    link: "https://github.com/DYNAMAXD/ExplainabilityOnBrainTumorDataset",
    tech: [
      "Grad-CAM",
      "Grad-CAM++",
      "Score-CAM",
      "Layer-CAM",
      "Eigen-CAM",
      "TensorFlow",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          subtitle="FEATURED WORK"
          title="Projects"
        />

        {/* Top Row */}

        <div className="grid gap-8 lg:grid-cols-2">

          <ProjectCard project={projects[0]} />

          <ProjectCard project={projects[1]} />

        </div>

        {/* Bottom Center */}

        <div className="mt-8 flex justify-center">

          <div className="w-full lg:w-[48%]">

            <ProjectCard project={projects[2]} />

          </div>

        </div>

      </div>
    </section>
  );
}