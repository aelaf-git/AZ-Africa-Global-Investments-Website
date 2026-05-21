# AZ Africa Global Investments Website

A modern, professional website for AZ Africa Global Investments, a leading African advisory and consulting firm.

## Features

- **Professional Advisory Messaging**: Tailored content for financial institutions, government organizations, and international entities.
- **Dynamic Service Sections**: Detailed overview of advisory, investment, trade, and technology consulting services.
- **Strategic Vision & Mission**: Clear presentation of the firm's strategic direction and core values.
- **Modern Design System**: A premium green and gold aesthetic optimized for professional engagement.
- **Responsive & High Performance**: Built with React, Vite, and Tailwind CSS for a seamless user experience across all devices.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or bun

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deploying to cPanel (GitHub)

This site is a **Vite static build**. cPanel does not run React from source — it must deploy the **`dist/`** folder.

### How it works

1. Push to GitHub (branch connected in cPanel → Git Version Control).
2. cPanel runs [`.cpanel.yml`](.cpanel.yml) after each pull.
3. The deploy script builds (if Node is on the server) and copies `dist/` → `public_html`.

### Before you push

```bash
npm run build
git add dist
git commit -m "build: update production assets"
git push
```

`dist/` is tracked in this repo so deploy works even when cPanel has no Node.js.

### cPanel checklist

- **Git repo** points at this GitHub repository and the correct branch (`main` / `master`).
- **Deploy HEAD** is enabled (or click **Deploy** after pull).
- **`.cpanel.yml`** is on that branch (repository root).
- **`DEPLOYPATH`** in `.cpanel.yml` matches your account, e.g. `/home/CPANEL_USER/public_html` (currently `azafritp`).
- **Node.js** (optional): cPanel → *Setup Node.js App* so the server can run `npm run build` on deploy.

### Not the same as `npm run deploy`

`npm run deploy` uses **gh-pages** (GitHub Pages). Hosting on **azafrica.investments** via cPanel uses **`.cpanel.yml`**, not gh-pages.

### GitHub Actions

[`.github/workflows/build.yml`](.github/workflows/build.yml) runs `npm run build` on push to verify the project builds. It does not upload to cPanel — cPanel still pulls from GitHub.

## Technologies Used

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Tailwind Animate & Custom Keyframes

## License

Copyright © 2024 AZ Africa Global Investments. All rights reserved.
