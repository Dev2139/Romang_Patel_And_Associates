import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HotelIcon from '@mui/icons-material/Hotel';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const services = [
  {
    title: "Residential",
    description: "Transform your home with our premium solar solutions. We specialize in custom residential installations that maximize energy efficiency while maintaining aesthetic appeal. Our expert team ensures seamless integration with your home's architecture.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: HomeIcon
  },
  {
    title: "Commercial",
    description: "Power your business with sustainable energy solutions. Our commercial solar installations are designed to reduce operational costs and carbon footprint. We handle everything from initial assessment to complete installation with minimal business disruption.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: BusinessIcon
  },
  {
    title: "Institutional",
    description: "Empower educational and government institutions with renewable energy. Our institutional solar projects combine sustainability with long-term cost savings. We provide comprehensive solutions tailored to institutional requirements and regulations.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: SchoolIcon
  },
  {
    title: "Interior",
    description: "Enhance your indoor spaces with innovative solar-powered lighting and climate control solutions. Our interior solar integration services bring natural light and energy efficiency to your indoor environments while maintaining design aesthetics.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: LightbulbIcon
  },
  {
    title: "Hotels",
    description: "Elevate your hospitality business with sustainable energy solutions. Our hotel solar installations reduce energy costs while enhancing your green credentials. We provide 24/7 monitoring and maintenance to ensure uninterrupted service.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: HotelIcon
  },
  {
    title: "Resorts",
    description: "Create an eco-friendly paradise with our resort solar solutions. We design and implement comprehensive solar systems for resorts, including pool heating, lighting, and power generation. Our solutions are built to withstand coastal and tropical conditions.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: BeachAccessIcon
  },
];

const ServiceCard = ({ title, description, image, icon: Icon }) => (
  <div
    className="rounded-2xl overflow-hidden bg-[#E4CBBA] relative flex flex-col items-center min-w-[350px] mx-4"
    style={{ boxShadow: '0 8px 8px 0 #E8D9CC', marginBottom: '16px' }}
  >
    <div className="bg-black h-48 w-full flex items-end justify-center rounded-t-2xl relative">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover opacity-80"
      />
      <div
        className="w-24 h-24 bg-gray-300 rounded-full absolute left-15 -translate-x-1/2 top-full -translate-y-1/2 shadow-md border-4 border-[#f5e8de] flex items-center justify-center"
        style={{ zIndex: 2 }}
      >
        <Icon sx={{ fontSize: 40, color: '#4A5568' }} />
      </div>
    </div>
    <div className="pt-16 pb-8 px-7 w-full flex flex-col items-start">
      <h4 className="text-2xl font-extrabold mb-4">{title}</h4>
      <p className="text-gray-700 mb-6 text-base font-normal leading-relaxed whitespace-normal" style={{ 
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        lineHeight: '1.6',
        maxHeight: '6.4em'
      }}>
        {description}
      </p>
      <button className="flex items-center text-black font-bold border border-black rounded-full px-5 py-2 hover:bg-gray-200 transition text-base">
        Read More
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
);

const Section4 = () => {
  return (
    <div className="py-12 mt-5" style={{ background: 'linear-gradient(to right, #D6BFA7, #EFE2D9)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h6 className="text-[#f5a623] text-sm font-semibold uppercase">Our Services</h6>
          <h1 className="text-4xl font-bold mt-2">Expertise Across Every Architectural Typology</h1>
        </div>
        <div className="relative overflow-hidden">
          <div 
            className="flex animate-scroll"
            style={{
              width: 'fit-content',
              animation: 'scroll 40s linear infinite',
            }}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
              />
            ))}
            {services.map((service, index) => (
              <ServiceCard
                key={`duplicate-${index}`}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Section4;