import resumePDF from '../assets/AMON KIPROTICH (CV).pdf'; // Correctly import the PDF file

const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-gradient-to-r from-gray-800 to-gray-600 text-center">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-white mb-4">Resume</h2>
                <div className="text-5xl font-bold mb-6 border-b-2 border-white pb-2"></div>
                <p className="text-lg text-gray-300 mb-8">Download my resume to learn more about my experience and education.</p>
                <a
                    href={resumePDF} // Use the imported resume PDF path here
                    download="Amon_Kiprotich_Resume.pdf" // Optional: specify the download filename
                    className="mt-6 inline-block bg-blue-400 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
};

export default Resume;
