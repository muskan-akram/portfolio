import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "React Calculator",
      desc: "A clean calculator with light and dark themes built using React hooks.",
      img: "/images/calculator.png",
      link: "https://github.com/muskan-akram/react-smart-calculator",
      demo: "https://muskan-akram.github.io/react-smart-calculator/"
    },
    {
      title: "Hair Day Salon",
      desc: "A clean and responsive homepage built as part of the Meta Frontend course.",
      img: "/images/hairday.png",
      link: "https://github.com/muskan-akram/responsive-homepage-hair-day",
      demo: "https://muskan-akram.github.io/responsive-homepage-hair-day/"
    },
    {
      title: "Resume Evaluator",
      desc: "AI powered resume checker built with Flask and NLP.",
      img: "/images/hire.png",
      link: "https://huggingface.co/spaces/muskan-akram/hire-resume-evaluator/tree/main",
      demo: "https://huggingface.co/spaces/muskan-akram/hire-resume-evaluator"
    },
    {
      title: "E-commerce UI",
      desc: "E-commerce UI mockup built with React, replicating Figma design.",
      img: "/images/ecommerce.png",
      link: "https://github.com/muskan-akram/ecommerce-ui",
      demo: "https://muskan-akram.github.io/ecommerce-ui/"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {projects.map((p, index) => (
            <ProjectCard
              key={index}
              title={p.title}
              desc={p.desc}
              img={p.img}
              link={p.link}
              demo={p.demo}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
