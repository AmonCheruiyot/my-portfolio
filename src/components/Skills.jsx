import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200">
              <div className="text-4xl text-blue-500 mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
