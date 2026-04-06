import { useState } from "react";
import axios from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post(API_PATHS.AUTH.SIGNUP, form);
      navigate("/login");
    } catch (err) {
      // Avoid alerts for a high-end feel
      console.error("System Registration Failed", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4 selection:bg-cyan-500/30 py-10">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="w-full max-w-md relative group">
        {/* Subtle Outer Border Glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
        
        <div className="relative bg-[#0d0d0d] border border-gray-800 p-10 rounded-2xl shadow-2xl">
          
          {/* Header */}
          <header className="text-center mb-10">
            <div className="inline-block mb-4 p-3 rounded-xl bg-gray-900 border border-gray-800">
               <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
               </svg>
            </div>
            <h2 className="text-3xl font-black tracking-tighter text-white">
              Create <span className="text-cyan-500">Account</span>
            </h2>
            <p className="text-gray-500 mt-2 text-xs uppercase tracking-[0.2em] font-bold">
              Register New Operator
            </p>
          </header>

          <div className="space-y-5">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">
                Full_Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-black border border-gray-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/10 transition-all placeholder:text-gray-700"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                value={form.name}
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">
                Registry_Email
              </label>
              <input
                type="email"
                placeholder="name@domain.com"
                className="w-full bg-black border border-gray-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/10 transition-all placeholder:text-gray-700"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">
                Secure_Passcode
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-black border border-gray-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/10 transition-all placeholder:text-gray-700"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                value={form.password}
              />
            </div>

            {/* Signup Button */}
            <button
              onClick={handleSignup}
              className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-cyan-400 transition-all active:scale-[0.98] shadow-xl hover:shadow-cyan-500/10 mt-4 uppercase tracking-tighter"
            >
              Create Account
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-[1px] bg-gray-900"></div>
            <p className="px-4 text-gray-700 text-[10px] font-mono">OR</p>
            <div className="flex-1 h-[1px] bg-gray-900"></div>
          </div>

          {/* Login Link */}
          <footer className="text-center">
            <p className="text-sm text-gray-500">
              Already have an identity?{" "}
              <Link
                to="/login"
                className="text-white font-bold hover:text-cyan-400 transition-colors underline underline-offset-4 decoration-gray-800 hover:decoration-cyan-500/50"
              >
                Log In
              </Link>
            </p>
          </footer>
        </div>
      </div>
      
    
    </div>
  );
};

export default Signup;