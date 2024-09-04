import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to the backend or an email service
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <form onSubmit={handleSubmit} className="mt-10 max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-white text-black rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-white text-black rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 bg-white text-black rounded-lg"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
