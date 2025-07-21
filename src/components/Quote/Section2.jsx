import React, { useState, useEffect } from "react";

const Section2 = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 3000); // 3 seconds
    }
    return () => clearTimeout(timer);
  }, [success]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://formspree.io/f/xzzvzprv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#EFE2D9] to-[#D6BFA7]  overflow-hidden px-0 lg:px-0 my-24">
      <div className="container mx-auto px-0 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:-mx-0">
          {/* Contact Form */}
          <div className="lg:w-1/2 flex items-center py-12 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <div className="lg:p-12 lg:pl-0 w-full">
              <h6 className="text-black  font-bold uppercase mb-2">Get a Quote a for your dream space today</h6>
              <h1 className="text-3xl font-bold mb-4">Feel Free To Contact Us</h1>
              <p className="mb-4 text-gray-600">
              We’re here to help! Whether you have questions, feedback, or need support, feel free to reach out to us. You can contact us via email, phone, or by filling out the form below. Our team will get back to you as soon as possible. We look forward to hearing from you! {' '}
              </p>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2 mb-4">
                    <div className="relative">
                      <input type="text" id="name" name="name" placeholder="Your Name " className="block w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" value={formData.name} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-2 mb-4">
                    <div className="relative">
                      <input type="email" id="email" name="email" placeholder="Your Email " className="block w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="w-full px-2 mb-4">
                    <div className="relative">
                      <input type="text" id="subject" name="subject" placeholder="Subject " className="block w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" value={formData.subject} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="w-full px-2 mb-4">
                    <div className="relative">
                      <textarea id="message" name="message" placeholder="Write Your Message Here" className="block w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white h-24 resize-none" value={formData.message} onChange={handleChange} required />
                    </div>
                  </div>
                  {error && <div className="w-full px-2 mb-2 text-red-600">{error}</div>}
                  <div className="w-full px-2">
                    <button type="submit" className="bg-[#D6BFA7] cursor-pointer rounded-full py-3 px-8 font-semibold hover:bg-black text-white transition-colors duration-200" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
                  </div>
                </div>
              </form>
              {success && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">Your message is sent successfully!</div>
              )}
            </div>
          </div>
          {/* Google Map */}
          <div className="lg:w-1/2 min-h-[400px] pe-0 relative">
            <div className="absolute inset-0 w-full h-full">
            <iframe className="w-full h-full object-cover rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5208573304653!2d72.68280057516631!3d23.078021479135046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81d4a3c2588b%3A0x202882c784f2f2f2!2sShri%20Hari%20Gift%20City!5e0!3m2!1sen!2sin!4v1752652831718!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;


