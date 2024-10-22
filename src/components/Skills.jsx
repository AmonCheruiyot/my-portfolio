import { FaReact, FaPython, FaNodeJs, FaFlask } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: <FaReact />, description: 'Building dynamic user interfaces' },
  { name: 'Python', icon: <FaPython />, description: 'Versatile programming for various applications' },
  { name: 'Node.js', icon: <FaNodeJs />, description: 'Server-side development' },
  { name: 'Flask', icon: <FaFlask />, description: 'Lightweight web framework for Python' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-5xl font-bold mb-6 border-b-2 border-white pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105" 
              role="figure" 
              aria-labelledby={`skill-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl text-blue-400 mb-4" aria-hidden="true">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold" id={`skill-${index}`}>
                {skill.name}
              </h3>
              <p className="mt-2 text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
