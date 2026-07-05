import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function analyzeSkills(career, skills, experience) {

const prompt = `

You are an expert AI Career Coach.

The user's goal is:

${career}

Current Skills:

${skills}

Experience:

${experience}

Return ONLY plain text.

Generate the following sections exactly.

Career Readiness Score:
(integer between 0 and 100)

Job Match Probability:
(integer between 0 and 100)

Estimated Salary:
(PKR Range)

Missing Skills:

Learning Roadmap:

Recommended Projects:

Recommended Certifications:

Career Advice:

`;

const response = await ai.models.generateContent({

model:"gemini-2.5-flash",

contents:prompt

});

return response.text;

}