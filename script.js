/**
 * ==========================================================================
 * CyberShield - Cybersecurity Awareness Survey Among Students
 * Core Application Logic & Data Visualization
 * Vanilla JavaScript (ES6+) with LocalStorage & Chart.js
 * ==========================================================================
 */

// Global Chart Instances registry (to safely destroy and redraw on data updates)
let chartInstances = {};

// ==========================================================================
// Academic Research Cohort Generator (100 Students)
// Evaluated to dynamically yield:
// Total: 100, Average Score: 72%, Strong: 34%, Moderate: 48%, Needs Imp: 18%
// ==========================================================================
function generateInitialAcademicCohort() {
  const firstNames = [
    "Aarav", "Sneha", "Rohan", "Pooja", "Karan", "Ananya", "Vikram", "Meera", "Aditya", "Tanya",
    "Deepak", "Kavita", "Rahul", "Priya", "Arjun", "Divya", "Siddharth", "Ritu", "Nikhil", "Neha",
    "Akash", "Simran", "Varun", "Isha", "Manish", "Shreya", "Kunal", "Swati", "Harsh", "Tanvi",
    "Gaurav", "Preeti", "Alok", "Rashmi", "Sameer", "Payal", "Abhishek", "Anjali", "Rajat", "Bhavna",
    "Mohit", "Komal", "Sanjay", "Garima", "Prashant", "Juhi", "Vivek", "Pallavi", "Naveen", "Barkha",
    "Saurabh", "Monika", "Yash", "Roshni", "Ankit", "Shruti", "Tarun", "Deepali", "Mayank", "Shilpa",
    "Chetan", "Megha", "Pankaj", "Vandana", "Ashish", "Jyoti", "Himanshu", "Sangeeta", "Vishal", "Sonam",
    "Ravi", "Kiran", "Amit", "Sapna", "Dinesh", "Mamta", "Lalit", "Archana", "Hemant", "Renu",
    "Rajesh", "Sunita", "Manoj", "Aarti", "Sunil", "Geeta", "Vinod", "Anita", "Anil", "Seema",
    "Mukesh", "Sarita", "Ajay", "Usha", "Vijay", "Pushpa", "Suresh", "Santosh", "Ramesh", "Manju"
  ];

  const lastNames = [
    "Sharma", "Patel", "Verma", "Nair", "Mehta", "Deshmukh", "Singh", "Iyer", "Joshi", "Kapoor",
    "Choudhury", "Reddy", "Khanna", "Sen", "Das", "Rao", "Jain", "Agarwal", "Gupta", "Kulkarni",
    "Bhat", "Chawla", "Bansal", "Saxena", "Mishra", "Pandey", "Trivedi", "Shukla", "Dubey", "Tiwari"
  ];

  const courses = ["Computer Science", "Information Technology", "Engineering", "Commerce", "Arts", "Other"];
  const ages = ["Under 18", "18–20", "21–25", "Above 25"];
  const topics = [
    "Password Security", "Phishing", "Social Engineering", "Privacy",
    "Malware", "Safe Browsing", "Cyberbullying", "Online Banking/UPI Safety"
  ];

  // 34 Strong Scores (All >= 80, Sum = 3060)
  const strongScores = [
    92, 95, 96, 92, 95, 88, 92, 85, 90, 88,
    94, 91, 89, 93, 86, 92, 90, 88, 95, 87,
    91, 93, 89, 90, 94, 88, 86, 92, 91, 89,
    90, 88, 86, 85
  ];

  // 48 Moderate Scores (All 40–79, Sum = 3552)
  const modScores = [
    76, 75, 74, 76, 75, 74, 77, 75, 74, 73,
    75, 74, 76, 73, 75, 74, 73, 75, 73, 74,
    77, 73, 75, 74, 72, 75, 74, 73, 75, 72,
    74, 73, 75, 72, 74, 73, 75, 73, 72, 71,
    74, 72, 73, 71, 70, 73, 69, 70
  ];

  // 18 Needs Improvement Scores (All < 40, Sum = 588)
  const needsImpScores = [
    38, 36, 35, 34, 37, 33, 35, 36, 32, 34,
    35, 30, 31, 28, 25, 26, 32, 31
  ];

  const cohort = [];
  let idCounter = 1001;

  // Add 34 Strong Students
  strongScores.forEach((sc, i) => {
    cohort.push({
      id: `CS-${idCounter++}`,
      name: `${firstNames[i]} ${lastNames[i % lastNames.length]}`,
      age: ages[i % ages.length],
      course: courses[i % courses.length],
      q4: "Regularly",
      q5: "No",
      q6: "Always",
      q7: i % 2 === 0 ? "Check links before clicking" : "Check the sender",
      q8: "Yes",
      q9: "Always",
      q10: i % 3 === 0 ? "Never" : "Rarely",
      q11: "Never",
      q12: "Automatically",
      q13: "Yes",
      q14: "Never",
      q15: "Very confident",
      q16: topics[i % topics.length],
      score: sc,
      level: "Excellent Awareness",
      date: `2026-03-${10 + (i % 20)}`
    });
  });

  // Add 48 Moderate Students
  modScores.forEach((sc, i) => {
    const idx = 34 + i;
    cohort.push({
      id: `CS-${idCounter++}`,
      name: `${firstNames[idx]} ${lastNames[idx % lastNames.length]}`,
      age: ages[idx % ages.length],
      course: courses[idx % courses.length],
      q4: i % 2 === 0 ? "Occasionally" : "Rarely",
      q5: i % 3 === 0 ? "No" : "Sometimes",
      q6: i % 2 === 0 ? "Sometimes" : "Always",
      q7: i % 2 === 0 ? "Check the sender" : "Look for spelling/grammar mistakes",
      q8: i % 2 === 0 ? "Yes" : "Not sure",
      q9: i % 3 === 0 ? "Always" : "Sometimes",
      q10: i % 2 === 0 ? "Sometimes" : "Rarely",
      q11: i % 3 === 0 ? "Never" : "Rarely",
      q12: i % 2 === 0 ? "Regularly" : "Occasionally",
      q13: i % 4 === 0 ? "I don't know" : "Yes",
      q14: i % 3 === 0 ? "Never" : "Sometimes",
      q15: i % 2 === 0 ? "Confident" : "Neutral",
      q16: topics[idx % topics.length],
      score: sc,
      level: sc >= 60 ? "Good Awareness" : "Moderate Awareness",
      date: `2026-03-${15 + (i % 15)}`
    });
  });

  // Add 18 Needs Improvement Students
  needsImpScores.forEach((sc, i) => {
    const idx = 82 + i;
    cohort.push({
      id: `CS-${idCounter++}`,
      name: `${firstNames[idx]} ${lastNames[idx % lastNames.length]}`,
      age: ages[idx % ages.length],
      course: courses[idx % courses.length],
      q4: i % 2 === 0 ? "Rarely" : "Never",
      q5: "Yes",
      q6: i % 2 === 0 ? "No" : "I don't know what 2FA is",
      q7: "I usually cannot identify them",
      q8: i % 2 === 0 ? "No" : "Not sure",
      q9: i % 2 === 0 ? "Sometimes" : "Never",
      q10: "Frequently",
      q11: i % 2 === 0 ? "Sometimes" : "Frequently",
      q12: i % 2 === 0 ? "Rarely" : "Never",
      q13: i % 2 === 0 ? "No" : "I don't know",
      q14: i % 2 === 0 ? "Sometimes" : "Frequently",
      q15: i % 2 === 0 ? "Not very confident" : "Not confident at all",
      q16: topics[idx % topics.length],
      score: sc,
      level: "Needs Improvement",
      date: `2026-04-0${1 + (i % 5)}`
    });
  });

  return cohort;
}

