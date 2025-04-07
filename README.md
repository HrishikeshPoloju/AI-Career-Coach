# 🚀 AI Career Coach

[![Vercel](https://img.shields.io/badge/deployed%20on-vercel-brightgreen?logo=vercel)](https://ai-career-coach-mu.vercel.app/)
[![Next.js](https://img.shields.io/badge/built%20with-Next.js-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/styled%20with-TailwindCSS-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/database-Prisma%20%2B%20PostgreSQL-blueviolet?logo=prisma)](https://www.prisma.io/)
[![Gemini](https://img.shields.io/badge/powered%20by-Gemini%20AI-red?logo=google)](https://deepmind.google/technologies/gemini/)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

---

## 💡 Project Overview

**AI Career Coach** is a full-stack web app that empowers job seekers with AI-assisted tools for:
- ✍️ Resume building
- 📄 Cover letter generation
- 🎙 Mock interview practice

Built with **Next.js 15**, **React 19**, **Tailwind CSS**, and integrated with **Gemini API**, this app helps users create professional documents and prep with confidence.

> 🔗 **Live Demo**: [ai-career-coach.vercel.app](https://ai-career-coach-mu.vercel.app)

---

## ⚙️ Tech Stack

| Layer        | Tech Used                                                                 |
|--------------|---------------------------------------------------------------------------|
| Frontend     | React 19, Next.js App Router, Tailwind CSS, Shadcn UI                     |
| Backend      | Next.js Server Actions, Inngest (for async workflows)                     |
| Database     | Prisma ORM, PostgreSQL                                                    |
| Auth         | Clerk Authentication                                                      |
| AI Services  | Gemini API (for Resume, Cover Letter, Interview answers)                  |
| Deployment   | Vercel (CI/CD, environment management)                                    |

---

## ✨ Features

- 🔐 Clerk Auth + Protected Routes
- 📝 AI Resume & Cover Letter Builder (Gemini API)
- 🎯 Mock Interview Assistant with LLM-powered answers
- 🧠 Role-based content (dashboard, onboarding)
- 💅 Fully responsive UI with Tailwind & Shadcn
- 📦 Scalable file structure using Next.js App Router
- 🔁 Background jobs via Inngest for async processing

---

## 🚀 Local Setup

> Make sure you have **Node.js ≥ 18**, **pnpm/npm**, and **PostgreSQL** installed.

### 1. Clone the repo

git clone https://github.com/HrishikeshPoloju/AI-Career-Coach.git
cd AI-Career-Coach

 Install dependencies
bash
Copy
Edit
npm install
# or
pnpm install

Create a .env file in the root directory and add:

ini
Copy
Edit
DATABASE_URL=postgresql://yourUser:yourPassword@localhost:5432/yourDb
CLERK_SECRET_KEY=your_clerk_secret
CLERK_PUBLISHABLE_KEY=your_clerk_publishable
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
Replace with your own Clerk, Gemini, and PostgreSQL values.

 Set up the database
bash
Copy
Edit
npx prisma migrate dev

Start the development server
bash
Copy
Edit
npm run dev

Folder Structure (Highlights)
/app                 → Next.js App Router structure
/actions             → Server actions (cover letter, resume, interview)
/components          → UI and shared components
/prisma              → DB schema and migrations
/lib                 → Helpers, Prisma config, utils
/public              → Static assets
/hooks, /data        → Custom hooks and static data

AI-Powered Features
Powered by Google Gemini API

Cover letters based on role & user input

Custom resume generation from form data

Interview questions & suggested LLM-based responses

📄 License
This project is licensed under the MIT License.

🙌 Feedback
Have feedback, suggestions, or want to collaborate?
Open an issue or reach out on LinkedIn

🌐 Live Site -https://ai-career-coach-mu.vercel.app/ 

💻 GitHub Repository
