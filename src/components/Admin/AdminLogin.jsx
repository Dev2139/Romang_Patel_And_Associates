import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        // Simulate slight delay for premium feel
        setTimeout(() => {
            const adminUser = import.meta.env.VITE_ADMIN_USERNAME;
            const adminPass = import.meta.env.VITE_ADMIN_PASSWORD;

            if (credentials.username === adminUser && credentials.password === adminPass) {
                localStorage.setItem('admin_token', 'logged_in');
                navigate('/admin');
            } else {
                setError('Authentication failed. Please check your credentials.');
            }
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-white flex overflow-hidden">
            {/* Left Section: Immersive Brand Visual */}
            <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden bg-black">
                <img 
                    src="/admin-bg.png" 
                    alt="Architecture" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105 animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent flex flex-col justify-end p-20">
                    <div className="space-y-4 max-w-xl animate-slide-in-up">
                        <h2 className="text-6xl font-extrabold text-[#D6BFA7] leading-tight">
                            Building Dreams, <br />
                            Managing Excellence.
                        </h2>
                        <p className="text-gray-300 text-lg">
                            Welcome to the control center. Here, we transform architectural visions into digital reality. 
                            Your tools are ready.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Section: Sophisticated Login Form */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center items-center px-8 sm:px-12 md:px-20 bg-[#fdfaf5]">
                <div className="w-full max-w-md space-y-12 animate-fade-in">
                    {/* Brand Identifier */}
                    <div className="text-center lg:text-left">
                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#D6BFA7] mb-2 block">
                            Administration Access
                        </span>
                        <h1 className="text-4xl font-black text-gray-900">Secure Portal</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                                placeholder="Enter admin username"
                                className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-4 focus:ring-[#D6BFA7]/20 focus:border-[#D6BFA7] outline-none transition-all duration-300 font-medium"
                                required
                            />
                        </div>
                        
                        <div className="space-y-2 relative">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-4 focus:ring-[#D6BFA7]/20 focus:border-[#D6BFA7] outline-none transition-all duration-300 font-medium pr-14"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#D6BFA7] transition-colors p-2"
                                >
                                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="p-4 bg-red-50 border border-red-100 rounded-xl animate-shake">
                                <p className="text-red-600 text-sm font-medium text-center">{error}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-black text-white py-5 rounded-2xl font-bold tracking-widest uppercase text-sm hover:bg-[#D6BFA7] hover:text-black transition-all duration-500 shadow-xl shadow-black/10 active:scale-95 flex items-center justify-center
                                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                            ) : (
                                'Initiate Access'
                            )}
                        </button>
                    </form>

                    <p className="text-center text-gray-400 text-xs mt-12">
                        &copy; 2026 Romang Patel & Associates. <br />
                        Architectural Integrity. Digital Security.
                    </p>
                </div>
            </div>

            <style>
                {`
                    @keyframes slide-in-up {
                        from { transform: translateY(50px); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }
                    @keyframes fade-in {
                        from { opacity: 0; transform: scale(0.98); }
                        to { opacity: 1; transform: scale(1); }
                    }
                    @keyframes shake {
                        0%, 100% { transform: translateX(0); }
                        25% { transform: translateX(-5px); }
                        75% { transform: translateX(5px); }
                    }
                    @keyframes pulse-slow {
                        0%, 100% { transform: scale(1.05); }
                        50% { transform: scale(1.1); }
                    }
                    .animate-slide-in-up { animation: slide-in-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
                    .animate-fade-in { animation: fade-in 1s ease-out forwards; }
                    .animate-pulse-slow { animation: pulse-slow 15s ease-in-out infinite; }
                    .animate-shake { animation: shake 0.4s ease-in-out; }
                `}
            </style>
        </div>
    );
};

export default AdminLogin;
