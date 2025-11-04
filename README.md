# Dasturlash Bilimini Tekshiring - Programming Test Website

## 🎯 Loyiha Haqida / About

**O'zbek tilida:** Bu veb-sayt dasturchilarning turli dasturlash tillaridagi bilimlarini tekshirish uchun mo'ljallangan. Foydalanuvchilar Python, JavaScript, Java, C++, C#, PHP kabi tillarda turli darajadagi (Junior, Middle, Senior, Umumiy) testlarni topshirishlari va Gemini AI orqali o'z natijalarini tahlil qilishlari mumkin.

**In English:** This website is designed to test programmers' knowledge in various programming languages. Users can take tests in languages like Python, JavaScript, Java, C++, C#, PHP at different levels (Junior, Middle, Senior, General) and analyze their results through Gemini AI.

## ✨ Xususiyatlar / Features

- 🎨 **Zamonaviy Dizayn** - Gradient background va smooth animatsiyalar
- 🌐 **To'liq O'zbek Tilida** - Barcha interfeys o'zbek tilida
- 📱 **Responsive** - Desktop va mobile qurilmalarda ishlaydi
- 🤖 **AI Tahlil** - Gemini API orqali shaxsiylashtirilgan tahlil
- ⚡ **Tez va Engil** - Framework'siz, pure HTML/CSS/JS
- 📊 **Ko'p Tillar** - 6+ dasturlash tili uchun savollar
- 🎯 **Har Xil Darajalar** - Junior, Middle, Senior va Umumiy

## 🚀 Ishga Tushirish / Setup

### 1. Fayllarni Yuklab Oling

Quyidagi fayllar kerak:
- `uzbek-test-website.html` - Asosiy veb-sayt fayli
- `questions.json` - Savol bazasi

### 2. Gemini API Kalitini Oling

1. [Google AI Studio](https://makersuite.google.com/app/apikey) sahifasiga kiring
2. Google akkauntingiz bilan tizimga kiring
3. "Create API Key" tugmasini bosing
4. API kalitingizni nusxalab oling (bu kalit bepul!)

### 3. API Kalitini Kodga Qo'ying

**Muhim:** `uzbek-test-website.html` faylini matn muharririda oching va quyidagi qatorni toping:

```javascript
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
```

`YOUR_GEMINI_API_KEY_HERE` qismini o'z API kalitingiz bilan almashtiring:

```javascript
const GEMINI_API_KEY = 'AIzaSyD...sizning_kalitingiz_bu_yerda';
```

Faylni saqlang.

### 4. Veb-saytni Ochish

**Eng oson usul:**
1. `uzbek-test-website.html` faylini brauzeringizda oching
2. Test topshiring va natijalaringizni AI tahlili bilan ko'ring!

**Yoki Web Server orqali:**
```bash
# Python server
python -m http.server 8000

# PHP server
php -S localhost:8000

# Node.js server (http-server)
npx http-server
```

Keyin brauzeringizda `http://localhost:8000/uzbek-test-website.html` ga kiring.

## 📖 Foydalanish / Usage

### Oddiy Foydalanish

1. **Til Tanlang** - Python, JavaScript, Java, C++, C#, PHP dan birini tanlang
2. **Daraja Tanlang** - Junior, Middle, Senior yoki Umumiy testni tanlang
3. **Test Toping** - 10-15 ta savolga javob bering
4. **Natijani Ko'ring** - Ballingiz, to'g'ri javoblar soni va AI tahlilini avtomatik ko'rasiz!

### API Kalit Xavfsizligi

⚠️ **Muhim Xavfsizlik Eslatmasi:**
- API kalit HTML faylida hardcode qilingan (ochiq kodda)
- Bu faqat demo/shaxsiy loyihalar uchun mos
- Agar public website qilmoqchi bo'lsangiz, API kalitni backend serverda saqlang
- Google AI Studio'da API kalitingiz uchun usage limitlar va restrictions o'rnating

## 🔧 Yangi Savollar Qo'shish / Adding Questions

`questions.json` faylini tahrirlang:

```json
{
  "language": "Python",
  "level": "Junior",
  "questions": [
    {
      "question": "Sizning savolingiz?",
      "options": ["Variant A", "Variant B", "Variant C", "Variant D"],
      "correct": 2
    }
  ]
}
```

**Eslatma:** `correct` indexi 0 dan boshlanadi (0 = A, 1 = B, 2 = C, 3 = D)

## 🎨 Dizaynni O'zgartirish / Customizing Design

HTML faylidagi `<style>` qismini tahrirlash orqali:

```css
/* Gradient ranglarini o'zgartirish */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}

/* Tugma rangini o'zgartirish */
.btn {
    background: rgba(255, 255, 255, 0.2);
}
```

## 📱 Qo'llab-quvvatlanadigan Brauzerlar / Supported Browsers

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 🔐 Xavfsizlik / Security

⚠️ **Muhim:** Bu demo versiyada API kalit HTML faylida hardcode qilingan. Bu quyidagi cheklovlarga ega:

**Xavflar:**
- API kalit ochiq ko'rinadi (har kim browser DevTools orqali ko'rishi mumkin)
- Agar faylni GitHub yoki boshqa public joyga yuklasangiz, kalit hammaga ochiq bo'ladi
- Kalit suiiste'mol qilinishi mumkin

