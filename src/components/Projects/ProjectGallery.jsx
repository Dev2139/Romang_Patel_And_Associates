import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProjectGallery = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load projects");
        return res.json();
      })
      .then((data) => {
        const found = data.find((p) => String(p.id) === String(projectId));
        setProject(found);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [projectId]);

  const openModal = (idx) => {
    setActiveImageIdx(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = useCallback(() => {
    setActiveImageIdx((idx) => (idx + 1) % project.images.length);
  }, [project]);

  const prevImage = useCallback(() => {
    setActiveImageIdx((idx) => (idx === 0 ? project.images.length - 1 : idx - 1));
  }, [project]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKey = (e) => {
      if (!modalOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen, nextImage, prevImage]);

  const getGridColsClass = () => {
    const count = project.images.length;
    return count >= 7 ? "md:grid-cols-4" : "md:grid-cols-3";
  };

  if (loading) return <div className="text-center py-20 text-gray-500 text-lg">Loading project...</div>;
  if (error) return <div className="text-center py-20 text-red-500 text-lg">{error}</div>;
  if (!project) return <div className="text-center py-20 text-gray-500 text-lg">Project not found.</div>;

  return (
    <div className="min-h-screen bg-[#f5f0e6]">
      <div className={`relative py-10 px-4 max-w-5xl mx-auto ${modalOpen ? "blur-sm" : ""}`}>
        <button
          className="text-sm text-blue-600 border border-blue-600 px-4 py-1 rounded-full hover:bg-blue-600 hover:text-white transition mb-6"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>

        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">{project.title}</h2>

        {project.title2 && (
          <h3 className="text-xl font-medium text-center text-gray-600 mb-2">{project.title2}</h3>
        )}

        {project.description && (
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">{project.description}</p>
        )}

        {project.category === "Commercial" && project.subcategory && (
          <div className="text-center text-xs text-gray-500 mb-4 uppercase tracking-widest">
            {project.subcategory}
          </div>
        )}

        <div className={`grid gap-4 grid-cols-2 ${getGridColsClass()}`}>
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} ${idx + 1}`}
              onClick={() => openModal(idx)}
              className="w-full h-60 object-cover rounded-xl cursor-pointer bg-[#f5f0e6] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-60 text-white rounded-full flex items-center justify-center text-2xl hover:bg-opacity-80 transition"
              onClick={closeModal}
            >
              <FiX />
            </button>

            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
              onClick={prevImage}
              aria-label="Previous Image"
            >
              <FiChevronLeft size={24} />
            </button>

            <img
              src={project.images[activeImageIdx]}
              alt="Project"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />

            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
              onClick={nextImage}
              aria-label="Next Image"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
