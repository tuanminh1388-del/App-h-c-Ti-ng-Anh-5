import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RefreshCcw, ArrowRight, HelpCircle } from 'lucide-react';
import { Exercise } from '../types';

interface ExerciseModuleProps {
  exercises: Exercise[];
  onComplete: (points: number) => void;
}

export function ExerciseModule({ exercises, onComplete }: ExerciseModuleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [scrambledWords, setScrambledWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentExercise = exercises[currentIndex];

  // Initialize exercise specific state
  React.useEffect(() => {
    if (!currentExercise) return;
    
    setUserInput('');
    setFeedback(null);
    setShowAnswer(false);
    
    if (currentExercise.type === 'unscramble-sentence') {
      const words = [...currentExercise.data.words].sort(() => Math.random() - 0.5);
      setScrambledWords(words);
      setSelectedWords([]);
    }
  }, [currentIndex, currentExercise]);

  const handleCheck = () => {
    let isCorrect = false;
    
    if (currentExercise.type === 'unscramble-word') {
      isCorrect = userInput.toLowerCase().trim() === currentExercise.data.correct.toLowerCase();
    } else if (currentExercise.type === 'fill-in-blanks') {
      isCorrect = userInput.toLowerCase().trim() === currentExercise.data.answer.toLowerCase();
    } else if (currentExercise.type === 'unscramble-sentence') {
      isCorrect = selectedWords.join(' ').toLowerCase() === currentExercise.data.correct.toLowerCase();
    } else if (currentExercise.type === 'question-formation') {
      isCorrect = userInput.toLowerCase().trim().replace(/[?]$/, '') === currentExercise.data.answer.toLowerCase().replace(/[?]$/, '');
    }

    setFeedback(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) {
      setTimeout(() => {
        if (currentIndex < exercises.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          onComplete(exercises.length * 10);
        }
      }, 1500);
    }
  };

  const toggleWord = (word: string, index: number) => {
    if (feedback === 'correct') return;
    
    const newScrambled = [...scrambledWords];
    newScrambled.splice(index, 1);
    setScrambledWords(newScrambled);
    setSelectedWords([...selectedWords, word]);
  };

  const removeWord = (word: string, index: number) => {
    if (feedback === 'correct') return;

    const newSelected = [...selectedWords];
    newSelected.splice(index, 1);
    setSelectedWords(newSelected);
    setScrambledWords([...scrambledWords, word]);
  };

  if (!currentExercise) return null;

  return (
    <div className="bg-white p-8 rounded-3xl border-4 border-sky-100 shadow-xl max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs font-bold text-sky-500 uppercase tracking-widest">Exercise {currentIndex + 1} of {exercises.length}</span>
        <div className="flex gap-1">
          {exercises.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-sky-500' : i < currentIndex ? 'bg-emerald-500' : 'bg-slate-200'}`} />
          ))}
        </div>
      </div>

      <h3 className="text-2xl font-display font-bold text-slate-800 mb-2">{currentExercise.title}</h3>
      <p className="text-slate-500 mb-8 flex items-center gap-2">
        <HelpCircle size={18} className="text-sky-400" />
        {currentExercise.instruction}
      </p>

      <div className="min-h-[200px] flex flex-col justify-center">
        {currentExercise.type === 'unscramble-word' && (
          <div className="space-y-6 text-center">
            <div className="text-4xl font-display font-bold tracking-[0.5em] text-sky-600 uppercase bg-sky-50 py-6 rounded-2xl">
              {currentExercise.data.scrambled}
            </div>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type the correct word..."
              className="w-full p-4 text-center text-2xl font-bold border-2 border-slate-200 rounded-2xl focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-none transition-all"
              onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            />
          </div>
        )}

        {currentExercise.type === 'fill-in-blanks' && (
          <div className="space-y-6">
            <div className="text-xl leading-relaxed text-slate-700 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              {currentExercise.data.sentence.split('___').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="inline-block min-w-[100px] border-b-2 border-sky-500 mx-2 text-sky-600 font-bold">
                      {feedback === 'correct' ? currentExercise.data.answer : userInput || '...'}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Fill the blank..."
              className="w-full p-4 text-center text-xl font-bold border-2 border-slate-200 rounded-2xl focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-none transition-all"
              onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            />
          </div>
        )}

        {currentExercise.type === 'unscramble-sentence' && (
          <div className="space-y-8">
            <div className="min-h-[100px] p-6 bg-sky-50 rounded-2xl border-2 border-dashed border-sky-200 flex flex-wrap gap-2 items-center justify-center">
              {selectedWords.map((word, i) => (
                <motion.button
                  layoutId={`word-${word}-${i}`}
                  key={`selected-${i}`}
                  onClick={() => removeWord(word, i)}
                  className="px-4 py-2 bg-white text-sky-600 font-bold rounded-xl shadow-sm border border-sky-100 hover:bg-sky-100 transition-colors"
                >
                  {word}
                </motion.button>
              ))}
              {selectedWords.length === 0 && <span className="text-sky-300 font-medium">Tap words to build the sentence</span>}
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {scrambledWords.map((word, i) => (
                <motion.button
                  layoutId={`word-${word}-${i}`}
                  key={`scrambled-${i}`}
                  onClick={() => toggleWord(word, i)}
                  className="px-4 py-2 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  {word}
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {currentExercise.type === 'question-formation' && (
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-lg text-slate-700">
                {currentExercise.data.sentence.split(currentExercise.data.underlined).map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="underline decoration-sky-500 decoration-2 underline-offset-4 font-bold text-sky-700">
                        {currentExercise.data.underlined}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Write the question..."
              className="w-full p-4 text-xl font-bold border-2 border-slate-200 rounded-2xl focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-none transition-all"
              onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            />
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`p-4 rounded-2xl flex items-center gap-3 font-bold ${feedback === 'correct' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}
            >
              {feedback === 'correct' ? (
                <>
                  <CheckCircle2 />
                  <span>Excellent! That's correct!</span>
                </>
              ) : (
                <>
                  <XCircle />
                  <span>Not quite right. Try again!</span>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-3">
          <button
            onClick={() => {
              setUserInput('');
              setSelectedWords([]);
              if (currentExercise.type === 'unscramble-sentence') {
                setScrambledWords([...currentExercise.data.words].sort(() => Math.random() - 0.5));
              }
              setFeedback(null);
            }}
            className="p-4 rounded-2xl border-2 border-slate-200 text-slate-400 hover:bg-slate-50 transition-colors"
          >
            <RefreshCcw size={24} />
          </button>
          
          <button
            onClick={handleCheck}
            disabled={feedback === 'correct'}
            className={`flex-1 py-4 rounded-2xl font-bold text-xl shadow-lg transition-all flex items-center justify-center gap-2 ${feedback === 'correct' ? 'bg-emerald-500 text-white cursor-default' : 'bg-sky-500 text-white hover:bg-sky-600 active:scale-95'}`}
          >
            Check Answer
            <ArrowRight size={24} />
          </button>
        </div>

        {!feedback && (
          <button 
            onClick={() => setShowAnswer(!showAnswer)}
            className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-sky-500 transition-colors"
          >
            {showAnswer ? `Answer: ${currentExercise.data.correct || currentExercise.data.answer}` : 'Need a hint?'}
          </button>
        )}
      </div>
    </div>
  );
}
