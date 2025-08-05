import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Section3 = () => {
  return (
    <div className="container mx-auto bg-[#f5f5f5] overflow-hidden my-8 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col md:flex-row min-h-[600px] w-full">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto relative min-h-[400px]">
          <img
            src="https://res.cloudinary.com/dsddldquo/image/upload/v1753291677/pzhdokc831uhmmwvpf5e.jpg"
            alt="About Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-gradient-to-r from-[#EFE2D9] to-[#D6BFA7] py-8 px-4 sm:px-8 md:py-16 md:px-16">
          <h6 className="text-[#f5a623] text-base font-bold mb-2">About Us</h6>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-black">
            Shaping Iconic Spaces for Over 30 Years – Where Vision Inspires Excellence
          </h1>
          <p className="text-black mb-6 text-base">
            For more than three decades, our architectural practice has been synonymous with visionary design, technical mastery, and enduring quality. We are dedicated to transforming aspirations into architectural landmarks—spaces that harmonize form, function, and the unique spirit of every client. Our legacy is built on a foundation of innovation, sustainability, and a relentless pursuit of excellence, ensuring every project is both timeless and transformative.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center text-black text-lg">
              <span className="bg-white rounded-full shadow mr-3 p-2 flex items-center justify-center text-2xl border border-gray-200">
                <FaCheckCircle className="text-black" />
              </span>
              Comprehensive expertise in residential, commercial, institutional, and hospitality architecture.
            </div>
            <div className="flex items-center text-black text-lg">
              <span className="bg-white rounded-full shadow mr-3 p-2 flex items-center justify-center text-2xl border border-gray-200">
                <FaCheckCircle className="text-black" />
              </span>
              Bespoke solutions that blend creativity, functionality, and sustainability.
            </div>
            <div className="flex items-center text-black text-lg">
              <span className="bg-white rounded-full shadow mr-3 p-2 flex items-center justify-center text-2xl border border-gray-200">
                <FaCheckCircle className="text-black" />
              </span>
              A client-centric approach, delivering spaces that inspire and endure.
            </div>
          </div>
          <Link
            to="/about"
            className="bg-[#E8D9CC] border border-black text-black rounded-full ml-[-2px] py-4 px-12 mt-2 inline-block text-center text-lg font-bold hover:bg-[#f5ece6] transition-colors shadow-sm w-full sm:w-auto mx-auto"
          >
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section3;