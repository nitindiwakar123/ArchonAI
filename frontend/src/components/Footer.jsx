import {FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-md"></div>
              <span className="text-xl font-bold tracking-tighter text-white">InterviewAI</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering engineers to land their dream roles through high-fidelity AI simulations and personalized feedback.
            </p>
            <div className="flex gap-4">
              {/* Simple Social Icons Placeholder */}
              <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-cyan-500 transition cursor-pointer">𝕏</div>
              <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-cyan-500 transition cursor-pointer">in</div>
              <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-cyan-500 transition cursor-pointer"><FaGithub /></div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition">AI Mock Interviews</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Question Bank</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Success Metrics</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition">Interview Guide</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">System Design Patterns</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">API Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Community</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Stay Updated</h4>
            <p className="text-gray-500 text-sm mb-4">Get the latest interview trends delivered to your inbox.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 transition"
              />
              <button className="bg-white text-black font-bold text-sm py-2 rounded-lg hover:bg-gray-200 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © 2026 InterviewAI Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;