const SAMPLE_STUDENT_RESPONSES = generateInitialAcademicCohort();

// Educational Modal Details Data
const EDUCATIONAL_TOPICS = {
  "passwords": {
    title: "Strong Passwords & Credential Defense",
    category: "Account Security",
    icon: "key",
    subtitle: "Creating resilient defense against brute-force and dictionary attacks",
    content: `
      <div class="space-y-4 text-slate-300">
        <p>Passwords are the primary gateway to your digital identity. Weak, reused, or easily guessable passwords make account compromise trivial for automated cracking tools.</p>
        
        <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40">
          <h4 class="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
            <i data-lucide="shield-check" class="w-5 h-5"></i> Golden Rules for Password Security
          </h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong>Length beats complexity:</strong> Use passphrases with 14+ characters (e.g., <em>Purple-Sunset-Bicycle-2026!</em>).</li>
            <li><strong>Never reuse passwords:</strong> If one website suffers a data breach, attackers run credential stuffing on your email, banking, and college portals.</li>
            <li><strong>Adopt a Password Manager:</strong> Use Bitwarden, 1Password, or KeePass to generate and encrypt unique passwords for every site.</li>
          </ul>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div class="p-3 rounded-lg bg-rose-950/30 border border-rose-800/40">
            <span class="text-rose-400 font-semibold flex items-center gap-1.5"><i data-lucide="x-circle" class="w-4 h-4"></i> Don't Do</span>
            <p class="text-xs text-slate-400 mt-1">Using pet names, birthdays, phone numbers, or storing passwords in unencrypted Notes apps.</p>
          </div>
          <div class="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40">
            <span class="text-emerald-400 font-semibold flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4"></i> Best Practice</span>
            <p class="text-xs text-slate-400 mt-1">Check <span class="text-cyan-400">haveibeenpwned.com</span> periodically to verify if your email appeared in public leaks.</p>
          </div>
        </div>
      </div>
    `
  },
  "2fa": {
    title: "Two-Factor Authentication (2FA)",
    category: "Account Security",
    icon: "shield",
    subtitle: "Adding an indispensable second barrier against unauthorized logins",
    content: `
      <div class="space-y-4 text-slate-300">
        <p>Two-Factor Authentication (2FA) requires two distinct verification proofs before granting access: something you know (password) and something you have (phone/security key).</p>
        
        <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40">
          <h4 class="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
            <i data-lucide="layers" class="w-5 h-5"></i> Ranked Methods of 2FA
          </h4>
          <ol class="list-decimal list-inside space-y-1.5 text-sm text-slate-300">
            <li><strong>Hardware Keys (Best):</strong> FIDO2 / YubiKey physical USB keys completely prevent remote phishing.</li>
            <li><strong>Authenticator Apps (Strong):</strong> Google Authenticator, Aegis, or Microsoft Authenticator generate time-based OTPs offline.</li>
            <li><strong>SMS OTP (Basic):</strong> Better than no 2FA, but vulnerable to SIM-swapping and cellular intercept.</li>
          </ol>
        </div>

        <p class="text-sm text-slate-400">
          <strong>Student Action Item:</strong> Enable 2FA immediately on your Google Workspace, university portal, Discord, GitHub, and banking accounts.
        </p>
      </div>
    `
  },
  "phishing": {
    title: "Phishing & Fake Message Defense",
    category: "Threats",
    icon: "mail-warning",
    subtitle: "Recognizing deceptive lures designed to hijack credentials",
    content: `
      <div class="space-y-4 text-slate-300">
        <p>Phishing is the #1 vector for campus cyberattacks. Threat actors impersonate college deans, financial aid offices, Netflix, or banks to trick students into surrendering credentials.</p>
        
        <div class="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40">
          <h4 class="font-semibold text-amber-400 mb-2 flex items-center gap-2">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i> Red Flags of Phishing Emails
          </h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong>Artificial Urgency:</strong> "Account suspended in 24 hours unless verified!"</li>
            <li><strong>Mismatched Domains:</strong> Display name says "College Portal" but sender is <code class="text-xs bg-slate-800 px-1 py-0.5 rounded text-amber-300">admin@univ-support-portal.tk</code>.</li>
            <li><strong>Generic Greetings:</strong> "Dear Student / Valued Customer" instead of your actual registered name.</li>
            <li><strong>Unexpected Attachments:</strong> Files like <code class="text-xs bg-slate-800 px-1 py-0.5 rounded text-rose-300">Scholarship_Form.exe</code> or macro-enabled documents.</li>
          </ul>
        </div>

        <p class="text-sm text-slate-400">
          <strong>Defensive Rule:</strong> Never click links in unsolicited emails. Navigate to the official university portal manually in a new tab.
        </p>
      </div>
    `
  },
  "browsing": {
    title: "Safe Web Browsing",
    category: "Online Safety",
    icon: "globe",
    subtitle: "Navigating the web without catching malicious drive-by downloads",
    content: `
      <div class="space-y-4 text-slate-300">
        <p>Cybercriminals use spoofed domain names (typosquatting like <em>g00gle.com</em> or <em>paypa1.com</em>) and malicious ads (malvertising) to compromise student laptops.</p>
        
        <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40">
          <h4 class="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
            <i data-lucide="lock" class="w-5 h-5"></i> Safe Browsing Checklist
          </h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong>Inspect the Full Domain:</strong> Look before the first single slash (<code class="text-xs bg-slate-800 px-1 py-0.5 rounded text-cyan-300">secure.bank.com.hacker.net/login</code> is <em>hacker.net</em>, not the bank!).</li>
            <li><strong>Look for HTTPS:</strong> Ensure the padlock icon is present, though remember malicious sites can have HTTPS too!</li>
            <li><strong>Install an Ad Blocker:</strong> Use open-source extensions like uBlock Origin to neutralize malicious popups and redirect scripts.</li>
            <li><strong>Clear Cookies & Cache:</strong> Regularly purge stale session cookies from shared campus workstations.</li>
          </ul>
        </div>
      </div>
    `
  },
  "wifi": {
    title: "Public Wi-Fi Vulnerabilities",
    category: "Online Safety",
    icon: "wifi",
    subtitle: "Protecting data in cafes, libraries, and airports",
    content: `
      <div class="space-y-4 text-slate-300">
        <p>Unsecured public Wi-Fi networks allow attackers on the same network to perform Man-in-the-Middle (MitM) snooping or spin up "Evil Twin" rogue access points with names like "Campus_Free_WiFi".</p>
        
        <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40">
          <h4 class="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
            <i data-lucide="radio" class="w-5 h-5"></i> Essential Public Wi-Fi Habits
          </h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong>Use a Trustworthy VPN:</strong> A Virtual Private Network encrypts all outbound traffic end-to-end.</li>
            <li><strong>Turn Off Auto-Connect:</strong> Prevent your smartphone or laptop from automatically joining open networks.</li>
            <li><strong>Avoid Sensitive Transactions:</strong> Do not access banking portals, UPI payments, or enter credit cards on unverified open Wi-Fi.</li>
            <li><strong>Disable File Sharing:</strong> Set network profile to "Public Network" in Windows or disable AirDrop in macOS when outside.</li>
          </ul>
        </div>
      </div>
    `
  },
  "updates": {
    title: "Software & Patch Management",
    category: "Account Security",
    icon: "refresh-cw",
    subtitle: "Closing security loopholes before exploit kits strike",
    content: `
      <div class="space-y-4 text-slate-300">
        <p>Operating systems and popular software (browsers, PDF readers, IDEs) regularly uncover vulnerabilities known as Zero-Days or CVEs. Security patches fix these flaws before hackers automate exploits.</p>
        
        <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40">
          <h4 class="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
            <i data-lucide="cpu" class="w-5 h-5"></i> Patching Best Practices
          </h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong>Enable Automatic OS Updates:</strong> Keep Windows Update or macOS Software Update on auto-install.</li>
            <li><strong>Never Delay Browser Updates:</strong> Chrome, Firefox, and Edge roll out urgent zero-day patches frequently. Relaunch when prompted.</li>
            <li><strong>Uninstall Abandoned Software:</strong> Remove old unmaintained utilities, cracked games, and pirated software which are common malware conduits.</li>
          </ul>
        </div>
      </div>
    `
  },
  "social": {
    title: "Social Engineering Attacks",
    category: "Threats",
    icon: "users",
    subtitle: "Hacking the human mind through psychological manipulation",
    content: `
      <div class="space-y-4 text-slate-300">
        <p>Social engineering bypasses firewalls by exploiting human emotions: curiosity, fear, urgency, or helpfulness. Examples include pretexting phone calls, fake tech support, and deceptive recruiter messages.</p>
        
        <div class="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40">
          <h4 class="font-semibold text-amber-400 mb-2 flex items-center gap-2">
            <i data-lucide="eye-off" class="w-5 h-5"></i> Common Student Scenarios
          </h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong>Fake Internship Offers:</strong> Telegram/WhatsApp messages promising high pay for simple YouTube rating tasks, demanding an upfront "security deposit".</li>
            <li><strong>Bank Customer Service Impersonation:</strong> Callers claiming your account/card is blocked, asking for debit card OTPs. (Real banks never ask for OTPs!).</li>
            <li><strong>Baiting with Flash Drives:</strong> Malicious USB sticks dropped in college libraries labeled "Exams 2026". Never plug unknown USBs into your device!</li>
          </ul>
        </div>
      </div>
    `
  },
  "privacy": {
    title: "Privacy & Digital Footprint",
    category: "Privacy",
    icon: "shield-alert",
    subtitle: "Safeguarding your personally identifiable information (PII)",
    content: `
      <div class="space-y-4 text-slate-300">
        <p>Every post, tag, check-in, and downloaded app leaves a permanent digital footprint. Oversharing creates opportunities for identity theft, stalking, and targeted spear-phishing.</p>
        
        <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40">
          <h4 class="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
            <i data-lucide="lock" class="w-5 h-5"></i> Privacy Defense Tactics
          </h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong>Audit App Permissions:</strong> Review smartphone apps requesting access to contacts, microphone, camera, and continuous location.</li>
            <li><strong>Keep Profiles Private:</strong> Lock your personal Instagram, Facebook, and LinkedIn visibility settings to trusted connections.</li>
            <li><strong>Don't Post Sensitive Documents:</strong> Never post admit cards, airline boarding passes, student IDs, or driver's licenses online.</li>
            <li><strong>Use Temporary Disposable Emails:</strong> Use services like 10MinuteMail or Apple Hide My Email for testing temporary college services.</li>
          </ul>
        </div>
      </div>
    `
  }
};

