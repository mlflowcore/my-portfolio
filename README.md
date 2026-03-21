# My Portfolio

Modern, responsive personal portfolio built with React.js (Vite). It showcases skills, projects, and contact information with a clean UI, smooth animations, and fast loading.

## Features

- Responsive, accessible design
- Dark/Light mode toggle
- Smooth scrolling between sections
- Sections: Hero, About, Skills, Projects, Contact
- Project cards with links to live demos and repositories
- Downloadable resume/CV
- Smooth page loader and motion transitions

## Tech Stack

- React (Vite + TypeScript)
- Tailwind CSS
- Framer Motion (animations)
- React Icons / Lucide Icons

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/chhatraraj/my_portfolio.git
   cd my_portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn
   ```

3. Run the development server
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser (Vite default).

## Scripts

- `dev`: Start local development server
- `build`: Create production build
- `preview`: Preview the production build locally

```bash
npm run dev
npm run build
npm run preview
```

## Project Structure

```
my_portfolio/
├─ index.html            # Vite entry
├─ src/
│  ├─ main.tsx          # React entry
│  ├─ root.tsx          # App composition
│  ├─ globals.css       # Global styles
│  └─ smoothScroll.ts   # Utility for smooth scrolling
├─ components/          # Reusable UI components
├─ providers/           # Context providers (e.g., ThemeProvider)
├─ lib/                 # Utilities/helpers
├─ public/              # Static assets (images, icons)
├─ tailwind.config.js   # Tailwind configuration
├─ vite.config.ts       # Vite configuration
└─ README.md
```


## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Contact

If you’d like to get in touch, feel free to open an issue or reach out via the contact section on the site.
