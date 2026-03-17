import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const getGrammarFeedback = async (sentence: string) => {
  const model = "gemini-3-flash-preview";
  const prompt = `
    You are an English teacher for Vietnamese children (8-11 years old).
    Analyze this sentence: "${sentence}"
    
    Use the "3 Golden Questions" model:
    1. Who? (Check subject-verb agreement)
    2. When? (Check verb tense - usually Present Simple for this level)
    3. Missing? (Check missing words like articles, prepositions)
    
    Provide feedback in a friendly, encouraging way. 
    If there are errors, explain them simply in Vietnamese.
    Return the response in JSON format:
    {
      "isCorrect": boolean,
      "feedback": {
        "who": "string explanation",
        "when": "string explanation",
        "missing": "string explanation"
      },
      "improvedSentence": "string"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("AI Error:", error);
    return null;
  }
};

export const getWritingStepFeedback = async (step: number, content: any) => {
  const model = "gemini-3-flash-preview";
  let prompt = "";

  if (step === 1) {
    prompt = `Analyze these answers to writing prompts: ${JSON.stringify(content)}. 
    Are they good starting points for a story about school? Give a short encouraging comment in Vietnamese.`;
  } else if (step === 4) {
    prompt = `Correct this short paragraph written by a child: "${content}". 
    Check for grammar, vocabulary, and sentence structure. 
    Provide an improved version and explain 2-3 key improvements in simple Vietnamese.
    Return JSON: { "improved": "string", "explanation": "string" }`;
  }

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: step === 4 ? "application/json" : "text/plain"
      }
    });
    return step === 4 ? JSON.parse(response.text || '{}') : response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return null;
  }
};