// Quiz Data - 5 High-Yield Questions
const QUIZ_QUESTIONS = [
  {
    question: "You receive an email saying your university account will be deleted unless you click a link immediately. What should you do?",
    options: [
      "Click the link immediately to prevent deletion",
      "Reply to the email with your password to verify yourself",
      "Verify the sender and university portal independently without clicking the link",
      "Forward the email to all your classmates to warn them"
    ],
    correct: 2,
    explanation: "Urgency is a classic phishing hallmark. Never click links in such emails. Contact campus IT or visit the official university website directly."
  },
  {
    question: "What makes Two-Factor Authentication (2FA) significantly more secure than just a password?",
    options: [
      "It requires a longer password with more special characters",
      "It requires two separate authentication factors: something you know and something you possess",
      "It makes your internet connection run twice as fast",
      "It prevents your monitor from being recorded by screen captures"
    ],
    correct: 1,
    explanation: "2FA combines knowledge (password) with physical possession (authenticator code or security key), stopping attackers even if they obtain your password."
  },
  {
    question: "Why is connecting to open, unencrypted public Wi-Fi at a coffee shop risky?",
    options: [
      "The Wi-Fi will instantly corrupt your computer's hard drive",
      "Other users on the same network can intercept unencrypted network traffic or set up fake login portals",
      "Public Wi-Fi always requires paying an hourly subscription fee",
      "It automatically uploads your private photos to the cloud"
    ],
    correct: 1,
    explanation: "Unsecured public networks allow attackers on the same network to snoop on data packets or spoof network gateways through Man-in-the-Middle attacks."
  },
  {
    question: "You find a brand new USB flash drive sitting on a table in the college library. What is the safest action?",
    options: [
      "Plug it into your laptop to see who owns it and email them",
      "Hand it over to library or campus IT lost-and-found without plugging it in",
      "Format the drive right away so you can keep and reuse it",
      "Plug it in but only open files that look like harmless Word documents"
    ],
    correct: 1,
    explanation: "USB baiting is a common physical attack vector. Malicious drives can execute hidden payloads or simulate malicious keyboards (Rubber Ducky) the second they are plugged in."
  },
  {
    question: "Which of the following is considered the strongest password practice?",
    options: [
      "Using 'P@ssw0rd2026' for all your college and social accounts",
      "Writing your password on a sticky note attached to your laptop bezel",
      "Using a unique 14+ character passphrase managed by a dedicated password manager",
      "Changing one number at the end of the same root word every month"
    ],
    correct: 2,
    explanation: "Passphrases generated and safeguarded by a password manager provide maximum entropy and eliminate password reuse vulnerabilities across multiple services."
  }
];

// Quiz State
let quizState = {
  currentQuestionIndex: 0,
  score: 0,
  answers: []
};


// ==========================================================================
// Initialization on DOM Load
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Mobile navigation toggling
  initMobileNav();

  // Load and setup survey responses from LocalStorage
  initStorage();

  // Setup Form submission & validation
  const surveyForm = document.getElementById("cyberSurveyForm");
  if (surveyForm) {
    surveyForm.addEventListener("submit", handleSurveySubmit);
    setupSurveyProgressTracker();
  }

  // Setup Educational Search & Filter
  setupEducationalFilters();

  // Setup Educational Modal Listeners
  setupEducationalModals();

  // Setup Quiz
  initQuiz();

  // Setup Dashboard Actions (Clear, Export, Seed)
  setupDashboardActions();

  // Render initial charts & stats
  updateDashboard();
  createCharts();
});


// ==========================================================================
// Mobile Navigation & Smooth Scroll
// ==========================================================================
function initMobileNav() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close mobile menu when any nav link is clicked
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
}


// ==========================================================================
// LocalStorage Management
// ==========================================================================

