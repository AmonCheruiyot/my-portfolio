import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-r from-gray-800 to-gray-600 flex flex-col justify-center items-center text-white text-center p-10 relative">
      <div className="absolute top-5 right-5 flex space-x-4">
        <a href="#projects" className="bg-accent text-black px-4 py-2 rounded-full hover:bg-green-400 transition duration-300">Projects</a>
        <a href="#contact" className="bg-accent text-black px-4 py-2 rounded-full hover:bg-green-400 transition duration-300">Contact</a>
      </div>
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-40 h-40 rounded-full shadow-lg mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-6xl font-bold mb-4 border-b-2 border-white pb-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Amon Kiprotich
      </motion.h1>
      <motion.p
        className="text-2xl mt-4 max-w-xl leading-relaxed px-4 shadow-lg bg-gray-700 rounded-lg p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Software Developer
      </motion.p>
      <motion.p
        className="text-lg mt-2 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Crafting Innovative Solutions
      </motion.p>
      <motion.a
        href="#about"
        className="mt-8 inline-block bg-accent text-black px-6 py-3 rounded-full shadow-lg hover:bg-green-400 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.a>
    </section>
  );
};

export default Hero;
