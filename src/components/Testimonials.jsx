const Testimonials = () => {
    const testimonials = [
        {
            name: "Nahashon Muthethia",
            feedback: "Working with Amon was fantastic! He is professional and a great problem-solver.",
        },
        {
            name: "Epenetus Nyaga",
            feedback: "Amon delivered high-quality work and met every deadline.",
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold mb-8">Testimonials</h2>
                <div className="text-5xl font-bold mb-6 border-b-2 border-white pb-2"></div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-gray-700 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <p className="text-lg italic">"{testimonial.feedback}"</p>
                            <h4 className="mt-4 text-xl font-semibold">{testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
