import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "All",
  "Commercial",
  "Farm House",
  "Housing",
  "Interior",
  "Office Design",
  "Residence",
];

const commercialSubcategories = [
  "All",
  "Gym",
  "Hospital",
  "Hotel and Resort",
  "Institute",
  "Salon",
];

const Section3 = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load projects");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Reset subcategory when category changes
  useEffect(() => {
    setSelectedSubcategory("All");
  }, [selectedCategory]);

  let filteredProjects = projects;
  if (selectedCategory === "All") {
    // no filter
  } else if (selectedCategory === "Commercial") {
    filteredProjects = projects.filter((p) => p.category === "Commercial");
    if (selectedSubcategory !== "All") {
      filteredProjects = filteredProjects.filter(
        (p) => p.subcategory === selectedSubcategory
      );
    }
  } else {
    filteredProjects = projects.filter((p) => p.category === selectedCategory);
  }

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border transition-colors duration-200 text-sm font-medium ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Subcategory Bar for Commercial */}
      {selectedCategory === "Commercial" && (
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {commercialSubcategories.map((subcat) => (
            <button
              key={subcat}
              className={`px-3 py-1 rounded-full border transition-colors duration-200 text-xs font-medium ${
                selectedSubcategory === subcat
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
              }`}
              onClick={() => setSelectedSubcategory(subcat)}
            >
              {subcat}
            </button>
          ))}
        </div>
      )}

      {/* Loading/Error States */}
      {loading && (
        <div className="text-center text-gray-500 py-10">Loading projects...</div>
      )}
      {error && (
        <div className="text-center text-red-500 py-10">{error}</div>
      )}

      {/* Gallery Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden group bg-transparent"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="relative w-full h-72">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 bg-[#f5f0e6]"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <h3 className="text-2xl font-bold text-white text-center drop-shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {project.title}
                  </h3>
                </div>
              </div>
              {project.category === "Commercial" && project.subcategory && (
                <div className="text-xs text-gray-500 text-center mt-1">
                  {project.subcategory}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Section3;
