import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import ProjectForm from './ProjectForm';

const AdminDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('admin_token');
        if (!token) {
            navigate('/admin/login');
        } else {
            fetchProjects();
        }
    }, [navigate]);

    const fetchProjects = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('id', { ascending: false });
        
        if (error) {
            console.error('Error fetching projects:', error);
        } else {
            setProjects(data || []);
        }
        setLoading(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        navigate('/admin/login');
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            const { error } = await supabase
                .from('projects')
                .delete()
                .eq('id', id);
            
            if (error) {
                alert('Error deleting project');
            } else {
                fetchProjects();
            }
        }
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setShowForm(true);
    };

    return (
        <div className="min-h-screen bg-[#f5f0e6] p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <div className="flex gap-4">
                        <button
                            onClick={() => { setShowForm(true); setEditingProject(null); }}
                            className="bg-[#D6BFA7] text-white px-6 py-2 rounded-full font-semibold hover:bg-black transition"
                        >
                            Add New Project
                        </button>
                        <button
                            onClick={handleLogout}
                            className="border border-gray-400 text-gray-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {showForm ? (
                    <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
                            <button onClick={() => setShowForm(false)} className="text-gray-500 text-2xl">&times;</button>
                        </div>
                        <ProjectForm 
                            project={editingProject} 
                            onSuccess={() => { setShowForm(false); fetchProjects(); }}
                            onCancel={() => setShowForm(false)}
                        />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading ? (
                            <div className="col-span-full text-center py-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D6BFA7] mx-auto mb-4"></div>
                                <p className="text-gray-500 font-medium">Fetching your projects...</p>
                            </div>
                        ) : projects.length === 0 ? (
                            <div className="col-span-full text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                                <p className="text-gray-400 italic">No projects found. Time to create something beautiful!</p>
                            </div>
                        ) : (
                            projects.map((project) => (
                                <div 
                                    key={project.id} 
                                    className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 flex flex-col h-full"
                                >
                                    {/* Project Preview Image */}
                                    <div className="relative h-48 overflow-hidden bg-gray-100">
                                        <img 
                                            src={project.images && project.images[0] ? project.images[0] : 'https://via.placeholder.com/400x300?text=No+Image'} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-700 shadow-sm">
                                            {project.category}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{project.title}</h3>
                                        <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-1">
                                            {project.description || 'No description provided.'}
                                        </p>

                                        {/* Actions */}
                                        <div className="flex gap-3 pt-4 border-t border-gray-50">
                                            <button 
                                                onClick={() => handleEdit(project)}
                                                className="flex-1 bg-gray-100 text-gray-800 py-2.5 rounded-xl font-bold hover:bg-black hover:text-white transition-all duration-300"
                                            >
                                                Edit Detail
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(project.id)}
                                                className="bg-red-50/50 text-red-500 p-2.5 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 group/del"
                                                title="Delete Project"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
