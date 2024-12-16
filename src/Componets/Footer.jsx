import React, { useState } from 'react';
import {
  LocationOn,
  Phone,
  WhatsApp,
  Email,
  Instagram,
  Twitter,
  Facebook,
  LinkedIn,
  Send
} from '@mui/icons-material';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with email: ${email}`);
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Appointments', path: '/appointment' },
    { name: 'Emergency', path: '/emergency' }
  ];

  const medicalServices = [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Dental Care',
    'Ophthalmology',
    'Plastic Surgery'
  ];

  return (
    <footer className="bg-blue-900 text-white py-12 px-4 md:px-12 mt-3">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Hospital Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-200">Well Care Hospital</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <LocationOn className="text-blue-300" />
              <p>123 Healthcare Street, Medical City, HC 54321</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-blue-300" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-2">
              <WhatsApp className="text-blue-300" />
              <p>+1 (555) 987-6543</p>
            </div>
            <div className="flex items-center space-x-2">
              <Email className="text-blue-300" />
              <p>contact@wellcarehospital.com</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-blue-200">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="hover:text-blue-300 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Medical Services */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-blue-200">Medical Services</h4>
          <ul className="space-y-2">
            {medicalServices.map((service, index) => (
              <li key={index}>
                <a
                  href={`/services/${service.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-blue-300 transition-colors"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Get in Touch */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-blue-200">Get in Touch</h4>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded flex items-center justify-center space-x-2"
            >
              <Send className="mr-2" />
              Subscribe
            </button>
          </form>

          {/* Social Media Links */}
          <div className="mt-6 flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition-colors"
            >
              <Instagram fontSize="large" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Twitter fontSize="large" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 transition-colors"
            >
              <Facebook fontSize="large" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-600 transition-colors"
            >
              <LinkedIn fontSize="large" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-6 border-t border-blue-700 text-center">
        <p className="text-blue-300">
          © {new Date().getFullYear()} Well Care Hospital. All Rights Reserved.
        </p>
        <div className="mt-2 space-x-4 text-sm">
          <a href="/privacy-policy" className="hover:text-blue-200">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-blue-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;