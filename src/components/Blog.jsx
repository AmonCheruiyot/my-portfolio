const Blog = () => {
    const posts = [
        {
            title: "Junior Software Developers",
            description: "My thoughts and tips for junior developers to navigate the early stages of their career.",
            link: "https://supercodz.hashnode.dev/junior-software-developers",
        },
        {
            title: "Real-Time Communication in Web Applications Using Socket.io",
            description: "Exploring the implementation of real-time communication using Socket.io in web applications.",
            link: "https://supercodz.hashnode.dev/real-time-communication-in-web-applications-using-socketio",
        },
    ];

    return (
        <section id="blog" className="py-20 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold mb-8">Blog Posts</h2>
                <div className="text-5xl font-bold mb-6 border-b-2 border-white pb-2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-3xl font-semibold">{post.title}</h3>
                            <p className="mt-2 text-gray-300">{post.description}</p>
                            <a
                                href={post.link}
                                className="mt-4 inline-block text-blue-400 hover:underline transition duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
