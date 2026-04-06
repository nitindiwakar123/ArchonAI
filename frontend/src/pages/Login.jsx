import { useState } from "react";
import axios from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/userSlice";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await axios.post(API_PATHS.AUTH.LOGIN, form);
      localStorage.setItem("token", res.data.token);
      dispatch(setUserInfo(res.data));
      navigate("/dashboard");
    } catch (err) {
      // In a principal-level app, we avoid window.alert
      console.error("Authentication Failed", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4 selection:bg-cyan-500/30">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-md relative group">
        {/* Subtle Outer Border Glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
        
        <div className="relative bg-[#0d0d0d] border border-gray-800 p-10 rounded-2xl shadow-2xl">
          
          {/* Header */}
          <header className="text-center mb-10">
            <div className="inline-block mb-4 p-3 rounded-xl bg-gray-900 border border-gray-800">
               <div className="w-6 h-6 bg-cyan-500 rounded-sm animate-pulse" />
            </div>
            <h2 className="text-3xl font-black tracking-tighter text-white">
              System <span className="text-cyan-500">Login</span>
            </h2>
            <p className="text-gray-500 mt-2 text-xs uppercase tracking-[0.2em] font-bold">
              Verification Required
            </p>
          </header>

          <div className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">
                Identity_Email
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
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  Secure_Pass
                </label>
                <span className="text-[9px] text-cyan-600 hover:text-cyan-400 cursor-pointer transition-colors font-bold uppercase tracking-tighter">
                  Forgot?
                </span>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-black border border-gray-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/10 transition-all placeholder:text-gray-700"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                value={form.password}
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 text-sm rounded-xl p-3">
                {error}
              </div>
            )}
            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-cyan-400 transition-all active:scale-[0.98] shadow-xl hover:shadow-cyan-500/10 mt-4 uppercase tracking-tighter"
            >
              Authenticate
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-[1px] bg-gray-900"></div>
            <p className="px-4 text-gray-700 text-[10px] font-mono">OR</p>
            <div className="flex-1 h-[1px] bg-gray-900"></div>
          </div>

          {/* Signup Link */}
          <footer className="text-center">
            <p className="text-sm text-gray-500">
              New to the platform?{" "}
              <Link
                to="/signup"
                className="text-white font-bold hover:text-cyan-400 transition-colors underline underline-offset-4 decoration-gray-800 hover:decoration-cyan-500/50"
              >
                Create Account
              </Link>
            </p>
          </footer>
        </div>
      </div>
      
    </div>
  );
};

export default Login;