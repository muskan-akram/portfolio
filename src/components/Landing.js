import React from "react";
import { motion } from "framer-motion";
import "./Landing.css";
import avatar from "../assets/avatar.jpeg";

export default function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="container landing-container">
        <motion.img 
          src={avatar}
          className="avatar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div 
          className="intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1>Hi, I'm Muskan Akram</h1>
          <p>
            A front end developer who loves bringing ideas to life with React, 
            clean UI design and interactive features.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