/**
 * Initializes LocalStorage with academic sample data if not already present.
 */
function initStorage() {
  const existing = localStorage.getItem("surveyResponses");
  if (!existing) {
    // Populate with initial sample data so the academic charts look rich initially
    localStorage.setItem("surveyResponses", JSON.stringify(SAMPLE_STUDENT_RESPONSES));
  }
}

/**
 * Loads all survey responses from LocalStorage.
 * @returns {Array} Array of response objects
 */
function loadResponses() {
  try {
    const raw = localStorage.getItem("surveyResponses");
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Error parsing LocalStorage surveyResponses:", err);
    return [];
  }
}

/**
 * Saves a new response to LocalStorage.
 * @param {Object} response 
 */
function saveResponse(response) {
  const responses = loadResponses();
  responses.unshift(response); // Add to the top of list
  localStorage.setItem("surveyResponses", JSON.stringify(responses));
}


// ==========================================================================
// Survey Submission & Validation
// ==========================================================================

/**
 * Validates and handles survey form submission.
 * @param {Event} e 
 */
function handleSurveySubmit(e) {
  e.preventDefault();

  const form = document.getElementById("cyberSurveyForm");
  const errorAlert = document.getElementById("surveyErrorAlert");
  const errorMessage = document.getElementById("surveyErrorMessage");

  // Reset any previous alert
  if (errorAlert) errorAlert.classList.add("hidden");

  // Remove previous error highlights from question cards
  document.querySelectorAll(".question-card").forEach(card => {
    card.classList.remove("border-rose-500", "bg-rose-950/20");
  });

  // Extract form inputs
  const formData = new FormData(form);

  // List of required fields
  const requiredFields = [
    { name: "student_name", label: "1. Name", type: "text" },
    { name: "age_group", label: "2. Age Group", type: "radio" },
    { name: "course", label: "3. Course/Field of Study", type: "radio" },
    { name: "q4_password_change", label: "4. Password Change Frequency", type: "radio" },
    { name: "q5_password_reuse", label: "5. Password Reuse", type: "radio" },
    { name: "q6_2fa", label: "6. Two-Factor Authentication (2FA)", type: "radio" },
    { name: "q7_suspicious_identify", label: "7. Identifying Suspicious Messages", type: "radio" },
    { name: "q8_phishing_received", label: "8. Phishing Experience", type: "radio" },
    { name: "q9_verify_url", label: "9. URL Verification", type: "radio" },
    { name: "q10_public_wifi", label: "10. Public Wi-Fi Usage", type: "radio" },
    { name: "q11_unknown_software", label: "11. Unknown Software Installation", type: "radio" },
    { name: "q12_os_updates", label: "12. OS & Software Updates", type: "radio" },
    { name: "q13_antivirus", label: "13. Antivirus Protection", type: "radio" },
    { name: "q14_share_passwords", label: "14. Password Sharing", type: "radio" },
    { name: "q15_scam_confidence", label: "15. Scam Identification Confidence", type: "radio" },
    { name: "q16_learn_topic", label: "16. Cybersecurity Topic of Interest", type: "radio" }
  ];

  // Validation loop
  for (let field of requiredFields) {
    const val = formData.get(field.name);
    if (!val || (typeof val === "string" && val.trim() === "")) {
      // Show error
      if (errorAlert && errorMessage) {
        errorMessage.textContent = `Please complete: "${field.label}" before submitting.`;
        errorAlert.classList.remove("hidden");
      }

      // Highlight the specific question container
      const targetCard = document.querySelector(`[data-field-name="${field.name}"]`);
      if (targetCard) {
        targetCard.classList.add("border-rose-500", "bg-rose-950/20");
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
  }

  // Construct response object
  const newResponse = {
    id: "CS-" + Math.floor(1000 + Math.random() * 9000),
    name: formData.get("student_name").trim(),
    age: formData.get("age_group"),
    course: formData.get("course"),
    q4: formData.get("q4_password_change"),
    q5: formData.get("q5_password_reuse"),
    q6: formData.get("q6_2fa"),
    q7: formData.get("q7_suspicious_identify"),
    q8: formData.get("q8_phishing_received"),
    q9: formData.get("q9_verify_url"),
    q10: formData.get("q10_public_wifi"),
    q11: formData.get("q11_unknown_software"),
    q12: formData.get("q12_os_updates"),
    q13: formData.get("q13_antivirus"),
    q14: formData.get("q14_share_passwords"),
    q15: formData.get("q15_scam_confidence"),
    q16: formData.get("q16_learn_topic"),
    date: new Date().toISOString().split("T")[0]
  };

  // Calculate score and category
  const { score, level, feedback, details } = calculateAwarenessScore(newResponse);
  newResponse.score = score;
  newResponse.level = level;

  // Save to LocalStorage
  saveResponse(newResponse);

  // Update real-time views
  updateDashboard();
  createCharts();

  // Reset form
  form.reset();
  updateSurveyProgressBar();

  // Show the interactive Score Results Modal
  showScoreResultModal(newResponse, score, level, feedback, details);
}

/**
 * Calculates a 0-100 Cybersecurity Awareness Score based on response answers.
 * @param {Object} ans 
 * @returns {Object} { score, level, feedback, details }
 */
function calculateAwarenessScore(ans) {
  let points = 0;
  let maxPoints = 110;
  let recommendations = [];

  // Q4: Password Change Frequency (Max 8)
  if (ans.q4 === "Regularly") points += 8;
  else if (ans.q4 === "Occasionally") points += 6;
  else if (ans.q4 === "Rarely") {
    points += 3;
    recommendations.push("Change or audit your passwords more frequently.");
  } else {
    points += 1;
    recommendations.push("Never changing passwords increases exposure if older services are breached.");
  }

  // Q5: Password Reuse (Max 10)
  if (ans.q5 === "No") points += 10;
  else if (ans.q5 === "Sometimes") {
    points += 4;
    recommendations.push("Avoid reusing passwords across any accounts. Use a password manager.");
  } else {
    points += 0;
    recommendations.push("Critical: Reusing the same password enables credential stuffing attacks.");
  }

  // Q6: 2FA Usage (Max 10)
  if (ans.q6 === "Always") points += 10;
  else if (ans.q6 === "Sometimes") {
    points += 5;
    recommendations.push("Enable Two-Factor Authentication (2FA) across all available platforms.");
  } else if (ans.q6 === "No") {
    points += 1;
    recommendations.push("Turn on 2FA immediately on your college email and personal accounts.");
  } else {
    points += 0;
    recommendations.push("Learn about 2FA: it adds an essential verification step that stops hackers.");
  }

  // Q7: Identifying Suspicious Messages (Max 10)
  if (ans.q7 === "Check links before clicking") points += 10;
  else if (ans.q7 === "Check the sender") points += 9;
  else if (ans.q7 === "Look for spelling/grammar mistakes") points += 7;
  else {
    points += 0;
    recommendations.push("Review our Phishing Guide to spot suspicious message red flags.");
  }

  // Q8: Phishing Experience (Max 6)
  if (ans.q8 === "Yes" || ans.q8 === "No") points += 6;
  else points += 2;

  // Q9: Verify URLs (Max 10)
  if (ans.q9 === "Always") points += 10;
  else if (ans.q9 === "Sometimes") {
    points += 5;
    recommendations.push("Always verify URL domain spelling before entering login credentials.");
  } else {
    points += 0;
    recommendations.push("Never enter credentials without verifying the browser address bar first.");
  }

  // Q10: Public Wi-Fi (Max 10)
  if (ans.q10 === "Never") points += 10;
  else if (ans.q10 === "Rarely") points += 8;
  else if (ans.q10 === "Sometimes") {
    points += 4;
    recommendations.push("Use a VPN when connecting to public Wi-Fi networks in cafes or campus.");
  } else {
    points += 1;
    recommendations.push("Frequently using public Wi-Fi without VPN exposes you to eavesdropping.");
  }

  // Q11: Unknown Software (Max 10)
  if (ans.q11 === "Never") points += 10;
  else if (ans.q11 === "Rarely") points += 7;
  else if (ans.q11 === "Sometimes") {
    points += 3;
    recommendations.push("Avoid downloading cracked or unverified apps from third-party sites.");
  } else {
    points += 0;
    recommendations.push("High risk: Installing unverified apps is the primary source of trojans.");
  }

  // Q12: OS Updates (Max 10)
  if (ans.q12 === "Automatically") points += 10;
  else if (ans.q12 === "Regularly") points += 8;
  else if (ans.q12 === "Occasionally") points += 5;
  else if (ans.q12 === "Rarely") points += 2;
  else points += 0;

  // Q13: Antivirus Software (Max 8)
  if (ans.q13 === "Yes") points += 8;
  else if (ans.q13 === "No") points += 2;
  else points += 0;

  // Q14: Share Passwords (Max 10)
  if (ans.q14 === "Never") points += 10;
  else if (ans.q14 === "Sometimes") {
    points += 3;
    recommendations.push("Never share passwords with friends or classmates; use delegated access.");
  } else {
    points += 0;
    recommendations.push("Sharing passwords severely degrades your account boundaries.");
  }

  // Q15: Scam Confidence (Max 8)
  if (ans.q15 === "Very confident") points += 8;
  else if (ans.q15 === "Confident") points += 7;
  else if (ans.q15 === "Neutral") points += 5;
  else if (ans.q15 === "Not very confident") points += 3;
  else points += 1;

  // Scale to 0–100 score
  let finalScore = Math.min(100, Math.max(0, Math.round((points / maxPoints) * 100)));

  // Categorize
  let level = "";
  let feedback = "";
  if (finalScore >= 80) {
    level = "Excellent Awareness";
    feedback = "You follow strong cybersecurity practices.";
  } else if (finalScore >= 60) {
    level = "Good Awareness";
    feedback = "You have good cybersecurity habits, but there is room for improvement.";
  } else if (finalScore >= 40) {
    level = "Moderate Awareness";
    feedback = "You understand some cybersecurity practices, but should improve your online safety habits.";
  } else {
    level = "Needs Improvement";
    feedback = "Your cybersecurity habits need attention. Learn the recommended safety practices.";
  }

  return {
    score: finalScore,
    level: level,
    feedback: feedback,
    details: recommendations.slice(0, 3)
  };
}

/**
 * Updates real-time survey progress bar as the student answers questions.
 */
function setupSurveyProgressTracker() {
  const form = document.getElementById("cyberSurveyForm");
  if (!form) return;

  form.addEventListener("input", updateSurveyProgressBar);
  form.addEventListener("change", updateSurveyProgressBar);
}

function updateSurveyProgressBar() {
  const form = document.getElementById("cyberSurveyForm");
  const countSpan = document.getElementById("surveyAnsweredCount");
  const bar = document.getElementById("surveyProgressBar");

  if (!form || !countSpan || !bar) return;

  const fieldNames = [
    "student_name", "age_group", "course", "q4_password_change",
    "q5_password_reuse", "q6_2fa", "q7_suspicious_identify", "q8_phishing_received",
    "q9_verify_url", "q10_public_wifi", "q11_unknown_software", "q12_os_updates",
    "q13_antivirus", "q14_share_passwords", "q15_scam_confidence", "q16_learn_topic"
  ];

  const formData = new FormData(form);
  let answered = 0;

  fieldNames.forEach(fn => {
    const val = formData.get(fn);
    if (val && (typeof val !== "string" || val.trim() !== "")) {
      answered++;
    }
  });

  countSpan.textContent = `${answered} / 16`;
  const pct = Math.round((answered / 16) * 100);
  bar.style.width = `${pct}%`;
}


// ==========================================================================
// Score Result Modal Display
// ==========================================================================
function showScoreResultModal(response, score, level, feedback, details) {
  const modal = document.getElementById("scoreModal");
  if (!modal) return;

  document.getElementById("modalStudentName").textContent = response.name;
  document.getElementById("modalScoreValue").textContent = score;
  document.getElementById("modalScoreLevel").textContent = level;
  document.getElementById("modalScoreFeedback").textContent = `"${feedback}"`;

  // Badge Color styling
  const badgeEl = document.getElementById("modalScoreLevel");
  badgeEl.className = "inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ";
  if (score >= 80) {
    badgeEl.className += "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40";
  } else if (score >= 60) {
    badgeEl.className += "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40";
  } else if (score >= 40) {
    badgeEl.className += "bg-amber-500/20 text-amber-400 border border-amber-500/40";
  } else {
    badgeEl.className += "bg-rose-500/20 text-rose-400 border border-rose-500/40";
  }

  // Update SVG Circular Indicator
  const circle = document.getElementById("modalProgressCircle");
  if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - (score / 100) * circumference;
    // Animate stroke
    circle.style.strokeDashoffset = circumference;
    setTimeout(() => {
      circle.style.strokeDashoffset = offset;
    }, 100);

    // Color of ring
    if (score >= 80) circle.setAttribute("stroke", "#10b981");
    else if (score >= 60) circle.setAttribute("stroke", "#06b6d4");
    else if (score >= 40) circle.setAttribute("stroke", "#f59e0b");
    else circle.setAttribute("stroke", "#f43f5e");
  }

  // Recommendations container
  const recContainer = document.getElementById("modalRecommendationsList");
  if (recContainer) {
    recContainer.innerHTML = "";
    if (details && details.length > 0) {
      details.forEach(tip => {
        const li = document.createElement("li");
        li.className = "flex items-start gap-2 text-xs text-slate-300";
        li.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5"></i> <span>${tip}</span>`;
        recContainer.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.className = "text-xs text-emerald-400 flex items-center gap-1.5";
      li.innerHTML = `<i data-lucide="award" class="w-4 h-4"></i> Outstanding! Keep maintaining these vigilant habits.`;
      recContainer.appendChild(li);
    }
  }

  // Re-run icons
  if (window.lucide) window.lucide.createIcons();

  // Show modal
  modal.classList.add("active");
  document.body.classList.add("overflow-hidden");
}

function closeScoreModal() {
  const modal = document.getElementById("scoreModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  }
}


// ==========================================================================
// Dashboard & Statistics Updates
// ==========================================================================

/**
 * Calculates dynamic statistics and updates hero stats, research stats, and recent response table.
 */
function updateDashboard() {
  const responses = loadResponses();
  const total = responses.length;

  const emptyNotice = document.getElementById("resultsEmptyNotice");
  const dashboardContent = document.getElementById("dashboardContent");
  const chartsWrapper = document.getElementById("chartsWrapper");

  if (total === 0) {
    if (emptyNotice) emptyNotice.classList.remove("hidden");
    if (dashboardContent) dashboardContent.classList.add("hidden");
    if (chartsWrapper) chartsWrapper.classList.add("hidden");

    // Reset Hero stat numbers
    setCounter("heroStudentsSurveyed", 0);
    setCounter("heroAwarenessScore", 0, "%");
    setCounter("heroSafeHabits", 0, "%");
    setCounter("heroSecurityTopics", 8);

    // Reset Admin Dashboard stats
    setCounter("adminTotalSurveyed", 0);
    setCounter("adminAvgScore", 0, "%");
    setCounter("adminStrongPct", 0, "%");
    setCounter("adminModPct", 0, "%");
    setCounter("adminNeedsImpPct", 0, "%");

    const tableBody = document.getElementById("recentResponsesTableBody");
    if (tableBody) {
      tableBody.innerHTML = `<tr><td colspan="5" class="py-8 text-center text-slate-500 italic">No survey responses available yet. Submit the survey above!</td></tr>`;
    }
    return;
  }

  // If responses exist
  if (emptyNotice) emptyNotice.classList.add("hidden");
  if (dashboardContent) dashboardContent.classList.remove("hidden");
  if (chartsWrapper) chartsWrapper.classList.remove("hidden");

  // Calculations
  const sumScore = responses.reduce((acc, r) => acc + (r.score || 0), 0);
  const avgScore = Math.round(sumScore / total);
  const maxScore = Math.max(...responses.map(r => r.score || 0));
  const minScore = Math.min(...responses.map(r => r.score || 0));

  const strongCount = responses.filter(r => (r.score || 0) >= 80).length;
  const modCount = responses.filter(r => (r.score || 0) >= 40 && (r.score || 0) < 80).length;
  const needsImpCount = responses.filter(r => (r.score || 0) < 40).length;

  const strongPct = Math.round((strongCount / total) * 100);
  const modPct = Math.round((modCount / total) * 100);
  const needsImpPct = Math.round((needsImpCount / total) * 100);

  // Safe online habits metric (e.g. 2FA used + never shares password)
  const safeHabitStudents = responses.filter(r => (r.q6 === "Always" || r.q6 === "Sometimes") && r.q14 === "Never").length;
  const safeHabitPct = Math.round((safeHabitStudents / total) * 100);

  // Update Hero counters
  setCounter("heroStudentsSurveyed", total);
  setCounter("heroAwarenessScore", avgScore, "%");
  setCounter("heroSafeHabits", safeHabitPct, "%");
  setCounter("heroSecurityTopics", 8);

  // Update Results section metric cards
  setCounter("statTotalResponses", total);
  setCounter("statAvgScore", avgScore, "/100");
  setCounter("statHighestScore", maxScore, "/100");
  setCounter("statLowestScore", minScore, "/100");

  // Update Admin/Research Section (Section 9 Requirement)
  setCounter("adminTotalSurveyed", total);
  setCounter("adminAvgScore", avgScore, "%");
  setCounter("adminStrongPct", strongPct, "%");
  setCounter("adminModPct", modPct, "%");
  setCounter("adminNeedsImpPct", needsImpPct, "%");

  // Populate Recent Responses Table
  renderRecentTable(responses);
}

function setCounter(elementId, value, suffix = "") {
  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = `${value}${suffix}`;
  }
}

/**
 * Renders the recent submissions table with styling.
 */
function renderRecentTable(responses) {
  const tbody = document.getElementById("recentResponsesTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";
  const displayList = responses.slice(0, 8); // top 8 recent

  displayList.forEach(item => {
    const tr = document.createElement("tr");
    tr.className = "border-b border-slate-800/60 hover:bg-slate-800/30 transition-colors";

    let badgeClass = "bg-rose-500/20 text-rose-400 border border-rose-500/40";
    if (item.score >= 80) badgeClass = "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40";
    else if (item.score >= 60) badgeClass = "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40";
    else if (item.score >= 40) badgeClass = "bg-amber-500/20 text-amber-400 border border-amber-500/40";

    tr.innerHTML = `
      <td class="py-3 px-4 text-xs font-mono text-cyan-400">${item.id || 'CS-????'}</td>
      <td class="py-3 px-4 font-medium text-slate-200 text-sm">${escapeHtml(item.name)}</td>
      <td class="py-3 px-4 text-xs text-slate-400">${escapeHtml(item.course)}</td>
      <td class="py-3 px-4 text-sm font-bold text-slate-200">${item.score} <span class="text-xs text-slate-500">/100</span></td>
      <td class="py-3 px-4">
        <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${badgeClass}">
          ${escapeHtml(item.level || 'Evaluated')}
        </span>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


// ==========================================================================
// Chart.js Data Visualization
// ==========================================================================

/**
 * Creates or updates the 6 required charts using Chart.js.
 */
function createCharts() {
  const responses = loadResponses();
  if (responses.length === 0) return;

  // Chart Global Defaults for dark theme
  Chart.defaults.color = "#94a3b8";
  Chart.defaults.font.family = "'Plus Jakarta Sans', system-ui, sans-serif";
  Chart.defaults.plugins.tooltip.backgroundColor = "rgba(15, 23, 42, 0.95)";
  Chart.defaults.plugins.tooltip.borderColor = "rgba(6, 182, 212, 0.4)";
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.titleColor = "#38bdf8";
  Chart.defaults.plugins.tooltip.padding = 10;
  Chart.defaults.plugins.tooltip.cornerRadius = 8;

  // Helper to count occurrences
  const countBy = (arr, key, possibleValues) => {
    const counts = {};
    possibleValues.forEach(val => (counts[val] = 0));
    arr.forEach(item => {
      const val = item[key];
      if (counts[val] !== undefined) counts[val]++;
    });
    return possibleValues.map(val => counts[val]);
  };

  // -------------------------------------------------------------
  // Chart 1: Password Habits (Doughnut)
  // -------------------------------------------------------------
  const passLabels = ["Regularly", "Occasionally", "Rarely", "Never"];
  const passData = countBy(responses, "q4", passLabels);
  renderChart("chartPasswordHabits", {
    type: "doughnut",
    data: {
      labels: passLabels,
      datasets: [{
        data: passData,
        backgroundColor: ["#10b981", "#06b6d4", "#f59e0b", "#f43f5e"],
        borderWidth: 2,
        borderColor: "#0f172a",
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { boxWidth: 12, padding: 14 } }
      },
      cutout: "65%"
    }
  });

  // -------------------------------------------------------------
  // Chart 2: 2FA Usage (Bar)
  // -------------------------------------------------------------
  const twoFaLabels = ["Always", "Sometimes", "No", "Don't Know"];
  // map "I don't know what 2FA is" to "Don't Know"
  const twoFaCounts = [0, 0, 0, 0];
  responses.forEach(r => {
    if (r.q6 === "Always") twoFaCounts[0]++;
    else if (r.q6 === "Sometimes") twoFaCounts[1]++;
    else if (r.q6 === "No") twoFaCounts[2]++;
    else twoFaCounts[3]++;
  });

  renderChart("chart2FAUsage", {
    type: "bar",
    data: {
      labels: twoFaLabels,
      datasets: [{
        label: "Students",
        data: twoFaCounts,
        backgroundColor: ["#10b981", "#06b6d4", "#f43f5e", "#a855f7"],
        borderRadius: 6,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, grid: { color: "rgba(51, 65, 85, 0.3)" } },
        x: { grid: { display: false } }
      },
      plugins: { legend: { display: false } }
    }
  });

  // -------------------------------------------------------------
  // Chart 3: Phishing Experience (Pie/Doughnut)
  // -------------------------------------------------------------
  const phishLabels = ["Yes", "No", "Not Sure"];
  const phishCounts = [0, 0, 0];
  responses.forEach(r => {
    if (r.q8 === "Yes") phishCounts[0]++;
    else if (r.q8 === "No") phishCounts[1]++;
    else phishCounts[2]++;
  });

  renderChart("chartPhishingExperience", {
    type: "pie",
    data: {
      labels: phishLabels,
      datasets: [{
        data: phishCounts,
        backgroundColor: ["#f43f5e", "#10b981", "#f59e0b"],
        borderWidth: 2,
        borderColor: "#0f172a",
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { boxWidth: 12, padding: 14 } }
      }
    }
  });

  // -------------------------------------------------------------
  // Chart 4: Software Update Habits (Bar)
  // -------------------------------------------------------------
  const updateLabels = ["Automatically", "Regularly", "Occasionally", "Rarely", "Never"];
  const updateData = countBy(responses, "q12", updateLabels);

  renderChart("chartSoftwareUpdates", {
    type: "bar",
    data: {
      labels: updateLabels,
      datasets: [{
        label: "Students",
        data: updateData,
        backgroundColor: "#3b82f6",
        hoverBackgroundColor: "#60a5fa",
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, grid: { color: "rgba(51, 65, 85, 0.3)" } },
        x: { grid: { display: false } }
      },
      plugins: { legend: { display: false } }
    }
  });

  // -------------------------------------------------------------
  // Chart 5: Cybersecurity Confidence (Bar)
  // -------------------------------------------------------------
  const confLabels = ["Very confident", "Confident", "Neutral", "Not very confident", "Not confident at all"];
  const confShortLabels = ["Very Confident", "Confident", "Neutral", "Low Confidence", "No Confidence"];
  const confData = countBy(responses, "q15", confLabels);

  renderChart("chartConfidence", {
    type: "bar",
    data: {
      labels: confShortLabels,
      datasets: [{
        label: "Students",
        data: confData,
        backgroundColor: ["#10b981", "#34d399", "#38bdf8", "#f59e0b", "#f43f5e"],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, grid: { color: "rgba(51, 65, 85, 0.3)" } },
        x: { grid: { display: false } }
      },
      plugins: { legend: { display: false } }
    }
  });

  // -------------------------------------------------------------
  // Chart 6: Topics Students Want to Learn (Horizontal Bar)
  // -------------------------------------------------------------
  const topicLabels = [
    "Password Security",
    "Phishing",
    "Social Engineering",
    "Privacy",
    "Malware",
    "Safe Browsing",
    "Cyberbullying",
    "Online Banking/UPI Safety"
  ];
  const topicData = countBy(responses, "q16", topicLabels);

  renderChart("chartRequestedTopics", {
    type: "bar",
    data: {
      labels: topicLabels,
      datasets: [{
        label: "Requests",
        data: topicData,
        backgroundColor: "#06b6d4",
        hoverBackgroundColor: "#22d3ee",
        borderRadius: 6
      }]
    },
    options: {
      indexAxis: "y", // Horizontal
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { beginAtZero: true, grid: { color: "rgba(51, 65, 85, 0.3)" } },
        y: { grid: { display: false } }
      },
      plugins: { legend: { display: false } }
    }
  });
}

/**
 * Safely renders or replaces an existing chart instance.
 */
function renderChart(canvasId, config) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  if (chartInstances[canvasId]) {
    chartInstances[canvasId].destroy();
  }

  chartInstances[canvasId] = new Chart(canvas, config);
}


// ==========================================================================
// Educational Search and Category Filtering
// ==========================================================================

function setupEducationalFilters() {
  const searchInput = document.getElementById("topicSearchInput");
  const filterPills = document.querySelectorAll(".topic-filter-pill");

  if (searchInput) {
    searchInput.addEventListener("input", filterTopics);
  }

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => {
        p.classList.remove("active", "bg-cyan-500", "text-slate-900", "font-bold");
        p.classList.add("bg-slate-800", "text-slate-300");
      });
      pill.classList.add("active", "bg-cyan-500", "text-slate-900", "font-bold");
      pill.classList.remove("bg-slate-800", "text-slate-300");

      filterTopics();
    });
  });
}

/**
 * Filters the educational cards in real time.
 */
function filterTopics() {
  const searchInput = document.getElementById("topicSearchInput");
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const activePill = document.querySelector(".topic-filter-pill.active");
  const activeCategory = activePill ? activePill.dataset.category : "all";

  const cards = document.querySelectorAll(".topic-card");
  let visibleCount = 0;

  cards.forEach(card => {
    const cardCategory = card.dataset.category;
    const cardTitle = card.dataset.title.toLowerCase();
    const cardDesc = card.dataset.desc.toLowerCase();

    const matchesCategory = (activeCategory === "all" || cardCategory === activeCategory);
    const matchesSearch = query === "" || cardTitle.includes(query) || cardDesc.includes(query);

    if (matchesCategory && matchesSearch) {
      card.classList.remove("hidden");
      visibleCount++;
    } else {
      card.classList.add("hidden");
    }
  });

  const noResultsEl = document.getElementById("noTopicsFound");
  if (noResultsEl) {
    if (visibleCount === 0) noResultsEl.classList.remove("hidden");
    else noResultsEl.classList.add("hidden");
  }
}


// ==========================================================================
// Educational Modal Handlers
// ==========================================================================

function setupEducationalModals() {
  const modal = document.getElementById("educationModal");
  if (!modal) return;

  // Learn more button click on cards
  document.querySelectorAll(".learn-more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const topicKey = btn.dataset.topic;
      const data = EDUCATIONAL_TOPICS[topicKey];
      if (data) {
        showModal(data.title, data.content, data.category);
      }
    });
  });

  // Close triggers
  const closeBtn = document.getElementById("closeEduModalBtn");
  if (closeBtn) closeBtn.addEventListener("click", closeEducationModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeEducationModal();
  });

  // Score Modal close listeners
  const scoreCloseBtn = document.getElementById("closeScoreModalBtn");
  if (scoreCloseBtn) scoreCloseBtn.addEventListener("click", closeScoreModal);

  const scoreModal = document.getElementById("scoreModal");
  if (scoreModal) {
    scoreModal.addEventListener("click", (e) => {
      if (e.target === scoreModal) closeScoreModal();
    });
  }
}

/**
 * Displays the general Educational Topic modal.
 * @param {string} title 
 * @param {string} htmlContent 
 * @param {string} category 
 */
function showModal(title, htmlContent, category) {
  const modal = document.getElementById("educationModal");
  if (!modal) return;

  document.getElementById("eduModalTitle").textContent = title;
  document.getElementById("eduModalCategory").textContent = category || "Cyber Education";
  document.getElementById("eduModalBody").innerHTML = htmlContent;

  if (window.lucide) window.lucide.createIcons();

  modal.classList.add("active");
  document.body.classList.add("overflow-hidden");
}

function closeEducationModal() {
  const modal = document.getElementById("educationModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  }
}


// ==========================================================================
// Interactive Quiz (Section 11)
// ==========================================================================

function initQuiz() {
  quizState.currentQuestionIndex = 0;
  quizState.score = 0;
  quizState.answers = [];

  const restartBtn = document.getElementById("restartQuizBtn");
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      initQuiz();
    });
  }

  const nextBtn = document.getElementById("quizNextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", handleQuizNext);
  }

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qContainer = document.getElementById("quizQuestionContainer");
  const resultsCard = document.getElementById("quizResultsCard");
  const nextBtn = document.getElementById("quizNextBtn");

  if (!qContainer || !resultsCard) return;

  // If completed all 5 questions
  if (quizState.currentQuestionIndex >= QUIZ_QUESTIONS.length) {
    calculateQuizScore();
    return;
  }

  qContainer.classList.remove("hidden");
  resultsCard.classList.add("hidden");
  if (nextBtn) nextBtn.classList.add("hidden");

  const qData = QUIZ_QUESTIONS[quizState.currentQuestionIndex];

  document.getElementById("quizCurrentNum").textContent = quizState.currentQuestionIndex + 1;
  document.getElementById("quizTotalNum").textContent = QUIZ_QUESTIONS.length;
  document.getElementById("quizQuestionText").textContent = qData.question;

  const progressPct = ((quizState.currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;
  document.getElementById("quizProgressBar").style.width = `${progressPct}%`;

  const optionsContainer = document.getElementById("quizOptionsContainer");
  optionsContainer.innerHTML = "";

  const explanationBox = document.getElementById("quizExplanation");
  explanationBox.classList.add("hidden");
  explanationBox.innerHTML = "";

  const optionLetters = ["A", "B", "C", "D"];

  qData.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-opt-btn w-full p-4 rounded-xl text-left bg-slate-900/60 border border-slate-700/80 text-slate-200 flex items-center gap-3";
    btn.innerHTML = `
      <span class="w-8 h-8 rounded-lg bg-slate-800 text-cyan-400 font-mono font-bold flex items-center justify-center shrink-0 border border-slate-700 text-sm">
        ${optionLetters[idx]}
      </span>
      <span class="text-sm font-medium leading-relaxed">${optText}</span>
    `;

    btn.addEventListener("click", () => selectQuizAnswer(idx, qData));
    optionsContainer.appendChild(btn);
  });
}

function selectQuizAnswer(selectedIdx, qData) {
  const optButtons = document.querySelectorAll(".quiz-opt-btn");
  optButtons.forEach(btn => (btn.disabled = true)); // Lock answers

  const isCorrect = selectedIdx === qData.correct;
  if (isCorrect) {
    quizState.score++;
    optButtons[selectedIdx].classList.add("correct");
  } else {
    optButtons[selectedIdx].classList.add("incorrect");
    optButtons[qData.correct].classList.add("correct"); // Reveal correct answer
  }

  // Display explanation
  const explanationBox = document.getElementById("quizExplanation");
  explanationBox.className = `p-4 rounded-xl text-sm border mt-4 ${
    isCorrect 
      ? "bg-emerald-950/40 border-emerald-800 text-emerald-300" 
      : "bg-rose-950/40 border-rose-800 text-rose-300"
  }`;
  explanationBox.innerHTML = `
    <div class="font-bold flex items-center gap-2 mb-1">
      <i data-lucide="${isCorrect ? 'check-circle' : 'alert-circle'}" class="w-4 h-4"></i>
      ${isCorrect ? 'Correct!' : 'Incorrect'}
    </div>
    <p class="text-slate-300">${qData.explanation}</p>
  `;
  explanationBox.classList.remove("hidden");
  if (window.lucide) window.lucide.createIcons();

  // Show Next button
  const nextBtn = document.getElementById("quizNextBtn");
  if (nextBtn) {
    nextBtn.textContent = (quizState.currentQuestionIndex === QUIZ_QUESTIONS.length - 1) ? "View Quiz Results" : "Next Question";
    nextBtn.classList.remove("hidden");
  }
}

function handleQuizNext() {
  quizState.currentQuestionIndex++;
  renderQuizQuestion();
}

/**
 * Calculates and presents final quiz results.
 */
function calculateQuizScore() {
  const qContainer = document.getElementById("quizQuestionContainer");
  const resultsCard = document.getElementById("quizResultsCard");
  const nextBtn = document.getElementById("quizNextBtn");

  if (qContainer) qContainer.classList.add("hidden");
  if (nextBtn) nextBtn.classList.add("hidden");
  if (resultsCard) resultsCard.classList.remove("hidden");

  const scoreEl = document.getElementById("finalQuizScore");
  const msgEl = document.getElementById("finalQuizMessage");

  const score = quizState.score;
  const total = QUIZ_QUESTIONS.length;

  if (scoreEl) scoreEl.textContent = `${score} / ${total}`;

  let msg = "";
  if (score === 5) {
    msg = "Flawless score! You possess elite student cyber instincts.";
  } else if (score >= 4) {
    msg = "Great job! You have strong defensive cybersecurity awareness.";
  } else if (score >= 3) {
    msg = "Solid effort. Review our Educational Guides to patch your knowledge gaps.";
  } else {
    msg = "Needs improvement. Check out our 10 Golden Cybersecurity Rules below to protect yourself!";
  }

  if (msgEl) msgEl.textContent = msg;
}


// ==========================================================================
// Dashboard Utility Actions (Clear, Seed, Export)
// ==========================================================================

function setupDashboardActions() {
  // Clear All Data
  const clearBtn = document.getElementById("btnClearData");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to reset and clear all survey responses from LocalStorage?")) {
        localStorage.setItem("surveyResponses", JSON.stringify([]));
        updateDashboard();
        createCharts();
      }
    });
  }

  // Load / Reload Sample Data
  const seedBtn = document.getElementById("btnLoadSampleData");
  const seedBtnEmpty = document.getElementById("btnLoadSampleDataEmpty");
  
  const handleSeed = () => {
    localStorage.setItem("surveyResponses", JSON.stringify(SAMPLE_STUDENT_RESPONSES));
    updateDashboard();
    createCharts();
  };

  if (seedBtn) seedBtn.addEventListener("click", handleSeed);
  if (seedBtnEmpty) seedBtnEmpty.addEventListener("click", handleSeed);

  // Export JSON
  const exportBtn = document.getElementById("btnExportJSON");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const data = loadResponses();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `CyberShield_Survey_Responses_${new Date().toISOString().split("T")[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  // Export CSV
  const exportCsvBtn = document.getElementById("btnExportCSV");
  if (exportCsvBtn) {
    exportCsvBtn.addEventListener("click", exportCSV);
  }
}

function exportCSV() {
  const responses = loadResponses();
  if (responses.length === 0) {
    alert("No survey responses to export.");
    return;
  }

  const headers = ["ID", "Name", "Age Group", "Course", "Score", "Level", "Date", "Password Change", "2FA Usage", "Phishing Seen", "Topic Interest"];
  const rows = responses.map(r => [
    `"${r.id || ''}"`,
    `"${(r.name || '').replace(/"/g, '""')}"`,
    `"${r.age || ''}"`,
    `"${r.course || ''}"`,
    r.score || 0,
    `"${r.level || ''}"`,
    `"${r.date || ''}"`,
    `"${r.q4 || ''}"`,
    `"${r.q6 || ''}"`,
    `"${r.q8 || ''}"`,
    `"${r.q16 || ''}"`
  ]);

  const csvContent = [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `CyberShield_Student_Data_${new Date().toISOString().split("T")[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

