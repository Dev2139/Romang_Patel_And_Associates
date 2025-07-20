import React from "react";

const About = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-12 mb-12"
      style={{
        backgroundImage: "url(https://res.cloudinary.com/dsddldquo/image/upload/v1752657956/wyhie8ecugtk2jwhxcsr.png)"
      }}
    >
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-down">Projects</h1>
        <nav aria-label="breadcrumb" className="animate-slide-in-down">
          <ol className="flex flex-wrap text-white space-x-2">
            <li className="breadcrumb-item">
              <a className="text-white hover:underline" href="#">Home</a>
            </li>
            <span className="mx-2">/</span>
            <li className="breadcrumb-item">
              <a className="text-white hover:underline" href="#">Pages</a>
            </li>
            <span className="mx-2">/</span>
            <li className="breadcrumb-item text-white" aria-current="page">
              Projects
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default About;
