import React from 'react';
import weatherapp from '../assets/weatherapp.png'; // Correct import for weather app image
import recipe from '../assets/recipe.png'; // Correct import for recipe app image

const projects = [
    {
        title: 'Weather App',
        description: 'An app that allows users to check the current weather conditions and forecasts for any city.',
        image: weatherapp,
        link: 'https://github.com/AmonCheruiyot/Weather-App',
    },
    {
        title: 'Recipe App',
        description: 'A recipe sharing website with a Flask backend.',
        image: recipe,
        link: 'https://github.com/AmonCheruiyot/my-client',
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
                        <div key={index} className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
                            <img src={project.image} alt={project.title} className="rounded-lg w-full h-48 object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105" />
                            <h3 className="text-2xl font-semibold mt-6">{project.title}</h3>
                            <p className="mt-4 text-gray-300">{project.description}</p>
                            <a href={project.link} className="inline-block mt-4 text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
