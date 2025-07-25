import React from 'react';
import { useForm } from '@formspree/react';
import gallery3 from '../../assets/gallery-3.jpg';

const QuoteForm = () => {
  const [formspreeState, formspreeHandleSubmit] = useForm("mrblbzzw");

  return (
    <div className="min-h-[400px] flex bg-gradient-to-r from-[#f3e6dd] to-[#e2ccb3] mt-4">
      {/* Left: Image */}
      <div className="hidden md:block w-1/2 h-auto relative">
        <img src="https://res.cloudinary.com/dsddldquo/image/upload/v1752659885/uvex88bp84cqto10betd.png" alt="Quote" className="w-full h-full object-cover" />
      </div>
      {/* Right: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-end">
        <div className="w-full max-w-2xl p-8">
          <div className="mb-2">
            <h6 className="font-bold text-[#f5a623] text-lg mb-1">Request A Quote</h6>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get Your Free Quote Today</h1>
          </div>
          <form onSubmit={formspreeHandleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                name="user_name"
                className="w-full border-0 h-10 sm:h-12 px-3 bg-[#dedede] placeholder-black/60 rounded"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="user_email"
                className="w-full border-0 h-10 sm:h-12 px-3 bg-[#dedede] placeholder-black/60 rounded"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="user_mobile"
                className="w-full border-0 h-10 sm:h-12 px-3 bg-[#dedede] placeholder-black/60 rounded"
                placeholder="your Mobile"
              />
              <select name="user_service" className="w-full border-0 h-10 sm:h-12 px-3 bg-[#dedede] placeholder-black/60 rounded" required>
                <option value="">Select a Service</option>
                <option value="1">Service 1</option>
                <option value="2">Service 2</option>
                <option value="3">Service 3</option>
              </select>
              <textarea
                name="message"
                className="w-full border-0 h-20 sm:h-24 px-3 bg-[#dedede] placeholder-black/60 rounded sm:col-span-2"
                placeholder="Special note*"
                required
              ></textarea>
              <div className="sm:col-span-2 flex justify-start mt-2">
                <button
                  type="submit"
                  className="border border-black text-black font-semibold rounded-full py-2 px-6 hover:bg-black hover:text-white transition-colors"
                  disabled={formspreeState.submitting}
                >
                  Submit Response
                </button>
              </div>
            </div>
          </form>
          {formspreeState.succeeded && (
            <div className="mt-4 text-center font-semibold text-green-700">Message sent successfully!</div>
          )}
          {formspreeState.errors && formspreeState.errors.length > 0 && (
            <div className="mt-4 text-center font-semibold text-red-700">Failed to send message. Please try again.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;