import React, { useState, useEffect } from 'react';
import gallery3 from '../../assets/gallery-3.jpg';
import gallery4 from '../../assets/gallery-4.jpg';
import gallery5 from '../../assets/gallery-5.jpg';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

const images = [
  {
    src: "https://res.cloudinary.com/dsddldquo/image/upload/v1740489209/hgnnui5dcbk4xxoemfvz.avif",
    title: 'Project One',
    info: 'Info about Project One, Location A',
  },
  {
    src: "https://res.cloudinary.com/dsddldquo/image/upload/v1740489194/qbwr3opoj8n65lrshqzj.avif",
    title: 'Project Two',
    info: 'Info about Project Two, Location B',
  },
  {
    src: "https://res.cloudinary.com/dsddldquo/image/upload/v1740201691/zamytzw91ta0uiazna89.webp",
    title: 'Project Three',
    info: 'Info about Project Three, Location C',
  },
  {
    src: "https://res.cloudinary.com/dsddldquo/image/upload/v1740489209/hgnnui5dcbk4xxoemfvz.avif",
    title: 'Project 4',
    info: 'Info about Project One, Location A',
  },
  {
    src: "https://res.cloudinary.com/dsddldquo/image/upload/v1740489194/qbwr3opoj8n65lrshqzj.avif",
    title: 'Project 5',
    info: 'Info about Project Two, Location B',
  },
  {
    src: "https://res.cloudinary.com/dsddldquo/image/upload/v1740201691/zamytzw91ta0uiazna89.webp",
    title: 'Project 6',
    info: 'Info about Project Three, Location C',
  },
];

const Projects = () => {
  const [centerIndex, setCenterIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [animDirection, setAnimDirection] = useState(null); // 'left' or 'right' for animation

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleManualScroll('right', true);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Pause auto-scroll for 5 seconds after user interaction
  const handleManualScroll = (direction, isAuto = false) => {
    setAnimDirection(direction);
    setTimeout(() => {
      setCenterIndex((prev) => {
        if (direction === 'left') {
          return (prev - 1 + images.length) % images.length;
        } else {
          return (prev + 1) % images.length;
        }
      });
      setAnimDirection(null);
    }, 200); // Animation duration
    if (!isAuto) {
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 5000);
    }
  };

  // Helper to get card index with wrap-around for any number of projects
  const getCard = (offset) => {
    return images[(centerIndex + offset + images.length) % images.length];
  };

 
  const showLeft = images.length > 1;
  const showRight = images.length > 2;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-2 sm:px-4 mt-[-1000px] py-12 " style={{
      background: 'linear-gradient(90deg, #D6BFA7 0%, #EFE2D9 100%)'
    }}>
      <div className="text-center mb-10 mt-4">
        <h6 className="text-[#00000] text-sm font-bold uppercase mb-2">Our Projects</h6>
        <h1 className="text-4xl lg:text-4xl font-bold text-gray-800 mb-4">Visit Our Latest Projects</h1>
      </div>
      <div className="relative flex flex-row items-center justify-center w-full max-w-7xl">
        {/* Left Arrow */}
        <button
          onClick={() => handleManualScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E4CBBA] bg-opacity-60 text-black text-2xl sm:text-3xl hover:bg-opacity-80 focus:ring-2 focus:ring-white transition disabled:opacity-30"
          disabled={images.length < 2}
          aria-label="Previous project"
          tabIndex={0}
        >
          <MdArrowBack />
        </button>
        {/* Cards */}
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-8 w-full transition-all duration-500">
          {/* Left Card (only show if more than 1 project) */}
          {showLeft && (
            <div className={`w-32 sm:w-72 h-40 sm:h-80 bg-black rounded-2xl shadow-xl flex-shrink-0 overflow-hidden transition-all duration-300 ${animDirection === 'left' ? 'animate-slideRight' : animDirection === 'right' ? 'animate-slideLeft' : ''}`}
              style={{ opacity: 0.7 }}
            >
              <img src={getCard(-1).src} alt={getCard(-1).title} className="w-full h-full object-cover" />
            </div>
          )}
          {/* Center Card */}
          <div
            className={`relative w-40 sm:w-[32rem] h-56 sm:h-[26rem] bg-black rounded-2xl shadow-2xl flex-shrink-0 flex items-end overflow-hidden transition-all duration-300 ${animDirection === 'left' ? 'animate-slideRight' : animDirection === 'right' ? 'animate-slideLeft' : ''}`}
            aria-live="polite"
          >
            <img src={getCard(0).src} alt={getCard(0).title} className="w-full h-full object-cover absolute top-0 left-0 opacity-90" />
            {/* Gradient overlay for text readability */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <div className="absolute bottom-8 left-6 right-6 z-20">
              <h2 className="text-white text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">{getCard(0).title}</h2>
              <p className="text-white text-sm sm:text-lg font-semibold mb-2">{getCard(0).info}</p>
              <button className="mt-2 px-4 py-2 bg-white bg-opacity-90 text-black font-semibold rounded-lg shadow hover:bg-opacity-100 transition text-sm sm:text-base">View Details</button>
            </div>
          </div>
          {/* Right Card (only show if more than 2 projects) */}
          {showRight && (
            <div className={`w-32 sm:w-72 h-40 sm:h-80 bg-black rounded-2xl shadow-xl flex-shrink-0 overflow-hidden transition-all duration-300 ${animDirection === 'left' ? 'animate-slideRight' : animDirection === 'right' ? 'animate-slideLeft' : ''}`}
              style={{ opacity: 0.7 }}
            >
              <img src={getCard(1).src} alt={getCard(1).title} className="w-full h-full object-cover" />
            </div>
          )}
        </div>
        {/* Right Arrow */}
        <button
          onClick={() => handleManualScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E4CBBA] bg-opacity-60 text-black text-2xl sm:text-3xl hover:bg-opacity-80 focus:ring-2 focus:ring-white transition disabled:opacity-30"
          disabled={images.length < 2}
          aria-label="Next project"
          tabIndex={0}
        >
          <MdArrowForward />
        </button>
      </div>
      {/* Animations (Tailwind custom classes, add to your CSS if not present) */}
      {/*
      .animate-slideLeft { animation: slideLeft 0.2s; }
      .animate-slideRight { animation: slideRight 0.2s; }
      @keyframes slideLeft { from { transform: translateX(40px); } to { transform: translateX(0); } }
      @keyframes slideRight { from { transform: translateX(-40px); } to { transform: translateX(0); } }
      */}
      {/* For smoother transition, update the animation duration and timing function: */}
      {/*
      .animate-slideLeft { animation: slideLeft 0.5s cubic-bezier(0.4,0,0.2,1); }
      .animate-slideRight { animation: slideRight 0.5s cubic-bezier(0.4,0,0.2,1); }
      @keyframes slideLeft { from { transform: translateX(40px); } to { transform: translateX(0); } }
      @keyframes slideRight { from { transform: translateX(-40px); } to { transform: translateX(0); } }
      */}
    </div>
  );
};

export default Projects;