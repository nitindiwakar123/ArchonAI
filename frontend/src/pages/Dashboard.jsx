import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PATHS } from "../utils/apiPaths";
import axios from "../utils/axiosInstance";

const Dashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();

  const fetchSessions = async () => {
    try {
      const res = await axios.get(API_PATHS.SESSION.GET_ALL);
      setSessions(res.data.sessions); // ✅ Fix 1: was res.data
    } catch (err) {
      console.log(err.response);
    }
  };

  const createSession = async () => {
    console.log("hi");
    if (!role || !experience) return alert("Fill all fields");

    try {
      await axios.post(API_PATHS.SESSION.CREATE, {
        role,
        experience,
        questions: [],
      });
    } catch (error) {
      console.log(error.response);
    }

    setRole("");
    setExperience("");
    fetchSessions();
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Refined Typography */}
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-white mb-2">
              Preparation <span className="text-cyan-500">Hub</span>
            </h1>
            <p className="text-gray-400 font-medium">
              Precision-engineered simulations for your next career move.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-bold">Total Sessions</p>
            <p className="text-2xl font-mono text-cyan-400">{sessions.length}</p>
          </div>
        </header>

        {/* Create Session - Glassmorphism Card */}
        <section className="relative group mb-16">
          {/* Subtle Glow Backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          
          <div className="relative bg-[#111] border border-gray-800 p-8 rounded-2xl shadow-2xl">
            <h2 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-6">Initialize New Simulation</h2>

            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  placeholder="Target Role (e.g. Senior Backend Engineer)"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-black/40 border border-gray-800 p-4 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-white placeholder:text-gray-600"
                />
              </div>

              <div className="w-full lg:w-48 relative">
                <input
                  placeholder="Experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-black/40 border border-gray-800 p-4 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-white placeholder:text-gray-600"
                />
              </div>

              <button
                onClick={createSession}
                className="bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-cyan-400 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Generate Session</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Sessions Grid */}
        <h3 className="text-sm uppercase tracking-widest font-bold text-gray-500 mb-8 px-1">Recent Archives</h3>
        
        {sessions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 border-2 border-dashed border-gray-900 rounded-3xl">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-2xl mb-4">📭</div>
            <p className="text-gray-400 font-medium">No active sessions found.</p>
            <p className="text-sm text-gray-600">Start by defining a role above.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((s) => (
              <div
                key={s._id}
                onClick={() => navigate(`/interview/${s._id}`)}
                className="group relative bg-[#0f0f0f] border border-gray-800 p-6 rounded-2xl hover:border-cyan-500/40 transition-all cursor-pointer overflow-hidden"
              >
                {/* Hover Accent */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-cyan-400">→</div>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-tighter bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded font-bold">
                    ACTIVE MOCK
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
                  {s.role}
                </h2>
                
                <p className="text-gray-500 text-sm mt-1 mb-6 flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                  {s.experience} Exp Level
                </p>

                <div className="pt-4 border-t border-gray-900 flex justify-between items-center text-xs">
                  <span className="text-gray-600 font-mono italic">Ready to simulate</span>
                  <span className="text-gray-400 group-hover:translate-x-1 transition-transform">Begin Session</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;