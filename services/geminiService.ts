import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

let genAI: GoogleGenAI | null = null;

const getGenAI = () => {
  if (!genAI) {
    const apiKey = process.env.API_KEY || '';
    if (apiKey) {
      genAI = new GoogleGenAI({ apiKey });
    }
  }
  return genAI;
};

export const getArticleInsight = async (articleContent: string, question?: string): Promise<string> => {
  const ai = getGenAI();
  if (!ai) return "APIキーが設定されていないため、AIインサイトを利用できません。";

  try {
    const model = 'gemini-2.5-flash';
    const prompt = question 
      ? `あなたは歴史あるニュースメディアのAIアシスタントです。以下の記事の内容に基づき、ユーザーの質問「${question}」に簡潔かつ知的に答えてください。\n\n記事内容:\n${articleContent}`
      : `あなたは歴史あるニュースメディアのAI編集者です。以下の記事の「核心」となる洞察を、3つの箇条書きでまとめてください。読者が「なるほど」と思うような、深みのある視点を提供してください。\n\n記事内容:\n${articleContent}`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Flash model for speed
      }
    });

    return response.text || "申し訳ありません。現在インサイトを生成できません。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "AI接続中にエラーが発生しました。";
  }
};
