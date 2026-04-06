import {useNavigate} from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-cyan-500/30">
      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white mb-8">
            The Science of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
              Technical Clarity.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
            We don't believe in "hacking" the interview. We believe in high-fidelity simulation, 
            first-principles thinking, and the relentless pursuit of engineering excellence.
          </p>
        </div>
      </section>

      {/* ── The Problem Section ── */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-y border-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] font-black text-cyan-500 mb-6">The Thesis</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Most candidates fail not due to lack of skill, but due to lack of <span className="italic text-gray-500">contextual practice.</span>
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Standard question banks are static. They don't know your 5 years of Distributed Systems experience, 
                and they don't care about your specific niche in Frontend Architecture.
              </p>
              <p>
                We built **InterviewAI** to bridge the gap between "knowing the answer" and "articulating the solution" 
                under the unique constraints of your specific career path.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-[2rem] shadow-2xl">
              <div className="flex flex-col gap-6">
                {[
                  { label: "Intelligence Layer", val: "Gemini 2.5 Flash Advanced Reasoning" },
                  { label: "Logic Engine", val: "Role-Specific Semantic Search" },
                  { label: "Feedback Loop", val: "Real-time NLP Assessment" }
                ].map((stat, i) => (
                  <div key={i} className="border-b border-gray-800 pb-4 last:border-0">
                    <p className="text-[10px] font-mono text-gray-600 uppercase mb-1">{stat.label}</p>
                    <p className="text-sm font-bold text-cyan-400 tracking-wide">{stat.val}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual Flare */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-500/20 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* ── Core Values (First Principles) ── */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-center text-3xl font-bold text-white mb-20">Operating Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Context is King",
              desc: "Generic questions are noise. We generate prompts that challenge your specific seniority and tech stack.",
              icon: "01"
            },
            {
              title: "Deep Feedback",
              desc: "We analyze not just the 'what' of your answer, but the 'how'. Logic, structure, and STAR-method alignment.",
              icon: "02"
            },
            {
              title: "Zero Friction",
              desc: "Engineering time is expensive. Our platform is built for speed, focusing on the core simulation with zero bloat.",
              icon: "03"
            }
          ].map((val, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-gray-900/20 border border-gray-800 hover:border-cyan-500/30 transition-all">
              <span className="text-5xl font-black text-gray-800/30 mb-6 block group-hover:text-cyan-500/20 transition-colors">
                {val.icon}
              </span>
              <h4 className="text-xl font-bold text-white mb-4">{val.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final Call ── */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mb-8">
          <div className="bg-[#050505] px-6 py-2 rounded-full">
            <span className="text-xs font-bold text-white uppercase tracking-widest">Built for the Next Generation</span>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-white mb-8">Ready to test your limits?</h2>
        <button onClick={() => navigate("/dashboard")} className="px-10 py-4 bg-white text-black font-black rounded-xl hover:bg-cyan-400 hover:scale-[1.02] transition-all">
          Initialize Your Journey
        </button>
      </section>

      {/* Footer Branding Integration */}
      <footer className="py-12 border-t border-gray-900 text-center">
        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">
          Designed with First Principles // 2026
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;