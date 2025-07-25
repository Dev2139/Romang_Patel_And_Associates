import React, { useState, useEffect } from 'react';
import Slide1 from '../../assets/gallery-3.jpg';
import Slide2 from '../../assets/gallery-4.jpg';
import Slide3 from '../../assets/gallery-5.jpg';


// Placeholder images (replace with your actual image URLs)
const carouselImages = [
  'https://res.cloudinary.com/dsddldquo/image/upload/v1753468479/zdkzebhi7zkxyzuxobtw.png',
  'https://res.cloudinary.com/dsddldquo/image/upload/v1753468807/gb4emnsxohbagabxnrvq.png',
  'https://res.cloudinary.com/dsddldquo/image/upload/v1753468902/spgka1oxvyoso4igyy0b.png',
];

// Thumbnails for the dots
const thumbnailImages = [
  'https://res.cloudinary.com/dsddldquo/image/upload/v1752655780/dbczh699qhh2mh0k3agg.png',
  'https://res.cloudinary.com/dsddldquo/image/upload/v1752656051/to1hdnmg8eivnlkitnlt.jpg',
  'https://res.cloudinary.com/dsddldquo/image/upload/v1752656240/wnr6dnde0vusgo0cdfoc.png',
];

const carouselContent = [
  {
    heading: 'Crafting Enduring Architectural Legacies',
    description: "For over three decades, our practice has stood at the forefront of architectural innovation, seamlessly blending artistry with technical mastery. We are dedicated to creating spaces that transcend mere function—each project is a testament to our commitment to timeless design, environmental stewardship, and the enrichment of the human experience.",
  },
  {
    heading: 'Versatility Across the Built Environment',
    description: "Our portfolio reflects a profound versatility, encompassing bespoke residences, transformative commercial spaces, landmark institutions, and luxurious hospitality destinations. Every commission is approached with a deep respect for context, culture, and the aspirations of those who inhabit our work, resulting in architecture that is both distinctive and enduring.",
  },
  {
    heading: 'Visionary Design, Collaborative Spirit',
    description: "We believe architecture is a collaborative journey—an ongoing dialogue between client, context, and creative vision. From concept to completion, we partner with our clients to shape environments that inspire, connect, and stand the test of time. Together, we are shaping the future of the built world, one visionary project at a time.",
  },
];

const HeaderCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counter, setCounter] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const increment = 3 / steps; // Final number is 3
    const stepDuration = duration / steps;

    let currentStep = 0;
    const counterInterval = setInterval(() => {
      currentStep++;
      setCounter(Math.min(3, currentStep * increment));
      
      if (currentStep >= steps) {
        clearInterval(counterInterval);
      }
    }, stepDuration);

    return () => clearInterval(counterInterval);
  }, []);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full p-0 pb-20 md:pb-20 sm:pb-10">
      {/* Counter Display */}
      <div className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
        <span className="text-white text-2xl md:text-2xl sm:text-lg font-bold">
          {counter.toFixed(1)}
        </span>
      </div>

      {/* Carousel Slides */}
      <div className="relative w-full h-[400px] sm:h-[250px] md:h-[500px] lg:h-[750px]">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Carousel ${index + 1}`}
              className="w-full h-full object-cover brightness-110 contrast-125 saturate-110"
              style={{ imageRendering: 'crisp-edges' }}
            />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-12">
                <div className="flex justify-start">
                  <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-extrabold text-black leading-tight animate-slideInDown drop-shadow-2xl">
                      {carouselContent[index].heading}
                    </h1>
                    <p className="text-xs sm:text-sm md:text-lg font-medium text-black mt-4 md:mt-6 mb-4 md:mb-8 max-w-xs sm:max-w-md md:max-w-2xl animate-slideInDown drop-shadow-2xl">
                      {carouselContent[index].description}
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Dots (Thumbnails) */}
        {/* <div className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 sm:gap-3 md:gap-4">
          {thumbnailImages.map((thumbnail, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                currentSlide === index 
                  ? 'border-white scale-110 ring-4 ring-white/50' 
                  : 'border-gray-300 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div> */}

      {/* Inline styles for animations (minimal CSS since Tailwind doesn't support keyframes) */}
      <style>
        {`
          @keyframes slideInDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes slideInLeft {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slideInDown {
            animation: slideInDown 1s ease forwards;
          }
          .animate-slideInLeft {
            animation: slideInLeft 1s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default HeaderCarousel;