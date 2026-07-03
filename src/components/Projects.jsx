import React from 'react';
import weatherWardrobeImg from "../assets/weatherWardrobeImg.png";
import brainTumorHyperModelImg from "../assets/brainTumorHyperModelImg.png";
import XAIImg from "../assets/XAIImg.png";

const projectData = [
  {
    title: "Weather Wardrobe – End-to-End CI/CD DevOps Pipeline",
    description: "Designed and implemented a complete CI/CD pipeline using GitHub Actions to automate building, testing, containerization, and deployment of a weather-based outfit recommendation application. Demonstrates DevOps best practices including Infrastructure as Code (IaC), automated testing, Dockerized deployments, configuration management with Ansible, and real-time monitoring using Grafana and Graphite.",
    tools: "GitHub Actions, Docker, Ansible, Poetry, Pytest, Git, Grafana, Graphite, OpenWeather API, CI/CD, DevOps, Infrastructure as Code (IaC)",
    image: weatherWardrobeImg,
    link: "https://github.com/Pratheep56/weather-wardrobe"
  },
  {
    title: "Hybrid Ensemble Learning for Brain Tumor MRI Classification",
    description: "Built an intelligent medical image classification system that detects four brain tumor categories from MRI scans using a hybrid ensemble of deep learning models. Combined Custom CNN, InceptionV3, and ConvNeXt predictions with a Random Forest meta-classifier to improve classification accuracy, robustness, and confidence-based decision making, with an interactive Gradio interface for real-time inference.",
    tools: "Python, TensorFlow, Keras, InceptionV3, ConvNeXt, CNN, Random Forest, Ensemble Learning, Computer Vision, Medical Image Analysis, Gradio, NumPy, Scikit-learn",
    image: brainTumorHyperModelImg,
    link: "https://github.com/Pratheep56/brain_tumor_mri_hypermodel"
  },
  {
    title: "Explainable AI for Brain Tumor MRI Classification",
    description: "Developed an Explainable AI (XAI) system for brain tumor detection from MRI scans, integrating visualization techniques such as Grad-CAM and Score-CAM to interpret deep learning predictions. Built a deployable solution with a FastAPI backend and Vercel frontend, enabling transparent, confidence-driven inference for medical image analysis and improving model interpretability for healthcare applications.",
    tools: "Python, TensorFlow, Keras, Explainable AI (XAI), Grad-CAM, Score-CAM, FastAPI, OpenCV, Computer Vision, Medical Image Analysis, Vercel, Hugging Face",
    image: XAIImg,
    link: "https://github.com/DYNAMAXD/ExplainabilityOnBrainTumorDataset"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="group relative w-full md:w-[380px] bg-[#0a0a1a]/80 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)]"
      style={{
        animation: `float-project ${6 + index}s ease-in-out infinite`,
      }}
    >
      {/* 1. Project Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent" />
      </div>

      {/* 2. Project Content */}
      <div className="p-8 flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tools Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.tools.split(',').map((tool, i) => (
            <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full">
              {tool.trim()}
            </span>
          ))}
        </div>

        {/* 3. Link */}
        <a 
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="relative inline-flex items-center gap-2 text-white font-bold py-3 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-900/20 group/btn"
        >
          View Project
          <svg 
            className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      
      {/* Decorative background "Planets" */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
          My <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="w-24 h-1.5 bg-blue-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 flex flex-wrap justify-center gap-12 max-w-7xl">
        {projectData.map((proj, i) => (
          <ProjectCard key={i} project={proj} index={i} />
        ))}
      </div>
    </section>
  );
}