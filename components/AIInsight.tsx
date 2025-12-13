import React, { useState } from 'react';
import { Sparkles, Bot, X, ChevronRight } from 'lucide-react';
import { getArticleInsight } from '../services/geminiService';

interface AIInsightProps {
  articleContent: string;
}

export const AIInsight: React.FC<AIInsightProps> = ({ articleContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [insight, setInsight] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");

  const handleGenerate = async (q?: string) => {
    setLoading(true);
    const result = await getArticleInsight(articleContent, q);
    setInsight(result);
    setLoading(false);
  };

  const toggleOpen = () => {
    if (!isOpen && !insight) {
      handleGenerate();
    }
    setIsOpen(!isOpen);
  };

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    handleGenerate(question);
    setQuestion("");
  };

  return (
    <div className="my-12 relative">
      <div className="absolute inset-0 bg-emerald-100 transform translate-x-2 translate-y-2 rounded-xl border-2 border-black" />
      <div className="relative bg-white border-2 border-black rounded-xl overflow-hidden">
          
          <div className="flex items-center justify-between p-5 cursor-pointer bg-gradient-to-r from-emerald-50 to-white" onClick={toggleOpen}>
            <div className="flex items-center space-x-3 text-emerald-800">
              <div className={`bg-emerald-200 p-2 rounded-lg border border-black ${loading ? 'animate-spin' : ''}`}>
                  <Sparkles size={20} className="fill-emerald-100" />
              </div>
              <div>
                  <h3 className="font-black tracking-wide text-sm">AI EDITOR'S INSIGHT</h3>
                  <p className="text-[10px] text-emerald-600 font-bold uppercase">Powered by Gemini</p>
              </div>
            </div>
            <button className="text-black hover:bg-black hover:text-white rounded-full p-1 transition-colors border-2 border-transparent hover:border-black">
                {isOpen ? <X size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>

          {isOpen && (
            <div className="p-6 border-t-2 border-dashed border-neutral-200 animate-fade-in">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-8 text-neutral-500 space-y-3">
                        <Bot className="animate-bounce text-emerald-500" size={32} />
                        <span className="text-xs font-bold uppercase tracking-widest">Analyzing Story...</span>
                    </div>
                ) : (
                    <div className="bg-neutral-50 p-5 rounded border border-neutral-200 relative mb-6">
                        <div className="absolute -top-3 -left-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 transform -rotate-2">KEY POINTS</div>
                        <div className="whitespace-pre-wrap leading-relaxed font-medium text-neutral-800 text-sm md:text-base">
                            {insight}
                        </div>
                    </div>
                )}

                <form onSubmit={handleAsk} className="mt-4 flex gap-2">
                    <input 
                        type="text" 
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Ask AI about this article..."
                        className="flex-1 px-4 py-3 border-2 border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500 focus:bg-emerald-50 transition-colors font-bold text-neutral-700"
                    />
                    <button 
                        type="submit" 
                        disabled={loading || !question}
                        className="bg-black text-white px-6 py-2 rounded-lg text-sm font-black hover:bg-emerald-600 disabled:opacity-50 transition-colors border-2 border-transparent"
                    >
                        ASK
                    </button>
                </form>
            </div>
          )}
      </div>
    </div>
  );
};