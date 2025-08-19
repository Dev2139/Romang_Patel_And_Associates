import React, { useState, useEffect } from 'react';
import gallery3 from '../../assets/gallery-3.jpg';
import gallery4 from '../../assets/gallery-4.jpg';
import gallery5 from '../../assets/gallery-5.jpg';

const socialLinks = [
  {
    type: 'linkedin',
    url: 'https://linkedin.com/',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z"/></svg>
    )
  },
  {
    type: 'instagram',
    url: 'https://instagram.com/',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
    )
  }
];

const teamMembers = [
  {
    name: 'Shailesh M. Patel',
    role: 'Civil Engineer',
    img: 'https://res.cloudinary.com/dsddldquo/image/upload/v1754400543/jqmayleol3rjzhygjmte.png',
    linkedin: 'https://linkedin.com/in/devpatel1',
    // instagram: 'https://instagram.com/devpatel1',
    bio: [
      'Shailesh M. Patel is a highly experienced civil engineer with over 20 years in the industry.',
      'He has led numerous large-scale infrastructure projects and is known for his attention to detail and commitment to quality.'
    ]
  },
  {
    name: 'Romang Patel',
    role: 'Principal Architect',
    img: 'https://res.cloudinary.com/dsddldquo/image/upload/v1754400384/xg6w75tf0by9kbhyhs0w.jpg',
    linkedin: 'https://www.linkedin.com/in/romang-patel-1702b7230/',
    instagram: 'https://www.instagram.com/romangpatelandassociates',
    bio: [
      'Romang Patel is a visionary architect with a passion for sustainable and innovative design.',
      'He has worked on a variety of commercial and residential projects, always pushing the boundaries of creativity.'
    ]
  },
  {
    name: 'Dr. I I Pandya',
    role: 'Structural consultant',
    img: 'https://res.cloudinary.com/dsddldquo/image/upload/v1753025495/jx423wn1zspeb9fccvpx.jpg',
    linkedin: 'https://linkedin.com/in/devpatel3',
    // instagram: 'https://instagram.com/devpatel3',
    bio: [
      'Dr. I I Pandya is a renowned structural consultant with a PhD in structural engineering.',
      'He has contributed to the safety and stability of many landmark buildings.'
    ]
  },
  {
    name: 'CodingGita',
    role: 'Technical Support',
    img: 'https://res.cloudinary.com/dsddldquo/image/upload/v1752774375/eeozcwyfcp3areuigs1f.png',
    linkedin: 'https://linkedin.com/in/devpatel4',
    instagram: 'https://www.instagram.com/codinggita/',
    bio: [
      'CodingGita is an educational institution focused on technology, specifically bridging the gap between academic learning and industry practices. They offer programs designed to equip students with practical skills and insights relevant to the tech industry, with a strong emphasis on real-world applications and project-based learning. According to CodingGita, their goal is to make students valuable assets in the technology sector. ',
    ]
  },
  {
    name: 'Dr. Harsh Patel',
    role: 'Vastu consultant',
    img: 'https://res.cloudinary.com/dsddldquo/image/upload/v1753016169/g106wse7jiyt1mygdxyz.jpg',
    linkedin: 'https://linkedin.com/in/devpatel5',
    // instagram: 'https://instagram.com/devpatel5',
    bio: [
      'Dr. Harsh Patel is a leading Vastu consultant, helping clients achieve harmony in their living and working spaces.',
      'He combines traditional wisdom with modern science for optimal results.'
    ]
  },
  {
    name: 'Dev Patel',
    role: 'Software Developer Engineer',
    img: 'https://res.cloudinary.com/dsddldquo/image/upload/v1752820162/lploedbjhmhoj4oaom0e.jpg',
    portfolio: 'https://devpatel-portfolioandcontacts.netlify.app/', 
    linkedin: 'https://linkedin.com/in/devpatel2139',
    bio: [
      'Dev Patel is a skilled software developer engineer with a strong background in web and mobile applications.',
      'He is passionate about building scalable, user-friendly solutions and is always eager to learn new technologies.'
    ]
  },
];

