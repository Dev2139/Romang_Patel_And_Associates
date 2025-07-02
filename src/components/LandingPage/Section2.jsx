import { FaUsers, FaCheck, FaAward, FaUserCog } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const CustomerSection = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    projects: 0,
    awards: 0,
    workers: 0
  });

  useEffect(() => {
    const finalValues = {
      customers: 100,
      projects: 100,
      awards: 100,
      workers: 100
    };

    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    
    const animateCounters = () => {
      let currentStep = 0;
      
      const counterInterval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          customers: Math.floor(finalValues.customers * progress),
          projects: Math.floor(finalValues.projects * progress),
          awards: Math.floor(finalValues.awards * progress),
          workers: Math.floor(finalValues.workers * progress)
        });

        if (currentStep >= steps) {
          clearInterval(counterInterval);
          setCounters(finalValues);
        }
      }, interval);
    };

    animateCounters();
  }, []);

  const stats = [
    {
      icon: <FaUsers className="text-[#000000] text-3xl" />,
      count: '3453',
      title: 'Happy Customers',
      description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit',
    },
    {
      icon: <FaCheck className="text-[#000000] text-3xl" />,
      count: '4234',
      title: 'Project Done',
      description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit',
    },
    {
      icon: <FaAward className="text-[#000000] text-3xl" />,
      count: '3123',
      title: 'Awards Win',
      description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit',
    },
    {
      icon: <FaAward className="text-[#000000] text-3xl" />,
      count: '3123',
      title: 'Awards Win',
      description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit',
    },
  ];

  return (
    <div className="w-full py-10 bg-[#EFE2D9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start bg-transparent p-0">
              <div className="flex flex-row items-center mb-2">
                <div className="flex items-center justify-center w-16 h-16 bg-[#E6CCBB] rounded-full mr-4 shadow-lg">
                  {stat.icon}
                </div>
                <span className="text-4xl font-bold text-black">{stat.count}+</span>
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