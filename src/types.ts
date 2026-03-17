export type Level = 'Weak' | 'Average' | 'Good';

export interface VocabularyItem {
  word: string;
  ipa: string;
  meaning: string;
  image?: string;
  audio?: string;
}

export interface Exercise {
  id: string;
  type: 'matching' | 'ordering' | 'fill-in-blanks' | 'listening' | 'speaking' | 'writing' | 'grammar-check' | 'unscramble-word' | 'unscramble-sentence' | 'question-formation';
  title: string;
  instruction: string;
  data: any;
}

export interface Unit {
  id: number;
  title: string;
  vocabulary: VocabularyItem[];
  grammar: {
    title: string;
    description: string;
    formula: string;
    examples: string[];
  };
  exercises: Exercise[];
}

export interface UserState {
  points: number;
  completedUnits: number[];
  level: Level;
}

export interface SentenceBlock {
  id: string;
  type: 'who' | 'do-what' | 'what' | 'where' | 'when' | 'how';
  text: string;
  color: string;
}
