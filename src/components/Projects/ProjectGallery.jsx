import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";

const ProjectGallery = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch("/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load projects");
        return res.json();
      })
      .then((data) => {
        const found = data.find((p) => String(p.id) === String(projectId));
        setProject(found);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [projectId]);

  const openModal = (idx) => {
    setActiveImageIdx(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const nextImage = () => setActiveImageIdx((idx) => (idx + 1) % project.images.length);
  const prevImage = () => setActiveImageIdx((idx) => (idx === 0 ? project.images.length - 1 : idx - 1));

  if (loading) return <div className="text-center py-10 text-gray-500">Loading project...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!project) return <div className="text-center py-10 text-gray-500">Project not found.</div>;

  return (
    <div className="min-h-screen bg-[#f5f0e6]">
      <div className="py-10 px-4 max-w-3xl mx-auto">
        <button className="mb-4 text-blue-600 hover:underline" onClick={() => navigate(-1)}>&larr; Back</button>
        <h2 className="text-3xl font-bold mb-2 text-center">{project.title}</h2>
        {project.category === "Commercial" && project.subcategory && (
          <div className="text-center text-xs text-gray-500 mb-4">{project.subcategory}</div>
        )}
        <div
          className={`grid gap-4 
            grid-cols-2
            md:${project.images.length <= 4 ? 'grid-cols-2' : project.images.length <= 6 ? 'grid-cols-3' : 'grid-cols-4'}`}
        >
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} ${idx + 1}`}
              className="w-full h-60 object-cover rounded-xl cursor-pointer bg-[#f5f0e6] hover:scale-105 transition-transform"
              style={{ borderRadius: '1rem' }}
              onClick={() => openModal(idx)}
            />
          ))}
        </div>
        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Modal content: Only the image, no background */}
            <div className="relative">
              <button
                className="absolute top-2 right-2 flex items-center justify-center w-10 h-10 bg-black bg-opacity-50 rounded-full text-white text-3xl hover:bg-opacity-80 transition"
                onClick={closeModal}
                aria-label="Close"
              >
                <FiX />
              </button>
              {/* Your image here */}
              <img src={project.images[activeImageIdx]} alt="Project" className="max-w-full max-h-[90vh] rounded-lg shadow-lg" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery; 