import React, { useState } from 'react';
import { motion, Reorder } from 'motion/react';
import { SentenceBlock } from '../types';
import { User, Activity, Package, MapPin, Clock, Zap, CheckCircle2 } from 'lucide-react';

const INITIAL_BLOCKS: SentenceBlock[] = [
  { id: '1', type: 'who', text: 'I', color: 'bg-rose-400' },
  { id: '2', type: 'do-what', text: 'brush', color: 'bg-amber-400' },
  { id: '3', type: 'what', text: 'my teeth', color: 'bg-emerald-400' },
  { id: '4', type: 'where', text: 'in the bathroom', color: 'bg-sky-400' },
  { id: '5', type: 'when', text: 'every morning', color: 'bg-indigo-400' },
  { id: '6', type: 'how', text: 'carefully', color: 'bg-violet-400' },
];

const ICONS = {
  who: <User size={16} />,
  'do-what': <Activity size={16} />,
  what: <Package size={16} />,
  where: <MapPin size={16} />,
  when: <Clock size={16} />,
  how: <Zap size={16} />,
};

export const VisualSentenceBuilder: React.FC = () => {
  const [blocks, setBlocks] = useState(INITIAL_BLOCKS);
  const [showResult, setShowResult] = useState(false);

  const sentence = blocks.map(b => b.text).join(' ') + '.';

  return (
    <div className="p-6 bg-white rounded-3xl shadow-xl border-4 border-sky-200">
      <h3 className="text-2xl font-display font-bold text-sky-600 mb-4 flex items-center gap-2">
        <Activity className="text-amber-500" /> Visual Sentence Builder
      </h3>
      <p className="text-slate-500 mb-6 italic">Drag the blocks to build your sentence!</p>

      <Reorder.Group axis="x" values={blocks} onReorder={setBlocks} className="flex flex-wrap gap-3 mb-8">
        {blocks.map((block) => (
          <Reorder.Item key={block.id} value={block}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${block.color} px-4 py-3 rounded-2xl shadow-md cursor-grab active:cursor-grabbing flex flex-col items-center gap-1 min-w-[100px]`}
            >
              <span className="text-[10px] uppercase font-bold opacity-80 flex items-center gap-1">
                {ICONS[block.type]} {block.type.replace('-', ' ')}
              </span>
              <span className="text-lg font-bold">{block.text}</span>
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div className="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 relative">
        <div className="absolute -top-3 left-6 bg-white px-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
          Your Sentence
        </div>
        <p className="text-2xl font-display font-medium text-slate-700">
          {sentence}
        </p>
      </div>

      <button
        onClick={() => setShowResult(true)}
        className="mt-6 w-full py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl font-bold text-xl shadow-lg shadow-sky-200 transition-all flex items-center justify-center gap-2"
      >
        <CheckCircle2 /> Check with 3 Golden Questions
      </button>

      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-2xl"
        >
          <h4 className="font-bold text-emerald-700 mb-2">Teacher AI says:</h4>
          <p className="text-emerald-600">Great job! Your sentence structure is perfect. You followed the "Who - Do what - What - Where - When - How" model correctly!</p>
        </motion.div>
      )}
    </div>
  );
};
