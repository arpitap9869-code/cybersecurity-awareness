# CyberShield – Cybersecurity Awareness Survey Among Students

An academic research and education web platform designed to evaluate and cultivate cybersecurity awareness, digital hygiene habits, and threat defense reflexes among university students.

Built exclusively with **HTML5**, **Tailwind CSS**, **Vanilla JavaScript (ES6+)**, **LocalStorage**, and **Chart.js** — zero frameworks, zero external databases, and zero server-side dependencies.

---

## 🛡️ Key Features

### 1. Modern Cybersecurity Aesthetic
- Futuristic dark palette (`#070b14`), cyan/teal/blue accents, subtle grid lines, and glowing badges.
- Glassmorphic card containers with responsive layout (`sm:`, `md:`, `lg:`, `xl:`).
- Mobile-responsive navigation bar with an interactive hamburger drawer and smooth scrolling navigation.

### 2. Comprehensive 16-Question Survey
Evaluates students across two structural parts:
- **Part A (Demographics):** Full Name, Age Group (`Under 18`, `18–20`, `21–25`, `Above 25`), Course / Field of Study (`Computer Science`, `Information Technology`, `Engineering`, `Commerce`, `Arts`, `Other`).
- **Part B (Cyber Habits & Risk Evaluation):**
  - Password change frequency & password reuse across platforms
  - Two-Factor Authentication (2FA) adoption
  - Phishing & suspicious message identification techniques
  - URL inspection habits & public Wi-Fi behavior
  - Unknown software/app installation hygiene
  - Operating system & browser patch management
  - Antivirus deployment & password sharing risks
  - Self-assessed scam confidence & topic learning interest

### 3. Real-Time Client Validation & Scoring Engine
- **Field Validation:** Visual highlighting of unanswered cards with animated scrolling and user feedback alerts.
- **Scoring Algorithm:** Normalizes weighted points from 0 to 100.
  - **80–100:** *Excellent Awareness* – “You follow strong cybersecurity practices.”
  - **60–79:** *Good Awareness* – “You have good cybersecurity habits, but there is room for improvement.”
  - **40–59:** *Moderate Awareness* – “You understand some cybersecurity practices, but should improve your online safety habits.”
  - **0–39:** *Needs Improvement* – “Your cybersecurity habits need attention. Learn the recommended safety practices.”
- **Visual Circular SVG Gauge:** Displays score with animated circumference stroke, grade badge, and tailored remediation action items.

### 4. Educational Knowledge Base ("Stay Safe Online")
- **8 Core Interactive Modules:**
  1. *Strong Passwords* (Account Security)
  2. *Two-Factor Authentication* (Account Security)
  3. *Phishing* (Threats)
  4. *Safe Browsing* (Online Safety)
  5. *Public Wi-Fi* (Online Safety)
  6. *Software Updates* (Account Security)
  7. *Social Engineering* (Threats)
  8. *Privacy Protection* (Privacy)
- **Live Search & Filter:** Instant search box (`Search cybersecurity topics...`) and category filter pills (`All`, `Account Security`, `Online Safety`, `Privacy`, `Threats`).
- **Detailed Modal Guides:** Explains technical attack vectors, campus scenarios, and bulleted checklists.

### 5. 10 Simple Cybersecurity Rules Every Student Should Follow
- Visually engaging numbered cards detailing practical habits like 14+ character passphrases, authenticator apps over SMS, USB drive safety, and spotting fake internships.

### 6. Survey Results Dashboard (Chart.js Visualization)
Analyzes stored responses in browser `LocalStorage`:
- **Chart 1 – Password Habits:** Doughnut chart (`Regularly`, `Occasionally`, `Rarely`, `Never`)
- **Chart 2 – 2FA Usage:** Bar chart (`Always`, `Sometimes`, `No`, `Don't Know`)
- **Chart 3 – Phishing Experience:** Pie/Doughnut chart (`Yes`, `No`, `Not Sure`)
- **Chart 4 – Software Update Habits:** Bar chart (`Automatically`, `Regularly`, `Occasionally`, `Rarely`, `Never`)
- **Chart 5 – Scam Identification Confidence:** Multi-color bar chart across 5 tiers
- **Chart 6 – Most Requested Topics:** Horizontal bar chart highlighting curriculum demand
- Key statistical cards: *Total Responses*, *Average Score*, *Highest Score*, and *Lowest Score*.
- Empty state fallback with one-click sample data generation.

### 7. Academic Research & Admin Dashboard
- Dynamic cohort analysis:
  - *Total Students Surveyed*
  - *Average Awareness Score %*
  - *Strong Awareness % (80–100)*
  - *Moderate Awareness % (40–79)*
  - *Needs Improvement % (0–39)*
- Live submissions table showing recent respondent IDs, names, course, score, and tier.
- Data export utilities: Download complete survey dataset as formatted **CSV** or **JSON**.

### 8. Interactive Cybersecurity Quiz
- 5 multiple-choice questions assessing phishing defense, 2FA mechanics, public Wi-Fi risks, USB baiting, and credential entropy.
- Immediate visual feedback (green/red borders) with academic explanations.
- Final performance summary with restart capability.

---

## 📂 File Structure

```
cybersecurity-awareness/
│
├── index.html       # Complete single-page application structure & semantic layout
├── style.css        # Custom dark cyber theme, glassmorphism, glowing effects, and SVG animations
├── script.js        # Core JavaScript: validation, scoring engine, LocalStorage, Chart.js & Quiz
└── README.md        # Academic project documentation & operational guide
```

---

## 🚀 How to Run

1. Simply double-click `index.html` or open it with any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
2. Alternatively, serve via a local development server (such as Python's HTTP server or VS Code Live Server):
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## 💾 LocalStorage Schema

Responses are stored as an array of JSON objects under the key `"surveyResponses"`:

```json
[
  {
    "id": "CS-1001",
    "name": "Alex Morgan",
    "age": "18–20",
    "course": "Computer Science",
    "q4": "Regularly",
    "q5": "No",
    "q6": "Always",
    "q7": "Check links before clicking",
    "q8": "Yes",
    "q9": "Always",
    "q10": "Rarely",
    "q11": "Never",
    "q12": "Automatically",
    "q13": "Yes",
    "q14": "Never",
    "q15": "Very confident",
    "q16": "Phishing",
    "score": 96,
    "level": "Excellent Awareness",
    "date": "2026-04-01"
  }
]
```

---

## 🎓 Academic Integrity & Objectives
This project demonstrates:
1. Behavioral cybersecurity assessment methodologies.
2. Robust client-side state persistence without backend overhead.
3. Clean statistical aggregation and visual data presentation using Chart.js.
4. Engaging student-centered micro-learning and interactive gamification.

---
*© 2026 CyberShield – Cybersecurity Awareness Survey Among Students*
