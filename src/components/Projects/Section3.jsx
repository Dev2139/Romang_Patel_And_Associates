import React, { useState, useEffect, useRef } from "react";

const CATEGORIES = [
  "all",
  "commercial",
  "farmhouse",
  "housing",
  "interior",
  "office design",
  "residence",
];

const COMMERCIAL_SUBCATEGORIES = [
  "all",
  "gym",
  "hospital",
  "hotel and resort",
  "institute",
  "salon",
];

const BATCH_SIZE = 20;

const Section3 = () => {
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  const loaderRef = useRef(null);

  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    setVisibleCount(BATCH_SIZE); // Reset visible count on filter change
    setSelectedSubcategory("all"); // Reset subcategory when category changes
  }, [selectedCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (!loaderRef.current) return;
      const rect = loaderRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredProjects.length));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects, selectedCategory, selectedSubcategory]);

  let filteredProjects = projects;
  if (selectedCategory !== "all") {
    filteredProjects = filteredProjects.filter((p) => p.category === selectedCategory);
    if (selectedCategory === "commercial" && selectedSubcategory !== "all") {
      filteredProjects = filteredProjects.filter((p) => (p.subcategory || "all") === selectedSubcategory);
    }
  }

  return (
    <section className="py-10 px-4 min-h-screen" style={{ backgroundColor: '#f5f0e6' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border transition-colors duration-200 ${selectedCategory === cat ? 'bg-black text-white' : 'bg-white text-black'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        {selectedCategory === "commercial" && (
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {COMMERCIAL_SUBCATEGORIES.map((subcat) => (
              <button
                key={subcat}
                className={`px-4 py-2 rounded-full border transition-colors duration-200 ${selectedSubcategory === subcat ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'}`}
                onClick={() => setSelectedSubcategory(subcat)}
              >
                {subcat.charAt(0).toUpperCase() + subcat.slice(1)}
              </button>
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProjects.slice(0, visibleCount).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}

                
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <span className="inline-block mt-2 px-2 py-1 text-xs bg-gray-200 rounded mr-2">{project.category}</span>
                {project.subcategory && (
                  <span className="inline-block mt-2 px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">{project.subcategory}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        {visibleCount < filteredProjects.length && (
          <div ref={loaderRef} className="text-center py-6 text-gray-500">
            Loading more projects...
          </div>
        )}
      </div>
    </section>
  );
};

export default Section3;
