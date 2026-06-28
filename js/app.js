/* =========================================================================
   Sanad — app.js
   Everything you're likely to want to tweak lives in CONFIG and I18N below.
   ========================================================================= */

const CONFIG = {
  // Update these with your real links before deploying.
  whatsappGroup: "https://chat.whatsapp.com/Eqg3c7cumM86QkJUWGUyyK",
  telegramChannel: "https://t.me/+4f58o_o-Vh85NTY0",
  contactLink: "sandations@gmail.com",
  // Used to build a prefilled WhatsApp message when someone taps "Donate".
  donateWhatsapp: "https://chat.whatsapp.com/Eqg3c7cumM86QkJUWGUyyK",
  casesFile: "data/cases.json",
  monthlyFile: "data/monthly-donations.xlsx",
};

const CATEGORIES = {
  food:      { icon: "🍲", color: "var(--cat-food)" },
  money:     { icon: "💰", color: "var(--cat-money)" },
  medicine:  { icon: "💊", color: "var(--cat-medicine)" },
  work:      { icon: "🛠️", color: "var(--cat-work)" },
  shelter:   { icon: "🏠", color: "var(--cat-shelter)" },
  debt:      { icon: "📋", color: "var(--cat-debt)" },
  marriage:  { icon: "💍", color: "var(--cat-marriage)" },
  emergency: { icon: "🚨", color: "var(--cat-emergency)" },
};

const I18N = {
  en: {
    dir: "ltr",
    htmlLang: "en",
    pageTitle: "Sanad — Track real donation cases",
    brand: "Sanad",
    navCommunity: "Community",
    heroEyebrow: "Live ledger",
    heroTitle: "Every donation, tracked openly",
    heroSub: "Browse open cases, see exactly where funds are going, and follow monthly totals — all sourced from one editable spreadsheet.",
    statRaised: "Total raised",
    statActive: "Active cases",
    statDonors: "Donors",
    statCompleted: "Fully funded",
    filtersHeading: "Browse by category",
    filterAll: "All",
    cat_food: "Food", cat_money: "Money", cat_medicine: "Medicine", cat_work: "Work", cat_shelter: "Shelter", cat_debt: "Debt", cat_marriage: "Marriage", cat_emergency: "Emergency",
    casesHeading: "Open cases",
    casesSub: "Tap any case for the full story and to donate.",
    raisedOf: "of",
    statusFunded: "Funded",
    statusActive: "Open",
    closeBtn: "Close",
    donateBtn: "Donate to this case",
    shareBtn: "Share",
    locationLabel: "Location",
    donorsLabel: "donors",
    monthlyHeading: "Monthly giving by category",
    monthlySub: "Pulled from data/monthly-donations.xlsx — edit that file and refresh to update.",
    monthlyLoading: "Loading monthly figures…",
    monthlyError: "Couldn't load the monthly figures here. Open this site through a local server or GitHub Pages (not a double-clicked file) for the spreadsheet to load.",
    communityHeading: "Join the community",
    communitySub: "Get notified about new cases and chat with the team.",
    whatsappCard: "WhatsApp group",
    whatsappSub: "Updates + quick questions",
    telegramCard: "Telegram channel",
    telegramSub: "Announcements only",
    contactCard: "Message the team",
    contactSub: "Suggest a case or ask anything",
    footerNote: "An open record — every case and figure here is editable in the project's data files.",
    footerManaged: "Case data & monthly figures are version-controlled on GitHub.",
    emptyState: "No cases in this category right now.",
    shareCopied: "Link copied",
    egp: "EGP",
    caseWord: "Case",
    emergencyLabel: "URGENT",
  },
  ar: {
    dir: "rtl",
    htmlLang: "ar",
    pageTitle: "سند — تابع حالات التبرع بشفافية",
    brand: "سند",
    navCommunity: "المجتمع",
    heroEyebrow: "سجل حي",
    heroTitle: "كل تبرع، موثّق بشفافية",
    heroSub: "تصفح الحالات المفتوحة، وتابع وجهة كل تبرع، واطّلع على إجمالي كل شهر — كل ذلك من ملف بيانات واحد يسهل تعديله.",
    statRaised: "إجمالي ما تم جمعه",
    statActive: "حالات مفتوحة",
    statDonors: "متبرع",
    statCompleted: "حالات مكتملة",
    filtersHeading: "تصفح حسب الفئة",
    filterAll: "الكل",
    cat_food: "طعام", cat_money: "مال", cat_medicine: "دواء", cat_work: "عمل", cat_shelter: "مأوى",cat_debt: "ديون", cat_marriage: "زواج", cat_emergency: "طارئة",
    casesHeading: "الحالات المفتوحة",
    casesSub: "اضغط على أي حالة لمعرفة التفاصيل والتبرع.",
    raisedOf: "من",
    statusFunded: "تم التمويل",
    statusActive: "مفتوحة",
    closeBtn: "إغلاق",
    donateBtn: "تبرّع لهذه الحالة",
    shareBtn: "مشاركة",
    locationLabel: "الموقع",
    donorsLabel: "متبرع",
    monthlyHeading: "التبرعات الشهرية حسب الفئة",
    monthlySub: "تُقرأ من ملف data/monthly-donations.xlsx — عدّل الملف وأعد تحميل الصفحة للتحديث.",
    monthlyLoading: "جارٍ تحميل الأرقام الشهرية…",
    monthlyError: "تعذّر تحميل الأرقام الشهرية هنا. افتح الموقع عبر سيرفر محلي أو GitHub Pages (وليس بفتح الملف مباشرة) حتى يعمل ملف البيانات.",
    communityHeading: "انضم إلى المجتمع",
    communitySub: "تابع الحالات الجديدة وتواصل مع الفريق.",
    whatsappCard: "مجموعة واتساب",
    whatsappSub: "تحديثات وأسئلة سريعة",
    telegramCard: "قناة تيليجرام",
    telegramSub: "إعلانات فقط",
    contactCard: "راسل الفريق",
    contactSub: "اقترح حالة أو اسأل أي شيء",
    footerNote: "سجل مفتوح للجميع — كل حالة ورقم هنا قابل للتعديل من ملفات بيانات المشروع.",
    footerManaged: "بيانات الحالات والأرقام الشهرية تُدار عبر GitHub.",
    emptyState: "لا توجد حالات في هذه الفئة حاليًا.",
    shareCopied: "تم نسخ الرابط",
    egp: "ج.م",
    caseWord: "حالة",
    emergencyLabel: "عاجل",
  },
};

