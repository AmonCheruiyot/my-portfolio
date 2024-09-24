import React from 'react';
import weatherapp from '../assets/weatherapp.png'; // Correct import for weather app image
import recipe from '../assets/recipe.png'; // Correct import for e-commerce app image

const projects = [
    {
      title: 'Weather App',
      description: 'An app that allows users to check the current weather conditions and forecasts for any city.',
      image: weatherapp, // Use the imported image directly
      link: 'https://github.com/AmonCheruiyot/Weather-App',
    },
    {
      title: 'Recipe App',
      description: 'An recipe sharing website with Flask backend.',
      image: recipe, // Use the imported image directly
      link: 'https://github.com/AmonCheruiyot/my-client',
    },
    
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {projects.map((project, index) => (
                        <div key={index} className="p-6 bg-gray-200 rounded-lg shadow-lg">
                            <img src={project.image} alt={project.title} className="rounded-lg shadow-md" />
                            <h3 className="text-2xl font-semibold mt-6">{project.title}</h3>
                            <p className="mt-4">{project.description}</p>
                            <a href={project.link} className="block mt-4 text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
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