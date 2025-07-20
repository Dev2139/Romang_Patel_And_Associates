import React, { useState } from 'react';
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
    img: 'https://res.cloudinary.com/dsddldquo/image/upload/v1752773759/fqr3kwezmwchjwfdwpyh.png',
    linkedin: 'https://linkedin.com/in/devpatel1',
    instagram: 'https://instagram.com/devpatel1',
  },
  {
    name: 'Romang Patel',
    role: 'Principal Architect',
    img: 'https://res.cloudinary.com/dsddldquo/image/upload/v1752773974/jhzxdthwiryco7vmtzgw.png',
    linkedin: 'https://www.linkedin.com/in/romang-patel-1702b7230/',
    instagram: 'https://www.instagram.com/rome.sign',
  },
  {
    name: 'Dr. I I Pandya',
    role: 'Structural consultant',
    img: 'https://res.cloudinary.com/dsddldquo/image/upload/v1753025495/jx423wn1zspeb9fccvpx.jpg',
    linkedin: 'https://linkedin.com/in/devpatel3',
    instagram: 'https://instagram.com/devpatel3',
  },
  {
    name: 'CodingGita',
    role: 'Technical Support',
    img: 'https://res.cloudinary.com/dsddldquo/image/upload/v1752774375/eeozcwyfcp3areuigs1f.png',
    linkedin: 'https://linkedin.com/in/devpatel4',
    instagram: 'https://instagram.com/devpatel4',
  },
  {
    name: 'Dr. Harsh Patel',
    role: 'Vastu consultant',
    img: 'https://res.cloudinary.com/dsddldquo/image/upload/v1753016169/g106wse7jiyt1mygdxyz.jpg',
    linkedin: 'https://linkedin.com/in/devpatel5',
    instagram: 'https://instagram.com/devpatel5',
  },
  {
    name: 'Dev Patel',
    role: 'Software Developer Engineer',
    img: 'https://res.cloudinary.com/dsddldquo/image/upload/v1752820162/lploedbjhmhoj4oaom0e.jpg',
    linkedin: 'https://linkedin.com/in/devpatel6',
    instagram: 'https://instagram.com/devpatel6',
  },
];

const TeamMember = ({ name, role, img, linkedin, instagram, onImgClick }) => (
  <div className="bg-white rounded-tl-[24px] overflow-hidden shadow-lg min-h-[28rem] flex flex-col">
    <div className="flex flex-1 flex-col sm:flex-row">
      <div className="w-full sm:w-3/4 h-[32rem] sm:h-[24rem] bg-black rounded-tl-[20px] rounded-tr-[48px] rounded-bl-[20px] rounded-br-[20px] overflow-hidden cursor-pointer" onClick={onImgClick}>
        <img src={img} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="w-full sm:w-1/4 flex flex-row sm:flex-col items-center justify-center gap-4 sm:gap-8 mt-4 sm:mt-56">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#d2bda7] rounded-full shadow-md flex items-center justify-center hover:bg-[#bfa07a] transition-colors mb-0 sm:mb-2"
        >
          {/* LinkedIn SVG */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z"/></svg>
        </a>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#d2bda7] rounded-full shadow-md flex items-center justify-center hover:bg-[#bfa07a] transition-colors"
        >
          {/* Instagram SVG */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </a>
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

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

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
              onImgClick={() => openModal(member.img)}
            />
          ))}
        </div>
      </div>
      {modalImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={closeModal}>
          <div className="relative max-w-full max-h-full p-4" onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80">&times;</button>
            <img src={modalImg} alt="Team member" className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Section7;