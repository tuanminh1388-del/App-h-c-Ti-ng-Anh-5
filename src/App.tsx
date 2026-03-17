import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Trophy, 
  User, 
  Settings, 
  ChevronRight, 
  Star, 
  GraduationCap,
  School,
  Gamepad2,
  MessageCircle,
  PenTool,
  Volume2
} from 'lucide-react';
import { unitsData } from './data/units';
import { VisualSentenceBuilder } from './components/VisualSentenceBuilder';
import { WritingProcess } from './components/WritingProcess';
import { ExerciseModule } from './components/ExerciseModule';
import { Level, UserState, Unit } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'unit' | 'games' | 'profile'>('home');
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);
  const [user, setUser] = useState<UserState>({
    points: 1250,
    completedUnits: [1, 2],
    level: 'Average'
  });

  const [activeModule, setActiveModule] = useState<'vocab' | 'grammar' | 'writing' | 'speaking' | 'exercises'>('vocab');

  const currentUnit = unitsData.find(u => u.id === selectedUnitId);

  return (
    <div className="min-h-screen flex flex-col max-w-5xl mx-auto bg-sky-50/50 shadow-2xl overflow-hidden">
      {/* Header */}
      <header className="bg-white px-6 py-4 flex items-center justify-between border-b border-sky-100">
        <div className="flex items-center gap-3">
          <div className="bg-sky-500 p-2 rounded-xl text-white shadow-lg shadow-sky-200 cursor-pointer" onClick={() => setActiveTab('home')}>
            <GraduationCap size={28} />
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-slate-800 leading-none">Wonderful World</h1>
            <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest">AI English Learning</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200 flex items-center gap-2">
            <Star className="text-amber-500 fill-amber-500" size={18} />
            <span className="font-bold text-amber-700">{user.points}</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 pb-24">
        {activeTab === 'home' && (
          <div className="space-y-8">
            {/* Welcome Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-sky-500 to-indigo-600 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold mb-2">Hello, Minh! 👋</h2>
                <p className="text-sky-100 max-w-md">Ready to explore Unit {user.completedUnits.length + 1}? You're doing great! Keep it up to earn more stars.</p>
                <button 
                  onClick={() => { setSelectedUnitId(user.completedUnits.length + 1); setActiveTab('unit'); }}
                  className="mt-6 bg-white text-sky-600 px-8 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  Continue Learning
                </button>
              </div>
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                <School size={300} />
              </div>
            </motion.div>

            {/* Units Grid */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-display font-bold text-slate-800">Learning Units</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {unitsData.map((u) => {
                  const isCompleted = user.completedUnits.includes(u.id);
                  const isLocked = false; // All units unlocked for access
                  
                  return (
                    <motion.div 
                      key={u.id}
                      whileHover={{ y: -5 }}
                      onClick={() => { setSelectedUnitId(u.id); setActiveTab('unit'); }}
                      className={`p-6 rounded-3xl border-2 transition-all cursor-pointer bg-white border-sky-200 shadow-lg shadow-sky-100`}
                    >
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-sky-100 text-sky-500">
                        <BookOpen size={24} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Unit {u.id}</span>
                      <h4 className="text-lg font-bold text-slate-800 mb-4">{u.title}</h4>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${isCompleted ? 'bg-emerald-500 w-full' : 'bg-sky-500 w-0'}`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'unit' && currentUnit && (
          <div className="space-y-8">
            {/* Unit Header */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setActiveTab('home')}
                className="p-2 hover:bg-white rounded-xl transition-colors text-slate-400"
              >
                <ChevronRight className="rotate-180" />
              </button>
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-800">Unit {currentUnit.id}: {currentUnit.title}</h2>
                <div className="flex gap-2 mt-2 overflow-x-auto pb-2 no-scrollbar">
                  {['vocab', 'grammar', 'exercises', 'writing', 'speaking'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModule(m as any)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all uppercase tracking-wider whitespace-nowrap ${activeModule === m ? 'bg-sky-500 text-white shadow-md' : 'bg-white text-slate-400 border border-slate-100'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeModule === 'vocab' && (
                <motion.div 
                  key="vocab"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {currentUnit.vocabulary.map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="aspect-square bg-slate-50 rounded-xl mb-3 flex items-center justify-center text-slate-300 group-hover:bg-sky-50 group-hover:text-sky-300 transition-colors">
                        <Volume2 size={40} />
                      </div>
                      <h5 className="font-bold text-slate-800">{item.word}</h5>
                      <p className="text-[10px] text-slate-400 font-mono">{item.ipa}</p>
                      <p className="text-xs text-sky-600 mt-1">{item.meaning}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeModule === 'grammar' && (
                <motion.div 
                  key="grammar"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="bg-white p-8 rounded-3xl border-4 border-amber-100 shadow-lg">
                    <h4 className="text-xl font-display font-bold text-amber-600 mb-2">{currentUnit.grammar.title}</h4>
                    <p className="text-slate-600 mb-6">{currentUnit.grammar.description}</p>
                    <div className="bg-amber-50 p-6 rounded-2xl font-mono text-amber-800 border border-amber-200 mb-6">
                      {currentUnit.grammar.formula}
                    </div>
                    <div className="space-y-2">
                      {currentUnit.grammar.examples.map((ex, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          {ex}
                        </div>
                      ))}
                    </div>
                  </div>

                  <VisualSentenceBuilder />
                </motion.div>
              )}

              {activeModule === 'exercises' && (
                <motion.div 
                  key="exercises"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <ExerciseModule 
                    exercises={currentUnit.exercises} 
                    onComplete={(points) => {
                      setUser(prev => ({ ...prev, points: prev.points + points }));
                      setActiveModule('writing');
                    }}
                  />
                </motion.div>
              )}

              {activeModule === 'writing' && (
                <motion.div 
                  key="writing"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <WritingProcess unitTitle={currentUnit.title} />
                </motion.div>
              )}

              {activeModule === 'speaking' && (
                <motion.div 
                  key="speaking"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-4 border-emerald-100 shadow-xl"
                >
                  <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mb-6 animate-pulse">
                    <Volume2 size={60} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-800 mb-2">AI Speaking Partner</h3>
                  <p className="text-slate-500 mb-8">"Hello! Tell me about {currentUnit.title.toLowerCase()}."</p>
                  <button className="bg-emerald-500 text-white px-12 py-4 rounded-2xl font-bold text-xl shadow-lg shadow-emerald-200 hover:scale-105 transition-transform flex items-center gap-3">
                    <MessageCircle /> Start Speaking
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-5xl mx-auto bg-white/80 backdrop-blur-md border-t border-sky-100 px-6 py-3 flex justify-around items-center z-50">
        <NavButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={<School />} label="Home" />
        <NavButton active={activeTab === 'unit'} onClick={() => setActiveTab('unit')} icon={<BookOpen />} label="Units" />
        <NavButton active={activeTab === 'games'} onClick={() => setActiveTab('games')} icon={<Gamepad2 />} label="Games" />
        <NavButton active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} icon={<User />} label="Profile" />
      </nav>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-sky-500 scale-110' : 'text-slate-400 hover:text-slate-600'}`}
    >
      <div className={`${active ? 'bg-sky-100 p-2 rounded-xl' : ''}`}>
        {React.cloneElement(icon as React.ReactElement, { size: 24 })}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </button>
  );
}
