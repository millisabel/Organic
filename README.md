# Organic Store

A responsive e-commerce app for organic products, built with React, TypeScript, Redux Toolkit, and Vite.

🌍 [Live Demo](https://millisabel.github.io/Organic/)

---

## 🚀 Technologies Used

- **Vite** (build tool, dev server, fast HMR)
- **React** (with hooks)
- **TypeScript**
- **Redux Toolkit** (global cart state)
- **React Router DOM** (SPA routing, HashRouter for GitHub Pages)
- **TailwindCSS v4** (utility-first styling)
- **Formik + Yup** (forms and validation)
- **JSON Server** (for local API, optional)

---

## 📦 Features

- Product catalog with filtering and sorting
- Product detail pages
- Shopping cart with persistent state (localStorage)
- Responsive design (mobile-first)
- Accessibility (aria-attributes, keyboard navigation, color contrast)
- Newsletter subscription form
- Contact and About pages
- Modern UI/UX (Figma-based design)
- Dark mode (planned)
- Product search (planned)
- Blog and team sections (planned)

---

## 📁 Project Structure

```
src/
│
├── app/
│   ├── App.tsx
│   ├── main.tsx
│   └── store.ts
│
├── pages/
│   ├── HomePage.tsx
│   ├── ShopPage.tsx
│   ├── ShopSinglePage.tsx
│   ├── AboutPage.tsx
│   ├── BlogPage.tsx
│   ├── ContactPage.tsx
│   ├── ProjectsPage.tsx
│   └── CartPage.tsx
│
├── components/
│   ├── layout/
│   ├── shared/
│   ├── ui/
│   └── icons/
│
├── store/
├── hooks/
├── utils/
├── assets/
├── styles/
└── data/
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

---

## 🚀 Deploying to GitHub Pages

- The app uses **HashRouter** for correct routing on GitHub Pages.
- To deploy, push to the `main` branch and use GitHub Actions or your preferred deployment method.
- Make sure your repository is configured for GitHub Pages (Settings → Pages → Deploy from branch).

---

## 📌 Best Practices

- Clean, modular code (DRY, KISS, SOLID)
- Semantic HTML and accessibility
- Mobile-first and responsive
- Consistent naming and formatting
- Comments and documentation
