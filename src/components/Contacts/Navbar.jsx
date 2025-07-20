import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#f5f0e6] shadow-md sticky top-0 z-50 flex items-center justify-between px-4 lg:pr-0 lg:pl-6 py-4">
      {/* Logo */}
      <a href="/" className="text-lg font-bold text-black">
        LOGO
      </a>

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

      {/* Navigation Links and Button (Grouped on the Right) */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#f5f0e6] lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
          <a href="/" className="block lg:inline-block text-black hover:text-gray-600 py-2 lg:py-0 font-medium">
            Home
          </a>
          <a href="/about" className="block lg:inline-block text-black hover:text-gray-600 py-2 lg:py-0 font-medium">
            About
          </a>
          <a href="/services" className="block lg:inline-block text-black hover:text-gray-600 py-2 lg:py-0 font-medium">
            Services
          </a>
          <a href="/projects" className="block lg:inline-block text-black hover:text-gray-600 py-2 lg:py-0 font-medium">
            Projects
          </a>
          <a href="/contact" className="block lg:inline-block text-black hover:text-gray-600 py-2 lg:py-0 font-medium">
            Contact
          </a>
          <a
            href="/quote"
            className="block lg:inline-block text-black hover:text-gray-600 font-medium flex flex-row items-stretch space-x-2 -my-4"
          >
            <span className='flex items-center gap-3 px-4 py-4 bg-[#E4CBBA]'>GET A QUOTE <FaArrowRight /></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;