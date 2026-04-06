import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleDown } from "react-icons/fa";

const QAItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`group mb-6 rounded-2xl border transition-all duration-500 overflow-hidden ${
        open 
        ? "bg-[#0d0d0d] border-cyan-500/40 shadow-[0_0_40px_rgba(34,211,238,0.05)]" 
        : "bg-[#080808] border-gray-800/40 hover:border-gray-700 hover:bg-[#0b0b0b]"
    }`}>
      <div className="p-6">
        {/* Header Section */}
        <div className="flex justify-between items-start gap-6">
          <div 
            className="flex-1 cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className={`font-mono text-[9px] tracking-[0.2em] px-2 py-0.5 rounded border transition-colors ${
                open ? "text-cyan-400 border-cyan-500/30 bg-cyan-500/5" : "text-gray-600 border-gray-800"
              }`}>
                {open ? "INTELLIGENCE_DECRYPTED" : "DATA_POINT_ENCRYPTED"}
              </span>
              <span className="text-[9px] font-mono text-gray-700 uppercase tracking-tighter">
                Ref: {item._id.slice(-6)}
              </span>
            </div>
            
            <h3 className={`text-xl font-bold tracking-tight leading-snug transition-colors ${
              open ? "text-white" : "text-gray-400 group-hover:text-gray-200"
            }`}>
              {item.question}
            </h3>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
             <button
              onClick={() => setOpen(!open)}
              className={`p-2.5 rounded-xl border transition-all duration-300 bg-gray-900/50 border-gray-800 text-gray-600 hover:border-gray-500 hover:text-gray-400
              `}
            >
              <FaAngleDown size={18} />
            </button>
          </div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="mt-8 pt-8 border-t border-gray-800/50">
                <div className="flex flex-col md:flex-row gap-8">
                  
                  {/* Left Accent Detail */}
                  <div className="hidden md:block w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent rounded-full opacity-40" />

                  <div className="flex-1 overflow-hidden">
                    {/* Markdown Body */}
                    <div className="prose prose-invert prose-cyan max-w-none 
                      prose-p:text-gray-400 prose-p:leading-relaxed prose-p:text-sm
                      prose-strong:text-cyan-400 prose-strong:font-bold
                      prose-code:text-cyan-300 prose-code:bg-cyan-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                      prose-pre:bg-black/50 prose-pre:border prose-pre:border-gray-800 prose-pre:rounded-xl">
                      <ReactMarkdown>{item.answer}</ReactMarkdown>
                    </div>

                    {/* Meta/Footer Section */}
                    <div className="mt-10 flex flex-wrap items-center gap-6 pt-6 border-t border-gray-900/50">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-gray-700 uppercase tracking-widest">Initialized</span>
                        <span className="text-[10px] font-mono text-gray-500">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-gray-700 uppercase tracking-widest">Version Control</span>
                        <span className="text-[10px] font-mono text-gray-500">v{item.__v}.0.0</span>
                      </div>
                      <div className="ml-auto flex items-center gap-2 text-[9px] font-bold text-cyan-500/40 uppercase tracking-tighter">
                         <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
                         Verified Intelligence
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QAItem;