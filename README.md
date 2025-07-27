# Organic Store

A responsive e-commerce app for organic products, built with React, TypeScript, Redux Toolkit, and Vite.

🌍 [Live Demo](https://millisabel.github.io/Organic/)

---

## 🚀 Technologies Used

- **Vite** (build tool, dev server, fast HMR)
- **React 19** (with hooks)
- **TypeScript**
- **Redux Toolkit** (global cart state)
- **React Router DOM** (SPA routing, HashRouter for GitHub Pages)
- **TailwindCSS v3.4** (utility-first styling)
- **Formik + Yup** (forms and validation)
- **Framer Motion** (animations)
- **Swiper** (carousel/slider)
- **Class Variance Authority** (component variants)
- **Radix UI** (accessible primitives)

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
- Product search
- Pagination with "Load More" functionality
- Smooth scrolling navigation
- Component-based architecture
- Animations and transitions
- Storybook for component documentation

---

## 🎯 Key Features & Architecture

### **Custom Hooks**

- **`useScrollToElement`** - Universal hook for scrolling to any element by selector
- **`usePaginationWithLoadMore`** - Generic pagination with "Load More" functionality
- **`useProductFiltering`** - Product filtering by category
- **`useProductSorting`** - Product sorting by various criteria

### **Component Architecture**

- **Feature-based organization** - Products and Cart features separated
- **Reusable UI components** - Button, Card, Form, Modal, etc.
- **Section components** - Each page section is a separate component
- **Pattern components** - ContentLayout, UiList for consistent layouts

### **Navigation & Scrolling**

- **Smooth scrolling** - Universal scroll hook for all navigation
- **Cross-page navigation** - Buttons and cards navigate with scroll to target
- **Responsive navigation** - Mobile menu with hamburger button

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

### 5. Run tests

```bash
npm test
```

### 6. Lint code

```bash
npm run lint
```

### 7. Run Storybook

```bash
npm run storybook
```

---

## 🚀 Deploying to GitHub Pages

- The app uses **HashRouter** for correct routing on GitHub Pages.
- To deploy, push to the `main` branch and use GitHub Actions or your preferred deployment method.
- Make sure your repository is configured for GitHub Pages (Settings → Pages → Deploy from branch).

---

## 📌 Best Practices

- **Clean, modular code** (DRY, KISS, SOLID principles)
- **Semantic HTML and accessibility** (ARIA attributes, keyboard navigation)
- **Mobile-first and responsive design**
- **Consistent naming and formatting**
- **TypeScript for type safety**
- **Custom hooks for reusable logic**
- **Component composition over inheritance**
- **Feature-based folder structure**
- **Storybook for component documentation**

---

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:coverage` - Run tests with coverage
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook
- `npm run type-check` - Run TypeScript type checking
- `npm run format-check` - Check code formatting
