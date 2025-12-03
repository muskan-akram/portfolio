import React from "react";
import { motion } from "framer-motion";
import "./ProjectCard.css";

export default function ProjectCard({ title, desc, img, link, demo }) {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <img src={img} alt={title} className="card-img" />

      <h3>{title}</h3>
      <p>{desc}</p>

      <div className="buttons">
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="demo">
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
