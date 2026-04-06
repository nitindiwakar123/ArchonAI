import { useNavigate } from "react-router-dom";

function LandingHero() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-deep text-white selection:bg-cyan-500/30">
      {/* Navigation */}

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-8 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Copy */}
        <section className="w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-xs text-cyan-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Gemini 2.5 Flash Powered Real-time Simulations
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Master your next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Big Tech interview.
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
            Generate role-specific technical questions and behavioral scenarios based on your exact experience level. Don't just practice—simulate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => navigate("/dashboard")} className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all cursor-pointer shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Get Started
            </button>
            <button className="px-8 py-4 bg-gray-900 border border-gray-800 hover:bg-gray-800 text-white font-bold rounded-xl transition-all cursor-pointer">
              View Sample Questions
            </button>
          </div>
        </section>

        {/* Right Column: Visual Interaction */}
        <section className="w-full relative">
          <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full"></div>
          <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
            {/* Mock Interview UI */}
            <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                🤖
              </div>
              <div>
                <p className="text-xs text-gray-500">AI Interviewer</p>
                <p className="text-sm font-semibold text-gray-200">Senior Principal Engineer</p>
              </div>
            </div>

            <div className="w-fullspace-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg rounded-tl-none border-l-2 border-cyan-500">
                <p className="text-sm text-gray-300 italic">
                  "Given your 5 years in full-stack dev, how would you architect a real-time collaborative editor to handle race conditions during concurrent edits?"
                </p>
              </div>
              
              <div className="w-full g-cyan-500/5 p-4 rounded-lg border border-cyan-500/20">
                <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">Ideal Answer Strategy</p>
                <ul className="text-xs text-gray-400 space-y-2">
                  <li>• Mention Operational Transformation (OT) or CRDTs.</li>
                  <li>• Discuss WebSocket vs. HTTP Long Polling trade-offs.</li>
                  <li>• Address state synchronization and conflict resolution.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingHero;


