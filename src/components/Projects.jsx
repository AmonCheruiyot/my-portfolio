import React from 'react';
import weatherapp from '../assets/weatherapp.png'; // Correct import for weather app image
import recipe from '../assets/recipe.png'; // Correct import for recipe app image
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Weather App',
        description: 'A dynamic web application built with React, allowing users to search and view real-time weather conditions and forecasts for any city worldwide. The app fetches data from a public weather API, providing users with essential weather updates in a clean and intuitive interface.',
        image: weatherapp,
        link: 'https://github.com/AmonCheruiyot/Weather-App',
        techStack: ['React', 'CSS'], // Add tech stack here
    },
    {
        title: 'Recipe App',
        description: 'A full-stack web application designed for recipe sharing, built with a Flask backend. Users can explore and share their favorite recipes, complete with ingredients, instructions, and images. The application offers a seamless user experience with efficient data management and a visually appealing UI.',
        image: recipe,
        link: 'https://github.com/AmonCheruiyot/my-client',
        techStack: ['React', 'Flask'], // Add tech stack here
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold mb-2">Projects</h2>
                <div className="text-5xl font-bold mb-6 border-b-2 border-white pb-2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="rounded-lg w-full h-48 object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105" 
                            />
                            <h3 className="text-2xl font-semibold mt-6">{project.title}</h3>
                            <p className="mt-4 text-gray-300">{project.description}</p>
                            <a 
                                href={project.link} 
                                className="inline-block mt-4 text-blue-400 hover:underline"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                            <div className="mt-2">
                                {project.techStack.map((tech, techIndex) => (
                                    <span key={techIndex} className="inline-block bg-blue-600 text-xs rounded-full px-2 py-1 text-white mr-2">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
