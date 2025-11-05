// ============================================
// KONFIGURATSIYA FAYLI
// ============================================

// MUHIM: Bu faylni .gitignore ga qo'shing!
// API kalitingizni shu yerga kiriting

// API key ni kodlangan formatda saqlash (base64)
// Bu 100% xavfsiz emas, lekin oddiy ko'rinishdan yashiradi
// Haqiqiy xavfsizlik uchun backend server ishlatish kerak!

const _0x4e2a = ['QUl6YVN5QUE3T3lJQVBjQ185SUZNeGxfQnE5TDBTel80RDl6YzM4', 'aHR0cHM6Ly9nZW5lcmF0aXZlbGFuZ3VhZ2UuZ29vZ2xlYXBpcy5jb20vdjFiZXRhL21vZGVscy9nZW1pbmktMi4wLWZsYXNoOmdlbmVyYXRlQ29udGVudA=='];

function _0x1a2b() {
  return atob(_0x4e2a[0]);
}

function _0x2b3c() {
  return atob(_0x4e2a[1]);
}

const CONFIG = {
  _k: _0x4e2a[0],
  _u: _0x4e2a[1],
  TEST_SETTINGS: {
    timeLimit: 1800,
    showTimer: true,
    shuffleQuestions: false,
    shuffleOptions: true
  }
};

// API kalitni olish
function getApiKey() {
  return _0x1a2b();
}

// API URL ni olish
function getApiUrl() {
  return _0x2b3c();
}

// Test sozlamalari
function getTestSettings() {
  return CONFIG.TEST_SETTINGS;
}
