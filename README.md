# 🚀 SkillForge AI

**SkillForge AI** is an AI-powered web application that helps users identify skill gaps and generate personalized learning roadmaps based on their career goals. It provides secure authentication, an interactive dashboard, and AI-driven recommendations for skills, learning resources, and projects.

---

## ✨ Features

- 🔐 Secure User Authentication (Firebase)
- 👤 User Registration & Login
- 📊 Interactive Dashboard
- 🤖 AI-Based Skill Gap Analysis
- 🛣️ Personalized Learning Roadmap
- 💡 Career-Based Skill Recommendations
- 📚 Learning Resource Suggestions
- 💻 Project Recommendations
- 🎨 Modern Responsive UI
- ⚡ Fast Navigation with React Router

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend Framework |
| React Router | Page Navigation |
| Firebase Authentication | User Login & Signup |
| JavaScript (ES6+) | Application Logic |
| HTML5 | Structure |
| CSS3 | Styling |
| Vite | React Development Environment |

---

# 🏗️ Architecture

```
User Opens Website
        │
        ▼
Home Page
        │
        ▼
Login / Signup
        │
        ▼
Firebase Authentication
        │
        ▼
Dashboard
        │
        ▼
Analyze Skills
        │
        ▼
AI Skill Analysis
        │
        ▼
Personalized Learning Roadmap
        │
        ▼
Recommended Skills & Projects
```

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/skillforge-ai.git

cd skillforge-ai
```

---

## Install Dependencies

```bash
npm install
```

---

## Firebase Configuration

Create a Firebase project and enable **Authentication**.

Create a file named:

```
firebase.js
```

Add your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

# 🚀 Run Project

Start Development Server

```bash
npm run dev
```

Open browser

```
http://localhost:5173
```

---

# 📂 Project Structure

```
SkillForge-AI/

│
├── public/
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   └── Analyze.jsx
│   │
│   ├── firebase.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 📄 Pages

### 🏠 Home

- Landing page
- Project introduction
- Navigation to Login and Signup

---

### 🔑 Login

- User authentication
- Firebase Login

---

### 📝 Signup

- Create new account
- Firebase Registration

---

### 📊 Dashboard

- Welcome screen
- Skill Analysis card
- Learning Roadmap card
- Recommended Projects card
- Analyze Skills button

---

### 🤖 Analyze

- Analyze current skills
- Detect missing skills
- Generate AI learning roadmap
- Display recommended projects

---

# 🔄 Application Workflow

```
User Visits Website
        │
        ▼
Create Account / Login
        │
        ▼
Dashboard
        │
        ▼
Click "Analyze My Skills"
        │
        ▼
Enter Skills & Career Goal
        │
        ▼
AI Analysis
        │
        ▼
Skill Gap Detection
        │
        ▼
Learning Roadmap Generated
        │
        ▼
Project Recommendations
```

---

# 🔐 Authentication

SkillForge AI uses **Firebase Authentication** for secure user management.

Supported authentication features:

- Email & Password Login
- User Registration
- Secure Authentication
- Session Management
- Logout

---

# 🎯 Future Improvements

- 🤖 OpenAI / Gemini Integration
- 📈 Skill Progress Tracking
- 🏆 Certificates & Achievements
- 🌍 Multi-language Support
- 📚 Course Recommendations
- 📅 Daily Learning Planner
- 🔔 Learning Reminders
- 👥 Community Discussion Forum
- 📊 AI Career Prediction
- 🎓 Resume Analyzer

---

# ☁️ Deployment



- Connect GitHub Repository
- Import Project
- Deploy

---



- Connect Repository
- Build Command

```
npm run build
```

Publish Directory

```
dist
```

Deploy

---

### Firebase Hosting

```bash
npm install -g firebase-tools

firebase login

firebase init

firebase deploy
```

---

# 🧯 Common Issues

### Firebase Authentication Error

- Enable Email/Password Authentication
- Verify Firebase configuration

---

### React Router Not Working

Install React Router

```bash
npm install react-router-dom
```

---

### Blank Screen

Run

```bash
npm install

npm run dev
```

---

### Firebase Config Error

Check:

- API Key
- Project ID
- Auth Domain
- App ID

---

# 📸 Screens

- 🏠 Home Page
- 🔑 Login Page
- 📝 Signup Page
- 📊 Dashboard
- 🤖 Analyze Skills Page

---

# 👨‍💻 Author

**Roshaan Jadoon**


---

# 📄 License

This project is developed for educational and learning purposes.

---

## ⭐ If you like this project, don't forget to star the repository!
