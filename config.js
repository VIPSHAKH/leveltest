// ============================================
// KONFIGURATSIYA FAYLI
// ============================================

// MUHIM: Bu faylni .gitignore ga qo'shing!
// API kalitingizni shu yerga kiriting

const CONFIG = {
  // Gemini AI API kaliti
  // API kalitni https://makersuite.google.com/app/apikey dan olishingiz mumkin
  GEMINI_API_KEY: "AIzaSyAA7OyIAPcC_9IFMxl_Bq9L0Sz_4D9zc38",
  
  // API endpoint
  GEMINI_API_URL: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
  
  // Test sozlamalari
  TEST_SETTINGS: {
    timeLimit: 1800, // 30 daqiqa (sekundlarda)
    showTimer: true,
    shuffleQuestions: false,
    shuffleOptions: true
  }
};

// API kalitni olish funksiyasi (foydalanuvchi console da ko'rmaydi)
function getApiKey() {
  return CONFIG.GEMINI_API_KEY;
}

// API URL ni olish funksiyasi
function getApiUrl() {
  return CONFIG.GEMINI_API_URL;
}

// Test sozlamalarini olish funksiyasi
function getTestSettings() {
  return CONFIG.TEST_SETTINGS;
}
