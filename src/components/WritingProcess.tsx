import React, { useState } from 'react';
import { motion } from 'motion/react';
import { getWritingStepFeedback } from '../services/geminiService';
import { PenTool, Map, Type, Sparkles, Send, Loader2 } from 'lucide-react';

export const WritingProcess: React.FC<{ unitTitle: string }> = ({ unitTitle }) => {
  const [step, setStep] = useState(1);
  const [content, setContent] = useState({
    step1: { what: '', who: '', feel: '' },
    step2: { topic: '', keywords: '' },
    step3: { opening: '', description: '', activity: '', feeling: '' },
    step4: ''
  });
  const [feedback, setFeedback] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    if (step === 1) {
      setLoading(true);
      const res = await getWritingStepFeedback(1, content.step1);
      setFeedback(res);
      setLoading(false);
      setStep(2);
    } else if (step === 3) {
      const fullText = `${content.step3.opening} ${content.step3.description} ${content.step3.activity} ${content.step3.feeling}`;
      setContent({ ...content, step4: fullText });
      setStep(4);
    } else if (step === 4) {
      setLoading(true);
      const res = await getWritingStepFeedback(4, content.step4);
      setFeedback(res);
      setLoading(false);
    } else {
      setStep(step + 1);
    }
  };

  const imageSeed = unitTitle.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="p-8 bg-white rounded-3xl shadow-xl border-4 border-violet-200 max-w-4xl mx-auto">
      <div className="flex justify-between mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex flex-col items-center gap-2 flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= s ? 'bg-violet-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
              {s}
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-tighter ${step >= s ? 'text-violet-600' : 'text-slate-400'}`}>
              {s === 1 ? 'Visual' : s === 2 ? 'Mind Map' : s === 3 ? 'Writing' : 'Improve'}
            </span>
          </div>
        ))}
      </div>

      {step === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative group">
            <img src={`https://picsum.photos/seed/${imageSeed}/800/450`} alt={unitTitle} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500">What is happening?</label>
              <input 
                className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-violet-400 outline-none"
                value={content.step1.what}
                onChange={(e) => setContent({...content, step1: {...content.step1, what: e.target.value}})}
                placeholder="e.g. People are celebrating"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500">Who is involved?</label>
              <input 
                className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-violet-400 outline-none"
                value={content.step1.who}
                onChange={(e) => setContent({...content, step1: {...content.step1, who: e.target.value}})}
                placeholder="e.g. My family and friends"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500">How do you feel?</label>
              <input 
                className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-violet-400 outline-none"
                value={content.step1.feel}
                onChange={(e) => setContent({...content, step1: {...content.step1, feel: e.target.value}})}
                placeholder="e.g. Happy and excited"
              />
            </div>
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="flex flex-col items-center py-10 bg-violet-50 rounded-3xl border-2 border-dashed border-violet-200">
            <div className="w-48 h-24 bg-white rounded-full border-4 border-violet-400 flex items-center justify-center shadow-lg mb-8">
              <input 
                className="text-center font-bold text-violet-600 outline-none w-full bg-transparent"
                placeholder={`Topic: ${unitTitle}`}
                value={content.step2.topic}
                onChange={(e) => setContent({...content, step2: {...content.step2, topic: e.target.value}})}
              />
            </div>
            <div className="w-full px-10">
              <textarea 
                className="w-full p-4 rounded-2xl border-2 border-white shadow-inner outline-none min-h-[100px]"
                placeholder="Write keywords here..."
                value={content.step2.keywords}
                onChange={(e) => setContent({...content, step2: {...content.step2, keywords: e.target.value}})}
              />
            </div>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-violet-500 uppercase">Opening Sentence</label>
            <input className="w-full p-3 rounded-xl border-2 border-slate-100" placeholder="My school name is..." value={content.step3.opening} onChange={(e) => setContent({...content, step3: {...content.step3, opening: e.target.value}})} />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-violet-500 uppercase">Description Sentence</label>
            <input className="w-full p-3 rounded-xl border-2 border-slate-100" placeholder="It is very big and..." value={content.step3.description} onChange={(e) => setContent({...content, step3: {...content.step3, description: e.target.value}})} />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-violet-500 uppercase">Activity Sentence</label>
            <input className="w-full p-3 rounded-xl border-2 border-slate-100" placeholder="I often play with..." value={content.step3.activity} onChange={(e) => setContent({...content, step3: {...content.step3, activity: e.target.value}})} />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-violet-500 uppercase">Feeling Sentence</label>
            <input className="w-full p-3 rounded-xl border-2 border-slate-100" placeholder="I love my school because..." value={content.step3.feeling} onChange={(e) => setContent({...content, step3: {...content.step3, feeling: e.target.value}})} />
          </div>
        </motion.div>
      )}

      {step === 4 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-200 italic text-slate-600">
            {content.step4}
          </div>
          {feedback && (
            <div className="p-6 bg-emerald-50 border-2 border-emerald-200 rounded-2xl space-y-4">
              <h4 className="font-bold text-emerald-700 flex items-center gap-2">
                <Sparkles size={20} /> Improved Version
              </h4>
              <p className="text-lg font-medium text-emerald-800 leading-relaxed">
                {feedback.improved}
              </p>
              <div className="pt-4 border-t border-emerald-100">
                <p className="text-sm text-emerald-600 whitespace-pre-line">
                  {feedback.explanation}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      )}

      <div className="mt-10 flex justify-between items-center">
        <button 
          onClick={() => step > 1 && setStep(step - 1)}
          className={`px-6 py-2 rounded-xl font-bold transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-slate-600'}`}
        >
          Back
        </button>
        <button 
          onClick={handleNext}
          disabled={loading}
          className="px-10 py-4 bg-violet-500 hover:bg-violet-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-violet-200 transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" /> : step === 4 ? <Sparkles /> : <Send />}
          {step === 4 ? 'Get AI Feedback' : 'Next Step'}
        </button>
      </div>
    </div>
  );
};
