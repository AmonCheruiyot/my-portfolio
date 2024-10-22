const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-gradient-to-r from-gray-800 to-gray-600 text-center">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-white mb-4">My Resume</h2>
                <p className="text-lg text-gray-300 mb-8">Download my resume to learn more about my experience and education.</p>
                <a
                    href="/path/to/resume.pdf"
                    className="mt-6 inline-block bg-blue-400 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
};

export default Resume;
