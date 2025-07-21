import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Section3 = () => {
  return (
    <div className="container mx-auto bg-[#f5f5f5] overflow-hidden my-8 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col md:flex-row min-h-[600px] w-full">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsddldquo/image/upload/v1752745435/vsb4qaylzqlxykyxqqyl.png"
            alt="About Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-gradient-to-r from-[#EFE2D9] to-[#D6BFA7] py-8 px-4 sm:px-8 md:py-16 md:px-16">
          <h6 className="text-[#f5a623] text-base font-bold mb-2">About Us</h6>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-black">
            Design Spaces for Over 30 Years – Where Vision Meets Precision
          </h1>
          <p className="text-black mb-6 text-base">
            With a legacy spanning more than three decades, our architectural firm has stood as a beacon of innovation, precision, and timeless design. Since our inception, we have dedicated ourselves to shaping environments that are not just built forms, but immersive experiences. Our journey has been one of continual evolution, exploring the intersections of function, aesthetics, sustainability, and the human spirit.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center text-black text-lg">
              <span className="bg-white rounded-full shadow mr-3 p-2 flex items-center justify-center text-2xl border border-gray-200">
                <FaCheckCircle className="text-black" />
              </span>
              We design homes, offices, institutes, and hotels.
            </div>
            <div className="flex items-center text-black text-lg">
              <span className="bg-white rounded-full shadow mr-3 p-2 flex items-center justify-center text-2xl border border-gray-200">
                <FaCheckCircle className="text-black" />
              </span>
              Every space is crafted with creativity and purpose.
            </div>
            <div className="flex items-center text-black text-lg">
              <span className="bg-white rounded-full shadow mr-3 p-2 flex items-center justify-center text-2xl border border-gray-200">
                <FaCheckCircle className="text-black" />
              </span>
              Our work reflects versatility and thoughtful design.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;