**Himoya choralari:**
1. Google AI Studio'da API kalitingiz uchun restrictions o'rnating:
   - IP addresslar bo'yicha cheklash
   - So'rovlar sonini cheklash
   - Faqat zarur API'larni yoqish
2. Bu faylni faqat shaxsiy ishlatish uchun saqlang
3. Public website uchun:
   - API kalitni backend serverda saqlang
   - Frontend'dan backend API'ga so'rov yuboring
   - Backend API Gemini'ga so'rov yuborsin

**To'g'ri ishlatish:**
- ✅ Shaxsiy kompyuteringizda offline test
- ✅ Local demo uchun
- ✅ O'rganish va rivojlantirish uchun
- ❌ Public GitHub repository
- ❌ Public hosting (Netlify, Vercel, etc.)
- ❌ Ko'p foydalanuvchili production sayt

## 🐛 Muammolarni Hal Qilish / Troubleshooting

### Savollar yuklanmayapti
- `questions.json` fayli `.html` fayl bilan bir papkada ekanligini tekshiring
- Brauzer konsolini tekshiring (F12)
- CORS xatoligi bo'lsa, web server orqali ishga tushiring

### AI tahlil ishlamayapti
- HTML faylidagi `GEMINI_API_KEY` qiymatini to'g'ri o'rnatganingizni tekshiring
- API kalitingizda qo'shtirnoqlar ichida bo'lishi kerak: `'AIzaSy...'`
- Internet aloqangizni tekshiring
- [Google AI Studio](https://makersuite.google.com/) da API kalitingiz faol va limitlar yetarli ekanligini tekshiring
- Brauzer konsolida (F12) xatolik xabarlarini o'qing

### "API Kaliti O'rnatilmagan" xatosi
- HTML faylini matn muharririda oching
- `const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';` qatorini toping
- `YOUR_GEMINI_API_KEY_HERE` qismini o'z API kalitingiz bilan almashtiring
- Faylni saqlang va brauzerda yangilan (F5)

### Dizayn buzilgan ko'rinadi
- Brauzer cache'ini tozalang (Ctrl+Shift+Delete)
- Brauzeringiz yangilanganligini tekshiring
- Boshqa brauzerda sinab ko'ring

## 📝 Litsenziya / License

Bu loyiha MIT litsenziyasi ostida tarqatiladi. Erkin foydalanishingiz mumkin!

## 🤝 Hissa Qo'shish / Contributing

Yangi savollar, dizayn yaxshilash, yoki xatolarni tuzatish uchun:
1. Loyihani fork qiling
2. O'zgartirishlar kiriting
3. Pull request yuboring

## 📞 Aloqa / Contact

Savollar yoki takliflar bo'lsa:
- GitHub Issues orqali murojaat qiling
- Email: [sizning@email.uz]

## 🙏 Minnatdorchilik / Acknowledgments

- **Gemini AI** - AI tahlil uchun
- **Google Fonts** - Chiroyli shriftlar uchun
- **O'zbek dasturchilar jamoasi** - Qo'llab-quvvatlash uchun

## 📊 Statistika / Statistics

Hozirda mavjud:
- 6 dasturlash tili
- 15+ har bir daraja uchun savollar
- 4 daraja (Junior, Middle, Senior, Umumiy)
- 150+ jami savollar

## 🔮 Kelajak Rejalari / Future Plans

- [ ] Ko'proq dasturlash tillari (Go, Rust, Swift)
- [ ] Natijalarni PDF ga export qilish
- [ ] Leaderboard (reyting tizimi)
- [ ] Sertifikat yaratish
- [ ] Telegram bot integratsiyasi
- [ ] Ko'proq AI modellari (GPT, Claude)

---

**Muvaffaqiyatli dasturlash! 🚀**

Made with ❤️ for Uzbek Developers