const TeamMember = ({ name, role, img, linkedin, instagram, portfolio, onImgClick, onInfoClick }) => (
  <div className="bg-white rounded-tl-[24px] overflow-hidden shadow-lg min-h-[28rem] flex flex-col">
    <div className="flex flex-1 flex-col sm:flex-row">
      <div className="w-full sm:w-3/4 h-[32rem] sm:h-[24rem] bg-black rounded-tl-[20px] rounded-tr-[48px] rounded-bl-[20px] rounded-br-[20px] overflow-hidden cursor-pointer" onClick={onImgClick}>
        <img src={img} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="w-full sm:w-1/4 flex flex-row sm:flex-col items-center justify-center gap-4 sm:gap-8 mt-4 sm:mt-56">
        {/* Info Icon */}
        <button
          onClick={onInfoClick}
          className="w-12 h-12 bg-[#d2bda7] rounded-full shadow-md flex items-center justify-center hover:bg-[#bfa07a] transition-colors mb-0 sm:mb-2"
          title="More Info"
        >
          {/* Info SVG */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-white"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-7h2v5h-2zm0-6h2v2h-2z"/></svg>
        </button>
        {/* Only show Instagram if present */}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#d2bda7] rounded-full shadow-md flex items-center justify-center hover:bg-[#bfa07a] transition-colors"
          >
            {/* Instagram SVG */}
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        )}
        {portfolio && (
          <a
            href={portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#d2bda7] rounded-full shadow-md flex items-center justify-center hover:bg-[#bfa07a] transition-colors"
            title="Portfolio"
          >
            {/* Portfolio SVG (globe/world icon) */}
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-white"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c1.657 0 3.156.672 4.242 1.758A5.978 5.978 0 0 1 20 12c0 1.657-.672 3.156-1.758 4.242A5.978 5.978 0 0 1 12 20a5.978 5.978 0 0 1-4.242-1.758A5.978 5.978 0 0 1 4 12c0-1.657.672-3.156 1.758-4.242A5.978 5.978 0 0 1 12 4zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 2c-1.104 0-2 .896-2 2h4c0-1.104-.896-2-2-2zm-2 4v2h4v-2h-4zm0 4v2c0 1.104.896 2 2 2s2-.896 2-2v-2h-4z"/></svg>
          </a>
        )}
      </div>
    </div>
    <div className="p-4 text-left">
      <h5 className="text-2xl font-bold leading-none">{name}</h5>
      <span className="text-sm text-gray-700">{role}</span>
    </div>
  </div>
);

const Section7 = () => {
  const [modalImg, setModalImg] = useState(null);
  const [infoCardIdx, setInfoCardIdx] = useState(null); // New state for info card

  // Disable background scroll when modal or info card is open
  useEffect(() => {
    if (modalImg !== null || infoCardIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalImg, infoCardIdx]);

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);
  const openInfoCard = (idx) => setInfoCardIdx(idx);
  const closeInfoCard = () => setInfoCardIdx(null);

  return (
    <div className="min-h-screen py-10 px-2 mt-4" style={{
      background: 'linear-gradient(to right, #EFE2D9, #D6BFA7)'
    }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-[#f5a623] text-sm font-bold uppercase mb-2">Our Team Members</div>
          <h1 className="text-4xl lg:text-4xl font-bold text-gray-800 mb-4">Experienced Team Members</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <TeamMember
              key={idx}
              name={member.name}
              role={member.role}
              img={member.img}
              linkedin={member.linkedin}
              instagram={member.instagram}
              portfolio={member.portfolio}
              onImgClick={() => openModal(member.img)}
              onInfoClick={() => openInfoCard(idx)}
            />
          ))}
        </div>
      </div>
      {modalImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-full max-h-full p-4" onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80">&times;</button>
            <img src={modalImg} alt="Team member" className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg" />
          </div>
        </div>
      )}
      {/* Info Card Popover */}
      {infoCardIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md" onClick={closeInfoCard}>
          <div className="relative bg-white bg-opacity-30 rounded-lg shadow-2xl w-full max-w-3xl mx-4 md:mx-auto flex flex-col md:flex-row overflow-hidden" onClick={e => e.stopPropagation()}>
            <button onClick={closeInfoCard} className="absolute top-2 right-2 text-gray-700 text-3xl font-bold bg-white bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90">&times;</button>
            {/* Person's Image */}
            <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-100 p-8 min-h-[28rem]">
              <img src={teamMembers[infoCardIdx].img} alt={teamMembers[infoCardIdx].name} className="object-cover rounded-lg w-80 h-96 shadow-lg" />
            </div>
            {/* Info Section */}
            <div className="md:w-1/2 w-full flex flex-col justify-center p-6">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">{teamMembers[infoCardIdx].name}</h2>
              <p className="text-lg text-[#f5a623] font-semibold mb-4">{teamMembers[infoCardIdx].role}</p>
              {teamMembers[infoCardIdx].bio && teamMembers[infoCardIdx].bio.map((para, i) => (
                <p key={i} className="text-gray-700 mb-2">{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section7;