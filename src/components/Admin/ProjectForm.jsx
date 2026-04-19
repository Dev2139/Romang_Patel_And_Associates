import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { supabase } from '../../supabaseClient';

const ProjectForm = ({ project, onSuccess, onCancel }) => {
    const [formData, setFormData] = useState({
        title: '',
        title2: '',
        description: '',
        category: 'Residence',
        subcategory: '',
        images: []
    });
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (project) {
            setFormData(project);
        }
    }, [project]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        setUploading(true);
        const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
        const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'ml_default';

        const newImages = [...formData.images];

        try {
            for (const file of files) {
                const data = new FormData();
                data.append('file', file);
                data.append('upload_preset', uploadPreset);

                const res = await axios.post(
                    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                    data
                );
                newImages.push(res.data.secure_url);
            }
            setFormData({ ...formData, images: newImages });
        } catch (err) {
            console.error('Error uploading images:', err);
            alert('Image upload failed. Check your Cloudinary Cloud Name and Upload Preset.');
        } finally {
            setUploading(false);
        }
    };

    const removeImage = (index) => {
        const newImages = formData.images.filter((_, i) => i !== index);
        setFormData({ ...formData, images: newImages });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (project) {
                // Update
                const { error } = await supabase
                    .from('projects')
                    .update(formData)
                    .eq('id', project.id);
                if (error) throw error;
            } else {
                // Insert
                const { error } = await supabase
                    .from('projects')
                    .insert([formData]);
                if (error) throw error;
            }
            onSuccess();
        } catch (err) {
            console.error('Error saving project:', err);
            alert('Error saving project');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Subtitle</label>
                    <input name="title2" value={formData.title2} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded">
                        <option>Residence</option>
                        <option>Commercial</option>
                        <option>Farm House</option>
                        <option>Housing</option>
                        <option>Interior</option>
                        <option>Office Design</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Subcategory</label>
                    <input name="subcategory" value={formData.subcategory} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded h-24" />
            </div>

            {/* Image Upload Section */}
            <div className="space-y-4">
                <label className="block text-lg font-semibold text-gray-800">Project Gallery</label>
                
                {/* Drag & Drop Zone */}
                <div 
                    className={`relative border-2 border-dashed rounded-2xl p-8 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group
                        ${uploading ? 'bg-gray-50 border-gray-300' : 'bg-[#EFE2D9]/20 border-[#D6BFA7] hover:bg-[#EFE2D9]/40 hover:border-black'}`}
                >
                    <input 
                        type="file" 
                        multiple 
                        onChange={handleImageUpload} 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        disabled={uploading}
                    />
                    <div className="text-center space-y-2">
                        <div className="bg-[#D6BFA7] text-white p-4 rounded-full mx-auto w-fit group-hover:scale-110 transition-transform shadow-lg">
                            {uploading ? (
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12 a2 2 0 002-2v-1M16 8l-4-4m0 0l-4 4m4-4v12" />
                                </svg>
                            )}
                        </div>
                        <p className="text-gray-700 font-medium">
                            {uploading ? 'Uploading your masterpieces...' : 'Drag & drop or click to upload'}
                        </p>
                        <p className="text-xs text-gray-500">Supports JPG, PNG up to 10MB each</p>
                    </div>
                </div>

                {/* Gallery Preview */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
                    {formData.images.map((url, idx) => (
                        <div 
                            key={idx} 
                            className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group ring-1 ring-black/5"
                        >
                            <img 
                                src={url} 
                                alt={`Project ${idx + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                            
                            {/* Overlay Controls */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button 
                                    type="button" 
                                    onClick={() => removeImage(idx)}
                                    className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-red-500 transition-colors shadow-lg"
                                    title="Delete Image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {/* Main Image Badge */}
                            {idx === 0 && (
                                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md shadow-sm">
                                    Main Cover
                                </div>
                            )}

                            {/* Selection order indicator */}
                            <div className="absolute top-2 right-2 bg-white/60 backdrop-blur-md text-black text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-sm">
                                {idx + 1}
                            </div>
                        </div>
                    ))}
                    
                    {/* Empty Slots Placeholder */}
                    {formData.images.length === 0 && !uploading && (
                        <div className="col-span-full py-12 text-center border-2 border-dashed border-gray-200 rounded-2xl">
                            <p className="text-gray-400 italic">No images added yet. Your project needs some visual magic!</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex gap-4 pt-8 border-t border-gray-100">
                <button 
                    type="submit" 
                    className="flex-1 bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-[#D6BFA7] hover:text-black transition-all duration-300 shadow-lg active:scale-95"
                    disabled={uploading}
                >
                    {project ? 'Update Project' : 'Publish Project'}
                </button>
                <button 
                    type="button" 
                    onClick={onCancel} 
                    className="px-8 py-3 rounded-xl font-semibold text-gray-500 hover:bg-gray-100 transition-colors"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default ProjectForm;
