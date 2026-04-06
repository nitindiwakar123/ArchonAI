import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

import QAItem from "../components/QAItems";
import EmptyState from "../components/EmptyState";
import ErrorBanner from "../components/ErrorBanner";
import GenerateButton from "../components/GenerateButton";
import { API_PATHS } from "../utils/apiPaths";

import axios from "../utils/axiosInstance";

const parseError = (err) => {
  console.log(err);
  if (err.response)
    return (
      err.response.data?.message ||
      err.response.data?.error ||
      `Server error: ${err.response.status}`
    );
  if (err.request) return "Cannot reach server. Check your connection.";
  return err.message || "Something went wrong.";
};

const InterviewPrep = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    setFetchError(null);
    try {
      const res = await axios.get(`${API_PATHS.SESSION.GET_ONE}/${id}`);
      setQuestions(res.data.session.questions || []);
    } catch (err) {
      console.log(err.response);
      setFetchError(parseError(err));
    } finally {
      setLoading(false);
    }
  }, [id]);

  const generateQuestions = async () => {
    setGenerating(true);
    try {
      await axios.post(API_PATHS.AI.GENERATE_QUESTIONS, { sessionId: id });
      await fetchQuestions();
      toast.success("Questions generated!");
    } catch (err) {
      toast.error(parseError(err));
    } finally {
      setGenerating(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 selection:bg-cyan-500/30">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* ── Header: Identity & Status ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="relative">
            {/* Subtle Glow behind title */}
            <div className="absolute -left-4 top-0 w-1 h-12 bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-mono text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 tracking-[0.2em]">
                ACTIVE_SESSION
              </span>
              <p className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">
                ID: {id?.slice(0, 12)}
              </p>
            </div>

            <h1 className="text-4xl font-black tracking-tighter text-white">
              Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Questions</span>
            </h1>

            {!loading && !fetchError && (
              <div className="flex items-center gap-2 mt-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <p className="text-xs font-mono text-gray-500">
                  {questions.length > 0
                    ? `${questions.length.toString().padStart(2, '0')} DATA_POINTS_DECRYPTED`
                    : "AWAITING_INITIALIZATION"}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Hardcoded "Last Sync" to add to the "Pro Tool" feel */}
            <div className="hidden sm:block text-right">
              <p className="text-[10px] font-bold text-gray-700 uppercase tracking-tighter">Latency</p>
              <p className="text-xs font-mono text-gray-500">24ms</p>
            </div>
            <GenerateButton
              onClick={generateQuestions}
              generating={generating}
              loading={loading}
            // Note: In your GenerateButton component, ensure it uses white/black theme
            />
          </div>
        </div>

        {/* ── Scanning Divider ── */}
        <div className="relative h-[1px] w-full bg-gray-900 mb-12 overflow-hidden">
          <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-scan" />
        </div>

        {/* ── Content ── */}
        {loading ? (
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 w-full bg-[#0d0d0d] border border-gray-800/50 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : fetchError ? (
          <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20 text-center">
            <ErrorBanner message={fetchError} onRetry={fetchQuestions} />
          </div>
        ) : questions.length === 0 ? (
          <EmptyState onGenerate={generateQuestions} generating={generating} />
        ) :
        (
          <AnimatePresence>
            <div className="space-y-6">
              {questions.map((q, i) => (
                <motion.div
                  key={q._id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="group relative"
                >
                  {/* Background Glow on Hover */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Card Index Number (Hardcoded Style) */}
                  <div className="absolute -left-12 top-6 hidden lg:block">
                    <span className="text-[10px] font-mono text-gray-800 group-hover:text-cyan-900 transition-colors">
                      LOG_{i.toString().padStart(3, '0')}
                    </span>
                  </div>

                  <div className="relative bg-[#0d0d0d] border border-gray-800/50 group-hover:border-gray-700 p-1 rounded-2xl transition-all shadow-2xl">
                    <div className="bg-[#111] p-6 rounded-[14px]">
                      <QAItem item={q} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        )}

        {/* ── Footer Branding ── */}
        <div className="mt-20 pt-8 border-t border-gray-900 flex justify-between items-center opacity-30">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em]">System.Interview_AI</p>
          <p className="text-[10px] font-mono">2026 // PRE-ALPHA</p>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;