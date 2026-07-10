# Vaishnavi P Bhatakhande — Portfolio

A premium, animated, fully responsive personal portfolio built with **React, Vite, Tailwind CSS,
and Framer Motion**. Includes dark/light mode, a working contact form (EmailJS), live GitHub
repo integration, and SEO/Open Graph metadata.

---

## ✨ Features

- Animated hero with gradient blobs, floating particles & typing animation
- Dark / light mode with system-preference detection + persisted choice
- Scroll progress bar, scroll-to-top button, cursor glow, loading screen
- Animated skills grid grouped by category (Programming, Frontend, Backend, Databases, AI, Cloud,
  DevOps, Testing, Visualization, Methodologies)
- Vertical animated experience timeline
- Glassmorphism project cards with 3D tilt-on-hover
- Live GitHub repositories + contributions graph (via public GitHub API)
- Animated certification & education cards
- Animated achievement counters
- EmailJS-powered contact form
- Custom 404 page
- SEO meta tags + Open Graph/Twitter cards
- Ready-to-deploy Vercel & Netlify configs

---

## 🛠 Tech Stack

| Layer        | Tech                          |
|--------------|--------------------------------|
| Framework    | React 18 + Vite 5              |
| Styling      | Tailwind CSS 3                 |
| Animation    | Framer Motion                  |
| Icons        | React Icons                    |
| Routing      | React Router DOM                |
| Contact form | EmailJS (`@emailjs/browser`)   |

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── PUT_RESUME_HERE.txt      # add your resume.pdf here
├── src/
│   ├── components/              # all reusable UI components
│   ├── context/ThemeContext.jsx # dark/light mode provider
│   ├── data/                    # editable content (skills, projects, etc.)
│   ├── hooks/useGithubRepos.js  # GitHub API integration
│   ├── pages/                   # Home.jsx, NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
├── vercel.json
├── netlify.toml
└── package.json
```

---

## 🚀 Installation Guide

**Requirements:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the app
# Vite will print a local URL, typically http://localhost:5173
```

To create a production build:

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## ✏️ Customizing Content

All editable content lives in `src/data/`:

- `skills.js` — skill categories & chips
- `projects.js` — featured projects & the "50+ projects" highlight card
- `experience.js` — work experience timeline
- `certifications.js` — certification cards
- `education.js` — education timeline + achievement counters

Personal details (name, role, bio, social links) live directly in `src/components/Hero.jsx`,
`Navbar.jsx`, `Footer.jsx`, and `Contact.jsx`.

### Adding your resume

Drop your PDF into `public/resume.pdf` — the **Download Resume** button already links to
`/resume.pdf`, so no code changes are required.

---

## 📧 Setting Up EmailJS (Contact Form)

The contact form works out of the box in "preview mode" (it simulates a successful send) until
you connect a real EmailJS account:

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an **Email Service** (e.g. Gmail) — note the **Service ID**.
3. Create an **Email Template** with fields matching the form: `user_name`, `user_email`,
   `subject`, `message` — note the **Template ID**.
4. Grab your **Public Key** from Account → API Keys.
5. Open `src/components/Contact.jsx` and replace:

```js
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

with your real values. That's it — the form will now send real emails.

---

## 🌐 GitHub Integration

`src/hooks/useGithubRepos.js` fetches public repositories from the GitHub REST API for the
username `vaishnavibhatakhande-cmd`. To point it at a different account, change the
`GITHUB_USERNAME` constant in that file. No API key is required for public repo data (subject to
GitHub's public rate limits).

---

## ☁️ Deployment Guide

### Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
   (Already configured in `vercel.json`.)
4. Click **Deploy**.

Or via CLI:

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Push this project to a GitHub repository.
2. Go to [app.netlify.com/start](https://app.netlify.com/start) and import the repo.
3. Build command: `npm run build`. Publish directory: `dist`. (Already configured in
   `netlify.toml`.)
4. Click **Deploy site**.

Or via CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod
```

---

## ♿ Accessibility & Performance Notes

- Respects `prefers-reduced-motion` — animations are minimized automatically for users who
  request it.
- Visible focus rings on all interactive elements for keyboard navigation.
- Mobile-first responsive layout, tested down to small phone widths.
- Images/graphs are lazy-loaded where applicable.

---

## 📬 Contact

- Email: vaishnavibhatakhande.cmd@gmail.com
- GitHub: [@vaishnavibhatakhande-cmd](https://github.com/vaishnavibhatakhande-cmd)
- LinkedIn: [vaishnavi-bhatakhande](https://www.linkedin.com/in/vaishnavi-bhatakhande-050150335)

---

Built with ❤️ using React, Tailwind CSS & Framer Motion.
