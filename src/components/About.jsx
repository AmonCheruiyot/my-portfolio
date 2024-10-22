import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-5xl font-bold mb-6 border-b-2 border-white pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="mt-6 text-lg text-center max-w-3xl leading-relaxed px-4 shadow-lg bg-gray-700 rounded-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Hi, I'm Amon Kiprotich, a dedicated Full Stack Developer with a strong passion for creating scalable, user-friendly web applications. With expertise in modern technologies like React, Flask, and Python, I enjoy tackling complex problems and turning ideas into functional products. My journey in development is driven by a love for continuous learning and improvement.
        </motion.p>
        <motion.p 
          className="mt-4 text-lg text-center max-w-3xl leading-relaxed px-4 shadow-lg bg-gray-700 rounded-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Beyond coding, I'm passionate about cybersecurity and building tools that make digital experiences safer. When I’m not coding, I enjoy exploring new tech trends and contributing to open-source projects.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
