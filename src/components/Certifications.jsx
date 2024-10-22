const Certifications = () => {
    const certs = [
        { name: "AWS Certified Developer", issuer: "Amazon", link: "#" },
        { name: "Google Cloud Architect", issuer: "Google", link: "#" },
    ];

    return (
        <section id="certifications" className="py-20 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold mb-8">Certifications</h2>
                <div className="text-5xl font-bold mb-6 border-b-2 border-white pb-2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {certs.map((cert, index) => (
                        <div key={index} className="p-6 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition-colors duration-300">
                            <h3 className="text-3xl font-semibold">{cert.name}</h3>
                            <p className="mt-2 text-lg">Issued by {cert.issuer}</p>
                            <a
                                href={cert.link}
                                className="mt-4 text-blue-400 hover:underline transition duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Certification
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