const MONTH_NAMES = {
  en: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  ar: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
};

let currentLang = localStorage.getItem("sanad-lang") || "ar";
let currentFilter = "all";
let CASES = [];
let monthlyRows = null; // [[Month, Food, Money, Medicine, Work, Shelter], ...]
let chartInstance = null;

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const t = (key) => I18N[currentLang][key] ?? key;
const fmt = (n) => Number(n || 0).toLocaleString("en-US");

/* ---------------------------- language switch --------------------------- */
function applyLanguage() {
  const dict = I18N[currentLang];
  document.documentElement.lang = dict.htmlLang;
  document.documentElement.dir = dict.dir;
  document.title = dict.pageTitle;
  $$("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  $("#langToggle").textContent = currentLang === "ar" ? "EN" : "AR";
  $("#langToggle").setAttribute("aria-label", "Switch language");
  renderStats();
  renderFilters();
  renderCases();
  renderMonthlyChart();
  if (currentOpenCase) openCaseModal(currentOpenCase, true);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("sanad-lang", lang);
  applyLanguage();
}

/* --------------------------------- stats --------------------------------- */
function renderStats() {
  const totalRaised = CASES.reduce((s, c) => s + (c.raised || 0), 0);
  const active = CASES.filter((c) => c.status === "active").length;
  const completed = CASES.filter((c) => c.status === "completed").length;
  const donors = CASES.reduce((s, c) => s + (c.donors || 0), 0);

  $("#statRaised").textContent = `${fmt(totalRaised)} ${t("egp")}`;
  $("#statActive").textContent = fmt(active);
  $("#statDonors").textContent = fmt(donors);
  $("#statCompleted").textContent = fmt(completed);
}

/* -------------------------------- filters -------------------------------- */
function renderFilters() {
  const wrap = $("#filtersScroll");
  wrap.innerHTML = "";
  const allChip = makeChip("all", t("filterAll"), "🔎");
  wrap.appendChild(allChip);
  Object.keys(CATEGORIES).forEach((cat) => {
    wrap.appendChild(makeChip(cat, t(`cat_${cat}`), CATEGORIES[cat].icon));
  });
}

function makeChip(cat, label, icon) {
  const btn = document.createElement("button");
  btn.className = "chip";
  btn.type = "button";
  btn.setAttribute("aria-pressed", String(cat === currentFilter));
  btn.innerHTML = `<span aria-hidden="true">${icon}</span><span>${label}</span>`;
  btn.addEventListener("click", () => {
    currentFilter = cat;
    renderFilters();
    renderCases();
  });
  return btn;
}

/* --------------------------------- cases --------------------------------- */
function renderCases() {
  const grid = $("#casesGrid");
  grid.innerHTML = "";
  let list = CASES.filter((c) => {
    if (currentFilter === "all") return true;
    const cats = c.categories || [c.category];
    return cats.includes(currentFilter);
  });

  if (!list.length) {
    grid.innerHTML = `<div class="empty-state">${t("emptyState")}</div>`;
    return;
  }

  // Emergency cases first
  list = [
    ...list.filter((c) => (c.categories || [c.category]).includes("emergency")),
    ...list.filter((c) => !(c.categories || [c.category]).includes("emergency")),
  ];

  list.forEach((c) => grid.appendChild(buildCaseCard(c)));
}



function pct(c) {
  if (!c.goal) return 0;
  return Math.max(0, Math.min(100, Math.round((c.raised / c.goal) * 100)));
}

function buildCaseCard(c) {
  const card = document.createElement("button");
  card.type = "button";
  const cats = c.categories || [c.category];
  const primaryCat = cats[0];
  const catMeta = CATEGORIES[primaryCat] || {};
  const isEmergency = cats.includes("emergency");
  card.className = isEmergency ? "case-card case-card--emergency" : "case-card";
  if (isEmergency) {
    card.setAttribute("data-emergency-label", t("emergencyLabel"));
  }
  const title = currentLang === "ar" ? c.title_ar : c.title_en;
  const summary = currentLang === "ar" ? c.summary_ar : c.summary_en;
  const isDone = c.status === "completed";
  const p = pct(c);
  const num = String(c.id).padStart(2, "0");

  card.innerHTML = `
    <div class="case-photo" style="background-image:url('${c.image}')">
      <span class="case-tag case-tag--num">${t("caseWord")} #${num}</span>
      <span class="case-tag case-tag--cat" style="--cat-color:${catMeta.color}">${catMeta.icon} ${t(`cat_${primaryCat}`)}${cats.length > 1 ? ` +${cats.length - 1}` : ""}</span>
      ${isDone ? `<span class="case-tag case-tag--done">✓ ${t("statusFunded")}</span>` : ""}
    </div>
    <div class="case-body">
      <h3>${title}</h3>
      <p>${summary}</p>
      <div class="progress"><div class="progress-fill ${isDone ? "is-done" : ""}" style="width:${p}%"></div></div>
      <div class="progress-meta">
        <span><strong>${fmt(c.raised)}</strong> ${t("raisedOf")} ${fmt(c.goal)} ${t("egp")}</span>
        <span>${p}%</span>
      </div>
    </div>
  `;
  card.addEventListener("click", () => openCaseModal(c));
  return card;
}

/* --------------------------------- modal --------------------------------- */
let currentOpenCase = null;

function openCaseModal(c, silent) {
  currentOpenCase = c;
  const overlay = $("#modalOverlay");
  const title = currentLang === "ar" ? c.title_ar : c.title_en;
  const details = currentLang === "ar" ? c.details_ar : c.details_en;
  const location = currentLang === "ar" ? c.location_ar : c.location_en;
  const cats = c.categories || [c.category];
  const isDone = c.status === "completed";
  const p = pct(c);
  const num = String(c.id).padStart(2, "0");

  $("#modalSheet").innerHTML = `
    <div class="modal-grip"></div>
    <div class="modal-photo" style="background-image:url('${c.image}')"></div>
    <div class="modal-content">
      <div class="modal-top-row">
        <span class="modal-kicker">${t("caseWord")} #${num}</span>
        <button class="btn-icon" id="modalClose" aria-label="${t("closeBtn")}">✕</button>
      </div>
      <h2>${title}</h2>
      <div class="modal-meta-row">
        ${cats.map(cat => {
          const meta = CATEGORIES[cat] || {};
          return `<span class="pill">${meta.icon} ${t(`cat_${cat}`)}</span>`;
        }).join("")}
        <span class="pill">📍 ${location}</span>
        <span class="pill ${isDone ? "status-done" : ""}">${isDone ? "✓ " + t("statusFunded") : "● " + t("statusActive")}</span>
      </div>
      <p class="desc">${details}</p>
      <div class="modal-progress-wrap">
        <div class="progress"><div class="progress-fill ${isDone ? "is-done" : ""}" style="width:${p}%"></div></div>
        <div class="modal-progress-numbers">
          <span class="raised">${fmt(c.raised)} ${t("egp")}</span>
          <span class="goal">${t("raisedOf")} ${fmt(c.goal)} ${t("egp")} · ${fmt(c.donors)} ${t("donorsLabel")}</span>
        </div>
      </div>
      <div class="modal-actions">
        <a class="btn btn-primary" target="_blank" rel="noopener" href="${buildDonateLink(c, title)}">💚 ${t("donateBtn")}</a>
        <button class="btn btn-secondary" id="modalShare">🔗 ${t("shareBtn")}</button>
      </div>
    </div>
  `;

  $("#modalClose").addEventListener("click", closeCaseModal);
  $("#modalShare").addEventListener("click", () => shareCase(c, title));

  if (!silent) {
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
}


function closeCaseModal() {
  $("#modalOverlay").classList.remove("is-open");
  document.body.style.overflow = "";
  currentOpenCase = null;
}

function buildDonateLink(c, title) {
  const msg = `${t("caseWord")} #${String(c.id).padStart(2, "0")} — ${title}`;
  return `${CONFIG.donateWhatsapp}?text=${encodeURIComponent(msg)}`;
}

function shareCase(c, title) {
  const url = `${location.href.split("#")[0]}#case-${c.id}`;
  if (navigator.share) {
    navigator.share({ title, url }).catch(() => {});
  } else {
    navigator.clipboard?.writeText(url);
    showToast(t("shareCopied"));
  }
}

function showToast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("is-visible");
  setTimeout(() => el.classList.remove("is-visible"), 1800);
}

/* ------------------------------ monthly chart ----------------------------- */
async function loadMonthly() {
  try {
    const res = await fetch(CONFIG.monthlyFile);
    const buf = await res.arrayBuffer();
    const wb = XLSX.read(buf, { type: "array" });
    const sheet = wb.Sheets[wb.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    monthlyRows = rows.filter((r) => r.length && r[0]);
    renderMonthlyChart();
  } catch (err) {
    console.error("monthly data load failed", err);
    $("#monthlyStatus").textContent = t("monthlyError");
    $("#monthlyStatus").style.display = "block";
    $("#monthlyChart").style.display = "none";
  }
}

function renderMonthlyChart() {
  if (!monthlyRows || typeof Chart === "undefined") return;
  const status = $("#monthlyStatus");
  status.style.display = "none";
  $("#monthlyChart").style.display = "block";

  const header = monthlyRows[0]; // Month, Food, Money, Medicine, Work, Shelter
  const dataRows = monthlyRows.slice(1);
  const catKeys = header.slice(1).map((h) => String(h).toLowerCase());
  const labels = dataRows.map((r) => {
    const [y, m] = String(r[0]).split("-");
    const idx = Number(m) - 1;
    return MONTH_NAMES[currentLang][idx] || r[0];
  });
const colorMap = {
    food: "#6B7A41", money: "#946E20", medicine: "#3E7C8C", work: "#8B5E34", shelter: "#6B4E71",
    debt: "#B5453A", marriage: "#D4849B", emergency: "#CC3333",
  };

  const datasets = catKeys.map((key, i) => ({
    label: t(`cat_${key}`) || header[i + 1],
    data: dataRows.map((r) => Number(r[i + 1]) || 0),
    backgroundColor: colorMap[key] || "#888",
    borderRadius: 4,
    maxBarThickness: 26,
  }));

  const ctx = $("#monthlyChart").getContext("2d");
  if (chartInstance) chartInstance.destroy();
  chartInstance = new Chart(ctx, {
    type: "bar",
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      scales: {
        x: { stacked: true, grid: { display: false }, ticks: { font: { family: "Cairo" } } },
        y: { stacked: true, grid: { color: "#E1D6BD" }, ticks: { font: { family: "Cairo" } } },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          titleFont: { family: "Cairo" },
          bodyFont: { family: "Cairo" },
          callbacks: {
            label: (c) => ` ${c.dataset.label}: ${fmt(c.parsed.y)} ${t("egp")}`,
          },
        },
      },
    },
  });

  renderLegend(catKeys, colorMap);
}

function renderLegend(catKeys, colorMap) {
  const wrap = $("#monthlyLegend");
  wrap.innerHTML = catKeys
    .map(
      (key) => `<span class="legend-item"><span class="legend-dot" style="background:${colorMap[key]}"></span>${t(`cat_${key}`)}</span>`
    )
    .join("");
}

/* --------------------------------- init ----------------------------------- */
async function init() {
  $("#langToggle").addEventListener("click", () => setLanguage(currentLang === "ar" ? "en" : "ar"));
  $("#modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeCaseModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCaseModal();
  });

  $("#whatsappCardLink").href = CONFIG.whatsappGroup;
  $("#telegramCardLink").href = CONFIG.telegramChannel;
  $("#contactCardLink").href = CONFIG.contactLink;
  $("#communityShortcut").href = "#community";

  try {
    const res = await fetch(CONFIG.casesFile);
    CASES = await res.json();
  } catch (err) {
    console.error("cases.json load failed", err);
    CASES = [];
  }

  applyLanguage();
  loadMonthly();
}

init();
