# Dasturlash Bilimini Tekshiring - Professional Test Platform

Modern va professional dasturlash bilimini baholash platformasi.

## ✨ Xususiyatlar

- 🎨 **Zamonaviy dizayn** - Gradient background va glassmorphism effektlari
- 📱 **Responsive dizayn** - Barcha qurilmalarda mukammal ishlaydi
- 🤖 **AI tahlili** - Google Gemini AI orqali natijalarni tahlil qilish
- ⌨️ **Klaviatura qo'llab-quvvatlash** - Enter va Backspace tugmalari bilan ishlash
- 🔒 **Xavfsiz** - API key alohida config faylda saqlanadi
- 🖼️ **PNG iconlar** - Emojilar o'rniga professional PNG rasmlar

## 📁 Fayl Strukturasi

```
programming-test-platform/
├── index.html          # Asosiy HTML fayl (faqat struktura)
├── styles.css          # Barcha stillar va animatsiyalar
├── script.js           # Asosiy JavaScript logika
├── config.js           # Konfiguratsiya va API key
├── questions.json      # Test savollari
└── README.md           # Qo'llanma
```

## 🚀 O'rnatish

### 1. Fayllarni yuklab oling

Barcha fayllarni bir papkaga joylashtiring.

### 2. API kalitini o'rnating

`config.js` faylini oching va `GEMINI_API_KEY` qiymatini o'zgartiring:

```javascript
const CONFIG = {
  GEMINI_API_KEY: "YOUR_API_KEY_HERE", // Bu yerga o'z API kalitingizni kiriting
  // ...
};
```

**API kalitni qayerdan olish mumkin?**
- [Google AI Studio](https://makersuite.google.com/app/apikey) saytidan bepul olishingiz mumkin

### 3. Brauzerda ochish

`index.html` faylini brauzerda oching.

## 📝 Savollar Qo'shish

`questions.json` faylida savollarni quyidagi formatda qo'shing:

```json
[
  {
    "language": "Python",
    "level": "Junior",
    "questions": [
      {
        "question": "Savol matni?",
        "options": [
          "Variant A",
          "Variant B",
          "Variant C",
          "Variant D"
        ],
        "correct": 1
      }
    ]
  }
]
```

**Mavjud tillar:**
- Python
- JavaScript
- Java
- C++
- C#
- PHP

**Mavjud darajalar:**
- Junior
- Middle
- Senior
- Umumiy (barcha darajalar)

## 🎯 Foydalanish

1. **Til tanlang** - Dasturlash tilini tanlang
2. **Daraja tanlang** - O'z darajangizni tanlang
3. **Test toping** - 15 ta tasodifiy savolga javob bering
4. **Natija oling** - AI tahlil bilan natijani ko'ring

## ⌨️ Klaviatura Tugmalari

Test paytida:
- `Enter` - Keyingi savolga o'tish
- `Backspace` yoki `Delete` - Oldingi savolga qaytish

## 📱 Mobile Versiya

Mobile qurilmalarda:
- Tugmalar avtomatik ravishda kichraytiriladi
- To'liq ekran rejimda qulay ishlash
- Sensor bilan oson boshqarish

## 🔒 Xavfsizlik

**MUHIM ESLATMA:** Frontend JavaScript fayllarida API keyni saqlash 100% xavfsiz emas! 

### ⚠️ Muammo
Developer Tools orqali har qanday foydalanuvchi sizning kodingizni ko'rishi mumkin, shu jumladan API keyni ham.

### ✅ Yechimlar

#### 1. Backend Server Ishlatish (Eng Xavfsiz)
- Node.js/Python backend yarating
- API keyni backend da saqlang
- Frontend faqat backend ga so'rov yuboradi
- Foydalanuvchi hech qachon API keyni ko'rmaydi

#### 2. Environment Variables (Tavsiya Etiladi)
- `.env` fayl yarating
- API keyni u yerda saqlang
- Build toollar (Vite, Webpack) orqali inject qiling

#### 3. Obfuscation (Hozirgi Versiya)
- API key base64 formatda kodlangan
- Bu faqat oddiy ko'rinishdan yashiradi
- Texnik bilimli odam dekod qilishi mumkin
- Bu vaqtinchalik yechim!

### 🛡️ Himoya Choralari

1. **API Key Restrictions (Google Cloud)**
   - Google Cloud Console ga kiring
   - API key sozlamalariga o'ting
   - HTTP referrer restrictions qo'shing
   - Faqat o'z domeningizdan so'rovlarga ruxsat bering

2. **Rate Limiting**
   - Google Cloud da API uchun request limit qo'ying
   - Bu ortiqcha xarajatlardan himoya qiladi

3. **Git da Yashirish**
   ```bash
   # .gitignore faylida
   config.js
   .env
   ```

4. **API Key ni Tez-Tez Yangilash**
   - Har oyda yangi API key yarating
   - Eski keyni o'chiring

### 🚀 Production uchun

**Backend Example (Node.js/Express):**

```javascript
// server.js
const express = require('express');
const app = express();

app.post('/api/analyze', async (req, res) => {
  const API_KEY = process.env.GEMINI_API_KEY; // Server-side
  
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    }
  );
  
  const data = await response.json();
  res.json(data);
});
```

### ⚡ Hozirgi Holat

- API key base64 da kodlangan ✓
- `.gitignore` da config.js bor ✓
- `config.example.js` namunasi bor ✓
- **Lekin:** Bu hali ham Developer Tools da ko'rinadi ⚠️

**Xulosa:** Haqiqiy production loyiha uchun backend server yarating!

## 🛠️ Texnologiyalar

- **HTML5** - Struktura
- **CSS3** - Dizayn va animatsiyalar
- **Vanilla JavaScript** - Funksionallik
- **Google Gemini AI** - Natijalarni tahlil qilish

## 📄 Litsenziya

Bu loyiha ochiq manba va bepul foydalanish uchun taqdim etiladi.

## 🤝 Yordam

Agar savollaringiz bo'lsa yoki yordam kerak bo'lsa, issues yarating.

---

**Muhim:** `config.js` faylini Git repositoriyasiga yuklashdan oldin `.gitignore` ga qo'shishni unutmang!

```
# .gitignore
config.js
```
