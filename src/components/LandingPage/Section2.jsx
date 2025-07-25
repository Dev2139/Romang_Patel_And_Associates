import { FaUsers, FaCheck, FaAward, FaUserCog } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const CustomerSection = () => {
  const finalValues = {
    customers: 3453,
    projects: 4234,
    awards: 3123,
    workers: 2345,
  };

  const [counters, setCounters] = useState({
    customers: 0,
    projects: 0,
    awards: 0,
    workers: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;

    let currentStep = 0;
    const counterInterval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCounters({
        customers: Math.floor(finalValues.customers * progress),
        projects: Math.floor(finalValues.projects * progress),
        awards: Math.floor(finalValues.awards * progress),
        workers: Math.floor(finalValues.workers * progress),
      });
      if (currentStep >= steps) {
        clearInterval(counterInterval);
        setCounters(finalValues);
      }
    }, interval);
    return () => clearInterval(counterInterval);
  }, [hasAnimated]);

  const stats = [
    {
      icon: <FaUsers className="text-[#000000] text-3xl" />,
      key: 'customers',
      title: 'Distinguished Clients',
      description: 'We are privileged to serve a discerning clientele who entrust us to transform their visions into enduring architectural landmarks, fostering relationships built on trust, collaboration, and shared ambition.',
    },
    {
      icon: <FaCheck className="text-[#000000] text-3xl" />,
      key: 'projects',
      title: 'Signature Projects',
      description: 'Our diverse portfolio spans bespoke residences, innovative commercial spaces, and iconic public works—each project a testament to our commitment to design excellence and contextual sensitivity.',
    },
    {
      icon: <FaAward className="text-[#000000] text-3xl" />,
      key: 'awards',
      title: 'Industry Accolades',
      description: 'Recognized by peers and institutions alike, our work has garnered prestigious awards for innovation, sustainability, and architectural distinction on both national and international stages.',
    },
    {
      icon: <FaUserCog className="text-[#000000] text-3xl" />,
      key: 'workers',
      title: 'Expert Team',
      description: 'Our multidisciplinary team of architects, designers, and specialists brings together technical mastery and creative vision to deliver transformative spaces that inspire and endure.',
    },
  ];

  return (
    <div ref={sectionRef} className="w-full py-10 bg-[#EFE2D9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start bg-transparent p-0">
              <div className="flex flex-row items-center mb-2">
                <div className="flex items-center justify-center w-16 h-16 bg-[#E6CCBB] rounded-full mr-4 shadow-lg">
                  {stat.icon}
                </div>
                <span className="text-4xl font-bold text-black">{counters[stat.key]}+</span>
              </div>
              <h5 className="text-2xl font-bold text-black mb-1">{stat.title}</h5>
              <p className="text-base text-black text-left">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;