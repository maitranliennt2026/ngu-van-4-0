// ==========================================
// KẾT NỐI SUPABASE CHO NGỮ VĂN 4.0 THCS
// ==========================================
const SUPABASE_URL = "https://qembltxjdktnmzzvcosv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ZdPsrXUzIsiphCUS2WdoJg_wyMp5sEx";

let supabaseClient = null;
if (typeof supabase !== 'undefined') {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

async function saveExamResultToSupabase(tenHocSinh, tenDeThi, diemSo) {
  if (!supabaseClient) return;
  try {
    await supabaseClient.from('ket_qua_thi').insert([
      { ten_hoc_sinh: tenHocSinh, ten_de_thi: tenDeThi, diem_so: diemSo }
    ]);
  } catch (err) {
    console.error("Lỗi:", err);
  }
}

// Scripts dùng chung cho toàn hệ thống Ngữ Văn 4.0

document.addEventListener("DOMContentLoaded", () => {
  // 1. Quản lý Giao diện Sáng/Tối (Dark Mode)
  initDarkMode();

  // 2. Chèn tự động Header & Footer
  injectHeaderAndFooter();

  // 3. Khởi tạo thống kê học tập ban đầu nếu chưa có
  initUserStats();
});

// Quản lý Dark Mode
function initDarkMode() {
  const isDark = localStorage.getItem("nguvan_theme") === "dark" || 
                 (!("nguvan_theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
  
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function toggleDarkMode() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("nguvan_theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("nguvan_theme", "dark");
  }
  updateDarkModeIcons();
}

function updateDarkModeIcons() {
  const moonIcons = document.querySelectorAll(".moon-icon");
  const sunIcons = document.querySelectorAll(".sun-icon");
  const isDark = document.documentElement.classList.contains("dark");

  moonIcons.forEach(icon => {
    if (isDark) icon.classList.add("hidden");
    else icon.classList.remove("hidden");
  });

  sunIcons.forEach(icon => {
    if (isDark) icon.classList.remove("hidden");
    else icon.classList.add("hidden");
  });
}

// Chèn Header & Footer động
function injectHeaderAndFooter() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.split("/").pop() || "index.html";

  // Định nghĩa Header HTML
  const headerHtml = `
    <header class="sticky top-0 z-50 glass-effect border-b border-slate-200/50 dark:border-slate-800/30 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a href="index.html" class="flex items-center space-x-3 group">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <i data-lucide="book-open" class="w-5 h-5"></i>
            </div>
            <span class="text-xl font-extrabold font-serif-title bg-gradient-to-r from-slate-900 to-emerald-800 dark:from-white dark:to-emerald-400 bg-clip-text text-transparent tracking-wide">
              Ngữ Văn <span class="text-emerald-500">4.0</span>
            </span>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-1">
            <a href="index.html" class="px-4 py-2 rounded-lg text-sm font-medium transition-all ${pageName === "index.html" ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 font-semibold" : "text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-slate-50 dark:hover:bg-slate-800/40"}">Trang chủ</a>
            
            <div class="relative group/menu">
              <button class="flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all ${pageName === "grade.html" ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 font-semibold" : ""}">
                <span>Khối lớp</span>
                <i data-lucide="chevron-down" class="w-4 h-4"></i>
              </button>
              <div class="absolute top-full left-0 mt-1 w-48 rounded-xl glass-effect border border-slate-200/50 dark:border-slate-800/50 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all duration-300 z-50">
                <div class="p-2 space-y-1">
                  <a href="grade.html?class=12" class="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Lớp 12 (THPT)</a>
                  <a href="grade.html?class=11" class="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Lớp 11 (THPT)</a>
                  <a href="grade.html?class=10" class="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Lớp 10 (THPT)</a>
                </div>
              </div>
            </div>

            <a href="exams.html" class="px-4 py-2 rounded-lg text-sm font-medium transition-all ${pageName === "exams.html" || pageName === "quiz.html" ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 font-semibold" : "text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-slate-50 dark:hover:bg-slate-800/40"}">Ngân hàng đề thi</a>
            
            <a href="ai-helper.html" class="px-4 py-2 rounded-lg text-sm font-medium relative group transition-all ${pageName === "ai-helper.html" ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 font-semibold" : "text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-slate-50 dark:hover:bg-slate-800/40"}">
              <span>Trợ lý AI</span>
              <span class="absolute -top-1.5 -right-1 flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </a>
          </nav>

          <!-- Utilities & Action Button -->
          <div class="flex items-center space-x-3">
            <!-- Theme Toggle -->
            <button onclick="toggleDarkMode()" class="p-2 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors" aria-label="Toggle Theme">
              <i data-lucide="moon" class="w-4 h-4 moon-icon"></i>
              <i data-lucide="sun" class="w-4 h-4 sun-icon hidden"></i>
            </button>

            <!-- Quick Start Link -->
            <a href="exams.html" class="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-md shadow-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/20 transition-all active:scale-95 duration-200">
              <i data-lucide="play-circle" class="w-4 h-4"></i>
              <span>Thi thử ngay</span>
            </a>

            <!-- Mobile Menu Toggle -->
            <button id="mobile-menu-btn" class="md:hidden p-2 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
              <i data-lucide="menu" class="w-5 h-5" id="menu-open-icon"></i>
              <i data-lucide="x" class="w-5 h-5 hidden" id="menu-close-icon"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-slate-200/30 dark:border-slate-800/30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg px-4 py-3 space-y-2">
        <a href="index.html" class="block px-3 py-2 rounded-xl text-base font-semibold ${pageName === "index.html" ? "text-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/20" : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/30"}">Trang chủ</a>
        
        <div class="px-3 py-2 space-y-1">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Khối lớp học tập</span>
          <div class="grid grid-cols-3 gap-2 mt-1">
            <a href="grade.html?class=12" class="px-3 py-2 text-center text-xs font-semibold rounded-lg border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/20">Lớp 12</a>
            <a href="grade.html?class=11" class="px-3 py-2 text-center text-xs font-semibold rounded-lg border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/20">Lớp 11</a>
            <a href="grade.html?class=10" class="px-3 py-2 text-center text-xs font-semibold rounded-lg border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/20">Lớp 10</a>
          </div>
        </div>

        <a href="exams.html" class="block px-3 py-2 rounded-xl text-base font-semibold ${pageName === "exams.html" || pageName === "quiz.html" ? "text-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/20" : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/30"}">Ngân hàng đề thi</a>
        <a href="ai-helper.html" class="block px-3 py-2 rounded-xl text-base font-semibold ${pageName === "ai-helper.html" ? "text-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/20" : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/30"}">Trợ lý AI phân tích</a>
      </div>
    </header>
  `;

  // Định nghĩa Footer HTML
  const footerHtml = `
    <footer class="bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200/40 dark:border-slate-900/50 py-12 transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="space-y-4 col-span-1 md:col-span-2">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                <i data-lucide="book-open" class="w-4 h-4"></i>
              </div>
              <span class="text-lg font-serif-title font-bold text-slate-900 dark:text-white">Ngữ Văn 4.0</span>
            </div>
            <p class="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Nền tảng ôn luyện Ngữ Văn thông minh, kết hợp phương pháp học truyền thống cùng các tính năng sơ đồ tư duy và phân tích tự động bằng AI.
            </p>
            <div class="flex space-x-3 text-slate-400 dark:text-slate-500">
              <a href="#" class="hover:text-emerald-500 transition-colors"><i data-lucide="facebook" class="w-5 h-5"></i></a>
              <a href="#" class="hover:text-emerald-500 transition-colors"><i data-lucide="youtube" class="w-5 h-5"></i></a>
              <a href="#" class="hover:text-emerald-500 transition-colors"><i data-lucide="github" class="w-5 h-5"></i></a>
            </div>
          </div>
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Danh mục chính</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="index.html" class="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors">Trang chủ</a></li>
              <li><a href="grade.html?class=12" class="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors">Khối THPT Lớp 12</a></li>
              <li><a href="grade.html?class=11" class="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors">Khối THPT Lớp 11</a></li>
              <li><a href="grade.html?class=10" class="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors">Khối THPT Lớp 10</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Công cụ hỗ trợ</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="exams.html" class="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors">Đề thi thử Trắc nghiệm</a></li>
              <li><a href="ai-helper.html" class="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors">Trợ lý Phân tích AI</a></li>
              <li><a href="#" class="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors">Sơ đồ Tư duy Tác phẩm</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-200/40 dark:border-slate-900/50 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500">
          <p>© 2026 Dự án Ngữ Văn 4.0. Thiết kế với sự tinh tế và tối giản.</p>
          <p>Phiên bản 4.2.0 - Hoạt động độc lập bằng mã nguồn sạch.</p>
        </div>
      </div>
    </footer>
  `;

  // Chèn vào đầu/cuối body
  const body = document.body;
  
  // Tạo container cho header và footer
  const headerContainer = document.createElement("div");
  headerContainer.innerHTML = headerHtml;
  body.insertBefore(headerContainer.firstElementChild, body.firstChild);

  const footerContainer = document.createElement("div");
  footerContainer.innerHTML = footerHtml;
  body.appendChild(footerContainer.firstElementChild);

  // Setup mobile menu toggle logic
  setupMobileMenu();

  // Khởi tạo/Cập nhật biểu tượng Dark Mode sau khi chèn HTML
  updateDarkModeIcons();

  // Khởi chạy vẽ icon Lucide
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Thiết lập điều hướng di động
function setupMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("menu-open-icon");
  const closeIcon = document.getElementById("menu-close-icon");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isHidden = menu.classList.contains("hidden");
    if (isHidden) {
      menu.classList.remove("hidden");
      openIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
      openIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });
}

// Khởi tạo các số liệu học tập của người dùng
function initUserStats() {
  const defaultStats = {
    examsTaken: 0,
    averageScore: 0,
    history: [],
    completedLessons: [] // Chứa các id tác phẩm đã học xong
  };

  if (!localStorage.getItem("nguvan_stats")) {
    localStorage.setItem("nguvan_stats", JSON.stringify(defaultStats));
  }
}

// Hàm lấy thống kê học tập
function getUserStats() {
  return JSON.parse(localStorage.getItem("nguvan_stats")) || { examsTaken: 0, averageScore: 0, history: [], completedLessons: [] };
}

// Lưu kết quả bài thi
function saveExamResult(examId, examTitle, score, maxScore, durationSpent) {
  const stats = getUserStats();
  stats.examsTaken += 1;
  
  const scorePercent = (score / maxScore) * 10; // Thang điểm 10
  const prevSum = stats.averageScore * (stats.examsTaken - 1);
  stats.averageScore = parseFloat(((prevSum + scorePercent) / stats.examsTaken).toFixed(1));

  stats.history.push({
    examId,
    examTitle,
    score: scorePercent,
    date: new Date().toLocaleDateString("vi-VN"),
    duration: durationSpent
  });

  localStorage.setItem("nguvan_stats", JSON.stringify(stats));
  return stats;
}

// Đánh dấu bài học đã học xong
function toggleLessonCompletion(lessonId) {
  const stats = getUserStats();
  const index = stats.completedLessons.indexOf(lessonId);
  
  if (index === -1) {
    stats.completedLessons.push(lessonId);
  } else {
    stats.completedLessons.splice(index, 1);
  }
  
  localStorage.setItem("nguvan_stats", JSON.stringify(stats));
  return stats;
}
