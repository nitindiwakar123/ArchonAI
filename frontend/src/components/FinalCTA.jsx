import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-5xl mx-auto px-8 py-32 text-center">
      <div className="p-12 rounded-3xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 relative overflow-hidden">
        {/* Abstract Glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 blur-[100px]"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to land the offer?</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Stop guessing what they’ll ask. Start practicing with the same technology your future employers use.
        </p>
        <button  onClick={() => navigate("/dashboard")} className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
          Prepare for free
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;