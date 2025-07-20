import React, { useRef, useEffect } from 'react';

const ReviewCard = ({ name, location, review }) => (
  <div
    className="bg-[#d1bfa7] w-[90vw] sm:w-[85vw] max-w-[600px] h-[280px] sm:h-[320px] rounded-xl shadow-lg p-4 sm:p-8 flex flex-col flex-shrink-0"
    style={{ boxShadow: '4px 8px 8px #b3a89a' }}
  >
    <div className="flex items-center mb-4">
      <div className="w-14 h-14 sm:w-20 sm:h-20 bg-black rounded-full mr-4 flex-shrink-0" />
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
      name: 'Dev Patel',
      location: 'Modasa, Gujarat',
      review:
        'With a legacy spanning more than three decades, our architectural firm has stood as a beacon of innovation, precision, and timeless design. Since our inception, we have dedicated ourselves to shaping environments that are not just built forms, but immersive experiences. Our journey has been one of continual evolution, exploring the intersections of function, aesthetics, sustainability, and the human spirit.',
    },
    {
      name: 'Dev Patel',
      location: 'Modasa, Gujarat',
      review:
        'With a legacy spanning more than three decades, our architectural firm has stood as a beacon of innovation, precision, and timeless design. Since our inception, we have dedicated ourselves to shaping environments that are not just built forms, but immersive experiences. Our journey has been one of continual evolution, exploring the intersections of function, aesthetics, sustainability, and the human spirit.',
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
        className="overflow-x-auto w-full max-w-[98vw] sm:max-w-[1280px] mx-auto"
        style={{ height: '320px', scrollBehavior: 'smooth' }}
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
    </div>
  );
};

export default Section8;