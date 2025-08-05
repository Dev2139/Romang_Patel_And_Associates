import React from 'react';
import { FaCheck, FaUsers, FaRulerCombined, FaHeadphones } from 'react-icons/fa';

const FeatureItem = ({ icon, title, subtitle }) => (
  <div className="flex items-center">
    <div className="w-16 aspect-square bg-[#f4e4d3] rounded-full flex items-center justify-center mr-4 shadow-sm overflow-hidden p-3">
      <span className="text-2xl text-black flex items-center justify-center w-full h-full">{icon}</span>
    </div>
    <div>
      <p className="mb-0 text-sm text-gray-600">{title}</p>
      <h5 className="mb-0 text-lg font-semibold text-gray-800">{subtitle}</h5>
    </div>
  </div>
);

const WhyChooseUs = () => (
  <div className="bg-gradient-to-r from-[#EFE2D9] to-[#D6BFA7] py-20 px-0 sm:px-0 lg:px-0 h-full mt-4">
    <div className="w-full h-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-full">
        <div className="py-8 px-4 sm:px-6 lg:px-8 h-full lg:col-span-2">
          <div className="h-full">
            <h6 className="text-[#f5a623] text-sm font-bold uppercase mb-2">
              Why Choose Us
            </h6>
            <h1 className="text-4xl lg:text-4xl font-bold text-gray-800 mb-4">
              Visionary Architecture for Inspired Living & Working Spaces
            </h1>
            <p className="text-black font-normal mb-6">
              With over 30 years of experience, our architectural firm creates inspiring spaces that blend innovation, technical excellence, and sustainability. We collaborate closely with clients to deliver bespoke solutions that elevate everyday living and working environments.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <FeatureItem
                icon={<FaCheck />}
                title="Bespoke Solutions"
                subtitle="Tailored architectural designs that reflect your unique vision."
              />
              <FeatureItem
                icon={<FaRulerCombined />}
                title="Technical Excellence"
                subtitle="Precision and innovation in every detail, from concept to completion."
              />
              <FeatureItem
                icon={<FaUsers />}
                title="Collaborative Partnership"
                subtitle="A client-focused approach, ensuring your needs guide our process."
              />
              <FeatureItem
                icon={<FaHeadphones />}
                title="Sustainable Design"
                subtitle="Environmentally responsible solutions for a better future."
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block h-full lg:col-span-3">
          <div className="relative h-full">
            <img 
              src="https://res.cloudinary.com/dsddldquo/image/upload/v1754399853/fpr9pc0e6jvkw7qbtyf4.png" 
              alt="Modern Interior Design"
              className="absolute inset-0 w-full h-[780px] mt-[-80px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WhyChooseUs;