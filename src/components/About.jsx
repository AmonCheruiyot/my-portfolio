import profilePic from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <img src={profilePic} alt="Profile" className="w-40 h-40 rounded-full shadow-lg" />
        <div className="ml-10 mt-8 md:mt-0">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-lg">
            I am a passionate developer who enjoys building scalable applications. I specialize in modern web technologies such as React and Flask.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
