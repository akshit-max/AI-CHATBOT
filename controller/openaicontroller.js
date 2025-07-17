import axios from "axios";

// ⬇️ Reusable Config
const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const IMAGE_URL = "https://openrouter.ai/api/v1/images/generations";
const HEADERS = {
  // Authorization: `Bearer sk-or-v1-...`, ❌ Do NOT hardcode keys
  Authorization: `Bearer ${process.env.YOUR_OPENROUTER_API_KEY}`, // ✅ Use env variable
  "Content-Type": "application/json",
  "HTTP-Referer": "http://localhost:3000",
};

// 🔹 1. Summary Controller
export const summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await axios.post(
      API_URL,
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: `Summarize this:\n\n${text}` }],
      },
      { headers: HEADERS }
    );
    res.status(200).json({ result: response.data.choices[0].message.content });
  } catch (error) {
    console.error("❌ Summary Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
};

// 🔹 2. Paragraph Generator
export const paragraphController = async (req, res) => {
  try {
    const { topic } = req.body;
    const response = await axios.post(
      API_URL,
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: `Write a detailed paragraph about: ${topic}` }],
      },
      { headers: HEADERS }
    );
    res.status(200).json({ result: response.data.choices[0].message.content });
  } catch (error) {
    console.error("❌ Paragraph Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
};

// 🔹 3. AI Chatbot
export const chatbotController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Message cannot be empty" });
    }

    const response = await axios.post(
      API_URL,
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      },
      { headers: HEADERS }
    );

    res.status(200).json({ result: response.data.choices[0].message.content });
  } catch (error) {
    console.error("❌ Chatbot Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
};

// 🔹 4. JavaScript Code Explainer / Converter
export const jsConverterController = async (req, res) => {
  try {
    const { code, task } = req.body;

    if (!code || code.trim() === "") {
      return res.status(400).json({ error: "JavaScript code is required" });
    }

    const prompt = `Please ${task || "explain"} the following JavaScript code:\n\n${code}`;

    const response = await axios.post(
      API_URL,
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      },
      { headers: HEADERS }
    );

    res.status(200).json({ result: response.data.choices[0].message.content });
  } catch (error) {
    console.error("❌ JS Converter Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
};

// 🔹 5. AI Sci-Fi Image Generator
export const imageController = async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      API_URL,
      {
        model: "stability/stable-diffusion-v1-5",
        messages: [
          {
            role: "user",
            content: `Generate a high-quality futuristic sci-fi image of: ${prompt}`,
          },
        ],
      },
      {
        headers: {
          // Authorization: "Bearer sk-or-v1-...", ❌ Remove hardcoded key
          Authorization: `Bearer ${process.env.YOUR_OPENROUTER_API_KEY}`, // ✅ Use env variable
          "Content-Type": "application/json",
        },
      }
    );

    const reply = response.data.choices[0]?.message?.content;
    const imageUrl = reply.match(/(https?:\/\/[^\s)]+)/)?.[1];

    if (!imageUrl) {
      throw new Error("No image URL found in AI response.");
    }

    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error("❌ Image Generator Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
};
