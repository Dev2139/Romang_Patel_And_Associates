import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight, FaRegCopyright, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('');
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatus('Subscribed successfully!');
          form.current.reset();
        },
        (error) => {
          setStatus('Failed to subscribe. Please try again.');
        }
      );
  };

  return (
    <footer className="bg-[#e2c8b7] text-black pt-8 pb-4 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Logo & Address */}
          <div className="flex-1 min-w-[200px]">
            <h1 className="text-4xl font-bold mb-4">LOGO</h1>
            <h2 className="text-lg font-bold mb-2">Address</h2>
            <ul className="space-y-2 text-base">
              <li className="flex items-center gap-2"><FaMapMarkerAlt /> Vadodra Office Address</li>
              <li className="flex items-center gap-2"><FaPhoneAlt /> +91 1234567890</li>
              <li className="flex items-center gap-2"><FaEnvelope /> info@example.com</li>
            </ul>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-2xl hover:text-[#1da1f2] transition-colors" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-2xl hover:text-[#0077b5] transition-colors" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-2xl hover:text-[#ff0000] transition-colors" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-2xl hover:text-[#e1306c] transition-colors" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[180px]">
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul className="space-y-1 text-base">
              <li className="flex items-center gap-2 hover:text-[#a3856a] cursor-pointer transition-colors"><FaArrowRight className="text-xs" /> About Us</li>
              <li className="flex items-center gap-2 hover:text-[#a3856a] cursor-pointer transition-colors"><FaArrowRight className="text-xs" /> Contact Us</li>
              <li className="flex items-center gap-2 hover:text-[#a3856a] cursor-pointer transition-colors"><FaArrowRight className="text-xs" /> Our Services</li>
              <li className="flex items-center gap-2 hover:text-[#a3856a] cursor-pointer transition-colors"><FaArrowRight className="text-xs" /> Terms & Conditions</li>
              <li className="flex items-center gap-2 hover:text-[#a3856a] cursor-pointer transition-colors"><FaArrowRight className="text-xs" /> Support</li>
            </ul>
          </div>

          {/* Project Gallery */}
          <div className="flex-1 min-w-[220px]">
            <h2 className="text-lg font-bold mb-2">Project Gallery</h2>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <img src="https://res.cloudinary.com/dsddldquo/image/upload/v1740489194/qbwr3opoj8n65lrshqzj.avif" alt="Gallery 3" className="w-16 h-16 rounded object-cover" />
              <img src="https://res.cloudinary.com/dsddldquo/image/upload/v1740489194/qbwr3opoj8n65lrshqzj.avif" alt="Gallery 4" className="w-16 h-16 rounded object-cover" />
              <img src="https://res.cloudinary.com/dsddldquo/image/upload/v1740489194/qbwr3opoj8n65lrshqzj.avif" alt="Gallery 5" className="w-16 h-16 rounded object-cover" />
              <img src="https://res.cloudinary.com/dsddldquo/image/upload/v1740489194/qbwr3opoj8n65lrshqzj.avif" alt="Gallery 3" className="w-16 h-16 rounded object-cover" />
              <img src="https://res.cloudinary.com/dsddldquo/image/upload/v1740489194/qbwr3opoj8n65lrshqzj.avif" alt="Gallery 4" className="w-16 h-16 rounded object-cover" />
              <img src="https://res.cloudinary.com/dsddldquo/image/upload/v1740489194/qbwr3opoj8n65lrshqzj.avif" alt="Gallery 5" className="w-16 h-16 rounded object-cover" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex-1 min-w-[220px]">
            <h2 className="text-lg font-bold mb-2">Newsletter</h2>
            <p className="mb-3 text-base">Stay connected with us for future updates</p>
            <form ref={form} onSubmit={sendEmail} className="flex items-center bg-white rounded shadow px-2 py-1">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="flex-1 bg-transparent outline-none px-2 py-1 text-base"
                required
              />
              <button type="submit" className="text-[#a3856a] text-xl p-1"><FaArrowRight /></button>
            </form>
            {status && <div className="text-sm mt-2 text-[#a3856a]">{status}</div>}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/50 my-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-black/80 gap-2">
          <div className="flex items-center gap-1">
            <FaRegCopyright className="inline-block" />
            <span className="font-semibold">Company Name</span>, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
