import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#f5f0e6] shadow-md sticky top-0 z-50 flex items-center justify-between px-2 lg:pr-0 lg:pl-3 py-2">
      {/* Logo and Hamburger Menu Container */}
      <div
        className="flex items-center justify-between gap-3 px-3 py-2 bg-[#E4CBBA] rounded-lg shadow font-extrabold text-lg tracking-wide w-full lg:w-auto"
        style={{ fontFamily: 'serif' }}
      >
        {/* Logo Image (clickable) + Text (not clickable) */}
        <div className="flex items-center gap-3">
          {/* Only the image is wrapped in Link */}
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dsddldquo/image/upload/v1753070721/kilmgvedc34rplxbvvkl.png"
              alt="Logo"
              className="w-12 h-12 object-cover shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </Link>

          {/* Text is just static, no navigation */}
          <span className="select-none">
            <span className="text-[#8B5C2A]">ROMANG</span>
            <span className="text-[#8B5C2A]"> PATEL</span>
            <span className="text-[#8B5C2A]"> & ASSOCIATES</span>
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links and Button (Grouped on the Right) */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#f5f0e6] lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
          <Link to="/" className="block lg:inline-block text-black hover:text-gray-600 py-2 lg:py-0 font-medium">
            Home
          </Link>
          <Link to="/about" className="block lg:inline-block text-black hover:text-gray-600 py-2 lg:py-0 font-medium">
            About
          </Link>
          <Link to="/services" className="block lg:inline-block text-black hover:text-gray-600 py-2 lg:py-0 font-medium">
            Services
          </Link>
          <Link to="/projects" className="block lg:inline-block text-black hover:text-gray-600 py-2 lg:py-0 font-medium">
            Projects
          </Link>
          <Link to="/careers" className="block lg:inline-block text-black hover:text-gray-600 py-2 lg:py-0 font-medium">
            Careers
          </Link>
          <Link to="/contact" className="block lg:inline-block text-black hover:text-gray-600 py-2 lg:py-0 font-medium">
            Contact
          </Link>
          <Link
            to="/quote"
            className="block lg:inline-block text-black hover:text-gray-600 font-semibold flex flex-row items-stretch space-x-2 -my-2"
          >
            <span className="flex items-center gap-3 px-6 py-3 bg-[#E4CBBA] text-lg rounded-lg shadow-md">
              GET A QUOTE <FaArrowRight size={22} />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
