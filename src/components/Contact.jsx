import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(''); // Combine error and success into one

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    const { name, email, message } = formData;

    // Simple validation
    if (!name || !email || !message || !validateEmail(email)) {
      setStatusMessage('Please fill in all fields correctly.');
      setLoading(false);
      return;
    }

    const serviceId = 'service_q9zsa7x';
    const templateId = 'template_3er3o2c';
    const publicKey = 'ZpC8hT3PKZcIEG04g';

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          to_name: 'Amon Kiprotich', // You can adjust this
          from_name: name,
          from_email: email,
          message,
        },
        publicKey
      );

      if (result.text === 'OK') {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatusMessage('Message failed to send. Try again later.');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatusMessage('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <form onSubmit={handleSubmit} className="mt-10 max-w-xl mx-auto space-y-4">
          {statusMessage && <p className={`text-${statusMessage.includes('success') ? 'green' : 'red'}-500`}>{statusMessage}</p>}
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
          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
