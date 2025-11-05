// ============================================
// DASTURLASH TEST PLATFORMASI - ASOSIY SKRIPT
// Backend versiya (xavfsiz)
// ============================================

// Global o'zgaruvchilar
let currentLanguage = "";
let currentLevel = "";
let questions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval;
let startTime;
let questionsData = [];

// Backend server URL
const BACKEND_URL = window.location.origin;

// Dastur yuklanishi
async function init() {
  await loadQuestions();
  displayLanguages();
}

// Savollarni yuklash
async function loadQuestions() {
  try {
    const response = await fetch("questions.json");
    questionsData = await response.json();
  } catch (error) {
    console.error("Savollar yuklanmadi:", error);
    alert("Savollar yuklanmadi! questions.json faylini tekshiring.");
  }
}

// Dasturlash tillarini ko'rsatish
function displayLanguages() {
  const languages = [
    { 
      name: "Python", 
      icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
      desc: "Backend va Data Science" 
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      desc: "Frontend va Full-Stack" 
    },
    { 
      name: "Java", 
      icon: "https://cdn-icons-png.flaticon.com/128/226/226777.png",
      desc: "Enterprise dasturlash" 
    },
    { 
      name: "C++", 
      icon: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
      desc: "Tizim dasturlash" 
    },
    { 
      name: "C#", 
      icon: "https://cdn-icons-png.flaticon.com/128/6132/6132221.png",
      desc: ".NET va Unity" 
    },
    { 
      name: "PHP", 
      icon: "https://cdn-icons-png.flaticon.com/128/5968/5968332.png",
      desc: "Web dasturlash" 
    },
  ];

  const container = document.getElementById("languageGrid");
  container.innerHTML = languages
    .map(
      (lang) => `
            <div class="language-card" onclick="selectLanguage('${lang.name}')">
                <img src="${lang.icon}" alt="${lang.name}" class="language-icon" />
                <div class="language-name">${lang.name}</div>
                <div class="language-desc">${lang.desc}</div>
            </div>
        `
    )
    .join("");
}

// Til tanlash
function selectLanguage(language) {
  currentLanguage = language;
  document.getElementById("selectedLanguageDisplay").textContent = language;
  displayLevels();
  showScreen("levelScreen");
}

// Darajalarni ko'rsatish
function displayLevels() {
  const levels = [
    { 
      name: "Junior", 
      icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
      info: "Boshlang'ich daraja" 
    },
    { 
      name: "Middle", 
      icon: "https://cdn-icons-png.flaticon.com/128/3135/3135768.png",
      info: "O'rta daraja" 
    },
    { 
      name: "Senior", 
      icon: "https://cdn-icons-png.flaticon.com/128/3135/3135789.png",
      info: "Yuqori daraja" 
    },
    { 
      name: "Umumiy", 
      icon: "https://cdn-icons-png.flaticon.com/128/3330/3330315.png",
      info: "Barcha darajalar" 
    },
  ];

  const container = document.getElementById("levelGrid");
  container.innerHTML = levels
    .map(
      (level) => `
            <div class="level-card" onclick="startTest('${level.name}')">
                <img src="${level.icon}" alt="${level.name}" class="level-icon" />
                <div class="level-name">${level.name}</div>
                <div class="level-info">${level.info}</div>
            </div>
        `
    )
    .join("");
}

// Testni boshlash
function startTest(level) {
  currentLevel = level;

  const allQuestions = questionsData
    .filter(
      (q) =>
        q.language === currentLanguage &&
        (q.level === level || level === "Umumiy")
    )
    .flatMap((q) => q.questions);

  if (allQuestions.length === 0) {
    alert("Bu til va daraja uchun savollar topilmadi!");
    return;
  }

  questions = shuffleArray(allQuestions).slice(
    0,
    Math.min(15, allQuestions.length)
  );
  currentQuestionIndex = 0;
  userAnswers = new Array(questions.length).fill(null);

  showScreen("testScreen");
  startTimer();
  displayQuestion();
  updateCounters();
}

// Arrayni aralashtirish
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Timer boshlash
function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (elapsed % 60).toString().padStart(2, "0");
    document.getElementById("timerDisplay").textContent = `${minutes}:${seconds}`;
  }, 1000);
}

// Savolni ko'rsatish
function displayQuestion() {
  const question = questions[currentQuestionIndex];
  const letters = ["A", "B", "C", "D"];

  document.getElementById("questionText").textContent = question.question;

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = question.options
    .map(
      (option, index) => `
            <div class="option ${
              userAnswers[currentQuestionIndex] === index ? "selected" : ""
            }" 
                 onclick="selectOption(${index})">
                <div class="option-letter">${letters[index]}</div>
                <div class="option-text">${option}</div>
            </div>
        `
    )
    .join("");

  updateButtons();
  updateCounters();
  updateProgressBar();
}

// Javobni tanlash
function selectOption(index) {
  userAnswers[currentQuestionIndex] = index;
  displayQuestion();
}

