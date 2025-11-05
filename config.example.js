// ============================================
// KONFIGURATSIYA NAMUNASI
// ============================================

// MUHIM: 
// 1. Bu faylni config.js ga nusxalang
// 2. YOUR_API_KEY_HERE ni o'z API kalitingiz bilan almashtiring
// 3. config.js faylini .gitignore ga qo'shing

const CONFIG = {
  // Gemini AI API kaliti
  // API kalitni https://makersuite.google.com/app/apikey dan olishingiz mumkin
  GEMINI_API_KEY: "YOUR_API_KEY_HERE",
  
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

// API kalitni olish
function getApiKey() {
  return CONFIG.GEMINI_API_KEY;
}

// API URL ni olish
function getApiUrl() {
  return CONFIG.GEMINI_API_URL;
}

// Test sozlamalari
function getTestSettings() {
  return CONFIG.TEST_SETTINGS;
}
