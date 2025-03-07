import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfl5Gowt0HDfX9gjUatmE8I5JLt3aakqnCqMgY9m-JyJgnx2w/formResponse";
    // Typically, you'd send this to a backend or email service
    console.log('Form submitted:', formData);
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("entry.1891816976", formData.name);
    formDataToSubmit.append("entry.1176930186", formData.email);
    formDataToSubmit.append("entry.995258555", formData.message);

    fetch(formUrl, { method: "POST", body: formDataToSubmit, mode: "no-cors" })
      .then(() => alert('Thank you for your message! I will get back to you soon.'))
      .catch((err) => console.error("Error:", err));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <span>pritamgope19@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-green-600 mr-4" />
                <span>+91 9880720905</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-red-600 mr-4" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="mr-2" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};