# ⚡ Tez Boshlash

## 🎯 Ikki Xil Usul

### 1️⃣ Oddiy Usul (Frontend faqat)

Agar faqat test qilmoqchi bo'lsangiz va xavfsizlik muhim bo'lmasa:

```bash
# 1. config.js ni tahrirlash
# API keyni qo'shing (11-qator)

# 2. Brauzerda ochish
# index.html faylini ikki marta bosib oching
```

**Eslatma:** Bu usulda API key Developer Tools da ko'rinadi! ⚠️

---

### 2️⃣ Xavfsiz Usul (Backend bilan) ⭐

Production loyihalar uchun tavsiya etiladi:

```bash
# 1. Paketlarni o'rnatish
npm install

# 2. .env fayl yaratish
cp .env.example .env

# 3. .env faylni tahrirlash
# Nano yoki boshqa text editor bilan:
nano .env

# Quyidagini qo'shing:
GEMINI_API_KEY=sizning_api_keyingiz

# 4. index.html ni yangilash
# script.js o'rniga script-backend.js ni ishlating:
# <script src="script-backend.js"></script>

# 5. Serverni ishga tushirish
npm start

# 6. Brauzerda ochish
# http://localhost:3000
```

## 📋 API Key Olish

1. [Google AI Studio](https://makersuite.google.com/app/apikey) ga kiring
2. "Create API Key" tugmasini bosing
3. API keyni nusxalang
4. `.env` faylga joylashtiring

## 🎨 Savollar Qo'shish

`questions.json` faylni tahrirlang:

```json
{
  "language": "Python",
  "level": "Junior",
  "questions": [
    {
      "question": "Sizning savolingiz?",
      "options": ["A", "B", "C", "D"],
      "correct": 0
    }
  ]
}
```

## 🐛 Muammolar

### Port band bo'lsa

```bash
# Boshqa portda ishga tushirish
PORT=8000 npm start
```

### API key ishlamasa

- `.env` faylni tekshiring
- API key to'g'ri nusxalanganini tekshiring
- Google Cloud Console da API key faol ekanini tekshiring

### Serverni to'xtatish

```bash
# Ctrl + C
```

## 📱 Production ga Deploy

### Vercel (Tavsiya etiladi)

```bash
npm install -g vercel
vercel
```

### Heroku

```bash
git init
heroku create
git push heroku main
```

### Railway

1. [Railway.app](https://railway.app) ga kiring
2. GitHub repository ulang
3. Deploy tugmasini bosing

## 🔐 Xavfsizlik Eslatmalari

1. **Git ga yuklashdan oldin:**
   ```bash
   # Tekshiring:
   cat .gitignore
   
   # Bu qatorlar bo'lishi kerak:
   # config.js
   # .env
   ```

2. **API Key ni hech kimga bermang!**

3. **Production da backend versiyasidan foydalaning**

## 💡 Maslahatlar

- `nodemon` ishlatib development qilish:
  ```bash
  npm run dev
  ```

- Git orqali deploy qilish oldidan test qiling:
  ```bash
  npm start
  # Brauzerda tekshiring
  ```

- API restrictions qo'shing (Google Cloud)

## 📞 Yordam

- [README.md](README.md) - To'liq qo'llanma
- [SECURITY.md](SECURITY.md) - Xavfsizlik qo'llanmasi
- GitHub Issues - Savol berish uchun

---

**Tez boshlash uchun eng oson yo'l:** Backend versiyasini ishlatish! 🚀