// Tugmalarni yangilash
function updateButtons() {
  document.getElementById("prevBtn").disabled = currentQuestionIndex === 0;
  const nextBtn = document.getElementById("nextBtn");

  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.innerHTML = `Yakunlash <img src="https://cdn-icons-png.flaticon.com/128/5610/5610944.png" alt="Finish" class="btn-icon" />`;
  } else {
    nextBtn.innerHTML = `Keyingi <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="Next" class="btn-icon" />`;
  }
}

// Hisoblagichlarni yangilash
function updateCounters() {
  document.getElementById("questionCounter").textContent = `Savol ${
    currentQuestionIndex + 1
  }/${questions.length}`;

  const answeredCount = userAnswers.filter((a) => a !== null).length;
  document.getElementById(
    "answeredCount"
  ).textContent = `Javob berilgan: ${answeredCount}/${questions.length}`;
}

// Progress barni yangilash
function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
}

// Oldingi savolga o'tish
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
}

// Keyingi savolga o'tish
function nextQuestion() {
  if (currentQuestionIndex === questions.length - 1) {
    const unanswered = userAnswers.filter((a) => a === null).length;
    if (unanswered > 0) {
      showConfirmModal(
        `Siz ${unanswered} ta savolga javob bermadingiz. Testni yakunlashni xohlaysizmi?`,
        finishTest
      );
    } else {
      finishTest();
    }
  } else {
    currentQuestionIndex++;
    displayQuestion();
  }
}

// Testni bekor qilish
function cancelTest() {
  showConfirmModal(
    "Testni bekor qilmoqchimisiz? Barcha javoblaringiz yo'qoladi!",
    () => {
      clearInterval(timerInterval);
      showScreen("levelScreen");
    }
  );
}

// Testni yakunlash
function finishTest() {
  closeModal();
  clearInterval(timerInterval);

  let correctAnswers = 0;
  questions.forEach((q, i) => {
    if (userAnswers[i] === q.correct) {
      correctAnswers++;
    }
  });

  const score = Math.round((correctAnswers / questions.length) * 100);

  document.getElementById("scoreNumber").textContent = `${correctAnswers}/${questions.length}`;
  document.getElementById("scoreLabel").textContent = `Jami ball: ${score}%`;

  showScreen("resultScreen");
  analyzeWithBackend(correctAnswers, score);
}

// AI tahlili (BACKEND orqali - XAVFSIZ)
async function analyzeWithBackend(correctAnswers, score) {
  document.getElementById("loadingAnalysis").style.display = "flex";
  document.getElementById("aiAnalysisCard").style.display = "none";

  try {
    const response = await fetch(`${BACKEND_URL}/api/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: currentLanguage,
        level: currentLevel,
        correctAnswers: correctAnswers,
        totalQuestions: questions.length,
        score: score
      }),
    });

    if (!response.ok) {
      throw new Error("Backend xatosi");
    }

    const data = await response.json();
    let analysis = data.analysis;

    // Markdown formatlashni HTML ga o'tkazish
    analysis = analysis
      .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\n\n/g, "</p><p>")
      .replace(/\n/g, "<br>");

    analysis = "<p>" + analysis + "</p>";

    document.getElementById("loadingAnalysis").style.display = "none";
    document.getElementById("aiAnalysisCard").style.display = "block";
    document.getElementById("aiAnalysisContent").innerHTML = analysis;
  } catch (error) {
    console.error("AI tahlil xatosi:", error);
    document.getElementById("loadingAnalysis").style.display = "none";
    document.getElementById("aiAnalysisCard").style.display = "block";
    document.getElementById("aiAnalysisContent").innerHTML = `
      <div class="error-box">
        <strong>Xatolik yuz berdi!</strong>
        <p>${error.message}</p>
        <p>Backend server ishlamayapti. <code>node server.js</code> buyrug'i bilan serverni ishga tushiring.</p>
      </div>
    `;
  }
}

// Tasdiqlash modalni ko'rsatish
function showConfirmModal(text, callback) {
  document.getElementById("modalText").textContent = text;
  document.getElementById("confirmModal").classList.add("active");

  document.getElementById("confirmBtn").onclick = function () {
    if (typeof callback === "function") {
      callback();
    }
    closeModal();
  };
}

// Modalni yopish
function closeModal() {
  document.getElementById("confirmModal").classList.remove("active");
}

// Ekranni almashtirish
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");
}

// Qayta boshlash
function restart() {
  currentLanguage = "";
  currentLevel = "";
  questions = [];
  currentQuestionIndex = 0;
  userAnswers = [];
  clearInterval(timerInterval);
  showScreen("languageScreen");
}

// Klaviatura hodisalari
document.addEventListener("keydown", function (event) {
  if (document.getElementById("confirmModal").classList.contains("active")) {
    return;
  }

  if (document.getElementById("testScreen").classList.contains("active")) {
    if (event.key === "Enter") {
      event.preventDefault();
      nextQuestion();
    }
    else if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault();
      if (!document.getElementById("prevBtn").disabled) {
        previousQuestion();
      }
    }
  }
});

// Dastur yuklanishi
window.onload = init;
