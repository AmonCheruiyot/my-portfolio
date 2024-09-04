import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen bg-primary flex flex-col justify-center items-center text-white text-center">
      <motion.h1
        className="text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Amon Kiprotich
      </motion.h1>
      <motion.p
        className="text-2xl mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A Full Stack Developer
      </motion.p>
      <motion.a
        href="#about"
        className="mt-8 inline-block bg-accent text-black px-6 py-3 rounded-full shadow-lg hover:bg-green-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.a>
    </section>
  );
};

export default Hero;
