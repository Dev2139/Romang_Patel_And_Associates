import React, { useRef, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

const ReviewCard = ({ name, location, review }) => (
  <div
    className="bg-[#d1bfa7] w-[90vw] sm:w-[85vw] max-w-[600px] h-[280px] sm:h-[320px] rounded-xl shadow-lg p-4 sm:p-8 flex flex-col flex-shrink-0"
    style={{ boxShadow: '4px 8px 8px #b3a89a' }}
  >
    <div className="flex items-center mb-4">
      <div className="w-14 h-14 sm:w-20 sm:h-20 bg-black rounded-full mr-4 flex-shrink-0 flex items-center justify-center">
        <FaUser className="text-2xl sm:text-4xl" color="#d1bfa7" />
      </div>
      <div>
        <h3 className="font-bold text-lg sm:text-2xl">{name}</h3>
        <p className="text-xs sm:text-sm text-black mt-[-2px]">{location}</p>
      </div>
    </div>
    <p className="text-[14px] sm:text-[16px] text-black mt-2 leading-snug">
      {review}
    </p>
  </div>
);

const Section8 = () => {
  const reviews = [
    {
      name: 'Dipakbhai Muniya',
      location: 'Ahmedabad, Gujarat',
      review:
        'Our firm blends visionary design with enduring quality, creating spaces that inspire and uplift communities. With every project, we strive to balance innovation, sustainability, and functionality, ensuring that each environment is both beautiful and purposeful. Our commitment to excellence is reflected in the trust our clients place in us and the lasting impact of our work. We believe in close collaboration, transparent communication, and delivering results that exceed expectations.',
    },
    {
      name: 'Dr. Ruchi Patel',
      location: 'Surat, Gujarat',
      review:
        'We approach each project as a unique opportunity to deliver timeless, functional, and beautiful spaces. Our team collaborates closely with clients to transform their ideas into environments that exceed expectations. Through creativity, expertise, and attention to detail, we create architectural solutions that leave a lasting impression and stand the test of time. Every detail is thoughtfully considered to ensure a seamless and rewarding experience.',
    },
    
    // Add more reviews for a better scrolling effect
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollPosition = 0;
    // Responsive card width: 90vw (max 600px) + gap
    const cardWidth = Math.min(window.innerWidth * 0.9, 600) + 16; // 16px gap (4 in Tailwind = 1rem)
    const visibleCards = window.innerWidth < 640 ? 1 : 2;
    const totalCards = reviews.length;
    const maxScroll = cardWidth * (totalCards - visibleCards);
    const speed = 1; // px per frame
    let animationFrame;

    // Only auto-scroll on screens >= 640px (sm)
    const shouldAutoScroll = window.innerWidth >= 640;

    const autoScroll = () => {
      if (!shouldAutoScroll) return;
      scrollPosition += speed;
      if (scrollPosition > maxScroll) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationFrame = requestAnimationFrame(autoScroll);
    };

    if (shouldAutoScroll) {
      animationFrame = requestAnimationFrame(autoScroll);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [reviews.length]);

  return (
    <div
      className="min-h-[70vh] flex flex-col items-center justify-start pt-8 px-2 mt-4"
      style={{ background: 'linear-gradient(90deg, #D6BFA7 0%, #EFE2D9 100%)' }}
    >
      <div className="text-[#f5a623] text-xs sm:text-sm font-bold uppercase mb-2">Our Client Reviews</div>
      <div className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
        See What Our Clients says <br className="hidden sm:block" /> About Us
      </div>
      <div
        ref={scrollRef}
        className="overflow-x-auto w-full max-w-[98vw] sm:max-w-[1280px] mx-auto hide-scrollbar"
        style={{
          height: '320px',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE 10+
        }}
      >
        <div className="flex flex-row space-x-4 sm:space-x-10 items-start mt-4">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="w-[90vw] sm:w-[85vw] max-w-[600px] flex-shrink-0"
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;     /* Firefox */
          }
        `}
      </style>
    </div>
  );
};

export default Section8;