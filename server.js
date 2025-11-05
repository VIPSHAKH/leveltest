// ============================================
// BACKEND SERVER (Node.js + Express)
// ============================================
// Bu fayldan foydalanish uchun:
// 1. npm install express cors dotenv
// 2. .env fayl yarating va API_KEY qo'shing
// 3. node server.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Static files (HTML, CSS, JS)

// API endpoint - AI tahlil
app.post('/api/analyze', async (req, res) => {
  try {
    const { language, level, correctAnswers, totalQuestions, score } = req.body;

    // API key server-side da saqlanadi
    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
      return res.status(500).json({
        error: 'API key not configured on server'
      });
    }

    const prompt = `Siz professional dasturchi bo'lib, ${language} dasturlash tilida ${level} darajadagi test topshirgan foydalanuvchining natijalarini tahlil qilasiz.

Test natijalari:
- Dasturlash tili: ${language}
- Daraja: ${level}
- To'g'ri javoblar: ${correctAnswers}/${totalQuestions}
- Ball: ${score}%

Iltimos, quyidagi formatda qisqa va aniq tahlil bering (150-200 so'z):

1. Umumiy xulosangiz (Junior/Middle/Senior darajasi)
2. Yaxshilash kerak bo'lgan joylar
3. Qisqa tavsiyalar

Javobingizni faqat o'zbek tilida tushunarli yozing. Foydalanuvchini rag'batlantirmaydigan ton bilan yozing. Iltimos haqqoniy yozing, agar bilmadimi, ishlay olmadimi, to'g'ridan to'g'ri ayting. Oldin pastroq testlarni ishlasin, o'rgansin keyin qayta topshirsin.`;

    // Gemini API ga so'rov
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'API xatosi');
    }

    const data = await response.json();
    const analysis = data.candidates[0].content.parts[0].text;

    res.json({ analysis });
  } catch (error) {
    console.error('AI tahlil xatosi:', error);
    res.status(500).json({
      error: error.message || 'Server xatosi'
    });
  }
});

// Server ishga tushirish
app.listen(PORT, () => {
  console.log(`🚀 Server ishga tushdi: http://localhost:${PORT}`);
  console.log(`📝 Frontend: http://localhost:${PORT}/index.html`);
});
