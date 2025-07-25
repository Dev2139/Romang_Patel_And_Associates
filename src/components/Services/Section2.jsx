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
    description: "We design and deliver custom residential environments that seamlessly integrate sustainable energy systems with refined architectural aesthetics. Our approach ensures each home is a sanctuary of comfort, efficiency, and timeless design, tailored to the unique vision of every client.",
    image: "https://res.cloudinary.com/dsddldquo/image/upload/v1753465492/hkmtbxhz0mrvyhtpnhrg.png",
    icon: HomeIcon
  },
  {
    title: "Commercial",
    description: "Our commercial projects exemplify the synergy of innovative design and operational excellence. We create inspiring, energy-efficient spaces that elevate brand identity, enhance user experience, and deliver measurable value for businesses of all scales.",
    image: "https://res.cloudinary.com/dsddldquo/image/upload/v1753465568/srow1grkkqqy4j8vcvzr.png",
    icon: BusinessIcon
  },
  {
    title: "Institutional",
    description: "We partner with educational and civic institutions to create enduring, sustainable spaces that foster learning, collaboration, and community engagement. Our solutions are tailored to institutional needs, regulatory standards, and the highest benchmarks of architectural integrity.",
    image: "https://res.cloudinary.com/dsddldquo/image/upload/v1753465827/gvtuprbugkt8yixdd2vu.png",
    icon: SchoolIcon
  },
  {
    title: "Interior",
    description: "Our interior architecture services transform spaces with a focus on natural light, spatial harmony, and energy efficiency. We integrate advanced solar-powered lighting and climate solutions, ensuring every interior is both beautiful and sustainable.",
    image: "https://res.cloudinary.com/dsddldquo/image/upload/v1753467011/q112ebx4h2p5i6cmbues.png",
    icon: LightbulbIcon
  },
  {
    title: "Hotels",
    description: "We collaborate with hospitality leaders to design hotels that embody luxury, comfort, and environmental responsibility. Our architectural solutions integrate renewable energy and smart systems, enhancing guest experience while optimizing operational efficiency.",
    image: "https://res.cloudinary.com/dsddldquo/image/upload/v1753467089/g1ydsw8lh35yri2o3udv.png",
    icon: HotelIcon
  },
  {
    title: "Resorts",
    description: "Our resort projects are conceived as immersive, eco-friendly destinations. We design and implement comprehensive architectural and energy solutions that harmonize with natural surroundings, delivering unforgettable guest experiences and sustainable operations.",
    image: "https://res.cloudinary.com/dsddldquo/image/upload/v1753467168/bbrfixlkf5nautc5zqzr.png",
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
      {/* <button className="flex items-center text-black font-bold border border-black rounded-full px-5 py-2 hover:bg-gray-200 transition text-base">
        Read More
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button> */}
    </div>
  </div>
);

const Section4 = () => {
  // Drag-to-scroll logic
  const scrollRef = React.useRef(null);
  const isDragging = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeft = React.useRef(0);

  React.useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const onMouseDown = (e) => {
      isDragging.current = true;
      slider.classList.add('scrolling');
      slider.classList.add('pause-animation');
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
    };
    const onMouseLeave = () => {
      isDragging.current = false;
      slider.classList.remove('scrolling');
      slider.classList.remove('pause-animation');
    };
    const onMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove('scrolling');
      slider.classList.remove('pause-animation');
    };
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5; // scroll-fast
      slider.scrollLeft = scrollLeft.current - walk;
    };
    // Touch events for mobile
    const onTouchStart = () => {
      slider.classList.add('pause-animation');
    };
    const onTouchEnd = () => {
      slider.classList.remove('pause-animation');
    };
    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseleave', onMouseLeave);
    slider.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('mousemove', onMouseMove);
    slider.addEventListener('touchstart', onTouchStart);
    slider.addEventListener('touchend', onTouchEnd);
    // Clean up
    return () => {
      slider.removeEventListener('mousedown', onMouseDown);
      slider.removeEventListener('mouseleave', onMouseLeave);
      slider.removeEventListener('mouseup', onMouseUp);
      slider.removeEventListener('mousemove', onMouseMove);
      slider.removeEventListener('touchstart', onTouchStart);
      slider.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div className="py-12 mt-5" style={{ background: 'linear-gradient(to right, #D6BFA7, #EFE2D9)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h6 className="text-[#f5a623] text-sm font-semibold uppercase">Our Expertise</h6>
          <h1 className="text-4xl font-bold mt-2">Architectural Solutions for Every Environment</h1>
        </div>
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto whitespace-nowrap cursor-grab scrollbar-thin scrollbar-thumb-[#E4CBBA] scrollbar-track-[#EFE2D9] animate-scroll"
            style={{ width: 'fit-content', animation: 'scroll 40s linear infinite' }}
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
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll.pause-animation {
          animation-play-state: paused !important;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Section4;