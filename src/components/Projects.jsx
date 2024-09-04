const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with React and Tailwind.',
      image: 'portfolio.jpg',
      link: 'https://github.com/your-profile/portfolio',
    },
    {
      title: 'E-commerce App',
      description: 'An e-commerce app with Flask backend.',
      image: 'ecommerce.jpg',
      link: 'https://github.com/your-profile/ecommerce-app',
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
                <img src={(`../assets/${project.image}`)} alt={project.title} className="rounded-lg shadow-md" />
                <h3 className="text-2xl font-semibold mt-6">{project.title}</h3>
                <p className="mt-4">{project.description}</p>
                <a href={project.link} className="block mt-4 text-blue-500 hover:underline">
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
  