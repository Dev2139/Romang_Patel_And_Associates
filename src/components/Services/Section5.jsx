import React from 'react';
import { FaCheck, FaUsers, FaRulerCombined, FaHeadphones } from 'react-icons/fa';

const FeatureItem = ({ icon, title, subtitle }) => (
  <div className="flex items-center">
    <div className="w-12 h-12 bg-[#f4e4d3] rounded-full flex items-center justify-center mr-4 shadow-sm overflow-hidden">
      <span className="text-xl text-black flex items-center justify-center w-full h-full">{icon}</span>
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
              Comprehensive Design Solutions for Homes & Businesses
            </h1>
            <p className="text-black font-normal mb-6">
              With a legacy spanning more than three decades, our architectural
              firm has stood as a beacon of innovation, precision, and timeless
              design. Since our inception, we have dedicated ourselves to shaping
              environments that are not just built forms, but immersive
              experiences. Our journey has been one of continual evolution,
              exploring the intersections of function, aesthetics,
              sustainability, and the human spirit.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <FeatureItem
                icon={<FaCheck />}
                title="Unmatched Quality"
                subtitle="We use only premium material for lasting performance."
              />
              <FeatureItem
                icon={<FaUsers />}
                title="Unmatched Quality"
                subtitle="We use only premium material for lasting performance."
              />
              <FeatureItem
                icon={<FaRulerCombined />}
                title="Unmatched Quality"
                subtitle="We use only premium material for lasting performance."
              />
              <FeatureItem
                icon={<FaHeadphones />}
                title="Unmatched Quality"
                subtitle="We use only premium material for lasting performance."
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block h-full lg:col-span-3">
          <div className="relative h-full">
            <img 
              src="https://res.cloudinary.com/dsddldquo/image/upload/v1752659870/edrtv7rxgoaex8rzemfq.png" 
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