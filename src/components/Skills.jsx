import { useState } from 'react';
import { FaReact, FaPython, FaNodeJs, FaFlask } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiJavascript, SiPostgresql, SiMysql, SiPostman, SiThunderbird, SiExcalidraw, SiFigma} from 'react-icons/si';
import { motion } from 'framer-motion';
import { BiArrowToBottom, BiArrowToTop } from 'react-icons/bi'; // Import icons for both up and down arrows

const skills = [
  { name: 'HTML5', icon: <SiHtml5 />, description: 'Markup language for the web' },
  { name: 'CSS3', icon: <SiCss3 />, description: 'Style sheet language for styling web pages' },
  { name: 'Bootstrap', icon: <SiBootstrap />, description: 'Framework for responsive design' },
  { name: 'Tailwind', icon: <SiTailwindcss />, description: 'Utility-first CSS framework' },
  { name: 'JavaScript', icon: <SiJavascript />, description: 'Programming language for web development' },
  { name: 'Node.js', icon: <FaNodeJs />, description: 'Server-side development' },
  { name: 'React', icon: <FaReact />, description: 'Building dynamic user interfaces' },
  { name: 'Python', icon: <FaPython />, description: 'Versatile programming for various applications' },
  { name: 'Flask', icon: <FaFlask />, description: 'Lightweight web framework for Python' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, description: 'Open-source relational database' },
  { name: 'MySQL', icon: <SiMysql />, description: 'Popular open-source relational database' },
  { name: 'Postman', icon: <SiPostman />, description: 'API development and testing tool' },
  { name: 'Thunder Client', icon: <SiThunderbird />, description: 'Lightweight REST API Client for VS Code' },
  { name: 'Excalidraw', icon: <SiExcalidraw />, description: 'Virtual whiteboard tool for sketching' },
  { name: 'Figma', icon: <SiFigma />, description: 'Design tool for collaborative UI/UX design' },
];

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const toggleSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

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
        <p className="text-lg mb-6">
          I am proficient in full-stack development and database management tools with extensive knowledge of web development. My programming stacks include:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {skills.slice(0, showAllSkills ? skills.length : 8).map((skill, index) => (
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
        <div className="mt-6 flex justify-center">
          <motion.button
            onClick={toggleSkills}
            className="bg-gray-700 text-white rounded-full px-4 py-2 hover:bg-gray-600 transition duration-300 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {showAllSkills ? (
              <>
                <BiArrowToTop className="mr-2" /> {/* Arrow facing up */}
                Less Skills
              </>
            ) : (
              <>
                <BiArrowToBottom className="mr-2" /> {/* Arrow facing down */}
                More Skills
              </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
